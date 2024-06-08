# Finite Volume Discretization

Consider a generic region of interest in 3-dimensional space, $\Omega$, where we are interested in evaluating a vector field of some unknown quantity $\mathbf{u}$ (e.g., the velocity of a fluid). Using conservation laws, our objective is to evaluate flux of $\mathbf{u}$ into and out of the volume through the surface $\Gamma$, as well as the state and evolution of $\mathbf{u}$ in time and space: $\mathbf{u}(\mathbf{x},t)$. 

```{figure} ./figs/fvm1.png
---
width: 60%
name: fvm1
---
Generalized schematic of a 3D "volume", $\Omega$, illustrated by a 2D ellipse, with bounding surface $\Gamma$ and a single vector of the field $\mathbf{u}$. Flux out of the volume is through an infinitesimal part of the surface, $d\mathbf{\Gamma}$, which has a surface normal vector $\mathbf{\hat{n}}$.
```

```{note}
In this section no distinction is made between the quantity of interest, $\phi$, and the velocity field of the fluid, $\mathbf{u}$; this is analogous to most computational fluid dynamics problems.
```

It is difficult to develop a solution for situations with complex geometry and physical phenomenon, and the general volume $\Omega$, illustrated in {numref}`fvm1`, must be discretized into smaller volumes that are more easily evaluated, for example the smaller _finite volume_ illustrated in {numref}`fvm2`. Only the domain has changed, becoming smaller; the same conservation laws are used to evaluate the quantity of interest $\mathbf{u}$.

```{figure} ./figs/fvm2.png
---
width: 40%
name: fvm2
---
Illustration of a finite volume. The quantity of interest ($\mathbf{u}$ in this case) and conservation laws are identical to the generic case illustrated in {numref}`fvm1`, and computed at the center of the finite volume.
```

This is extended to the entire domain of interest through the specification of many finite volumes, described using a Cartesian coordinate system, $\mathbf{x}$, such that the center point of each volume $\mathbf{x}_{i,j,k}$ is the point where $\mathbf{u}_{i,j,k}$ is computed. This is illustrated for a 2D example illustrated in {numref}`fvm3`, for volume $i$, $j$. In this case the $x$ and $y$ axes are sub-divided into increments $\Delta x$ and $\Delta y$. Although only cubic volumes are considered here (square in 2D), in practice the finite volumes can employ a variety of different shapes to make the geometric discretization into finite volumes and numerical computations more efficient.

```{figure} ./figs/fvm3.png
---
width: 60%
name: fvm3
---
Discretization of a generic domain of interest into finite volumes $\Omega$ in the 2D Cartesian coordinate system. Volume $i$, $j$ is shown alongside neighboring volumes that will be used in flux calculations. The quantity of interest ($\mathbf{u}$ in this case) are computed at the center of each finite volume.
```

As seen in other chapters of this textbook, to solve PDE's numerically, values of the function of interest at several discrete points in $\mathbf{x}$ are required to formulate and computing numerical differentiation and integration schemes (in space _and_ time). However, as illustrated in {numref}`fvm2` and {numref}`fvm3`, the finite volume discretization uses only a single central point to represent the quantity of interest. Therefore, the finite volume method requires use of neighboring volumes in the numerical schemes. As the conservation laws require $\mathbf{u}$ to be balanced at the boundaries of every finite volume, this forms an ideal point at which to make computations. The boundary of a standard finite volume is thus divided into four faces, North, South, East, West (abbreviated N, S, E, W), as illustrated in {numref}`fvm4`, and $\mathbf{u}$ is computed at each face, typically as an average using the neighboring volumes.

```{figure} ./figs/fvm4.png
---
width: 60%
name: fvm4
---
Left: specification of North, South, East and West faces (N, S, E, W) for a standard finite volume. Right: center points of neighboring finite volumes that can be used to compute $\mathbf{u}$ at each face, as well as $\mathbf{u}$.
```

Subsequent chapters will illustrate the discretization of various conservation laws in space, as well as integration schemes in time. Typically, the finite volume scheme described above will be used to derive discretized algebraic equations that are solved as a system of equations for all volume center points and boundaries. A time integration scheme is formulated using the transient term of a conservation equation, which provides an analytic expression for a forward time step, for example:

$$
\mathbf{u}^{n+1} = f(\mathbf{u}^{n})
$$

where the superscript is the time increment and function $f(\cdot )$ represents the discretized system of equations for all elements in $\mathbf{x}$.

## Comparison with Finite Differences

The finite volume method can be better understood by considering how it is different from the finite difference method (FDM), covered earlier. Both methods can be used to solve the same conservation laws over a discretized domain of interest $\Omega$; in fact, the points at which the quantity of interest is calculated are exactly the same. However, whereas the FVM uses each point to represent the _center_ of a finite volume, FDM uses the points as corners of square units in a grid. Unlike FDM, FVM uses surface fluxes (explained later), computed at the boundary of each finite volume; these points are located between the evaluation points of the FDM grid.

```{figure} ./figs/fvm-fdm.png
---
width: 60%
name: fvm_fdm
---
A finite difference unit compared to a finite volume using the same grid of points $(x_i,y_j)$ for computation of the quantity of interest $\mathbf{u}_{i,j}$ in both methods. Boundary surface fluxes of FVM volumes are computed at points located between evaluation points of the FDM.
```

In addition, as will be seen later, FVM integrates over the volumes prior to applying numerical integration schemes, whereas FDM uses numerical differentiation to discretize the PDE's.

## Quantity of Interest

In the introduction to FVM on this page, a generic scalar or vector quantity $\phi(\mathbf{x},t)$ was briefly stated. However, the figures used to illustrate the FVM discretization employ a vector quantity $\mathbf{u}(\mathbf{x},t)$. As FVM is commonly used for computational fluid dynamics problems, $\mathbf{u}$ can be considered a fluid velocity. In this case, the characteristics of the fluid are being solved for directly. For example, using the Navier-Stokes equation (introduced in {ref}`fvm_notation`) to solve for as $\mathbf{u}(\mathbf{x},t)$:

$$
\frac{\partial (\rho \,\mathbf{u})}{\partial t}
+  (\rho  \,\mathbf{u} \cdot \nabla) \,\mathbf{u}
= -\nabla p 
+ \mu \nabla^2 \mathbf{u}
+ \mathbf{f}
$$

However, depending on the conservation laws that are applied, transport of a quantity of interest $\phi$ is dependent on the velocity field of a fluid in different ways. In this case, _both_ quantities should be included in the formulation. For example, consider a contaminant with concentration that is a function of space and time, $C(\mathbf{x},t)$, transported by a fluid with velocity $\mathbf{u}(\mathbf{x},t)$. When governed by advection-diffusion processes (with diffusion coefficient $D$), the conservation equation becomes:

$$
\frac{\partial C}{\partial t}
+  \mathbf{u} \cdot \nabla \phi
= D \nabla^2 \phi
$$

which clearly includes the role of fluid velocity as a transport mechanism. The next chapter provides a quick review of these equations before continuing with FVM.