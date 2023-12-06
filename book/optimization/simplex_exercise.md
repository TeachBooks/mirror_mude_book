# Exercise 1

Consider the following problem:

$$\max \left( Z \right) = 2{x_1} + 2{x_2}$$

such that

$$\begin{cases}2{x_1} + {x_2} \le 4 \\{x_1} + 2{x_2} \le 4 \\{x_1} + {x_2} \le 5 \\{x_1},{x_2} \ge 0 \end{cases}$$ 

Transform the problem into the augmented form

```{admonition} Solution
:class: tip, dropdown

$$Z - 2{x_1} - 2{x_2} - 0{s_1} - 0{s_2} - 0{s_3} = 0$$

such that

$$\begin{cases}2{x_1} + {x_2} + s_1 = 4\\{x_1} + 2{x_2} + s_2 = 4 \\{x_1} + {x_2} + s_3 = 5 \\{x_1},{x_2},s_1,s_2,s_3 \ge 0 \end{cases}$$ 

```

<iframe src="https://tudelft.h5p.com/content/1292131432784432037/embed" aria-label="Simplex exercise" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://tudelft.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>

Why is your final table the optimal solution?

```{admonition} Solution
:class: tip, dropdown

This is the optimal solution because all the coefficients are positive in the row of the objective function and this is a maximization problem.

```

Find the graphical solution of this problem. Does it give the same solution as using the Simplex method?

````{admonition} Solution
:class: tip, dropdown

```{figure} ./figs/Graphical_solution.png
height: 300px
```

````