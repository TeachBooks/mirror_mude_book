# The MUDE Book

Refer to the [TeachBooks Manual](https://teachbooks.tudelft.nl/jupyter-book-manual/intro.html) for installation and collaboration instructinos, as well as an overview of TeachBooks features. Use the [Jupyter Book manual](https://jupyterbook.org/en/stable/intro.html) for instructions to use general features.

Use 5 M's (`MMMMM`) anywhere in MUDE repositories to mark to-do's for teachers and TA's. The idea is that you will use text search in VS Code or another platform to find them. Feel free to add your own letters or initials afterwards to make it easier to find certain things yourself or with a sub-team (e.g., `MMMMM-RL` for Robert).

## Where to put stuff

### Where to put your content (in the book ToC)

If you want to add something to the book but are not sure where to put it, use the Sandbox part, as this will not be seen in the version released to students.

There are still some older parts from the year 1 to 2 transition that need to be cleaned up.

## Build notes (2024-25)

## Draft banner

Now using the default Jupyter Book banner. For reference, the previous version (set up by R Stular) used a script and custom tag in the `yml`:

```
draft_banner: '⚠️This is a draft website. The most recent published version can be found <a href="https://mude.citg.tudelft.nl/book/intro.html">here</a>.⚠️'
```

## Build notes (2023-24)

**A few notes that will be removed after 2024 structure is finalized.**

There are several directories that were moved over from the 2.7-2.8 book from last year. It is not clear if these will be adopted long-term, let's see how it goes for now...

Because the structure of the book may change dramatically in coming years, let's keep things organized in subdirectories. For examples, `book/pd/...` contains the chapters moved from the Risk & Reliability book (`pd` = probabilistic design, the name of our old course). This sub-directory structure is duplicated in the directories listed below.

There are several directories:

- `book/`: primary source files for the book
- `code/`: auxiliary scripts for generating figures, etc. These are executed via eval-rst blocks, but the functionality is disabled for now (this could be moved to the source files in the future). files to generate the figures outside of the book build begin with `test_...`
- `unused/`: files that were removed from the book (and didn't want to see warnings for unused files in toc). Might be better to hide these in a branch
  unused/pd/

### Conversion of old book from GH to new repo (2023-24)

Mostly Robert copied files, but also:

- added sub-directory `pd` to the 3 dir's listed above
- put figure build nb into `code` (got rid of `code_check`
- find/replace to add sub-dir references
- ~~added `_dont_execute` wildcard to config (change toc and filename for 3 nb's)~~
- need to move up one extra dir for figure and code includes
