# Exclude parts of book from published book

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