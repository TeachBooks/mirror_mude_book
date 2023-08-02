# MUDE Jupyter Book 2023/2024

**UPDATE FOR THOSE BUILDING THE BOOK:** *we've been adding packages to the build, for example, Tom has added some examples of the quiz features we can use in the Cookbook, which requires a special package from our CS colleagues. If your book build is breaking due to package issues, simply run the following:*

```
pip install -r requirements.txt
```

*If you don't mind a bit of advanced software installation, try the Docker installation described in this README: it will build your local book exactly the same way as it is done in the online version.*


This book is for the technical contents of MUDE and will include simple exercises, but not assignments or projects. There will be a separate repo for the assignment files, as wellas the module website, which will give the (annual) course overview, planning, etc.

For reference in editing content, see the [Jupyter Book website](https://jupyterbook.org/en/stable/) and our own CEG guidelines, which are online [here](https://interactivetextbooks.citg.tudelft.nl/intro.html) and stored in the repository [here](https://gitlab.tudelft.nl/interactivetextbooks-citg/jupyter-book-manual). This repository is within the Group [`interactivetextbooks-citg`](https://gitlab.tudelft.nl/interactivetextbooks-citg). If you do not have access to these projects yet, please go [here](https://gitlab.tudelft.nl/interactivetextbooks-citg) and request it (you will probably get Developer access to the Group, and Maintainer access to the Project).

Conventions and protocols specific to MUDE will be written in this README and/or the book itself.

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

As the book and editing team grow, the chance that something does not work increases. It's critical that everyone builds the book in the same way, and that changes are made in parallel without losing work. The tools for this are Docker and git/GitLab.  For example, the book does not build on your computer, or the HTML looks different on your computer than another. Docker standardizes the building and deployment process to reduce dependency issues.

Everyone **must** use git and GitLab, although there are several ways to do it (e.g, terminal, GitHub GUI, VS Code). Docker can be complicated to set up (especially on Windows); it is really only needed if a) you want to be able to build the book in exactly the same way as it will be built on the website, or b) the (Python) packages to build the book are not on your local computer (e.g., the book build breaks on your computer, or you don't want to manage package dependencies).

Instructions to [Install and use Docker](#install-and-use-docker) at the end of this README.

#### Using git and GitLab

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

## Install and use Docker

You should follow the instructions on the Docker website to install [Docker Desktop](https://docs.docker.com/desktop/) (for Windows the downloaded exe was over 400MB; you will need to log out of windows to complete installation). These instructions were written for Windows users; if you are using a Mac or Linux you will probably have a much easier time.

- there is no need to create a Docker account
- Windows users should use the Git Bash terminal. If you have never used it: it comes installed with git and provides Unix-like commands. You will need to make it aware of your Anaconda distribution by executing `conda init bash`. Test it by calling a Python package like `jupyter-book`.
- you will also need to install Windows Subsystem for Linux (WSL); it provides a Linux environment on your Wndows machine. Docker Desktop will warn you about WSL not being installed when you start it up for the first time. Try [this](https://learn.microsoft.com/nl-nl/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package) to install. There is a WSL extension in VS Code but it does not work for Docker. 
-  

A couple "tricks" are needed to get it running smoothly:

1. Administrative privelages: a) running Docker Desktop in admin mode works, and b) you can also try to add your Windows user to the Docker users group, as described [here](https://stackoverflow.com/questions/61530874/docker-how-do-i-add-myself-to-the-docker-users-group-on-windows). In short, open a windows command prompt as administrator and execute: `net localgroup docker-users "your-user-id" /ADD`. You won't get confirmation, but it seems to work.
2. You might also need to use the first two answers [here](https://stackoverflow.com/questions/43041331/docker-forever-in-docker-is-starting-at-windows-task) (done by Robert). Note that the "Switch to Windows containers..." solution is not needed after you restart a few times (but if the container tab does not load, check it).
3. You may need to use git bash with admin rights, but once set up, your default approach should be OK.

Once Docker is set up correctly, you should see a default page on the Containers tab in Docker Desktop that reads "Your running containers show up here." The book contains some Docker configuration and shell scripts to semi-automate the process of using a container. The main idea is that we define the tools needed to build the book with a Docker *image* (`Dockerfile`), then we create the Docker *container* to run the scripts to build to book (`deploy-book.sh`). When the container runs, `docker-compose.yml` provides the instructions for hosting the book on a local webserver so that you can view the book.

One way to test whether your Docker Desktop installation is working is to run through a couple of the basic tutorials in Docker Desktop. THe first two that are advertised in the software should be sufficient as long as they take you through the process of creating a container and viewing the website in your browser.

### Building the book on your computer (Docker)

This is the custom setup for our MUDE book. It assumes you are a Windows user and are using Git Bash as a terminal, with Docker Desktop installed and working. For Mac or Linux, we assume you installed Docker Desktop and that you are using a terminal and everything works perfectly without problems because...well...it's not Windows.

Initial build times may take a few mintutes, but then the Docker image will be cached and not be rebuilt unless needed. This setup will also produce the `_build` folder on your machine. Trying to build locally after building in docker will cause a rebuild for some reason (maybe incompatible settings?), and visa-versa.

The typical workflow is:
- Open Docker Desktop and make sure the empty container page loads. This means the Docker Engine is ready to build your book.
- Run the `deploy-book.sh` script. You should see the book build output in the terminal window.
- *Note: after you run* `deploy-book.sh` *successfully for the first time, you can start the container directly in Docker Desktop.*
- View the book at [http://localhost:8000/](http://localhost:8000/) (*not* the local build at `./book/_build/html/index.html`---the interactive features won't work!). You can also open this by clicking the link in the Container tab
- note that your original terminal will be busy deploying the Python local server, so you will have to start a new one (especially to run `stop-deployment.sh`, below)
- Do whatever book tasks you have: read, edit, use, etc
- If you need to rebuild the book to check your changes, you may need to refresh the page (contact Robert if there is a problem)
- Once you are finished, stop the container using the `stop-deployment.sh` script or by pushing the stop button in Docker Desktop
- Push any commits to GL

### Docker notes for Windows

Besides the installation tricks mentioned above, which are required to get a container running, there is one other issue we (Max/Robert) had in the setup. The build would proceed as desired from `deploy-book.sh` until the `CMD` line in the `Dockerfile` was reached, where the container terminal could not find the shell script `build-lite.sh`, terminating the process in an error. Docker Desktop would show that the container was exited. All of the commands in `build-lite.sh` worked fine when entered in the terminal, which helped (eventually) indicate the problem was with line endings in Windows. This was fixed using `* text=auto eol=lf` in `.gitignore`.

If applying the `.gitignore` setup to a git repo that is already initialized, you should run these two commands:
```
git rm --cached -r .
git reset --hard
```

See also the discussion in [MR23](https://gitlab.tudelft.nl/mude/book/-/merge_requests/23).

For future troubleshooting, try the docker commands `docker [network, image, container] ls` to see what is running (choose one of the three options in `[ ]`). You can also delete the image and cnotainer from Docker Desktop. If a line in the `Dockerfile` is causing problems, it can be commented and the container terminal can be used to test things, once the container is activated.

