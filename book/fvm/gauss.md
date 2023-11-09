# Gauss's Theorem

```{note} Important things to retain from this chapter

* Mathematical relationship between divergence and its integral
* Relationship between the integral of a physical quantity inside a fixed volume with the flux through the volume’s boundaries (Gauss's theorem).  
* A discrete form of the above expressions.  

```

## Definition and explanation

FVM begins with Gauss's theorem that relates the **flux of a vector field through a closed surface** with the **divergence of the vector field inside the volume** enclosed by that closed surface.

```{warning}
All **bold** variables are vectors and must be mathematically treated as such.
```


```{admonition} A simple analogy

Imagine you have a bucket of water that has a few holes at the bottom and a few inlets connected to pipes at the top. The pipes bring in a finite amount of water, while the holes at the bottom lead to a constant discharge from the bucket. Intuition alone tells us that the change in volume of water inside the bucket is simply the sum of the rates at which the water enters the bucket through the pipes and leaves through the holes. **Gauss's theorem is simply a generalised mathematical expression of this phenomenon**. 

```
```{figure} ./figs/gauss1.png
---
width: 60%
name: gauss1
---
Generalized schematic of a 3D "volume", $\Omega$, illustrated by a 2D ellipse. The bounding surface $\Gamma$, surface normal vector $\mathbf{\hat{n}}$ and vector field 
```

Consider the volume shown in the figure above, let us call it $\Omega$. Let the surface enclosing the volume be $\Gamma$ and $d\Gamma$ be a small surface element with a normal vector $\mathbf{\hat{n}}$. Assume we are *observing* the vector field $u$ inside this volume, which is transported across the surface in time.


For simplicity and relevance, let us consider $\mathbf{u}$ to be velocity. Hence, one can write

$$\mathbf{u}=u_{\hat{i}}+v_{\hat{j}}+w_{\hat{k}}$$

The divergence of any vector $u$ is a measure of the strength of a source or a sink of a vector in space. A **positive divergence** is a **source** and a **negative divergence** is a **sink**. Mathematically:

$$\mathbf{\nabla}\cdot\mathbf{u}=\left(\frac{\partial}{\partial x}\hat{i}+\frac{\partial}{\partial y}\hat{j}+\frac{\partial}{\partial z}\hat{k}\right)\cdot\left(u_{\hat{i}}+v_{\hat{j}}+w_{\hat{k}}\right)=\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}+\frac{\partial w}{\partial z}$$

On the other hand, the surface experiences a constant inflow or outflow of the vector. The flux $\Lambda$ through an infinitesimally small unit of surface $\Gamma$, $d\Gamma$, is defined as

$$\Lambda=\mathbf{u}\cdot\mathbf{\hat{n}}\,d\Gamma$$

or the amount of $\mathbf{u}$ at the surface in the direction of the surface's normal times the area of the surface. In the case of the bucket, the flux is the volumetric flow rate of the water in through the pipes and out through the holes.

Gauss's theorem simply relates the surface flux to the volumetric divergence:

$$\int_{\Omega}\mathbf{\nabla}\cdot\mathbf{u}\,d\Omega=\oint_{\Gamma}\mathbf{u}\cdot\mathbf{\hat{n}}\,d\Gamma$$

i.e. the volumetric integral of the divergence of $\mathbf{u}$ is the closed surface integral of the flux of $\mathbf{u}$. Now, let us see how this works in a discrete setting and enables us to develop the FVM.

## A Volume-based Discretization

**MMMMM** move this to different page?

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