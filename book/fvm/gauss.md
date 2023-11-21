# Gauss's Theorem

Gauss's theorem (also referred to as the divergence theorem) relates the flux of a vector field $\mathbf{u}$ through a closed surface $\Gamma$ with the divergence of the vector field inside the volume $\Omega$ enclosed by closed surface ({numref}`gauss1`). 

```{figure} ./figs/fvm1.png
---
width: 60%
name: gauss1
---
Generalized schematic of a 3D "volume", $\Omega$, illustrated by a 2D ellipse, with bounding surface $\Gamma$. The surface normal vector $\mathbf{\hat{n}}$ and vector field $\mathbf{u}$ are also illustrated, describing flux through an infinitesimal part of the surface, $d\mathbf{\Gamma}$.
```

Consider $\mathbf{u}$ to be a vector field describing velocity at all $\mathbf{x}$ in volume $\Omega$ as a function of time $t$. The divergence of $\mathbf{u}$ is: 

$$
\nabla\cdot\mathbf{u}
=\left(\frac{\partial}{\partial x}\,\hat{i}
+\frac{\partial}{\partial y}\,\hat{j}
+\frac{\partial}{\partial z}\,\hat{k}\right)
\cdot\left(u\,\hat{i}+v\,\hat{j}+w\,\hat{k}\right)
=\frac{\partial u}{\partial x}
+\frac{\partial v}{\partial y}
+\frac{\partial w}{\partial z}
$$

which produces a scalar quantity that can conceptually be thought of as quantifying the strength of the vector field as a source (positive) or sink (negative). Alternatively, the divergence describes the flux of the vector field out of an infinitesimally small unit volume, which can be extended to illustrate Gauss's theorem.

For a small surface element $d\Gamma$ with a normal vector $\mathbf{\hat{n}}$ (normal to the surface $\Gamma$ of volume $\Omega$, {numref}`gauss1`), the flux $\Lambda$ through $d\Gamma$, is defined as:

$$
\Lambda=\mathbf{u}\cdot\mathbf{\hat{n}}\,d\Gamma
$$

Gauss's theorem relates the divergence of the vector field in $\Omega$ to the surface flux through the boundary $\Gamma$ by integrating over the two regions:

$$
\int_{\Omega}\mathbf{\nabla}\cdot\mathbf{u}\,d\Omega
=\oint_{\Gamma}\mathbf{u}\cdot\mathbf{\hat{n}}\,d\Gamma
$$

In other words, the volumetric integral of the divergence of $\mathbf{u}$ over volume $\Omega$ is equivalent to the closed surface integral of the flux of $\mathbf{u}$ over the boundary $\Gamma$.

## Gauss's Theorem, Discretized

This section applies Gauss's theorem to a 2D velocity field, which is then discretized for a single finite volume with center located at $(x_i,y_j$). Recall that the value of $\mathbf{u}$ at the center, $\mathbf{u}_{i,j}$, is assumed to be constant over the volume, allowing for a significant simplification of the volumetric integral when applied to a finite volume with differential volume $\Delta \Omega$:

$$
\int_{\Omega} \nabla \cdot \mathbf{u} \,d\Omega
= \nabla \cdot \mathbf{u}_{i,j}\int_{\Omega} \,d\Omega
= \nabla \cdot \mathbf{u}_{i,j}\,\Delta V
$$

Resulting in the following expression for divergence in 2D:

$$
\left(\frac{\partial u_{i,j}}{\partial x}+\frac{\partial v_{i,j}}{\partial y}\right)\Delta x \Delta y
$$

The right-hand side of Gauss's theorem, the discretized closed surface integral is then:

$$
\begin{align}\oint_{\Gamma}\mathbf{u}\cdot\mathbf{\hat{n}}\,d\Gamma &
=\oint_{\Gamma_E} \mathbf{u}_E \cdot \mathbf{\hat{n}}_E \,d\Gamma
+\oint_{\Gamma_W} \mathbf{u}_W \cdot \mathbf{\hat{n}}_W \,d\Gamma
+\oint_{\Gamma_N} \mathbf{u}_N \cdot \mathbf{\hat{n}}_N \,d\Gamma
+\oint_{\Gamma_S} \mathbf{u}_S \cdot \mathbf{\hat{n}}_S \,d\Gamma \\
&=(u_E-u_W)\Delta y+(u_N-u_S)\Delta x
\end{align}
$$

This algebraic expression concisely describes the flux entering and leaving the finite volume, and is a key feature of the finite volume method. Although shown here for a fluid velocity in 2D, Gauss’s theorem ensures that the result applies in 3D, as well as for the 3 fundamental conservation laws of physics: mass, momentum and energy conservation.

But before we can derive the above equations in the context of the finite volume method, we need to understand the concept of *Eulerian* and *Lagrangian reference frames*.  