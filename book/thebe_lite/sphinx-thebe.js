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
};

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
        button.innerHTML = `Ready!`;
      });

      var thebeInitCells = document.querySelectorAll(
        ".thebe-init, .tag_thebe-init"
      );
      thebeInitCells.forEach((cell) => {
        console.log("Initializing Thebe with cell: " + cell.id);
        cell.querySelector(".thebelab-run-button").click();
      });

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

var initThebe = async () => {
  // Load thebe dynamically if it's not already loaded
  if (typeof thebelab === "undefined") {
    console.log("[sphinx-thebe]: Loading thebe...");
    $(".thebe-launch-button ").text("Loading thebe...");

    // Provides nice things like a running animation and some padding
    {
      const thebeCss = document.createElement("link");
      thebeCss.href = "/thebe.css";
      thebeCss.rel = "stylesheet";
      document.head.appendChild(thebeCss);
    }

    await loadScriptAsync("/thebe-lite.min.js");
    await loadScriptAsync("/index.js");

    // Runs once the script has finished loading
    console.log("[sphinx-thebe]: Finished loading thebe...");
    configureThebe();
    modifyDOMForThebe();
    thebelab.bootstrap(thebeLiteConfig);
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

