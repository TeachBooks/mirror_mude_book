# Gauss's Theorem

Gauss's theorem (also referred to as the divergence theorem) relates the flux of a vector field $\mathbf{u}$ through a closed surface $\Gamma$ with the divergence of the vector field inside the volume $\Omega$ enclosed by closed surface ({numref}`gauss1`). 

```{figure} ./figs/gauss1.png
---
width: 60%
name: gauss1
---
Generalized schematic of a 3D "volume", $\Omega$, illustrated by a 2D ellipse. The bounding surface $\Gamma$, surface normal vector $\mathbf{\hat{n}}$ and vector field 
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

## Discretization

We will now discretize space into finite volumes as shown in the figure below. Each of the squares is an individual "finite volume" with velocity $\mathbf{u}$ at the geometric center. In 2D, for example, $\mathbf{u}=u\hat{i}+v\hat{j}$, where each velocity component is a function of space and time: $u=u(x,y,t)$ and $v=v(x,y,t)$.

```{figure} ./figs/gauss2.png
---
width: 60%
name: gauss2
---
Discretized volume: indexes.
```

**MMMMM:** this description updated Friday. Need to create new figures to separate FDM and FVM approach and explicitly show the FV element. Make the FDM connection just a small note at the end.

The value of $u$ is only known at the center of the cell and the center of the four faces labelled above as N, S, W and E. The value of $u$ at the center is assumed to be constant over the volume and denoted as $\mathbf{u_{i,j}}}$:

```{figure} ./figs/gauss3.png
---
width: 40%
name: gauss3
---
Discretized volume: single volume illustrating center and faces.
```


**MMMMM** The intersection of the lines ("corners" of the volumes) are where velocity would be computed in the finite difference method. As the finite volume method is concerned with 

## Gauss's Theorem, Discretized

**MMMMM:** check use of $\Omega$....maybe $V$ or $\Delta V$ would be better?

Applying Gauss's theorem for a 2D velocity field  

Recall that the value of $\mathbf{u}$ at the center, $\mathbf{u}_{i,j}$, is assumed to be constant over the volume, allowing for a significant simplification of the volumetric integral when applied to a finite volume with differential volume $\Delta V$:

$$
\int_{\Omega}\mathbf{\nabla}\cdot\mathbf{u}\,d\Omega=\mathbf{\nabla}\cdot\mathbf{u}_{i,j}\int_{\Omega}\,d\Omega=\mathbf{\nabla}\cdot\mathbf{u}_{i,j}\,\Delta V
$$

In 2D:

$$
\left(\frac{\partial u_{i,j}}{\partial x}+\frac{\partial v_{i,j}}{\partial y}\right)\Delta x \Delta y
$$



The discrete closed surface integral is then:

$$
\begin{align}\oint_{\Gamma}\mathbf{u}\cdot\mathbf{\hat{n}}\,d\Gamma &=\oint_{\Gamma_E}\mathbf{u_E}\cdot\mathbf{\hat{n_E}}\,d\Gamma+\oint_{\Gamma_W}\mathbf{u_W}\cdot\mathbf{\hat{n_W}}\,d\Gamma+\oint_{\Gamma_N}\mathbf{u_N}\cdot\mathbf{\hat{n_N}}\,d\Gamma+\oint_{\Gamma_S}\mathbf{u_S}\cdot\mathbf{\hat{n_S}}\,d\Gamma \\
&=(u_E-u_W)\Delta y+(u_N+u_S)\Delta x
\end{align}
$$

This algebraic expression concisely describes the flux entering and leaving the finite volume, and is a key feature of the finite volume method. Although shown here for a fluid velocity in 2D, Gauss’s theorem ensures that the result applies in 3D, as well as for the 3 fundamental conservation laws of physics: mass, momentum and energy conservation.

**MMMMM:** this is out of place becuase this page only has the divergence theorem, it does not state conservation laws. Move.

Together with the conservation equation

* Change in mass inside a volume equals the rate at which mass enters or leaves through its surface (conservation of mass);
* Change in momentum of the volume equals the sum of all forces acting on its surface (conservation of momentum, Newton’s second law);
* Change in energy of the volume equals the sum of heat transfer and the work done at the surface (conservation of energy).  

**MMMMM:** E/L RF's...in or out?

But before we can derive the above equations in the context of the finite volume method, we need to understand the concept of *Eulerian* and *Lagrangian reference frames*.  