# The Rest of the 2022-23 Workshop

<!-- This git tutorial was originally modified from Kiril and Riccardo's version from 2022-23. It was converted from LaTeX to md with Pandoc. Original PDF is included for reference. -->

## Installing Git


The steps to install Git and Git bash are shown here
<https://kirilvasilev16.github.io/mude-website/>.

## Setting up Git


Git commands have the structure of `git <verb>  <options>`, where
`<verb>` denotes what action we want to take and `<options>` are the
arguments, which we pass to the command.

Before we start, we first need to locally set up the git environment, so
that when we make changes, we can be identified as the author of those
commits. Open git-bash on your computer and type the following lines in
the command line interface and use your name and email address between
the quotation marks.

Since you will be uploading your progress on a university instance of
Gitlab, it is recommended to use your student email when committing.

```
git config --global user.name "Kiril Vasilev"
git config --global user.email "k.v.vasilev-1@student.tudelft.nl"
```

Console example in figure [4](#setup1){reference-type="ref"
reference="setup1"}:

![Setting up name and email to use for git](images/setup1.png)

Note that in the commands above you **do not need** to type the `$`
sign.

## Creating a repository (from scratch)


Open git bash and go to the desired directory, where you wish to set up
your repository. You can use the commands `cd` to move through
directories and `ls` to list files in the current directory. Have a look
at figure [5](#setup2){reference-type="ref" reference="setup2"}, where
we move to the location where we want to set up our new repository.
Namely, we wish to set up our repository in a new folder called
my-new-repository, which is inside the folders TUDELFT/Year 2/ Quarter
1.

Note that it is not necessary to create a new folder before creating a
new repository. You can make a repository in an existing folder as well.

![Creating a folder for a new repository](images/setup2.png)

Note that the command output above is based on Windows Git-Bash. The
commands will have the same effect on Linux and MacOS, but the
visualisation of changing directories may slightly differ.

Now that we have moved to the location we want, we can initialize the
repository using the command `git init`.

Note that it is **not** necessary to call the command above for every
subdirectory of your project. We only use it once per repository, so you
should only call it on the root folder of your project.

Finally, we will also use the command below to move to the `main` line
of development, where we will be making changes next. By default, git
has started using main as initial branch, however, depending on your git
version/distribution it is possible to have master as default branch.
(figure [6](#setup3){reference-type="ref" reference="setup3"}).

```
git checkout -b main
```

Note: the command above can be regarded as executing both git branch
main and git checkout main at the same time. Later in this tutorial, we
will cover what branching means and why it is useful for the development
process.

![Creating a new branch main](images/setup3.png)

You can now begin making new files and working on things inside your
repository locally.

## Your first commit


It is good practice to set up a markdown file README.md for your
projects, where you explain what your repository contains, how to use
it, who created it, how to contribute to it, repository license, etc.
This can be accomplished by running the following command and editing
the file, which was created via notepad or any other text editor that
your operating system has. For instance, nano or vim, which should come
installed with Git Bash. (figure
[7](#first-commit1){reference-type="ref" reference="first-commit1"}).

![Creating a README.md file](images/first-commit1.png)

Let us put the following text inside it:

``` {columns="fullflexible" frame="single"}
# About the project
This is a test project, where we learn how to use the git version control system.

# Usage
The project has no particular usage or any programming files to run.

# Contributors
Kiril Vasilev -  k.v.vasilev-1@student.tudelft.nl
```

You can replace the contributors name and email with yours. Save the
file and run the command `ls` to verify that you have successfully made
a new file as seen in figure [8](#first-commit2){reference-type="ref"
reference="first-commit2"}.

![Checking if file was created in our current
folder](images/first-commit2.png)

Use the command `cat "README.md"` to show the contents of the file and
verify they are correct (figure [9](#first-commit3){reference-type="ref"
reference="first-commit3"}).

![Check contents of file using cat
command](images/first-commit3.png)

Use the command `git status` to check tracked and untracked files in
current repository (figure [10](#first-commit4){reference-type="ref"
reference="first-commit4"}).

![Running `git status`](images/first-commit4.png)

Since we want to commit our new file, we first need to stage it. That is
track it, so that git knows about it and will add it to the repository
in the next commit. Let us call the following command:
`git add "README.md"`. This will track the file. Alternatively, we can
also use `git add *` , which will add all files in the current directory
and all subdirectories to the staging area of the repository.

Figure [11](#first-commit5){reference-type="ref"
reference="first-commit5"} shows the steps we explained, namely we first
make changes to the files. Next, we stage those changes via `git add`
and finally we commit (save) those changes to the repository with
`git commit` command.

![Steps to commit a change in a
file](images/first-commit5.png)

We can call `git status` again to check if the file is now being tracked
(figure [12](#first-commit6){reference-type="ref"
reference="first-commit6"}).

<figure id="first-commit6">
<img src="images/first-commit6.png" />
<p>. <span id="first-commit6" label="first-commit6"></span></p>
<figcaption>Checking tracked file</figcaption>
</figure>

Finally, we can make our first commit!

Run the command `git commit -m "My first commit"`. Note that you can
have a different commit message simply by changing the text between the
quotations (figure [13](#first-commit7){reference-type="ref"
reference="first-commit7"}).

It is important to have clear commit messages that show what each change
does. A common convention is to have the commit messages in imperative
form following this structure: one line giving a summary of the commit,
one empty line, followed by a paragraph explaining more in depth the
commit. Note that a one-line summary is also sufficient for a commit
message. Therefore, a more appropriate message would be \"Add README.md
file\".

<figure id="first-commit7">
<img src="images/first-commit7.png" />
<p>. <span id="first-commit7" label="first-commit7"></span></p>
<figcaption>Committing changes</figcaption>
</figure>

Tip: When writing a commit message, it is often useful to imagine
completing the following sentence: "This commit will ...\". For example,
using the commit message above, we will end up with the sentence: "This
commit will add README.md file".

Congratulations! You have now completed your first commit of changes via
git. Calling `git status` will show us that there are no new changes,
and everything is up to date (figure
[14](#first-commit8){reference-type="ref" reference="first-commit8"}).

<figure id="first-commit8">
<img src="images/first-commit8.png" />
<p>. <span id="first-commit8" label="first-commit8"></span></p>
<figcaption>Check for new changes</figcaption>
</figure>

## Comparing commits -- git log and git diff


As we have previously mentioned, one of the key advantages to Git is
that it allows you to track changes and see what has been changed, when
and by whom via commits.

Run the command `git log` to get that summary (figure
[15](#compare1){reference-type="ref" reference="compare1"}).

![Checking commit history](images/compare1.png)

We will now modify our README.md file by adding a line at the end of the
file, specifying the date it was last modified and changing the "About
the project" section:

``` {columns="fullflexible" frame="single"}
# About the project
This is a test project, where we learn how to use the git version control system.

# Usage
The project has no particular usage or any programming files to run.

# Contributors
Kiril Vasilev - k.v.vasilev-1@student.tudelft.nl

Last modification: 30.04.2022
```

We stage the file and commit the changes (figure
[16](#compare2){reference-type="ref" reference="compare2"}).

![Stage and commit new modificaiton](images/compare2.png)

Running `git log` now shows us the two commits we have made (figure
[17](#compare3){reference-type="ref" reference="compare3"}).

![Two commits we made](images/compare3.png)

It is important to note that every commit is associated with a unique
identifier. For example, our first commit has the identifier
`7c0f3694749bc736960619b27ccfb43b64da1191` and our second commit has the
identifier `448332d55ae438b3faa50b119290f536e161fd88`.

We can call the command `git diff 448332d 7c0f369` to show the
differences between the two commits in terms of changes of files. Note
that, the first 7 characters of the commit id are enough to identify it
in commands (figure [18](#compare4){reference-type="ref"
reference="compare4"}):

![Difference between two commits](images/compare4.png)

The new additions are shown by a leading + and deletions by leading ---
to their respective row.

Note that swapping the commit identifiers also swaps the way changes are
displayed (figure [19](#compare5){reference-type="ref"
reference="compare5"}).

![Difference between two commits swapped
arguments](images/compare5.png)


# Tracking changes

## Git log


We have previously mentioned the command `git log`, which gives a list
of all commits (figure [40](#track1){reference-type="ref"
reference="track1"}).

![Results from `git log`](images/track1.png)

## Git checkout -- recover old versions of a file (Optional) 


Suppose that we are unhappy with our changes on README.md and wish to
return to a previous version, namely the one in commit 448332d. We could
use the following format to achieve this:

    git checkout 448332d README.md

![Recovery of old version](images/track2.png)

Notice in figure [41](#track2){reference-type="ref" reference="track2"}
that because we included file name in the checkout command we have
returned to a previous version of the file, however, we have not moved
in the commit timeline, and we remain on our previous position in the
graph.

Notice that the file has new changes which are already included in the
repository as a staged commit (to see the changes use
`git diff --cached`). These changes thus appear as 'new' changes but are
in fact based on the older version of the same file. If we want to keep
this version, we can simply make a commit.

## Git checkout -- cancelling staged and unstaged changes (Optional) 


Suppose that we no longer deem them necessary and wish to cancel all of
them for README.md file. We can run the following command to delete our
changes and restore the file contents to its most recent commit -- the
commit HEAD points to:

```
git checkout HEAD README.md
```

![Cancelling staged and unstaged changes](images/track3.png)

As previously mentioned, we do not move in the commit timeline since we
have neither staged our changes nor moved in branches (figure
[42](#track3){reference-type="ref" reference="track3"}).

## Git blame (Optional) 


Another way to track who modified a specific file is via the command
`git blame <file>`, where in `<file>` you put the file name and
extension that you want to check. This way, you will get line-by-line
information of who modified the line last, when and in which commit
(figure [43](#track4){reference-type="ref" reference="track4"}).

![Running `git blame`](images/track4.png)

# Reverting changes

While working you may also end up in a situation where you make some
changes and commit them, but you are no longer satisfied with them and
wish to revert them. Here we will present a different command than the
one used in .

This can be done via the following command, where `<commit_id>` should
be the id of the commit's changes, you wish to revert:

    git revert <commit_id>

Pay attention to the fact that reverting commits that constitute a merge
is more difficult than reverting normal commits, because it is necessary
to add more arguments to the command above: you need to specify when
reverting to the changes, to which parent commit you wish to revert.
This situation is shown in the image [44](#revert1){reference-type="ref"
reference="revert1"}.

![Reverting changes](images/revert1.png)

When executing the `git log` command with argument -1, we can get the
most recent commit. Since that commit is a merge commit, it has 2 parent
commits: `c2f912f` and `d8ec3b3`. Therefore, we can choose to which
parent commit to revert to by passing an argument -`m 1` to the
`git revert` command (we decided to revert to the first commit
`c2f912f`).

When typing the command above a text editor window will open to modify
the commit message. If you wish to make no changes to the message, just
write `:x` to close it (figure [45](#revert2){reference-type="ref"
reference="revert2"}).

![Revert commit message](images/revert2.png)

Since git is a version control system, when reverting changes, we are
making a new commit for that. Run the command for graph visualization to
verify this.

# Resetting changes/branches

Reverting changes does not alter the timeline of previous commits on a
particular branch --- it simply creates a new commit. Resetting, on the
other hand, does alter the timeline. Resetting commits requires extra
care as you have the power to reset the entire repository and the power
to alter the commit history without leaving a clear record of what the
changes were.

`git reset` command comes with 3 types of arguments that you can pass to
it:

`--soft` -- equivalent to uncommiting the changes. This way the changes
to the file(s) will not be deleted and will remain staged. Hence,
running `git commit` afterwards can let us commit all the changes
immediately (and thereby undoing the soft reset if we made no additional
changes).

`--mixed` -- equivalent to uncommiting and unstaging the changes.
Therefore, contrary to `--soft`, we need to first stage changes and then
commit them (if we wish).

`--hard` -- equivalent to uncommiting, unstaging and deleting all
changes. This is the most dangerous of the 3 options as it can
completely alter the commit history and leaves no record of previous
changes to the file(s).

In order to show its power, we will reset the revert we did in the
previous section and leave no trace of it happening. Note that we also
pass as an argument the commit we are resetting to (figure
[46](#revert3){reference-type="ref" reference="revert3"}).

![Resetting changes](images/revert3.png)

# Stashing changes (Optional) 

Suppose you are working on something which is not ready yet and a friend
of yours asks to check his branch and what he has done there. However,
if you switch branches, you will either carry over your changes or cause
a conflict and git will not allow the checkout. In this situation, it is
best to stash your changes, that is save them without staging or
committing them, and return to them later.

This is possible using the command `git stash save <name>`, where
`<name>` depicts the name, you give to your stashed changes. Let us make
some changes to our README.md file and stash them. Note that when you
stash your changes, you remove them and store them for later use (figure
[47](#stash1){reference-type="ref" reference="stash1"}).

![Stashing changes](images/stash1.png)

We can use the command `git stash list` to get a list of all stashes.
Notice that every stash is associated with an id next to it, which is
modified every time we save or pop a stash.

We will make a few more changes to the file and stash them again. The
list of stashes will grow as a result as seen in figure
[48](#stash2){reference-type="ref" reference="stash2"}.

![Stashing changes second time](images/stash2.png)

We can now safely move to other branches and when ready return to the
current one and unstash the changes. This is possible via this command:
`git stash pop <index>`, where `<index>` is the index of the stash we
want to unstash. We have decided to unstash changes on index 1. Popping
the stash will effectively remove it from the list of stashes (figure
[49](#stash3){reference-type="ref" reference="stash3"}).

![Unstashing changes](images/stash3.png)

We may also choose to delete a stash without using it. Using the
following command to achieve this: `git stash drop <index>` (figure
[50](#stash4){reference-type="ref" reference="stash4"}).

![Deleting stashed changes by index](images/stash4.png)

# GitIgnore

Sometimes it happens that you wish to have some files in your repository
that you do not want to share with others (do not want to ever commit
and stage). For example, database-related files or some cache files left
by the applications you are using to develop your projects. The best way
to ignore those files is to instruct git to ignore them for you. Hence,
if git knows that it should ignore a given file, it will no longer
suggest you to stage/commit changes to that file.

Another example of files you should not commit are the `.DS_Store`
files, which are only generated on MacOS platforms.

Suppose we want to ignore all files of type png. Suppose that we also
wish to ignore a folder and all its contents called data, which we will
create now. In order to do so, we need to create a new file called
.gitgnore. Notice that the file has no name and has extension gitignore
(normally we can use `ls` to list files (figure
[51](#ignore1){reference-type="ref" reference="ignore1"}), but since
those beginning with a '.' are generally hidden we pass the argument --a
to list all files - figure [52](#ignore2){reference-type="ref"
reference="ignore2"}).

![Listing visible files](images/ignore1.png)

![Listing visible and hidden files](images/ignore2.png)

To instruct git to ignore that file and everything inside that folder,
we must modify the contents of our gitignore file to contain the
following (where '/' indicates all files in the directory 'data' and the
'\*' symbol is a wildcard to ignore all files with extension '.png').
Note that you can open the gitignore file as a normal text file to
modify it (using a text editor app) (figure
[53](#ignore3){reference-type="ref" reference="ignore3"}).

```
data/
*.png
```

![Check contents of .gitignore](images/ignore3.png)

We would first need to commit our gitignore file to come into effect and
ignore files and directories (figure [54](#ignore4){reference-type="ref"
reference="ignore4"}).

![Comitting .gitignore](images/ignore4.png)

The changes are no longer tracked (the images and files in the data
folder cannot be staged). This can be verified by using `git status`
(figure [55](#ignore5){reference-type="ref" reference="ignore5"}).

![Verify files are ignored](images/ignore5.png)

Another advantage you get is that git will not let you stage a file,
which you have specifically set to be ignored by git (figure
[56](#ignore6){reference-type="ref" reference="ignore6"}).

![Verify ignored files cannot be staged](images/ignore6.png)

Depending on the projects you work on, there already exist pre-made
templates for gitignore files that you can make use of. Just make sure
that you pick a gitignore file that matches the language you are working
on and/or the IDE (integrated development environment) you are using.

# Interactive commits (Optional) 

So far when we wish to commit changes to a file, we were only able to
commit all of them. However, sometimes, we may wish to commit only some
of the changes. This can be done by passing an argument --p to your
`git add` command (figure [57](#interactive1){reference-type="ref"
reference="interactive1"}).

![Interactive staging of a file](images/interactive1.png)

You will get an overview of all the changes in your file and git will
ask you at every step what you wish to do. Use ? (figure
[58](#interactive2){reference-type="ref" reference="interactive2"}) to
get an explanation of what each option does. A hunk denotes a block of
changes (such as the one in the image above). Git allows you to split
the hunk into smaller hunks until a hunk becomes as small as 1 change.

![Available options for interactive
commits](images/interactive2.png)

We have decided to split the hunk into smaller hunks and stage only the
second, fourth and fifth hunks and leave out the first and third (figure
[59](#interactive3){reference-type="ref" reference="interactive3"}).

![Staging second, fourth and fifth
hunks](images/interactive3.png)

We can verify that we have successfully achieved this by calling
`git diff --staged` to compare the HEAD with the staged files -- only
second, fourth and fifth changes were staged (figure
[60](#interactive4){reference-type="ref" reference="interactive4"}).

![Show difference between staged and unstaged
files](images/interactive4.png)

Of course, since those changes contain mistakes (extra s at the end of 3
sentences), we can reset them. We use the `--mixed` argument to unstage
the changes, but not delete them (figure
[61](#interactive5){reference-type="ref" reference="interactive5"}).

![Unstaging the changes](images/interactive5.png)

You can also commit part of the staged changes (the same way as we did
with staging only selected lines) by passing the --p parameter to
`git commit` command.

# Common mistakes using Git

While working you may end up making one of the following mistakes, so
make sure you double check you are executing the correct commands and
that you know what you wish to do:

-   Merging from the wrong branch

-   Committing on the wrong branch

-   Resetting more than you wanted

-   Committing the wrong file or changes

-   Giving a wrong branch name

-   Writing a commit message with a mistake in it

-   Deleting the wrong branch

-   Et cetera.


# GitLab videos

On top of this tutorial, there are 2 videos, which show the Basics and
Advanced parts (optional) of using GitLab.

-   GitLab basics: <https://youtu.be/H23G1582d1o>

-   GitLab Advanced (optional): <https://youtu.be/B7syxptEnZ0>. Note
    that in the advanced part of the GitLab tutorial, we present how
    Merge Requests are made and handled. The steps to achieve this are
    very similar to the steps you took during the PEP8 peer-review
    assignment.

# Aliasing commands (Optional)

This section of the workshop is optional.

You may be feeling fed up with writing this long command to visualize
the commit graph. This can easily be fixed by introducing an alias for
it. Namely, you can set up an alias called graph for it. Hence, you can
replace the long command with a shorter one called git graph:

```
git config --global alias.graph "log --all --graph --decorate --oneline" 
```

Try using `git graph` afterwards to verify it worked (figure
[82](#alias1){reference-type="ref" reference="alias1"}).

![Aliasing a command](images/alias1.png)

If you wish to remove an alias, simply execute the following:

```
git config --global --unset alias.graph 
```

![Alias is removed](images/alias2.png)

# Conclusion 


At first glance, Git has a steep learning curve and requires a lot of
knowledge and time to spend learning and practicing. However, knowing
how to use Git will pay off in the future! We hope that you found this
tutorial useful. Make sure you return to it occasionally when you are in
doubt about something. Remember that you can always Google things to
learn more. What is more, this tutorial is not exhaustive, but covers
the required basics of Git, which should be sufficient for you to work
in group projects.

Finally, in case something goes wrong, remember to follow the
instructions in figure [84](#conclusion){reference-type="ref"
reference="conclusion"} ;)

![Source: <https://xkcd.com/1597/>](images/conclusion.png)

# References and used resources

While creating this tutorial, we made use of the following external
sources:

-   <http://swcarpentry.github.io/git-novice/>

-   <https://coderefinery.github.io/git-intro/>

-   <https://coderefinery.github.io/github-without-command-line/>

-   <https://coderefinery.github.io/git-collaborative/>

# Appendices

In the appendices you can find commonly used Git and Bash commands. You
may notice that we surround some of them with quotations (") . These are
only necessary when the argument you are passing on contains
whitespaces. For example, this is usually the case in commit messages.
However, if you have no spaces in your arguments, you can omit the
quotations.

## Appendix A: Commonly used Git commands 


Table with commonly used Git commands:

  **Explanation of git command**                                      **Git command**                            **Example**
  ------------------------------------------------------------------- ------------------------------------------ ---------------------------------------------------------------
  Initialise repository                                               git init                                   git init
  Add files to the staging area                                       git add                                    git add "README.md"
  Commit changes                                                      git commit                                 git commit --m "Add README.md file"
  Merge the changes from one branch to another                        git merge                                  git merge "development"
  Get a list of all commits                                           git log                                    git log
  Get an overview of who was the last one to modify lines in a file   git blame                                  git blame README.md
  Show difference between commits (and/or files)                      git diff                                   git diff 1234567 7654321
  Create a branch                                                     git branch                                 git branch feature1
  Move to another branch                                              git checkout                               git checkout feature1
  Revert a commit                                                     git revert                                 git revert 1234567
  Store changes (without committing or staging)                       git stash                                  git stash save "my-stash"
  Uncommit and unstage changes on a branch                            git reset --mixed                          git reset --mixed development
  Push changes to a remote repository                                 git push                                   git push
  Fetch and merge changes from a remote repository                    git pull                                   git pull
  Fetch changes from a remote repository                              git fetch                                  git fetch
  Clone a remote repository                                           git clone                                  git clone git@gitlab.ewi.tudelft/myrepository.git
  Associate current repository with remote one                        git remote                                 git remote add origin git@gitlab.ewi.tudelft/myrepository.git
  List staged/unstaged/untracked files                                git status                                 git status
  Set email used for commits                                          git config --global user.email \<email\>   git config --global user.email myemail@tudelft.nl
  Recover old versions of a file                                      git checkout                               git checkout 1234567 README.md

## Appendix B: Commonly used bash commands 


Table with commonly used bash commands:

  **Explanation of bash command**                                                                                                                                       **Bash command**   **Example**
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------ -----------------
  List files/folders in current directory including hidden ones                                                                                                         ls --a             ls -a
  Create an empty file                                                                                                                                                  touch              touch README.md
  Create an empty directory                                                                                                                                             mkdir              mkdir "util"
  Enter a folder inside a directory                                                                                                                                     cd                 cd util
  Leave a directory                                                                                                                                                     cd                 cd ../
  Remove a folder                                                                                                                                                       rmdir              rmdir util
  View the contents of a file                                                                                                                                           cat                cat README.md
  Clear the terminal contents                                                                                                                                           clear              clear
  Move a file or directory to a different location. Note that the first argument is location of folder/file to move and the second argument is the new location of it   mv                 mv /c/util /d/