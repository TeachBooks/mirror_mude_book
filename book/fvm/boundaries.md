# Boundary Conditions


### Boundary Conditions

Although not relevant for the example problem described here, consider the case where 

Also illustrated in {ref}`adv2` are the boundary conditions, in this case the constant velocity term $\phi_{in}=\phi_{out}=c$.

```{figure} ./figs/adv2bc.png
---
width: 60%
name: adv2bc
---
Schematic of 6 finite volumes aligned with $\hat{i}$ ($x$-direction) with left and right boundary conditions.
```


**MMMMM**: 

The boundary values $\phi_{in}$ and $\phi_{out}$ enter and exit at the left and right side of the system of volumes (i.e., $\phi_1$ and $\phi_6$), whereas boundary values at the interfaces between volumes are labelled $\phi_{i,i+1}$; for example, $\phi_{12}$ for the velocity at the boundary between volume 1 and 2. In other words, $\phi_{12}$ is the West face of volume 2 and the East face of volume 1.

MMMMM

For volume 1 we don't have a finite volume to the left, and instead of an averaged value we can use the boundary condition directly. However, we still need to average average volumes 1 and 2 to evaluate the East face.

Find the discretized equation for volume 1 velocity, $\phi_1^{n+1}$.

The East face velocity is
$$
\phi_{E} = \phi_{12} = \frac{\phi_{1} + \phi_2}{2}
$$

Revisiting the surface integral and applying to volume 1
$$
\begin{align}
\int_{\Gamma} c \, \phi \cdot \hat{\mathbf{n}} \, d\Gamma
&= c\left(\phi_{E}-\phi_{W}\right)\Delta y \\
&= c\left(\phi_{12}-\phi_{in}\right)\Delta y\frac{}{} \\
&= c\left(\frac{\phi_{1} + \phi_2}{2}-\phi_{in}\right)\Delta y
\end{align}
$$

Combining with the time derivative term, we arrive at:

$$
\frac{\phi_{1}^{n+1}-\phi_{1}^{n}}{\Delta t} \Delta x \Delta y
+ c\left(\frac{\phi_{1} + \phi_2}{2}-\phi_{in}\right)\Delta y
= 0
$$

Rearranging, such that the boundary condition $\phi_{in}$ is kept apart from the finite volume terms, $\phi_i^n$ (we will see why soon):
$$
\phi_{1}^{n+1} = \phi_{1}^{n}
- \frac{c \Delta t}{2\Delta x}\left(\phi_{1}^n + \phi_{2}^n\right)
+ \frac{c \Delta t}{\Delta x}\phi_{in}^n
$$



And for the boundary volume (e.g., volume 1), a boundary condition would be added, for example for volume 1:

$$
...
+ \frac{c \Delta t}{\Delta x}
\begin{bmatrix} 1 & 0 \end{bmatrix}
\begin{bmatrix} \phi_{in} \\ \phi_{out} \end{bmatrix}^{n}
$$




$$
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6}
\end{bmatrix}^{n+1}
=
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6}
\end{bmatrix}^{n}
+ \frac{c\Delta t}{\Delta x} 
\begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0 & 0 & 0 &  0 \\
-\frac{1}{2} & 0 & \frac{1}{2} & 0 & 0 & 0 \\
0 & -\frac{1}{2} & 0 & \frac{1}{2} & 0 & 0 \\
0 & 0 & -\frac{1}{2} & 0 & \frac{1}{2} & 0 \\
0 & 0 & 0 & -\frac{1}{2} & 0 & \frac{1}{2} \\
0 & 0 & 0 & 0 & \frac{1}{2} & \frac{1}{2} \\
\end{bmatrix}
+ \frac{c\Delta t}{\Delta x} 
\begin{bmatrix}
-1 & 0 \\
0 & 0 \\
0 & 0 \\
0 & 0 \\
0 & 0 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
\phi_{L}\\\phi_{R}
\end{bmatrix}
$$
