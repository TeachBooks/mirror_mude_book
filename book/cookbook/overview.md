# Cookbook

_Many thanks and credit to Tom van Woudenburg, who has been maintaining the interactive pages from a technical and didactic perspective, as well as advising on new features. This would absolutely not be possible without TA's Max Guichard for implementing the interactive features and Rok Štular for designing and implementing the build workflows and webserver._

_For questions, contact Robert Lanzafame, R.C.Lanzafame@tudelft.nl._

This Part of the book is a collection point for various instructions and examples of interactive features. In particular, the following chapters lay out two types of interactive features:
1. non-code examples (e.g., how to make different types of quiz questions)
2. code examples. This is brand new and unique to MUDE; it is now possible to run Python code directly in the book!

Especially for type 2, there is a lot of potential for providing immediate feedback to students when they run a code cell, but this is not documented extensively yet. As we progress into Q1 and Q2, you can also look through the actual (published) book contents to see interactive exercises that have been provided to students in the MUDE module. Note that chapters have different authors, so for this year the style of implementation will probably be quite diverse.

```{admonition} Are you developing educational content?
If you know how you want to implement a particular type of question in your book, send a description! For example, "I want to have students write a function to implement method A, and when they run the code cell they see if it gives the right answer. It will be checked by confirming a few inputs and outputs of the function, but I don't want the students to see the correct answer (values nor function code)."
```

A new feature is added to enable testing of all interactive features on the web server (i.e., in the draft book) while preventing students from seeing it. Pages in the draft book (`main` branch) can be manually stripped out of the table of contents when a merge request from `main` to `publish` is made using a tag `REMOVE-FROM-PUBLISH`. Pages marked with this feature are still visible in the draft book and books build from source on personal computers. The tag is applied as follows:

```
format: jb-book
root: intro

parts:
  - caption: ...
    chapters: 
    - file: ...
      ...
# START REMOVE-FROM-PUBLISH
    - file: files_to_remove
# END REMOVE-FROM-PUBLISH
```
There is no limit to the number of stripped sections, they can be sequential and indentation does not matter. The action is implemented in shell script `build-book.sh` and is executed at run time (see line in script [here](https://gitlab.tudelft.nl/mude/book/-/blob/main/build-book.sh#L13)).

```{note}
The exercises in this book will be under constant development until the end of Q2, at least. As such, the Cookbook chapter in the draft book temporarily supercedes the Cookbook in our other (non-MUDE) book (links to: [website](https://interactivetextbooks.citg.tudelft.nl/) and [repo](https://gitlab.tudelft.nl/interactivetextbooks-citg/jupyter-book-manual)). Some day the content here may be moved to the other book and adapted into explanations and examples.

The `REMOVE-FROM-PUBLISH` feature was developed to retain testing of all interactive features on the web server and we recommended incorporating this in all books that rely on these features. It avoids problems associated with building the book on various platforms and virtual environments, rather than the actualy webserver where the book will be deployed.
```