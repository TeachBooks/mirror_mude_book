# Exercises

Consider the same advection case introduced on the previous page in 2D, where the domain has been discretized into 12 finite volumes, as illustrated below.

```{figure} ./figs/adv2d.png
---
width: 60%
name: adv2d
---
Finite volume discretization for 2D advection exercise.
```

Assume that the $x$ and $y$ components of the velocity field are both equal to $c$. Formulate the FVM for the 2D case by finding the following:
1. Equation for $\phi_i^{n+1}$ for finite volume $i$, discretized with central difference (space) and forward Euler (time) schemes (note that rather than apply central difference directly, you should apply an averaging scheme for determining values at the face(s), which will automatically result in the central difference over neighboring volumes, for this geometry).
2. Define the system of equations for all 12 volumes by writing out the matrix and vector terms.

```{admonition} Solution
:class: tip, dropdown

The solutions are presented below. Here are some tips if you are having trouble getting to the same result:
- The advection term should have two parts after applying Gauss's theorem, one for each dimension
- For each direction, there are two faces after applying the surface normal vector, $\hat{\mathbf{n}}$
- Be careful with the $-$ signs in front of each surface integral ($x$- and $y$-direction), as well as the $\pm1$ indexing for the neighbor volumes when averaging over each face (i.e., N/S and E/W)
- To fill in the matricies, try drawing out the volumes and labelling the neighbor volumes to find the non-zero coefficients in the matrix. You'll see that the "jumps" and zeros are a result of the ordering of the volumes in 2D space (i.e., 3 rows) and how that maps into the sequential index of the vector.

For part 1, the solution looks very similar to the 1D case, except an index has been added to denote the $y$-position of the 2D finite volume:

$$
\phi_{i,j}^{n+1} = \phi_{i,j}^{n}
- \frac{c \Delta t}{2\Delta x}\left(\phi_{i+1,j}^n-\phi_{i-1,j}^n\right)
- \frac{c \Delta t}{2\Delta y}\left(\phi_{i,j+1}^n-\phi_{i,j-1}^n\right)
$$

The matrix formulation is also similar, but the banded structure has changed due to the way the 12 volumes are organized, especially for the $y$-direction. Here the 0's and $\frac{1}{2} have been removed from the matrix to more clearly show its structure:

$$
\begin{align}
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6} \\
\phi_{7} \\ \phi_{8} \\ \phi_{9} \\ \phi_{10} \\ \phi_{11} \\ \phi_{12}
\end{bmatrix}^{n+1}
&= 
\quad \begin{bmatrix} \:I\: \end{bmatrix}
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6} \\
\phi_{7} \\ \phi_{8} \\ \phi_{9} \\ \phi_{10} \\ \phi_{11} \\ \phi_{12}
\end{bmatrix}^{n}
\dots \\
&\qquad- \frac{c\Delta t}{2 \Delta x} 
\begin{bmatrix}
 & 1 &  &  &  &  &  &  &  &  &  & \\
-1 &  & 1 &  &  &  &  &  &  &  &  &  \\
 & -1 &  & 1 &  &  &  &  &  &  &  &  \\
 &  & -1 &  & 0 &  &  &  &  &  &  &  \\
 &  &  & 0 &  & 1 &  &  &  &  &  &  \\
 &  &  &  & -1 &  & 1 &  &  &  &  &  \\
 &  &  &  &  & -1 &  & 1 &  &  &  &  \\
 &  &  &  &  &  & -1 &  & 0 &  &  &  \\
 &  &  &  &  &  &  & 0 &  & 1 &  &  \\
 &  &  &  &  &  &  &  & -1 &  & 1 &  \\
 &  &  &  &  &  &  &  &  & -1 &  & 1 \\
\quad & \quad & \quad & \quad & \quad & 
\quad & \quad & \quad & \quad & \quad & -1 & \quad
  \\
\end{bmatrix}
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6} \\
\phi_{7} \\ \phi_{8} \\ \phi_{9} \\ \phi_{10} \\ \phi_{11} \\ \phi_{12}
\end{bmatrix}^{n}
\dots \\
&\qquad- \frac{c\Delta t}{2 \Delta y} 
\begin{bmatrix}
 &  &  &  & 1 &  &  &  &  &  &  &  \\
 &  &  &  &  & 1 &  &  &  &  &  &  \\
 &  &  &  &  &  & 1 &  &  &  &  &  \\
 &  &  &  &  &  &  & 1 &  &  &  &  \\
-1 &  &  &  &  &  &  &  & 1 &  &  &  \\
 & -1 &  &  &  &  &  &  &  & 1 &  &  \\
 &  & -1 &  &  &  &  &  &  &  & 1 &  \\
 &  &  & -1 &  &  &  &  &  &  &  & 1 \\
 &  &  &  & -1 &  &  &  &  &  &  &  \\
 &  &  &  &  & -1 &  &  &  &  &  &  \\
 &  &  &  &  &  & -1 &  &  &  &  &  \\
\quad & \quad & \quad & \quad & \quad & \quad & 
 \quad & -1 & \quad & \quad & \quad & \quad \\
\end{bmatrix}
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6} \\
\phi_{7} \\ \phi_{8} \\ \phi_{9} \\ \phi_{10} \\ \phi_{11} \\ \phi_{12}
\end{bmatrix}^{n}
\end{align}
$$

```







