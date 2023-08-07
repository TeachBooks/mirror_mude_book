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
  mountRestartButton: false, // Restarting the kernel messes things up for the custom features, and it effectively does the same as a page reload
  mountRestartallButton: false,
};

// Taken from a cell in the book which hasn't been converted by Thebe yet
// This gets converted into an empty Thebe cell when calling the render function on it
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

function setupNewCell(source, output, code) {
  // https://github.com/executablebooks/thebe/blob/main/packages/thebe/src/types.ts
  const newCellInfo = {
    id: thebe.randomId(),
    placeholders: {
      output: output,
      source: source,
    },
  };

  // This will crash if we don't have any real cells in our notebook.
  // In the future we can to add a dummy cell during initialization and then remove it
  const exampleCell = thebe.notebook.lastCell();
  const newNotebookCell = new exampleCell.constructor(
    newCellInfo.id, // Cell Id
    thebe.notebook.id, // Notebook ID
    code, // Source code
    thebe.notebook.events._config, // Config, metadata and rendermine are the same for all cells, safe to take from the example
    thebe.notebook.metadata,
    thebe.notebook.rendermime
  );

  // Manually attach kernel session
  // The attachSession function only sends out a couple of events we don't care about
  newNotebookCell.session = thebe.notebook.session;

  thebe.notebook.cells.push(newNotebookCell);

  return { newCellInfo, newNotebookCell };
}

function addToThebeControls(cell, element) {
  const controls = cell.querySelector(".thebe-controls");
  controls.insertBefore(element, controls.lastChild);
}

function getNotebookCellOfCodeCell(codeCell) {
  const cellId = codeCell
    .querySelector("[data-thebe-id]") // Once rendered a cell has a data-thebe-id attached to it
    .getAttribute("data-thebe-id"); // This corresponds to the id in the notebook
  return thebe.notebook.cells.find((cell) => cell.id === cellId);
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
      const notebookCell = getNotebookCellOfCodeCell(codeCell);
      notebookCell.clear();
    };

    addCell.onclick = () => {
      const newCell = createElementFromHTML(newCellHtml);
      codeCell.parentElement.insertBefore(newCell, codeCell.nextSibling);

      // Source is the actual code part of it, we don't want the container bits to be replaced
      const { newCellInfo, newNotebookCell } = setupNewCell(
        newCell.querySelector("pre"),
        undefined,
        ""
      );

      // Turns the code section of the cell into an interactive Thebe cell
      thebe.renderAllCells(
        {
          mountRunButton: true,
          mountRunAllButton: true,
        },
        thebe.notebook, // Notebook
        [newCellInfo] // Cell IDs
      );

      finalizeCodeCells([newCell]); // Add in all extra buttons

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

function updateThebeButtonStatus(msg, loading = true) {
  const spinner =
    '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div></div>';
  $(".thebe-launch-button ").html(
    (loading ? spinner : "") + `<span class='status'>${msg}</span>`
  );
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
  updateThebeButtonStatus("Initializing Thebe");

  // Set thebe event hooks
  thebelab.on("status", function (evt, data) {
    console.log("Status changed:", data.status, data.message);

    updateThebeButtonStatus(
      `<span class='launch_msg'>Launching Pyodide kernel: </span><span class='status'>` +
        data.status +
        "</span>"
    );

    if (data.status === "attached") {
      updateThebeButtonStatus(`Waiting for packages to load...`);

      thebelab.events.listeners.status.clear(); // Remove further status message handling
    }
  });
};

/**
 * Update the page DOM to use Thebe elements
 */
var modifyDOMForThebe = () => {
  // We remove all pre-existing cell output because they play poorly with Thebe
  // This also means we need special tracking for cells with removed input because no HTML is generated for their input
  // Hopefully we can achieve this with minimal changes and a special new tag
  const outputDivs = document.querySelectorAll(".cell_output");
  outputDivs.forEach((div, _) => div.remove());

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

// This function overrides the lookup behaviour inside the Emscripten filesystem:
// https://emscripten.org/docs/api_reference/Filesystem-API.html
// This allows us to lazily fetch files as needed so that Thebe feels like a local notebook
// The lazy strategy reduces the number of requests made to the server, but does have some limitations:
// 1. Imports don't work unless done aggressively (which is implemented, but there are likely breaking edge cases)
// 2. Listing files in the directory will not give an accurate overview of what you can access
// 3. Libraries may do unexpected things that do not work well with the lazy strategy e.g. listing the files before opening them
function override_pyodide_lookup(fs, server_path) {
  // This home was chosen outside the default because:
  // 1. The default /drive home is a mount which does not play well with certain file operations
  // 2. I thought it would help fetching py files from root, but that returns index.html instead of the directory listing
  // This means py files inside the root folder of the server cannot be loaded implcitly, but you can still use open etc. to fetch them
  // NOTE: The slash at the end is important, keep it if you change anything.
  const home = "/home/pyodide/book/";

  // Create a file from the string without using the writeFile method
  // writeFile calls lookupPath, which may cause infinite recursion?? (haven't tested)
  function createFileFromString(parentPath, name, string) {
    const parentNode = fs.lookupPath(parentPath).node;

    // 33206 and 0 come from scraping the values used by writeFile
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

  // Takes a list of directory names which form a path and ensures they all exist
  // This will also aggressively load .py files to ensure importing works as expected
  function createDirectoryStructure(directories) {
    let currentDirectory = "/";
    for (const directory of directories) {
      if (directory === "") continue;
      currentDirectory += directory + "/";
      try {
        fs.mkdir(currentDirectory);

        // Fetching the directory needs to return a directory listing
        // This feature may not be enabled on some servers and will fail
        let request = new XMLHttpRequest();
        const fullPath = currentDirectory;
        const path = currentDirectory.slice(home.length);
        request.open("GET", path, false);
        request.send();

        if (request.status !== 200) {
          continue;
        }

        // Find alls all the links with .py files in the directory listing
        // We cannot use DOMParser here since it's running inside a web worker: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
        const regex = /\<a href=\"(.*?\.py)\"\>(.*?\.py)\<.*?\>/g;
        regex.lastIndex = 0;

        for (const match of request.response.matchAll(regex)) {
          // match[1] contains the name of the python file
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
      // If we're trying to fetch files from outside home, we throw an error since the file wasn't found previously.
      if (!path.startsWith(home)) {
        throw exception;
      }

      const fullPath = path;
      path = path.slice(home.length);

      const pathList = fullPath.split("/");
      const name = pathList[pathList.length - 1]; // Name of file
      const parentPathList = pathList.slice(0, -1); // List of all parent directories

      createDirectoryStructure(parentPathList);

      let request = new XMLHttpRequest();
      request.open("GET", path, false);
      request.send();

      if (request.status !== 200) {
        throw exception;
      }
      createFileFromString(parentPathList.join("/"), name, request.response);
      return old_lookup(fullPath, opts);
    }
  }
  fs.lookupPath = new_lookup;
}

async function runInitCells() {
  var thebeInitCells = document.querySelectorAll(
    ".thebe-init, .tag_thebe-init"
  );
  for (const cell of thebeInitCells) {
    console.log("Initializing Thebe with cell: " + cell.id);
    const notebookCell = getNotebookCellOfCodeCell(cell);

    // Emulate clicking the run button, with more information about execution
    thebe.setButtonsBusy(notebookCell.id);
    await notebookCell.execute();
    thebe.clearButtonsBusy(notebookCell.id);
  }
}

function wrapNakedOutput(element) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("cell_output", "container");
  wrapper.appendChild(element);
  return wrapper;
}

function setupSpecialTaggedElements() {
  for (const taggedElement of window.specialTaggedElements) {
    switch (taggedElement.tag) {
      case "thebe-remove-input-init": {
        const { newCellInfo, newNotebookCell } = setupNewCell(
          undefined,
          undefined,
          taggedElement.code
        );

        const wrappedOutput = wrapNakedOutput(newNotebookCell.area.node);
        // The 4 following lines are an ugly hack to make sure we preserve init order
        // Maybe improving runInitCells could circumvent this
        wrappedOutput.classList.add("tag_thebe-init");
        const idDiv = document.createElement("div");
        idDiv.setAttribute("data-thebe-id", newNotebookCell.id);
        wrappedOutput.appendChild(idDiv);
        taggedElement.placeholder.before(wrappedOutput);
        break;
      }
      default: {
        console.error(`Unrecognized special tag: ${taggedElement.tag}`);
      }
    }
  }
}

// Moves output of hide-input cells to after the drop down menu, this makes more sense
// since we don't want to hide the output as well
function moveHideInputOutput() {
  const taggedCells = document.querySelectorAll(".tag_hide-input");
  for (const cell of taggedCells) {
    const outputArea = cell.querySelector(".jp-OutputArea");
    cell.appendChild(wrapNakedOutput(outputArea));
  }
}

var initThebe = async () => {
  // Remove Rocket now that we're initializing
  document.querySelector(".dropdown-launch-buttons").remove();

  console.log("[sphinx-thebe]: Loading thebe...");
  $(".thebe-launch-button ").text("Loading thebe...");

  await loadScriptAsync("/thebe-lite.min.js");
  await loadScriptAsync("/index.js");

  // Runs once the script has finished loading
  console.log("[sphinx-thebe]: Finished loading thebe...");
  configureThebe();
  modifyDOMForThebe();
  await thebelab.bootstrap(thebeLiteConfig);

  finalizeCodeCells(document.querySelectorAll(thebe_selector));

  // Runs override_pyodide_lookup on the web worker
  // We can't access the web worker directly, but we can execute code on the current kernel
  // Since Pyodide has access to its javascript enviroment through the js package, we do the following steps:
  // 1. Load the js and pyodide_js package
  // 2. Set the fs variable in JS to our pyodide_js, this gives access to pyodide in JS
  // 3. Eval the string og the override_pyodide_lookup function in JS, this brings it into scope
  // 4. Execute the override_pyodide_lookup function in JS, and bake in the relative path from root in the book (the home)
  // NOTE: All functions used in override_pyodide_lookup should be nested inside it, since the web worker cannot access functions in this script
  await thebelab.session.kernel.requestExecute({
    code: `import js; import pyodide_js; js.fs = pyodide_js.FS; js.eval("""${override_pyodide_lookup.toString()}"""); js.eval(f"override_pyodide_lookup(fs, '${
      location.pathname.split("/").slice(0, -1).join("/") + "/"
    }')")`,
  }).done;

  // Fix for issues with ipywidgets in Thebe
  await thebelab.session.kernel.requestExecute({
    code: `import ipykernel; ipykernel.version_info = (0,0)`,
  }).done;
  updateThebeButtonStatus("Running pre-intialized cells...");
  setupSpecialTaggedElements();

  await runInitCells();

  updateThebeButtonStatus("Python interaction ready!", false);

  moveHideInputOutput();
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

function handleThebeRemoveInputTag(element) {
  const placeholder = document.createElement("pre");
  placeholder.style.display = "none";

  window.specialTaggedElements.push({
    tag: "thebe-remove-input-init",
    placeholder: placeholder,
    code: element.querySelector("pre").textContent?.trim() ?? "",
  });

  element.before(placeholder);
  const placeholderOutput = element.querySelector(".cell_output");
  if (placeholderOutput !== null) {
    element.after(placeholderOutput);
  }
  element.remove();
}

// Deal with custom-defined tags to properly prepare Thebe and DOM
// Current special tags: thebe-remove-input-init
function consumeSpecialTags() {
  const specialTagsInfo = [
    { tag: "thebe-remove-input-init", handler: handleThebeRemoveInputTag },
  ];

  window.specialTaggedElements = [];

  for (const tagInfo of specialTagsInfo) {
    const cells = document.querySelectorAll(".tag_" + tagInfo.tag);
    for (const cell of cells) {
      tagInfo.handler(cell);
    }
  }
}

// Check whether DOM is already loaded, or add an event listener for the event
if (document.readyState !== "loading") {
  consumeSpecialTags();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    consumeSpecialTags();
  });
}

loadStyleAsync("/thebe.css");
loadStyleAsync("/_static/code.css");
