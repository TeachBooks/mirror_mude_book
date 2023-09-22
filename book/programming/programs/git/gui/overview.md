# git and GitLab

There are two methods for using git and GitLab in MUDE:
1. Using a graphical user interface (GUI) (**this Chapter**), and
2. Using a command line interface (CLI).

**At minimum for MUDE, you should be able to use the GUI tools.** The CLI chapter is provided as an option for those who are interested in learning how git works, and using a larger subset of the git toolkit; this will help you later on in your career if you are interested in getting involved with software projects and/or collaborating with a group of engineers working on programs and code.

This Chapter assumes you have already installed the git software, as described on the module website [Software page](https://mude.citg.tudelft.nl/software/git/).

**What is git?**

[Git](https://git-scm.com/) is a version control system (VCS), used by a wide variety of engineers and software developers to work on projects in parallel together. It provides multiple benefits such as tracking changes to files, working side by side with other people, and the ability to rollback to previous versions of files without losing track of newer changes. It is a free and open sources software.

Note that while git is free and can be used on a variety of operating systems, there are many 3rd party softwares that _use_ git directly, or are heavily dependent on git. For example, GitLab and GitHub are two companies that provide cloud-based servers for hosting git repositories, as well as additional features like user groups, discussion channels, and even hosting of websites

**What is GitLab?**

GitLab is a cloud-based version control system built around git. It provides a lot more features such as Issues, Merge Requests, CI/CD pipelines, etc. TU Delft has a license to use GitLab on our own local webservers---this means that all of the files are stored digitally on the TU Delft campus, rather than some unkown webserver that could be physically located in an unsafe location. This is also why we have our "own" GitLab located at `gitlab.tudelft.nl`, rather than the "normal" GitLab at `gitlab.com`, which is what we will be using throughout MUDE, and is also something you will have access to throughout your studies.

**What is GitHub?**

GitHub is a competitor company to GitLab. It provides very similar services, but they are often called different names, or have slightly different features. Although we will not be using it directly, GitHub provides a free software that is very useful: **GitHub Desktop**! We will use this manage our git repositories on our computers, even though they are stored on Git**Lab**.


## Main concepts and terminology

Here we present a list of the terminology we will use while going over
the tutorial. Do not panic if you do not understand what each of the
following means. Later, we will provide a more elaborate explanation
with examples. Bear in mind that the list below is not exhaustive, and
more terms may show up.

1.  Repository -- Storage, where VCS store their history of changes and
    information about who made them.

2.  Remote (of repository) -- a version control repository stored
    somewhere else and the changes between the two are usually
    synchronized. We will refer to the Gitlab repository as a *remote*.

3.  Commit -- Snapshot of the current state of the project. If a commit
    contains changes to multiple files, all the changes are recorded
    together.

4.  Staging -- preparation of files to be committed. During the staging
    we propose files to be committed.

5.  Branch -- development (time) line. The main development line is
    called \"main\" (previously it was called \"master\" on git).

6.  Cloning -- copying (downloading) an existing project on your laptop.
    Usually, it is done only during the first time of getting the remote
    repository.

7.  Pushing -- uploading new commits (changes) to the remote server.

8.  Pulling -- retrieving new commits from the remote repository.

9.  Fetching -- check for new changes on the remote repository without
    pulling them yet.

10. Conflict -- when changes made by multiple users to the same file are
    incompatible, you can get into a conflict. Helping users resolve
    those conflicts is one of the key advantages of VCS.

11. Tracked (files) -- files that Git knows about -- they are either in
    the staging area or were previously added to the repository.

12. Untracked (files) -- files that Git does not know about -- they are
    likely new files that have not been staged yet.

13. Snapshot -- copy of the current version of the entire repository.