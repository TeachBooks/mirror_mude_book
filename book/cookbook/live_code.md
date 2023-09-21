# Python-enabled interactivity

Our book has been enable to run Python code live in the browser (thanks Max!). This page contains some installation instructions, and the other sections in this chapter provide some benchmarks which illustrate the functionality that has been added.

## Custom cell tags
With the extended functionality of live code, additional cell tags have been developed to be added to cells in any .ipynb file, next to the [existing tags] of the jupyter book (https://jupyterbook.org/en/stable/content/metadata.html):
- `disable-execution-cell` disables the ability to execute the cell when thebe is activated. This might be useful if you notebook file includes interactivity for only a part of the coding cells
- `disable-execution-page` disable the ability to execute the entire page. This might be useful if you use python code for creating a page, but the code is not part of the actual content of the book.
- `auto-execute-page`, automatically starts the thebe live coding functionality whenever the page is opened. This is particularly useful if you're using widgets on a page. At this moment, this tags doesn't work in combination with `thebe-remove-input-init`
- `thebe-init`, directly starts running this cell as soon as the thebe live coding functionality starts.
- `thebe-remove-input-init`, as `thebe-init` the cell is started directly as soon as the thebe live coding functionality starts. However, the input is not shown to the students (in static and interactive mode). The original `remove-input` tag will not work as it deletes the entire cell, so it can never be executed.
- `keep-output` ...? Max?

## Instructions: local build

To test the fuctionality, you have to run a local server, otherwise the interactivity doens't work. So, you cannot just open the index.html file any more. This can be done with the following steps:
1. build the book by running the shell script `build-book.sh` (type `./build-book.sh true` in the terminal). If you are using Windows you should use the Git Bash terminal. Set this as your default in VS Code, then open it using "New Terminal." If you have not already done so, you will need to allow Git Bash to use your Python libraries by running the command `conda init bash`.Run the shell script from `book/` (not `book/book/`) using `./build-book.sh`. You may notice that `build-book.sh` creates a Python server (`python -m http.server....`) if you include `true` in the command.; this is critical for getting the interactive code pages to work, you cannot just open the index.html file any more.
2. Open the book by going to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser. You may need to reload the page once the rebuild is complete. You can do this on Chrome by right-clicking somewhere on the page, select "Inspect", open the "Network" tab, then reload with `CTRL+R`. Or try `ctrl`+`F5`
3. Go to any page that is created from a Jupyter notebook
4. In the top right, click "Live Code" in the rocket ship menu item ({fa}`rocket`)
5. Once the message "Python interaction ready!" is displayed, you can run all the cells of the notebook!

If you push to main, you can test the interactivity on the book-draft website as well.