const thebeLiteConfig = {
  requestKernel: true,
  useJupyterLite: true,
  useBinder: false,
  kernelOptions: {
    path: "/",
  },
  codeMirrorConfig: {
    theme: "default",
    mode: "python",
  },
  mountRestartButton: false,
  mountRestartallButton: false,
};

const newCellHtml = `<div class="cell docutils container">
<div class="cell_input docutils container">
<div class="highlight-ipython3 notranslate"><div class="highlight"><pre id="codecell0"></pre>
</div></div></div></div>`;

// https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

function addToThebeControls(cell, element) {
  const controls = cell.querySelector(".thebe-controls");
  controls.insertBefore(element, controls.lastChild);
}

function finalizeCodeCells(cells) {
  const createButton = (classList, title, text) => {
    const button = document.createElement("button");
    button.classList = classList;
    button.title = title;
    button.innerText = text;
    return button;
  };

  cells.forEach((codeCell, index) => {
    const addCell = createButton(
      ["thebe-button"],
      "adds a new cell underneath",
      "add cell"
    );
    addToThebeControls(codeCell, addCell);

    const clear = createButton(
      ["thebe-button"],
      "clear the output of the cell",
      "clear"
    );
    addToThebeControls(codeCell, clear);

    clear.onclick = () => {
      const cellId = codeCell
        .querySelector("[data-thebe-id]")
        .getAttribute("data-thebe-id");
      const notebookCell = thebe.notebook.cells.find(
        (cell) => cell.id === cellId
      );
      notebookCell.clear();
    };

    addCell.onclick = () => {
      const newCell = createElementFromHTML(newCellHtml);
      codeCell.parentElement.insertBefore(newCell, codeCell.nextSibling);

      const newCellInfo = {
        id: thebe.randomId(),
        placeholders: {
          output: undefined,
          source: newCell.querySelector("pre"),
        },
      };

      const exampleCell = thebe.notebook.lastCell();
      const newNotebookCell = new exampleCell.constructor(
        newCellInfo.id,
        thebe.notebook.id,
        "",
        exampleCell.events._config,
        exampleCell.metadata,
        exampleCell.rendermine
      );

      // Manually attach kernel session
      // The attachSession function only sends out a couple of events we don't care about
      newNotebookCell.session = exampleCell.session;

      thebe.notebook.cells.push(newNotebookCell);
      thebe.renderAllCells(
        {
          mountRunButton: true,
          mountRunAllButton: true,
        },
        thebe.notebook,
        [newCellInfo]
      );

      finalizeCodeCells([newCell]);

      const deleteCell = createButton(
        ["thebe-button"],
        "deletes this cell",
        "delete cell"
      );
      addToThebeControls(newCell, deleteCell);
      deleteCell.onclick = () => {
        newCell.remove();
        let cells = thebe.notebook.cells;
        // Remove cell from notebook too, otherwise their side-effects will still be present when running all
        cells.splice(
          cells.findIndex((cell) => cell.id === newCellInfo.id),
          1
        );
      };
    };
  });
}

/**
 * Add attributes to Thebe blocks to initialize thebe properly
 */
var configureThebe = () => {
  // If we already detect a Thebe cell, don't re-run
  if (document.querySelectorAll("div.thebe-cell").length > 0) {
    return;
  }

  thebe_config = thebeLiteConfig;

  // Update thebe buttons with loading message
  $(".thebe-launch-button").each((ii, button) => {
    button.innerHTML = `
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
        </div>
        <span class="loading-text"></span>`;
  });

  // Set thebe event hooks
  var thebeStatus;
  thebelab.on("status", function (evt, data) {
    console.log("Status changed:", data.status, data.message);

    $(".thebe-launch-button ")
      .removeClass("thebe-status-" + thebeStatus)
      .addClass("thebe-status-" + data.status)
      .find(".loading-text")
      .html(
        "<span class='launch_msg'>Launching Pyodide kernel: </span><span class='status'>" +
          data.status +
          "</span>"
      );

    // Now update our thebe status
    thebeStatus = data.status;

    // Find any cells with an initialization tag and ask thebe to run them when ready
    if (data.status === "ready") {
      $(".thebe-launch-button").each((ii, button) => {
        button.innerHTML = `Python interaction ready!`;
      });

      var thebeInitCells = document.querySelectorAll(
        ".thebe-init, .tag_thebe-init"
      );
      thebeInitCells.forEach((cell) => {
        console.log("Initializing Thebe with cell: " + cell.id);
        cell.querySelector(".thebelab-run-button").click();
      });

      const codeCells = document.querySelectorAll(thebe_selector);
      finalizeCodeCells(codeCells);

      thebelab.on("status", () => {});
    }
  });
};

/**
 * Update the page DOM to use Thebe elements
 */
var modifyDOMForThebe = () => {
  // Find all code cells, replace with Thebe interactive code cells
  const codeCells = document.querySelectorAll(thebe_selector);
  codeCells.forEach((codeCell, index) => {
    const codeCellId = (index) => `codecell${index}`;
    codeCell.id = codeCellId(index);
    codeCellText = codeCell.querySelector(thebe_selector_input);
    codeCellOutput = codeCell.querySelector(thebe_selector_output);

    // Clean up the language to make it work w/ CodeMirror and add it to the cell
    dataLanguage = detectLanguage(kernelName);

    // Re-arrange the cell and add metadata
    if (codeCellText) {
      codeCellText.setAttribute("data-language", dataLanguage);
      codeCellText.setAttribute("data-executable", "true");

      // If we had an output, insert it just after the `pre` cell
      if (codeCellOutput) {
        $(codeCellOutput).attr("data-output", "");
        $(codeCellOutput).insertAfter(codeCellText);
      }
    }

    // Remove sphinx-copybutton blocks, which are common in Sphinx
    codeCell.querySelectorAll("button.copybtn").forEach((el) => {
      el.remove();
    });
  });
};

const loadScriptAsync = async (scriptSource) => {
  const script = document.createElement("script");
  script.src = `${scriptSource}`;
  document.head.appendChild(script);

  return new Promise((resolve, reject) => {
    script.addEventListener("load", () => {
      resolve();
    });
  });
};

const loadStyleAsync = async (styleSource) => {
  const css = document.createElement("link");
  css.href = styleSource;
  css.rel = "stylesheet";
  document.head.appendChild(css);

  return new Promise((resolve, reject) => {
    css.addEventListener("load", () => {
      resolve();
    });
  });
};

function override_pyodide_open(fs, server_path) {
  const home = "/home/pyodide/book/";

  function createFileFromString(parentPath, name, string) {
    const parentNode = fs.lookupPath(parentPath).node;

    const node = parentNode.node_ops.mknod(parentNode, name, 33206, 0);

    // Create file here and populate it
    const stream = fs.createStream({
      node: node,
      path: parentPath + "/" + name,
      flags: 1,
      seekable: true,
      position: 0,
      stream_ops: node.stream_ops,
      ungotten: [],
      error: false,
    });
    const buffer = new TextEncoder().encode(string);
    stream.stream_ops.write(stream, buffer, 0, buffer.byteLength, 0, true);

    fs.close(stream);
  }

  function createDirectoryStructure(directories) {
    let currentDirectory = "/";
    for (const directory of directories) {
      if (directory === "") continue;
      currentDirectory += directory + "/";
      try {
        fs.mkdir(currentDirectory);

        let request = new XMLHttpRequest();
        // Fetch relative to where we are in the server, to simulate how it works in notebooks
        // We will still put it in the directory requested by pyodide however, so the next call to open succeeds without tampering
        const fullPath = currentDirectory;
        const path = currentDirectory.slice(home.length);
        request.open("GET", path, false);
        request.send();

        if (request.status !== 200) {
          continue;
        }

        const regex = /class=\"display-name\".*?\>\<.*?\>(.*?\.py)\<.*?\>/g;
        regex.lastIndex = 0;

        for (const match of request.response.matchAll(regex)) {
          request.open("GET", path + match[1], false);
          request.send();

          if (request.status !== 200) {
            continue;
          }

          createFileFromString(fullPath, match[1], request.response);
        }
      } catch {}
    }
  }

  // Mirroring the underlying directory structure allows relative pathing to work properly
  const mirroredDirectory = home + server_path;
  createDirectoryStructure(mirroredDirectory.split("/"));
  fs.chdir(mirroredDirectory);

  const old_lookup = fs.lookupPath;
  function new_lookup(path, opts = {}) {
    // Being called from writeFile, or in write mode, we don't want to load in that case
    // This catches any errors caused by things like missing directories
    try {
      return old_lookup(path, opts);
    } catch (exception) {
      // To prevent messing up the filesystem, the mirrored directory is rooted at the home (/drive for Thebe)
      // If we're trying to fetch files from outside this root, we throw an error since the file wasn't found previously.
      if (!path.startsWith(home)) {
        throw exception;
      }

      const fullPath = path;
      path = path.slice(home.length);

      const pathList = fullPath.split("/");
      const name = pathList[pathList.length - 1];
      const parentPathList = pathList.slice(0, -1);

      createDirectoryStructure(parentPathList);

      let request = new XMLHttpRequest();
      // Fetch relative to where we are in the server, to simulate how it works in notebooks
      // We will still put it in the directory requested by pyodide however, so the next call to open succeeds without tampering
      request.open("GET", path, false);
      request.send();

      if (request.status !== 200) {
        throw exception;
      }
      createFileFromString(parentPathList.join("/"), name, request.response);
      const result = old_lookup(fullPath, opts);

      return result;
    }
  }
  fs.lookupPath = new_lookup;
}

var initThebe = async () => {
  // Load thebe dynamically if it's not already loaded
  if (typeof thebelab === "undefined") {
    console.log("[sphinx-thebe]: Loading thebe...");
    $(".thebe-launch-button ").css("display", "none");

    // Provides nice things like a running animation and some padding
    {
      await loadStyleAsync("/thebe.css");
      await loadStyleAsync("/_static/code.css");
    }

    $(".thebe-launch-button ").css("display", "block");
    $(".thebe-launch-button ").text("Loading thebe...");

    await loadScriptAsync("/thebe-lite.min.js");
    await loadScriptAsync("/index.js");

    // Runs once the script has finished loading
    console.log("[sphinx-thebe]: Finished loading thebe...");
    configureThebe();
    modifyDOMForThebe();
    await thebelab.bootstrap(thebeLiteConfig);

    await thebelab.session.kernel.requestExecute({
      code: `import js; import pyodide_js; js.fs = pyodide_js.FS; js.eval("""${override_pyodide_open.toString()}"""); js.eval(f"override_pyodide_open(fs, '${
        location.pathname.split("/").slice(0, -1).join("/") + "/"
      }')")`,
    });
  } else {
    console.log("[sphinx-thebe]: thebe already loaded...");
  }
};

// Helper function to munge the language name
var detectLanguage = (language) => {
  if (language.indexOf("python") > -1) {
    language = "python";
  } else if (language === "ir") {
    language = "r";
  }
  return language;
};
