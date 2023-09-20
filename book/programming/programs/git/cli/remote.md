# Interacting with a remote repository

As you might have noticed we have only interacted with a local
repository up to now, without any possibility of collaboration with
other people. In order to do so, we require a remote repository that is
hosted somewhere. For example, on GitLab/GitHub/BitBucket instance.
Lucky enough, TU Delft has its own instance of GitLab, where we can make
repositories.

**Note: You can only make a repository if you are inside our group --
MUDE. Without being inside it, you are not able to create repositories
on your own!**

## Creating a remote repository


Let us first begin by making a new remote repository on GitLab. We are
given the opportunity to either create a new blank repository or create
a repository from an existing project template or import an existing
repository from another project (figure
[62](#remote1){reference-type="ref" reference="remote1"}).

![Creating a new project](images/remote1.png)

We will start off by making a blank repository. Enter the necessary
details such as project name and unselect the checkbox "Initialize
repository with a README", since it is better to create the README file
ourselves (figure [63](#remote2){reference-type="ref"
reference="remote2"}).

![Creating a new project - filling
details](images/remote2.png)

Upon creating the repository, GitLab gives us a set of instructions to
follow depending on what we would like to do (figure
[64](#remote3){reference-type="ref" reference="remote3"}).

![Our new repository](images/remote3.png)

That was it! We have successfully created our own remote repository!

## Setting up SSH agent


![SSH prompt on GitLab](images/ssh1.png)

**Note: you only need to setup SSH key once. You do not need to set it
up for every repository!**

Note: if you are unable to setup SSH key, do not worry. You can continue
pushing to a remote repository, but you will be required to enter your
NetID and password for every interaction.

After creating the repository, you may have noticed that this message
box appears on top of the webpage (figure
[65](#ssh1){reference-type="ref" reference="ssh1"}). The reason for this
is that we need to follow a few more steps before we can interact with
our remote repository. Press the button "Add SSH key" and open again
your git bash terminal.

In short SSH keys are an easy way to authenticate yourself when
interacting with a remote repository. They will remove the need to use
your NetID and password for every commit. SSH keys consist of 2 parts --
public and private part. The private key can be viewed as your password.
The public key is the one you can share with others without worrying
about anything. Make sure you upload your public key later.

Let us begin by generating an SSH key. The official GitLab documentation
already contains a nice tutorial for setting up your SSH key, which can
be found here: <https://docs.gitlab.com/ee/user/ssh.html> (figure
[66](#ssh2){reference-type="ref" reference="ssh2"}).

![Setting up SSH instructions](images/ssh2.png)

We will follow the steps and do the same (figure
[67](#ssh3){reference-type="ref" reference="ssh3"}).

![Generating SSH key](images/ssh3.png)

Locate the folder `/c/Users/<your username>/.ssh/` and copy the contents
of the file `id_ed25519.pub` and paste them in the textbox named Key
(figure [68](#ssh4){reference-type="ref" reference="ssh4"}). Setting
title and expiration date is optional. Beware that the folder above is
for windows only. In case you use GNU/Linux or Mac, the folder, where
the keys are stored, will be different. On Mac it would be
`/Users/<username>/.ssh` and on Linux, it should be
`/home/<username>/.ssh`, where `<username>` is the username of your OS
profile:

![SSH key textbox on GitLab](images/ssh4.png)

You can test if your connection is successful by running
`ssh -vT git@gitlab.tudelft.nl`.

You will likely get a huge output, but at its end you should see a
message like this (figure [69](#ssh5){reference-type="ref"
reference="ssh5"}), where you are greeted by GitLab. The message should
also contain your NetID.

![GitLab greeting](images/ssh5.png)

If you do not get greeted by GitLab, you will most likely receive
"Connection timeout". This would mean that you have not set up your SSH
key correctly. Ensure that you upload the public part of your key on
GitLab.

## Pushing to a repository


Now that we have set up our SSH key, we are finally ready to push the
repository we have been working on for the past couple of hours. We will
follow the instructions provided by GitLab to push our existing
repository. The first command will associate the current repository with
the remote one and the second command will upload all our changes to the
remote repository (figure [70](#push1){reference-type="ref"
reference="push1"}).

```
git remote add origin git@gitlab.tudelft.nl:mude/gitlab-workshop.git

git push -u origin --all
```

Make sure you copy paste the commands above from your own remote
repository on GitLab (figure [70](#push1){reference-type="ref"
reference="push1"})!

![Pushing local repository to GitLab](images/push1.png)

Open the GitLab page of your repository and refresh the page. You should
now see it there (figure [71](#push2){reference-type="ref"
reference="push2"}).

![Uploaded repository on GitLab](images/push2.png)

Now we have pushed (uploaded) all our commits to the online repository.

![Pushing to a repository](images/push3.png)

Figure [72](#push3){reference-type="ref" reference="push3"} shows an
extra step, which we have not discussed before, namely `git push`. This
command allows us to push local changes to a remote repository. To show
this, let us edit our \"new-file.txt\" file and add a single line, stage
the changes, commit them and finally push them (figure
[73](#push4){reference-type="ref" reference="push4"}).

![Pushing the new changes](images/push4.png)

On the GitLab webpage, we can verify the change has been pushed (figure
[74](#push5){reference-type="ref" reference="push5"}).

![Verify pushed commit](images/push5.png)

## Force pushing changes (Dangerous)


Remember we saw that it is possible to reset commits. If your commit
history does not match that of the remote repository, you will be unable
to push changes. Sometimes it is necessary to overwrite your remote
repository and delete things that used to exist. We strongly recommend
that you take extra care when doing this, because it is possible for you
to lose your progress. Moreover, force pushing can mess up other
people's work and cause a lot of trouble. Therefore, a better
alternative as we discussed previously is reverting commits.

The command for force pushing commits on a specific branch is (replace
`<branch_name>` with the name of your branch):

```
git push origin <branch_name> --force 
```

## Fetching/Pulling from a repository


When working with other people, it may happen that someone else has
pushed something to the remote repository without your knowledge. In
that case, you will need to pull their changes. For the sake of this
exercise, to show how pulling/fetching works, we will first hard reset
our branch 1 commit back to simulate this (figure
[75](#push6){reference-type="ref" reference="push6"}).

![Resetting local commit](images/push6.png)

Notice that we were at main branch and that passed a parameter `HEAD~1`
when resetting the branch 1 commit back. This argument tells git to
reset to 1 commit behind HEAD. If we wanted to reset 2 commits behind
HEAD, we could have used `HEAD~2`.

Furthermore, notice that remote branches are denoted with red text and
are preceded by origin text, while local branches are colored green.

There is a major distinction between fetching and pulling changes.
Fetching will download all the changes locally but will not merge them
yet. Therefore, fetching is useful to check the progress from the remote
repository. Pulling on the other hand, will fetch and attempt to merge
the changes to the local repository. If there is a conflict, git will
alert the user and let them deal with the conflict.

Moreover, before committing and pushing changes, it is highly
recommended to first check if anyone has committed on the remote
repository before doing so. Otherwise, you will be unable to push to the
remote, because it has a different commit history compared to the local.

Use `git fetch` to fetch changes and `git pull` to pull changes from
remote repository (figure [76](#push7){reference-type="ref"
reference="push7"}).

![Fetching from remote](images/push7.png)

## Cloning existing repository


Suppose that we had no local repository and we wanted to work on the
remote repository (which we created ourselves). In order to do this, we
need to clone the remote repository before we can start working on it.

Open the GitLab webpage of your repository and press \"Clone\" and copy
the \"Clone with SSH\" textbox. You can also clone using HTTPS, but that
may require you to write your NetID and password every time you push or
pull changes from the remote repository (figure
[77](#clone1){reference-type="ref" reference="clone1"}).

![Copy repository url](images/clone1.png)

Next make a new folder, where you wish to place the repository (figure
[78](#clone2){reference-type="ref" reference="clone2"}).

Note that it is not mandatory to create a new folder. You can clone a
repository in an existing folder as well.

![Creating a new folder](images/clone2.png)

Next, run the `git clone` command and provide it with the SSH link you
copied (figure [79](#clone3){reference-type="ref" reference="clone3"}).

![Cloning a repository](images/clone3.png)

![Inspecting cloned repository graph](images/clone4.png)

We can observe that we have successfully cloned the repository (figure
[80](#clone4){reference-type="ref" reference="clone4"}).

Notice that we have no local branch for `change-date-format`. To make
one, we need to run the following command (figure
[81](#clone5){reference-type="ref" reference="clone5"}):

```
git checkout -b change-date-format origin/change-date-format
```

![Checkout a remote branch](images/clone5.png)

As the output by git suggests, now the local and remote branches are
tied together. Therefore, if we make commits on our local version of the
branch and push them to the remote repository, git will know to which
branch to append those changes.
