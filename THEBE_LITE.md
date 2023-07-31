# Thebe Lite Support (Technical)

## Introduction

This document is intended for anyone interested in the maintenance and improvement of the current Thebe Lite support in the book. Since Thebe Lite is not currently (as of 22/6/2023) supported by Jupyter Book, some hacking was required to get it working. There are three main components to this:

1. `build_lite.sh`: script builds the book and does post-processing, copying over files needed by Thebe Lite and any files in the book which are excluded by the build process but may be accessed locally by a notebook.

2. `thebe_lite`: Inside this folder you'll find everything to do with Thebe Lite, including the library's code, which needs to be locally served.

3. `thebe_lite/_static/sphinx-thebe.js`: this javascript file exists in the Jupyter book by default to support Thebe with a Binder kernel, but has been heavily edited to add support to Thebe Lite and extra features. It's the only place you need to write actual code in.

The extra features provided by this implementation of Thebe Lite:

1. A proper dark mode
2. Ability to load "local" files transparently
3. Ability to add/delete scratch cells
4. Clear button for cell outputs

## Updating Thebe Lite

Since the files for the Thebe Lite library are served by us, they made need to be updated at some point in the future. To do so, the easiest method will be to build Thebe locally yourself. Thebe is publicly available on [github](https://github.com/executablebooks/thebe). Following the instructions in the [CONTRIBUTING.md](https://github.com/executablebooks/thebe/blob/main/CONTRIBUTING.md) to build it.

Once built, copy all the files from `packages/thebe/lib` and `packages/thebe/lite/dist/lib` into the `thebe_lite` folder. That's all!

## sphinx-thebe.js

### Sources:

- Thebe source code: ([core](https://github.com/executablebooks/thebe/tree/main/packages/core), [thebe](https://github.com/executablebooks/thebe/tree/main/packages/thebe), [lite](https://github.com/executablebooks/thebe/tree/main/packages/lite))
- A bit too much trial and experimentation

To support Thebe Lite, the updated `sphinx-thebe.js` has a custom Thebe config that enables JupyterLite, this is passed into the `thebelab.bootstrap` function in `initThebe`. Apart from that `initThebe` also loads in `thebe-lite.min.js` and `index.js` (which comes from Thebe), and some CSS files. This does 99% of the work already, and Thebe Lite will work after this. There shouldn't be too many reasons to touch this part of the code.

The line after bootstrapping:

```js
await thebelab.session.kernel.requestExecute({
      code: `import js; import pyodide_js; js.fs = pyodide_js.FS; js.eval("""${override_pyodide_lookup.toString()}"""); js.eval(f"override_pyodide_lookup(fs, '${
        location.pathname.split("/").slice(0, -1).join("/") + "/"
      }')")`,
```

Adds support for local file access. This line in specific also shouldn't need to be touched. Look at the `override_pyodide_lookup` function instead to change this behaviour.

The `configureThebe` function has been modified to support more useful status messages, but further work could be done. It would be nice to only display a ready message when Pyodide is done initializing, but I couldn't figure out a nice way to find this information. One could potentially try to execute something in the kernel to guage the status.

`finalizeCodeCells` adds the "add cell", "delete cell" and "clear" buttons to the Thebe controls. Adding a cell is the most interesting part. Thebe does not actually keep track of cells in the book, but instead keeps a "notebook" which has [ThebeCell](https://github.com/executablebooks/thebe/blob/main/packages/core/src/cell.ts)s in it. These cells have an `area` associated with them that keeps track of events in the cell and updates the appropriate HTML. Due to this organization, if you mess with cells in Thebe, it's important to synchronize the notebook properly too.

## code.css

Contains CSS for dark mode and personal styling preferences, feel free to play with it.

## Contact

In case of questions, feel free to contact me!

- Email: M.Guichard@student.tudelft.nl
