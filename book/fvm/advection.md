# Advection - Linear Propagation

A linear advection problem is a simple way to illustrate application of the finite volume method. Consider a quantity $\phi(\mathbf{x},t)$ traveling in a fluid with velocity field $\mathbf{u}(\mathbf{x},t)$. If only concerned with the advective transport of $\phi$, the following linear conservation equation:

$$
\frac{\partial \phi(\mathbf{x},t)}{\partial t}
+  \mathbf{u}(\mathbf{x},t) \cdot \nabla \phi(\mathbf{x},t)
= 0
$$

This relationship describes phenomenon that can be thought of as a "pulse" of quantity $\phi$ traveling through the fluid, for example a single wave ($\phi$ as wave amplitude), or a pollutant ($\phi$ as concentration). In the example presented here, we will consider the pulse being carried (advected) through a fluid with constant velocity $\mathbf{c}$, where the components in each direction are:

$$
\mathbf{c} = c_u \,\hat{i} + c_v \,\hat{j} + c_w \,\hat{k}
$$

As the fluid velocity is constant in time and space, we can re-write the conservation equation as follows:

$$
\frac{\partial \phi(\mathbf{x},t)}{\partial t}
+  \mathbf{c} \cdot \nabla \phi(\mathbf{x},t)
= 0
$$

From here, we will apply the finite volume method in 1D. A simple convection problem can be used to illustrate the finite volume method by applying the following steps:

1. Integrate PDE over volume of interest $\Omega$
2. Apply Gauss's Theorem on the bounding surface $\Gamma$
3. Discretize the volume and integral equations over finite volumes (in space)
4. Apply a numerical scheme to discretize equations in time, then solve

```{note}
In this example we consider the fluid velocity field to be constant in time and space, and independent from the quantity of interest, $\phi$. In the study of fluid dynamics the quantity of interest $\phi$ is the fluid velocity $\mathbf{u}$ itself. In other words, in the advection example here the quantity $\phi$ describing our "pulse" can be nearly any phenomenon _except_ the velocity of the fluid! Mathematically, this would result in a different approach in step 3 (below).
```

## Application in 1D

First only the $x$-direction will be considered, where the 1D convection equation is:

$$
\frac{\partial \phi}{\partial t}
+ c \, \frac{\partial \phi}{\partial x}
= 0
$$

where the subscript $u$ (denoting the $u$-component of $\mathbf{u}$) has been temporarily dropped. The situation represents a "pulse" traveling along the $x$-axis with speed $c$, and is illustrated in {numref}`adv1` for initial conditions such that a pulse with width $(b-a)$ has amplitude $\phi_0$ between the interval $(a,b)$ in $x$. 

```{figure} ./figs/adv1.png
---
width: 60%
name: adv1
---
Propagation of wave in 1D with constant speed $c$.
```

```{admonition} Is the figure above missing?
:class: danger

This issue affects some readers; until it is fixed you can view the image [here](https://mude.citg.tudelft.nl/book/_images/adv1.png). 
```

### Integral Form and Gauss


Integrate the linear convection equation in $x$ over an arbitrary volume $\Omega$ with surface $\Gamma$ and use Gauss’s theorem to convert the volumetric integral into a surface integral.


$$
\frac{\partial \phi}{\partial t}+c \frac{\partial \phi}{\partial x}= 0
$$
    
$$
\int_{\Omega}\frac{\partial \phi}{\partial t}d\Omega + \int_{\Omega}c\frac{\partial \phi}{\partial x} \, d \Omega = 0
$$
    
Recognizing $\frac{\partial \phi}{\partial x}$ as the 1D divergence $\nabla \cdot u$, apply Gauss's Theorem with $\hat{\mathbf{n}}$ being the normal surface vector:

$$
\int_{\Omega}\frac{\partial \phi}{\partial t}d\Omega + \int_{\Gamma}c\, \phi \cdot \hat{\mathbf{n}}\, d\Gamma = 0
$$

### Finite Volume Specification

The $x$-domain will be divided into six finite volumes, shown in {numref}`adv2`, numbered 1 through 6 from left to right, such that the volume number refers to the $x$-coordinate of the geometric center. For example, volume 3 is located with center at $x_1$. The quantity $\phi$ will only being calculated at the center of the finite volume, $\phi(x_i)$.

```{figure} ./figs/adv2.png
---
width: 60%
name: adv2
---
Schematic of 6 finite volumes aligned with $\hat{i}$ ($x$-direction).
```

```{admonition} Is the figure above missing?
:class: danger

This issue affects some readers; until it is fixed you can view the image [here](https://mude.citg.tudelft.nl/book/_images/adv2.png). 
```

### Discretization

The integral equations may now be discretized over each finite volumes with the "unknown" at the center, $\phi_i$, and with dimensions $\Delta x$ and $\Delta y$. Although at the moment only the $x$-axis is considered, $\Delta y$ is needed to compute the flux on the East and West faces of each volume.

For the first term: velocity $\phi$ is constant over the domain, the integral is applied over the finite volume $i$ and a forward Euler scheme is applied with time-step $\Delta t$:

$$
\int_{\Omega}\frac{\partial \phi}{\partial t}d\Omega
= \frac{d\phi_i}{dt}\int{d\Omega}
= \frac{d\phi_i}{dt} \Delta x\Delta y
= \frac{\phi_{i}^{n+1}-\phi_{i}^{n}}{\Delta t} \Delta x\Delta y
$$
    
For the second term: the general surface integral is separated into East and West faces, and constant velocity term is incorporated:

$$
\int_{\Gamma} c \, \phi \cdot \hat{\mathbf{n}} \, d\Gamma
= \int_{\Gamma_W}c \, \phi_{W} \cdot \hat{\mathbf{n}} \, d\Gamma + \int_{\Gamma_E}c \, \phi_{E} \cdot \hat{\mathbf{n}} \, d\Gamma
$$
    
Taking into account the direction of the velocity relative to the normal vectors of the East and West faces, as well as the finite volume discretization:
    
$$
= - \int_{\Gamma_W}c \, \phi_{W} \,d\Gamma +  \int_{\Gamma_E}c \, \phi_{E}  \,d\Gamma
= c\left(\phi_{E}-\phi_{W}\right)\Delta y
$$
    
A second-order averaging is applied by using the $(i+1)^{th}$ and $(i-1)^{th}$ finite volumes such that the averaged value represents the linear interpolation of $\phi$ located at the boundary between each volume (the East and West faces):
    
$$
\phi_{E} = \frac{\phi_{i+1} + \phi_i}{2} \qquad
\phi_{W} = \frac{\phi_{i-1} + \phi_i}{2} \quad \rightarrow \quad
\phi_{E} - \phi_{W} = \frac{\phi_{i+1} + \phi_i - \phi_{i-1} - \phi_i}{2}
$$
    
Putting both integral terms together:
    
$$
\frac{\phi_{i}^{n+1}-\phi_{i}^{n}}{\Delta t} \Delta x\Delta y
+ c\left(\frac{\phi_{i+1}^n-\phi_{i-1}^n}{2}\right)\Delta y
= 0
$$

The $\Delta y$ terms cancel:
    
$$
\frac{\phi_{i}^{n+1}-\phi_{i}^{n}}{\Delta t}
+ \frac{c}{2\Delta x}\left(\phi_{i+1}^n-\phi_{i-1}^n\right)
= 0
$$


Rearranging, the algebraic equation for the unknown term of each finite volume is:

$$
\phi_{i}^{n+1} = \phi_{i}^{n}
- \frac{c \Delta t}{2\Delta x}\left(\phi_{i+1}^n-\phi_{i-1}^n\right)
$$

### Solution as System of Equations

We will now assemble a system of equations for the entire problem and formulate it as a matrix. This is instructive not only for understanding the solution and how the individual finite volumes relate to each other geometrically, as well as to the boundary conditions, but it also facilitates a comparison with other numerical methods (e.g., finite difference and finite element methods).

Observe that the general forward Euler solution above for a non-boundary volume can be expressed in vector/matrix form as:

$$
\phi_{i}^{n+1}
=
\phi_{i}^{n}
- \frac{c \Delta t}{\Delta x}
\begin{bmatrix} -\frac{1}{2} & 0 & \frac{1}{2} \end{bmatrix}
\begin{bmatrix} \phi_{i-1} \\ \phi_{i} \\ \phi_{i+1} \end{bmatrix}^{n}
$$

Recognizing that the vector of coefficients $\begin{bmatrix} -\frac{1}{2} & 0 & \frac{1}{2} \end{bmatrix}$ can be written $\begin{bmatrix} a_{i,i-1} & a_{i,i} & a_{i,i+1} \end{bmatrix}$ and is the $i^{\textrm{th}}$ equation in the system allows generalizing to the global matrix formulation:

$$
\begin{bmatrix}
\: \phi \:
\end{bmatrix}^{n+1}
\propto
\begin{bmatrix}
\: A \:
\end{bmatrix}^{n}
\begin{bmatrix}
\: \phi \:
\end{bmatrix}^{n}
$$

Where the coefficients of $A$, $a_{ij}$, are defined by the finite volume discretization scheme:

$$
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6}
\end{bmatrix}^{n+1}
\propto \quad
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & a_{14} & a_{15} & a_{16} \\
a_{21} & a_{22} & a_{23} & a_{24} & a_{25} & a_{26} \\
a_{31} & a_{32} & a_{33} & a_{34} & a_{35} & a_{36} \\
a_{41} & a_{42} & a_{43} & a_{44} & a_{45} & a_{46} \\
a_{51} & a_{52} & a_{53} & a_{54} & a_{55} & a_{56} \\
a_{61} & a_{62} & a_{63} & a_{64} & a_{65} & a_{66} \\
\end{bmatrix}^{n}
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6}
\end{bmatrix}^{n}
$$


Applying and extending the pattern found above:

$$
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6}
\end{bmatrix}^{n+1}
=
\quad \begin{bmatrix} \:I\: \end{bmatrix}
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6}
\end{bmatrix}^{n}
- \frac{c\Delta t}{\Delta x} 
\begin{bmatrix}
0 & \frac{1}{2} & 0 & 0 & 0 &  0 \\
-\frac{1}{2} & 0 & \frac{1}{2} & 0 & 0 & 0 \\
0 & -\frac{1}{2} & 0 & \frac{1}{2} & 0 & 0 \\
0 & 0 & -\frac{1}{2} & 0 & \frac{1}{2} & 0 \\
0 & 0 & 0 & -\frac{1}{2} & 0 & \frac{1}{2} \\
0 & 0 & 0 & 0 & \frac{1}{2} & 0 \\
\end{bmatrix}
\begin{bmatrix}
\phi_{1} \\ \phi_{2} \\ \phi_{3} \\ \phi_{4} \\ \phi_{5} \\ \phi_{6}
\end{bmatrix}^{n}
$$

The coefficient matrix $A$ only has non-zero elements along the diagonal due to the regular geometry incorporated in the 1D discretization, called a _banded_ matrix. In the derivation of the system of equations, the boundary conditions of end volumes were not presented. The formulation of the coefficients in the matrix implies that the values of the $-1^{\textrm{th}}$ and $7\textrm{th}$ volume ($\phi_{-1}$ and $\phi_7$) were taken as 0.

### Solution Techniques

Note that the matrix in the above example contains a lot of zeros: 10 out of 36 elements are non-zero (28%). This is called a _sparse_ matrix, and the proportion of non-zero entries grows with the size of the problem. For example, $N=1000$ finite volumes requires $2N-2$ non-zero entries (1998), which is only 0.1% of the matrix! Since matrix calculations are computationally expensive, we would never carry out the matrix calculations as represented here. Instead, various vectorization approaches are implemented in all numerical analysis software packages. Typically, a mapping of volumes and coordinates are stored in a vector format that retains the relationship between volumes and the interpolation points (e.g., neighbor volumes). Then calculations per volume are carried out using this vectorized information. This can be easily implemented in any programming language, for example, with a for loop over each volume. However, note that as geometry of the domain of interest and the discretization scheme changes (e.g., non-square volumes!) more advanced vectorization techniques are required.