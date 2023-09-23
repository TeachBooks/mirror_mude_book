# Making Commits to the Local Repository

Text.

```{note}
The examples in this page will be illustrated using an arbitrary public repository set up by Robert Lanzafame on the TU Delft GitLab called [sandbox-public](https://gitlab.tudelft.nl/rlanzafame/sandbox-public/). You can follow along by creating your own repository in your MUDE group, then cloning it to your computer (i.e., making a _local_ repository, as we learned in the previous section).

If you create your own repository, keep the box checked to initialize with a `README.md` file, which will look identical to that in the examples below.
```

## The remote repository

We begin by identifying the repository on which we would like to work, in this case `sandbox-public`; the starting condition is visible in {numref}`clone5`. We can see that it began as a completely empty repository, except for the default `README.md` file that GitLab creates automatically. Begin by cloning the repository to your computer to make the _local repository_ (see previous page).

```{figure} ../images_gui/clone1.JPG
---
width: 80%
name: clone5
---
Default starting condition of a remote repository on GitLab.
```

## Edit the local file

Now that our repository is cloned, we are ready to get to work! First we will make a change to `README.md` with our text editor (in this case, it's Notepad++; you may be using something different). As shown in {numref}`commit1`, we have completely deleted the original text and replaced it with something more...relevant. Save the changes to the file, then go back to the GitHub GUI.

```{figure} ../images_gui/commit1.JPG
---
width: 50%
name: commit1
---
Example of changes to the original `README.md`` file in text editor.
```

```{admonition} Don't forget to save changes!
It is important to remember to save the changes you make to files (either `CTRL`+`s` or by clicking the save button). This is how git recognizes that a file has been changed, after which it registers what those changes are.
```

As we can see in {numref}`commit2`, git has now registered the changes in our file. git uses a few text symbols to identify and describe the changes, for example, a `+` and `-`, along with a text-based summary of the changes at the top of the file (i.e., the stuff between the `@@` symbols...you can read more about this in the CLI chapter). The GitHub GUI highlights the changed lines in green and red, making it very obvious what happened.

```{figure} ../images_gui/commit2.JPG
---
width: 80%
name: commit2
---
Summary of changes made to `README.md` in the GitHub GUI.
```

At this point we are ready to make our first **commit**, but what does that mean? A **commit** is the way that we tell the git software to make a record of the change that we just made to the file. That's it! We can do this via the GUI by clicking the button "Commit to main", as shown in {numref}`commit3` (`main` is the default **branch** of this repository; we aren't learning about branches at the moment, however).

```{figure} ../images_gui/commit3.JPG
---
width: 40%
name: commit3
---
Making a commit with the GitHub GUI, illustrating the commit message and description.
```

{numref}`commit3` also illustrates the space where you can provide a commit message (the "Update README.md") as well as a description. The description is optional, and you don't have to worry about it now. The commit message can be extremely useful for reviewing changes, however, especially when working with multiple people. *It is important to write concise (limit it to 50 characters max), yet descriptive commit messages.* As you can see, the default works OK in this case. However, when you work on more complicated projects, it could be useful to write your commit message such that it completes the following sentence: _This commit will..._.

```{note}
A _commit_ can record changes made to more than one file at once--we are only editing one file at a time now, to keep things easy to visualize.
```

## Another commit

Because the change to our `README.md` was so large, it was difficult to see all the changes. Let's try making another one. Using the change summary in {numref}`commit5`, can you tell what happened to the file?

```{figure} ../images_gui/commit5.JPG
---
width: 80%
name: commit5
---
A small change to `README.md`.
```

```{admonition} See the change here
:class: dropdown

All we did was add the `.md` to the end of `README`.

```{figure} ../images_gui/commit4.JPG
---
width: 60%
name: commit4
---
The small change to `README.md` revealed.
```

{numref}`commit6` illustrates the commit message.

```{figure} ../images_gui/commit6.JPG
---
width: 40%
name: commit6
---
Writing a non-default commit message.
```

## Push commits to origin

Now that we have recorded our commits with git, there is one last thing to do: update the _remote repository._ We can do this by **pushing** the commit, using the blue "Push origin" button shown in {numref}`commit7`.

```{figure} ../images_gui/commit7.JPG
---
width: 80%
name: commit7
---
Pushing the commits to origin, our remote repository.
```

```{admonition} What is "origin?"
Origin is the name git uses to identify the original _remote repository_ where our _local repository_ was cloned from. In our case: the repository on GitLab!
```

## A closer look at our commits

Now that we have pushed to origin, it is easy to confirm that things worked. First, we can see that the GitHub GUI once again shows the "No local changes" message, as in {numref}`clone7`.

```{figure} ../images_gui/clone7.JPG
---
width: 80%
name: clone7
---
View of GitHub GUI with no local changes.
```

In addition, we can check the remote repository directly. Visiting the [home page of the repository](https://gitlab.tudelft.nl/rlanzafame/sandbox-public/) is the best way to check the current status. {numref}`commit8` illustrates how this paged looked just after we pushed our commit to origin. As you can see the screenshot was made very soon afterwards (the "just now" message), the commit message is visible, and we can see the actual change in in the text of `README.md`.

```{figure} ../images_gui/commit8.JPG
---
width: 80%
name: commit8
---
View of remote repository (origin) on GitLab just after pushing, illustrating changes.
```


By clicking on "commits" you can see [all commits that have been made to the _remote_ repository](https://gitlab.tudelft.nl/rlanzafame/sandbox-public/-/commits/main). Clicking on each commit will give an easy-to-read summary of the changes in each commit. For example, the first and second commits made on this page can be viewed [here](https://gitlab.tudelft.nl/rlanzafame/sandbox-public/-/commit/10a26cf3f0e6bbbfe2d683c7759bcaef7f0b0037) and [here](https://gitlab.tudelft.nl/rlanzafame/sandbox-public/-/commit/a7fb565d727a9a59d2bb0d9eeb12b31eef8840ba). Note that you can see much more detail in the first one, than in {numref}`commit2`, above.