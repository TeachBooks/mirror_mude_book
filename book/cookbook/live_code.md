# Live Code

Our book has been enable to run Python code live in the browser (thanks Max!). Detailed instructions will be added elsewhere later, but for now, try this:

1. build the book by running the shell script `build-book.sh` (type `./build-book.sh true` in the terminal)
2. Open the book by going to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser, or use the "live" version of the book at [https://mude.citg.tudelft.nl/book-draft/](https://mude.citg.tudelft.nl/book-draft/)
3. go to any page that is created from a Jupyter notebook
4. in the top right, click "Live Code" in the rocket ship menu item ({fa}`rocket`)
5. Once the message "Python interaction ready!" is displayed, you can run all the cells of the notebook!
6. Check out the cool "add cell" button that Max added, this will be very useful for allowing students to experiment with Python without having to open up another software (e.g., Anaconda)
7. Check out the benchmarks page, which illustrates 4 ways we can include auxiliary files in the book build and use them with the live code. _This will allow us to provide instant feedback to the students when running code! For example, using asserts to check that they got the right answer, and return string messages to confirm. This code will also be hidden from the students._

Play around with this functionality and let Robert know if you run into any issues, or want to set up some exercises for students. Examples will be provided soon!

## Using the Python Server

You may notice that `build-book.sh` creates a Python server (`python -m http.server....`); this is critical for getting the interactive code pages to work, you cannot just open the index.html file any more. Otherwise, the edit-build-view workflow is the same, except you may need to reload the page once the rebuild is complete. You can do this on Chrome by right-clicking somewhere on the page, select "Inspect", open the "Network" tab, then reload with `CTRL+R`. You can also skip automatically running the server by not passing in `true` in the command.

```{note}
If you are using Windows you should use the Git Bash terminal. Set this as your default in VS Code, then open it using "New Terminal." If you have not already done so, you will need to allow Git Bash to use your Python libraries by running the command `conda init bash`.

Run the shell script from `book/` (not `book/book/`) using `./build-book.sh`.
```

```{tableofcontents}

```
