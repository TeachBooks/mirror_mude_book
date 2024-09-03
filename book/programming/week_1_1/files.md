# Files and Folders

On this page we'll give an explanation and practice for setting up a MUDE working directory.

## Your Local File System

You will be working with a _lot_ of different files and file types in MUDE: `csv`, `pdf`, `ipynb`, `txt`, `md` just to name a few. Remember, there are 16 weeks of class in MUDE---it is good practice to get in the habit of storing files in an organized way, not to mention make it easier to study for the exams. We recommended creating a folder `MUDE` to collect all files associated with the module, then set up a new folder for each week and each project as your **working directory** for each of those activities. This is where you will download files and edit them when working on them. 


```none
├── code                           <-- a root directory for code-based projects
    ├── Project_1                  <-- project files in sub-directories
        ├── Assignment_File.ipynb  <-- stay organized with more sub-directories
        ├── auxiliary_files
            ├── data.csv
            ├── figure.png
            ├── ...
    ├── Project_2                  <-- each of these should be it's own repository
        ├── ...
    ├── Project_3
        ├── ...
    ├── Project_4
        ├── ...
```

As you can see, we have included a directory `auxiliary_files` in the directory for Week 1. This is a generic setup to help keep the weekly folders from getting too cluttered: as our MUDE projects become more complex, we may want to use a variety of sub-folders to organize our files (e.g., data, code, figures, etc).

```{tip}
If you have not yet learned about the software Git, or its command line invocation `git`, it is enough to know that it is a _version control system_ that focuses on tracking changes to files and collaborating with others. It is software that can run on many OS's and is integrated into other tools provided by 3rd party companies that add additional features, for example, a way to backup and collaborate in the cloud. Widely used examples of these companies are GitHub and GitLab.
```

The organization of your `code` and working directories can vary widely due to the types of projects and your personal preferences. Your _version control_ system may also dictate the structure. For example, in a course where you will have multiple repositories per week (e.g., CEGM1000 MUDE), you might consider organizing these `git` repositories in sub-directories, like this:

```none
├── code
    ├── Week_A
        ├── git_repo_for_project_1
            ├── Assignment_File.ipynb
            ├── auxiliary_files
                ├── data.csv
                ├── figure.png
                ├── ...
        ├── git_repo_for_project_2
            ├── ...
    ├── Week_B
        ├── git_repo_for_project_3
            ├── ...
        ├── git_repo_for_project_4
            ├── ...
    ├── Week_C
        ├── ...
    ├── Week_D
        ├── ...
```

## Saving Your Work

It is important to keep a backup of your work, and to save these files in a consistent way. Your typical cloud-based backup software is OK for many types of files, but you should note that sometimes there can be issues when running code on your compter in these special sync folders. Imagine: your Python code is running and loading or saving data into files in the same folders that the cloud backup software is using: there are bound to be conflicts!

Over the course of the semester we will gradually increase our reliance on `git` and GitLab, a widely used set of tools meant to store, track and archive files. As you become more comfortable with this tool, you will learn to `git push` more and rely on your cloud storage system less! In summary:
* for now, we recommend you store everything in a location that is backed-up regularly, but keep code and data files in a separate folder. If your backup software causes issues with notebooks or other Python code, move the working directory temporarily to another location on your computer.
* once you are comfortable with `git`, we recommend that you permanently move your code folder somewhere that is not backed up by cloud software and use your GitLab repository instead.

In case the text above was not clear: to avoid syncing problems, use a system like `git` to backup code, _not_ a cloud service like OneDrive!