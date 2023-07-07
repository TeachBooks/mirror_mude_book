# MUDE Jupyter Book 2023/2024

This book is for the technical contents of MUDE and will most likely also be used to display (and in part deliver) assignments to MUDE students, post solutions, etc.

There will be a separate repo for the module website, which will give the (annual) course overview, planning, etc.

For reference in editing content, see the [Jupyter Book website](https://jupyterbook.org/en/stable/) and our own CEG guidelines, which are online [here](https://interactivetextbooks.citg.tudelft.nl/manual/intro.html) and stored in the repository [here](https://gitlab.tudelft.nl/interactivetextbooks-citg/jupyter-book-manual). This repository is within the Group [`interactivetextbooks-citg`](https://gitlab.tudelft.nl/interactivetextbooks-citg). If you do not have access to these projects yet, please go [here](https://gitlab.tudelft.nl/interactivetextbooks-citg) and request it (you will probably get Developer access to the Group, and Maintainer access to the Project).

Conventions and protocols specific to MUDE will be written in this README.

## Where to put stuff

### Where to put your content (in the book ToC)

For now, there are 3 parts:
1. **New material:** this will slowly be the place for the new stuff, but until the ToC is well-defined, let's leave it alone for now. I leave it at the top to remind ourselves of the work that's needed still :grin:
2. **Sandbox:** do whatever you want here! Maybe start by making a chapter for yourself. Can also organize yourselves around topics, especially once you know how it may look in the "final" book.
3. **Cookbook:** this will *illustrate* examples specifically for MUDE. The idea is that the book shows what it should look like and allows you to test that it works, wherease repo/code is what you copy/paste when creating content. This should be especially to define conventions like internal references, links, figure storage, etc. Generic things can go here temporarily, but should eventually be moved over to [Jupyter Book Manual](https://gitlab.tudelft.nl/interactivetextbooks-citg/jupyter-book-manual) in the other GL Group.
4. **Old material:** collect old MUDE material here from the archive. Think of it like a staging ground: you can make the copy/paste/reference/testing side of thing easier. Try not to include large files like slides, etc...these materials should be converted to JB format for inclusion in the book, or hosted elsewhere and rendered via a link.
5. **Other Parts/Chapters:** Robert has already dumped some older content into the book, like the MUDE book from last year, EVA from a Q4 course and the coding workshops from last year.

### Where to put your content (in `./book/book/...`)

Someday we will probably add chapter numbers, determine conventions for figures, code, notebooks, etc, etc, etc. For now, just put content in folders, get comfortable working with Jupyter Books and we will re-assess end of June. For now, organize it as you wish using the existing directory structure, and we will sort it out later; perhaps your local chapter sub-directory is easiest, for example, `./book/book/my-chapter/figures/`.

## Working Methods (Adding Content)

**Important:** `main` is the working draft for our entire MUDE teaching team. It's the version of the document that we will use to review each others work. We will give each other feedback through a comination of GitLab Issues and in-person meetings. At some point we will also get set up on Discord or Mattermost (depending on what we use next year in class).

**Keeep this in mind:** until we share the book with the students it will be in development mode, which means we can add all sorts of notes, tags, flags, etc.. Wherever, however, whoever. Just have fun. By August, however, the Table of Contents should be close to final and during the 2 week review period at the end of August the old, draft and temporary material should be removed.

**git:** do you struggle with the terminal commands? Can you handle git in VS Code, but don't like going to the GitLab website? You can use the [GitHub Desktop Application](https://desktop.github.com/) to take care of all your git needs. This makes it much easer to pull, push, resolve merge conflicts, and can even take care of Merge Requests so you don't need to visit the GitLab website. Tom van Woudenburg has been using it with GitLab for a while, so contact him if you are interested in this setup.
### Generic working method

The typical workflow is:
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

### Reviewing JB Content

Right now we have not developed any special methods for reviewing content other than looking at the source code directly (either online in GitLab or in VS Code, after pulling changes); downloading individual pages as PDF or viewing the book in a browser and providing comments in another document. Ideas to explore as a working method:

- edit source code directly (local computer or on GitLab)
- view the book locally or online and give comments in a text file or word doc
- download a PDF of each page and comment on that
- we find a way to export the entire book or sub-parts as PDF and export that
- etc etc etc

### Choose your working method (teacher)

There are three methods we have outlined, depending on your experience with and willingness to learn and use VS Code and git, the GitLab website creating content (source code) or building the book locally. The methods are ordered in decreasing independence of the teacher and increasing support from TA's.

Method A:
- teacher adds content to book, including toc
- teacher uses GitLab Issues and Merge Requests to request review or support
- only minor edits needed by TA's
- Robert, Patricia (once she starts using branches and Issues/MR!), Tom, ???

Method B:
- content provided in `md` or `ipynb` files
- contenet is mostly complete but probably misses a few things like figures generated from code, and the Jupyter Book elements, style, etc
- general instructions are provided in an email or GitLab Issue (preference for GL!). If provided in email, the TA will add to GL as an Issue/MR
- detailed instructions for work that is needed provided primarily in content file
- minor conversion work completed by TA; teacher asked to review changes (see [Reviewing JB Content](#reviewing-JB-content))
- ta^&* ...
- 

Method C:
- content provided in various formats, perhaps binary files (mp4, docx, pptx, etc) and conversion requires significant effort by the TA
- instructions provided via GL Issue or email (TA creates Issue)
- many more cycles in the review-edit process are needed (see [Reviewing JB Content](#reviewing-JB-content))

## Jupyter Book workflows for TA's

> This section is based on the original Git + VS Code instructions from the [Jupyter Book Manual®](https://interactivetextbooks.citg.tudelft.nl)

### Plan A

This workflow is meant for TA's working with teachers that know a thing or two about Git and GitLab. The teacher has made some contents in a correct format (Markdown or Jupyter Notebooks) and now wants a TA to review, edit, or make the contents ready for merging into the book. In the MUDE book, we will use the following workflow:

1. The TA (or teacher) makes a new branch called `<name>`, where `<name>` is the name of the teacher that's responsible for this piece of content.
2. On said branch, the teacher adds their materials.
3. (Optional) Teacher opens a (Draft) Merge Request and assigns a TA for review and/or editing of their materials.

**Note:** we assume that you already have VS Code installed and are somewhat familiar with its interface. 

#### Step 1: Making a branch
1. On GitLab, navigate to the repository of your project. Under the project description, you should see a menu button with a "+" in it. Click this button, then click on "New branch".

![Click the highlighted button to make a new branch.](./book/figures/workflows/gitlab-branch.png)

2. A new page opens, on which you can specify the name of your branch and the source branch. Give the branch the name of the teacher that is responsible for the materials. After you've made sure that the selected source branch is correct, click "Create branch".

![We're making a new branch called `chapter-2` from the `main` branch.](book/figures/workflows/gitlab-branch-name.png)

3. You should be sent back to an overview page of your repository. In the branch selection menu , it should now say `<name teacher>` instead of `main`. 

4. The final step is to *check out* our new branch in VS Code. In VS Code, open the branch menu from the bottom left (see image below). In the menu that shows up, select the new branch that you just created on GitLab (it can take a little while before it shows up). Make sure that the correct branch name is now displayed in the bottom-left corner of the VS Code window.

![Location of the branch menu.](book/figures/workflows/git-branch-menu-main.png)

#### Step 2: Adding contents

Now the teacher can add their contents to their personal branch. Remember to also push to the GitLab server!

#### Step 3: Opening a merge request

1. Before opening a merge request, make sure that all contents are committed to the correct branch and pushed to GitLab.


2. On GitLab, go to your repository. In the menu on the left side, click "Merge requests". On the page that opens, click the "New merge request" button. 

3. You can now choose a source branch and a target branch. Since we want to merge our changes from `<name>` *into* `main`, `<name>` is the source branch and `main` is the target branch. In the image below, `<name>` is called `chapter-2`. Once you've selected the correct branches, click "Compare branches and continue".

![Creating a new merge request](book/figures/workflows/gitlab-merge-request.png)

4. On the next page, you can give your merge request a name, and provide a description of your changes. If somebody has to review your changes, you can add them in the "Reviewer menu" in the menu on the right. They will then be notified via email that they need to review your work. Finally, watch out for the option "Delete source branch when merge request is accepted". If you want to keep working on the same branch, even after your previous work has been merged, make sure you untick the box! Once everything is filled in, click "Create merge request". 


## Build notes

**The book build is currently set up to run notebooks automatically!!!** This may be different than past books that you have worked on. It means all the code in a notebook whenever the file has been updated. This smay add build time, but is going to be an extremely useful tool for checking and enforcing our coding standards, packages, etc. It also means that if you add a new package to your notebook you need to list it in `requirements.txt`. Learn to love it.

### Structure IN FLUX

There are several directories that were moved over from the 2.7-2.8 book from last year. It is not clear if these will be adopted long-term, let's see how it goes for now...

Because the structure of the book may change dramatically in coming years, let's keep things organized in subdirectories. For examples, `book/pd/...` contains the chapters moved from the Risk & Reliability book (`pd` = probabilistic design, the name of our old course). This sub-directory structure is duplicated in the directories listed below.

There are several directories:
- `book/`: primary source files for the book
- `code/`: auxiliary scripts for generating figures, etc. These are executed via eval-rst blocks, but the functionality is disabled for now (this could be moved to the source files in the future). files to generate the figures outside of the book build begin with `test_...`
- `unused/`: files that were removed from the book (and didn't want to see warnings for unused files in toc). Might be better to hide these in a branch
unused/pd/
### Conversion of old book from GH to new repo

Mostly I copied files, but also:
- added sub-directory `pd` to the 3 dir's listed above
- put figure build nb into `code` (got rid of `code_check`
- find/replace to add sub-dir references
- added `_dont_execute` wildcard to config (change toc and filename for 3 nb's)
- need to move up one extra dir for figure and code includes