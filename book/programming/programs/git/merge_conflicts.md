# Merge conflicts

Merge conflicts arise when people on separate branches modify the same
parts of one (or multiple) files. Since git does not know how to handle
that and whose changes to consider, it prompts the user to decide
instead (figure [34](#mconflict1){reference-type="ref"
reference="mconflict1"}).

![Visualisation of a merge conflict](images/mconflict1.png)

Let us create a merge conflict ourselves:

We will start by making a new branch `change-date-format`. We will
checkout to it, modify the date format and make a commit as show in
figure [35](#mconflict2){reference-type="ref" reference="mconflict2"}.

![Committing the changes](images/mconflict2.png)

Next, we will return to `main` branch. We will edit the same line of the
README.md and then checkout back to `change-date-format` branch (figure
[36](#mconflict3){reference-type="ref" reference="mconflict3"}).

In figure [37](#mconflict4){reference-type="ref" reference="mconflict4"}
there is also a graph visualization.

![Committing the changes](images/mconflict3.png)

![Graph visualisation](images/mconflict4.png)

Finally, we will merge `main` into `change-date-format` and get a merge
conflict as seen in figure [38](#mconflict5){reference-type="ref"
reference="mconflict5"}, because we modify the same parts of the file.

![Merge conflict](images/mconflict5.png)

The changes on the current branch are preceded by \<\<\<\<\<\<\< HEAD,
while the changes from `main` branch are preceded by ======= and
followed by \>\>\>\>\>\>\>main. In order to fix this conflict, we need
to open the file README.md with some texteditor app and fix the conflict
ourselves. That is, edit out the things we do not need: open a text
editor and remove the parts of the file we do not need. When done, we
just need to make a new commit. Note that the current branch is now in
stage "MERGING". We have decided to take the best out of the 2 branches
and merge their changes.

![Completing the merge](images/mconflict6.png)

Thus, we have succeeded in dealing with a merge conflict! The graph in
figure [39](#mconflict6){reference-type="ref" reference="mconflict6"}
displays how the 2 branches have now been merged.