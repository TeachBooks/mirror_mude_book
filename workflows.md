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