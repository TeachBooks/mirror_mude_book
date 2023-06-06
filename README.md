# MUDE Jupyter Book 2023/2024

This book is for the technical contents of MUDE and will most likely also be used to display (and in part deliver) assignments to MUDE students, post solutions, etc.

There will be a separate repo for the module website, which will give the (annual) course overview, planning, etc.

For reference in editing content, see the [Jupyter Book website](https://jupyterbook.org/en/stable/) and our own CEG guidelines, which are online [here](https://interactivetextbooks.citg.tudelft.nl/manual/intro.html) and stored in the repository [here](https://gitlab.tudelft.nl/interactivetextbooks-citg/jupyter-book-manual). This repository is within the Group [`interactivetextbooks-citg`](https://gitlab.tudelft.nl/interactivetextbooks-citg). If you do not have access to these projects yet, please go [here](https://gitlab.tudelft.nl/interactivetextbooks-citg) and request it (you will probably get Developer access to the Group, and Maintainer access to the Project).

Conventions and protocols specific to MUDE will be written in this README.

## Where to put your content

For now, there are 3 parts:
1. **New material:** this will slowly be the place for the new stuff, but until the ToC is well-defined, let's leave it alone for now. I leave it at the top to remind ourselves of the work that's needed still :grin:
2. **Sandbox:** do whatever you want here! Maybe start by making a chapter for yourself. Can also organize yourselves around topics, especially once you know how it may look in the "final" book.
3. **Cookbook:** this will *illustrate* examples specifically for MUDE. The idea is that the book shows what it should look like and allows you to test that it works, wherease repo/code is what you copy/paste when creating content. This should be especially to define conventions like internal references, links, figure storage, etc. Generic things can go here temporarily, but should eventually be moved over to [Jupyter Book Manual](https://gitlab.tudelft.nl/interactivetextbooks-citg/jupyter-book-manual) in the other GL Group.
4. **Old material:** collect old MUDE material here from the archive. Think of it like a staging ground: you can make the copy/paste/reference/testing side of thing easier. Try not to include large files like slides, etc...these materials should be converted to JB format for inclusion in the book, or hosted elsewhere and rendered via a link.

## How to store your content

Someday we will probably add chapter numbers, determine conventions for figures, code, notebooks, etc, etc, etc. For now, just put content in folders, get comfortable working with Jupyter Books and we will re-assess end of June.

## MUDE Working Method

**Important:** `main` is the working draft for our entire MUDE teaching team. It's the version of the document that we will use to review each others work. We will give each other feedback through a comination of GitLab Issues and in-person meetings. At some point we will also get set up on Discord or Mattermost (depending on what we use next year in class).

**Keeep this in mind:** until we share the book with the students it will be in development mode, which means we can add all sorts of notes, tags, flags, etc.. Wherever, however, whoever. Just have fun. By July, however, the Table of Contents should close to final and by mid-August the old, draft and temporary material should be removed.

Your typical workflow is:
- create your own branch via GitLab (create from an Issue directly, or just create one manually and use or name)
- pull and checkout on your laptop (`git pull` or use the sync button then `git checkout BRANCHNAME`)
- add your content, commit changes
- push to GitLab
- when ready to share with the MUDE team, merge into main (Merge Request)
- if you have a problem or question, or need someone to check something, you can:
  - create an Issue and tag someone. Use labels to designate the type of Issue (e.g., `@user: can you show me the right way to make this link? i could not find it in the manual`)
  - tag someone in a merge request (e.g., "hey i am adding content to main, it's ready for you to add your coding example to illustrate exercise 3")
  - if you think something should be added to the manual, add it as an Issue in the manual repo (try to leave MUDE Issues for MUDE-specific problems)
In the future, additional branches will be set up to publish the website, but we don't need this yet as long as everyone can build the book on their own (locally)

For now, the only strict rule is: **Never push directly to `main`.** Now that there are many of us working together, the potential for messy merge conflicts is higher, so please try to update the "working draft" on `main` via a merge request.

## 

**The book build is currently set up to run notebooks automatically!!!** This may be different than past books that you have worked on. It means all the code in a notebook whenever the file has been updated. This smay add build time, but is going to be an extremely useful tool for checking and enforcing our coding standards, packages, etc. It also means that if you add a new package to your notebook you need to list it in `requirements.txt`. Learn to love it.