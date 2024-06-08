# Version Control

<!-- This git tutorial was originally modified from Kiril and Riccardo's version from 2022-23. It was converted from LaTeX to md with Pandoc. Original PDF is included for reference. -->

In a nutshell, **version control** is a process that is concerned with the management and recording of files on your computer. These tools are primarily focused on text-based files, although for convenience we will also apply them to binary files such as PDF or raster images. While you may be used to backup software such as OneDrive, Dropbox, etc, version control software works a bit differently because of the focus on the text-based content. The chapters in this textbook will give you the information you need to take advantage of a version control software, git, for the programming projects you will work on during your MSc program.

<!-- authors: Kiril Vasilev, Riccardo Taormina, Robert Lanzafame. -->

## What is Version Control?


While working on personal or university projects, without a doubt you
have come across the following situation: You have finished drafting a
report and believe you are done with it and save the file as
"report.doc". However, later you decide to experiment and make some
changes, but you still want to keep your old working version, so you
make a new file called "report-final.doc". Now imagine that you send the
file to a friend of yours to proofread and make some comments on it and
they send it back. Next, you incorporate their feedback and end up
naming the new one "report-final-2.doc".

What you have been doing is called version control. Version control
systems start with a base version of the document and then record
changes you make each step of the way. You can think of it as a
recording of your progress: you can rewind to start at the base document
and play back each change you made, eventually arriving at your most
recent version, as shown in figure {numref}`intro1`:

```{figure} images/intro1.png
---
height: 200px
name: intro1
---
Consecutive file changes
```

Once you think of changes as separate from the document itself, you can
then think about "playing back" different sets of changes on the base
document, resulting in different versions of that document. For example,
two users can make independent sets of changes on the same document,
resulting in 2 independent versions ({numref}`intro2`).

```{figure} images/intro2.png
---
height: 200px
name: intro2
---
Parallel file changes
```

Unless multiple users make changes to the same section of the document -
a conflict - you can incorporate two sets of changes into the same base
document ({numref}`intro3`).

```{figure} images/intro3.png
---
height: 200px
name: intro3
---
Merge of changes
```

## File types: text versus binary

Version control systems oriented towards software development and programming are typically focused on **text-based files**: files where the contents are viewable on your computer as human-readable text. **Binary files,** on the other hand, are organized and saved with bits (`0`'s and `1`'s) and are not human-readable. Although this may be a simplified description in terms of the way computers store information (you can read more [here](https://en.wikipedia.org/wiki/Binary_file)), it is enough for our purposes to recognize that text-based files are best suited for use with version control system; in other words, your Python code!

* Examples of common text-based file extensions are: `txt`, `md`, `csv`, `ipynb`, `py`, `html`, etc.
* Examples of common binary files are: `pdf`, `ppt`, `xlsx`, `docx`, etc.

```{admonition} Try it!
Try exploring a few files on your computer to confirm wether they are text-based or binary by opening them up in a text editor. You will easily be able to distinguish the difference because one is readable, the other not.

Note that in Windows if you are using Notepad (the default), you will want to select  "Word Wrap" under the "Format" menu to fit the contents of very long lines within the visible width of the window.
```

### Jupyter Notebooks

Jupyter notebooks, `ipynb`, are a special case because while the contents of your Markdown and code cells is saved as text in the file, the output of the code cells is sometimes a binary format. For example, if you create a plot using matplotlib and save the notebook, that plot output will be binary. This unfortunately makes it a little more difficult to use notebooks with VCS, but if we are aware of the issue, it is not a problem---we will show you how.

If you tried opening up a notebook in the text editor you would have noticed a structure with curly braces, `{}`. This is [JSON-format](https://en.wikipedia.org/wiki/JSON)] (another file type), which the notebook uses to store information in each cell.


## A different way of thinking?

As you will see in the following chapters on git, when applied to code, version control takes on a very different appearance than what you are used to with traditional backup software, for example, Microsoft Word auto-save, or cloud-based services like OneDrive or Dropbox. All of these platforms are set up in a user-friendly way that is _focused on a single file._ This works fine when we are writing a report like a thesis. However, it does **not** work well when it comes to comptuer programs, because in addition to the files themselves, the _contents of the file_ become critical. As we will see, git is a version control software that allows us to compare and track changes in every character of text within a file, which is very useful when writing code, as well as working with a distributed team of collaborators.

`````{admonition} Tip
:class: tip
To use version control (git) effectively, different versions of files are tracked with _commits_, **not** by duplicating or renaming the file.

**Avoid copying and renaming files as much as possible!**
`````

## git and GitLab

**What is git?**

[Git](https://git-scm.com/) is a version control system (VCS), used by a wide variety of engineers and software developers to work on projects in parallel together. It provides multiple benefits such as tracking changes to files, working side by side with other people, and the ability to rollback to previous versions of files without losing track of newer changes. It is a free and open sources software.

Note that while git is free and can be used on a variety of operating systems, there are many 3rd party softwares that _use_ git directly, or are heavily dependent on git. For example, GitLab and GitHub are two companies that provide cloud-based servers for hosting git repositories, as well as additional features like user groups, discussion channels, and even hosting of websites

**What is GitLab?**

GitLab is a cloud-based version control system built around git. It provides a lot more features such as Issues, Merge Requests, CI/CD pipelines, etc. TU Delft has a license to use GitLab on our own local webservers---this means that all of the files are stored digitally on the TU Delft campus, rather than some unkown webserver that could be physically located in an unsafe location. This is also why we have our "own" GitLab located at `gitlab.tudelft.nl`, rather than the "normal" GitLab at `gitlab.com`, which is what we will be using throughout MUDE, and is also something you will have access to throughout your studies.

**What is GitHub?**

GitHub is a competitor company to GitLab. It provides very similar services, but they are often called different names, or have slightly different features. Although we will not be using it directly, GitHub provides a free software that is very useful: **GitHub Desktop**! We will use this manage our git repositories on our computers, even though they are stored on Git**Lab**.


## Main concepts and terminology

Here we present a list of the terminology we may use when referring to VCS. Do not panic if you do not understand what each of the following means. Later, we will provide a more elaborate explanation with examples. Bear in mind that the list below is not exhaustive, and more terms may show up. Also, if you only do the GUI option, you might not encounter some of them.

1. **Repository:** storage, where VCS (git, in our case) store their history of changes and information about who made them.
1. **Remote (of repository):** a version control repository stored somewhere else and the changes between the two are usually synchronized. We will refer to the Gitlab repository as a *remote*.
1. **Commit:** Snapshot of the current state of the project. If a commit contains changes to multiple files, all the changes are recorded together.
1. **Staging:** preparation of files to be committed. During the staging we propose files to be committed.
2. **Snapshot:** copy of the current version of the entire repository.
3. **Cloning:** copying (downloading) an existing project on your laptop. Usually, it is done only during the first time of getting the remote repository.
4. **Tracked (files):** files that Git knows about -- they are either in the staging area or were previously added to the repository.
5. **Untracked (files):** files that Git does not know about -- they are likely new files that have not been staged yet.
6. **Pushing:** uploading new commits (changes) to the remote server.
7. **Pulling:** retrieving new commits from the remote repository.
8. **Fetching:** check for new changes on the remote repository without pulling them yet.
9. **Conflict:** when changes made by multiple users to the same file are incompatible, you can get into a conflict. _Helping users resolve those conflicts is one of the key advantages of VCS._
10. **Branch:** development (time) line. The main development line is called `main`.
11. **Merge:** combining the commits of two branches, for example, changes on a development branch are merged into the `main` branch.
