# Making Commits to the Remote Repository (Web IDE)

If you looked closely at the sumamry of all commits made in the example repository `sandbox-public` from the previous page, you may have noticed [another commit](https://gitlab.tudelft.nl/rlanzafame/sandbox-public/-/commit/1bdf9b498dd39580bb21dc0b00d5095a961a5f72) which added the following text to `README.md` in Line 7:

```
Make changes with the web IDE!
```

This page will show you how to make commits to the remote repository directly from the web browser. If you only have small changes to make to a small number of files, this can be faster than doing it with your local repository.

## What is the web IDE?

IDE stands for integrated development environment. It is a software that makes it easier to devlop code and software, for example, by highlighting code syntax, or including command line interpreters to run the code. You may be familiar with other IDE's such as Matlab, Spyder or Visual Studio Code (VS Code). In fact, the IDE integrated in the GitLab website is actually VS Code.

## Edit a file

To edit a file via the web browser we need to open it in the web IDE. First click on the file, then click on the Blue "Open in Web IDE" button ({numref}`ide1`).

```{figure} ../images_gui/ide1.JPG
---
width: 80%
name: ide1
---
Button to edit file in GitLab's Web IDE.
```

Once the new tab opens, the file will be visible and you can edit the text as needed ({numref}`ide2`). Note that if more files were present in this repository, you would be able to see them in the left panel, and clicking on them would open them in additional tabs next to `README.me` in the editing panel.

```{figure} ../images_gui/ide2.JPG
---
width: 80%
name: ide2
---
View of Web IDE: editing `README.md`.
```

Make your changes to the file as needed. Note, however, that there is no "save" button in the Web IDE: changes are automatically preserved as long as you keep the tab open.

## Make a commit

Making a commit is very easy via the git panel, which you can access by clicking the branch-like icon on the far left side of the browser window ( {numref}`ide3`, just below the magnifying class icon). As illustrated in the figure, all changes are listed in the left panel, and you can easily edit the commit message and make a commit using the orange button "Commit to 'main'".

```{figure} ../images_gui/ide3.JPG
---
width: 50%
name: ide3
---
Making a commit in the Web IDE.
```

Once you have made the commit, you can return to the main page of the repository to see the changes, visible in {numref}`ide4`.

```{figure} ../images_gui/ide4.JPG
---
width: 80%
name: ide4
---
Confirmation of the Web IDE commit.
```

This is [the commit we saw](https://gitlab.tudelft.nl/rlanzafame/sandbox-public/-/commit/1bdf9b498dd39580bb21dc0b00d5095a961a5f72) at the beginning of this page!