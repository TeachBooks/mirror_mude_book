# Fetch and Pull from the Remote Repository

At this point we have seen how to clone a remote repository to make a local repository, make commits to either of them directly, and push from local to remote. There is one more critical skill for being able to use git in MUDE: getting changes on remote back to our local repository. We accomplish this in two stages: **fetching** and **pulling**.

Both of these terms refer to an action we take to get information about updates (e.g., new commits) that have been made to the remote repository (origin). We execute the commands from the local repository.

## Definitions

**Fetch** is when we ask git to connect to the remote repository and see what changes have been made. **Pull** is when we actually implement those changes locally and change the contents of the file on our computer.

**Why two steps?**

Sometimes we are making changes to the files on our computer and we just want to see if something new has happened. **Fetch** allows us to check this without making conflicting changes to our local machine.

```{note}
In MUDE the projects we will work on are relatively simple, and you are in close contact with your other group members, so in practice this can be overly cautious. However, it is good practice to make it a habit of fetching first, then pulling once you are sure there are no conflicts.
```

## Fetch-pull from remote

The GitHub GUI makes this process very easy. Start by clicking the "Fetch origin" button, circled in red in {numref}`fetch_pull1`.

```{figure} ../images_gui/fetch_pull1.JPG
---
width: 80%
name: fetch_pull1
---
No local changes, with indication of how to fetch from remote.
```

Since a commit has been made to the remote repository, we can see now that the GUI tells us ({numref}`fetch_pull2`). It also is quite obvious how we can integrate this into our local repository with the "Pull origin" button.

```{figure} ../images_gui/fetch_pull2.JPG
---
width: 80%
name: fetch_pull2
---
Still no local changes, but we can see that there is a new commit on remote available to pull to the local repository.
```

## Confirm local changes

Once the commit has been pulled to the local repository, we can open up the file in our text editor to confirm.
{numref}`fetch_pull3`

```{figure} ../images_gui/fetch_pull3.JPG
---
width: 80%
name: fetch_pull3
---
Local file `README.md` has the changes made with the Web IDE commit on the remote repository.
```

It's the commit we made on the remote repository!