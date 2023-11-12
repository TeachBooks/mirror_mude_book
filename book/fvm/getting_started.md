(fvm_notation)=
# Getting Started

This is a very quick overview of some fundamental knowledge that is helpful for understanding the analytic and numeric work needed for FVM. Some of it is calculus and continuum mechanics that should be mostly review (and can be used as a reference for notation), whereas the later sections give some context and insight into the derivation of commonly used conservation laws (PDE's) that can be solved using FVM.

At the moment, the notation on this page only applies for the Finite Volume Method. A few selected LaTeX equations are provided as well to help you use the same notation in your Markdown-formatted reports (optional).

```{admonition} MUDE Exam Information
:class: tip

You are not expected to produce the material below from memory, but you _are_ expected to understand any of the equations and notation below if included on the exam. One exception is the Navier-Stokes equation; there you would only be expected to know the transient, convection and diffusion terms.
```

## Notation

A generic scalar quantity $\phi$ is typically defined in 3-dimensional (3D) space and time, $\phi(x,y,z,t)$.

Bold straight lower-case letters are used for vector quantities. For example, the Cartesian coordinate system is:

$$
\mathbf{x} = x \,\hat{i} + y \,\hat{j} + z \,\hat{k}
$$

The scalar quantity defined above could thus be specified $\phi(\mathbf{x},t)$. Velocity is denoted $\mathbf{u}$, with components $u$, $v$ and $w$:

$$
\mathbf{u} = u \,\hat{i} + v \,\hat{j} + w \,\hat{k}
$$

In the finite volume discretization scheme, volume indices are denoted with a subscript that refers to increments of each axis in $\mathbf{x}$, starting at index 1 (not 0, as in Python!). For example, subscript $i$, $j$ are used in 2D, such that the volume centered as $x$-coordinate 4 and $y$-coordinate 6 would be described with velocity $\mathbf{u}_{4,6}^n$.  The time increment is identified with a superscript, $n$; the initial condition starts at index 0. In other words, the initial condition is specified at time $t_0$.

Locations or quantities in a 1-dimensional (1D) discretized continuum in are expressed as a column vector, for example, the velocity in the $x$- or $\hat{i}$-direction at points $i=1:n$ is:

$$
u_i \; \forall \; i
= \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_n \end{bmatrix}
= \begin{bmatrix} u_1 & u_2 & \dots & u_n\end{bmatrix}^T
$$

<!-- The structure of vectors and matrices for problems in dimension greater than 1 is not unique, In 2D the collection of vector values does not imply a unique -->

Selected LaTeX equations:
```
$$
\mathbf{u} = u \,\hat{i} + v \,\hat{j} + w \,\hat{k}
$$
```

## Derivatives

The _total_ or _direct derivative_ uses $d$. For example, if $z=g(y)$ and $y=f(x)$, the chain rule is:

$$
\frac{dz}{dx} = \frac{d}{dx}g(f(x)) = \frac{dg}{df}\frac{df}{dx}
$$

The partial derivative uses $\partial$. For example, the time derivative of $f(\mathbf{x},t)$ can be represented as follows:

$$
\frac{\partial f}{\partial t} = \frac{\partial f(\mathbf{x},t)}{\partial t}
$$

The _material derivative_ is defined using an uppercase letter $D$ to denote the direct derivative in the Lagrangian frame:

$$
\frac{D\mathbf{u}}{Dt}
= \frac{\partial\mathbf{u}}{\partial t}
+ (\mathbf{u}\cdot\nabla)\,\mathbf{u}
$$

Selected LaTeX equations:
```
$$
\frac{D\mathbf{u}}{Dt}
= \frac{\partial\mathbf{u}}{\partial t}
+ (\mathbf{u}\cdot\nabla)\,\mathbf{u}
$$
```

## Nabla Operations

The nabla operator is:

$$
\nabla\
= \frac{\partial }{\partial x} \,\hat{i}
+ \frac{\partial }{\partial y} \,\hat{j}
+ \frac{\partial }{\partial z} \,\hat{k}
$$

When applied to a scalar, $\nabla$ specifies the gradient, which produces a vector quantity:

$$
\nabla\phi
= \frac{\partial \phi}{\partial x} \,\hat{i}
+ \frac{\partial \phi}{\partial y} \,\hat{j}
+ \frac{\partial \phi}{\partial z} \,\hat{k}
$$

When applied to a vector, $\nabla$ specifies the divergence, which produces a scalar quantity:

$$
\nabla\cdot\mathbf{u}
= \frac{\partial u}{\partial x}
+ \frac{\partial v}{\partial y}
+ \frac{\partial w}{\partial z}
$$

When a vector is applied to $\nabla$ the div operator is specified, which produces a scalar quantity that is typically applied to another scalar, vector or tensor as part of a larger expression:

$$
\mathbf{u}\cdot\nabla
= u\frac{\partial}{\partial x}
+ v\frac{\partial}{\partial y}
+ w\frac{\partial}{\partial z}
$$

The Laplacian is defined as $\nabla^2$, and is the divergence of the gradient $\nabla \cdot \nabla$. When applied to a scalar it produces a scalar quantity:

$$
\nabla^2 \phi
= \frac{\partial^2 u}{\partial x^2}
+ \frac{\partial^2 v}{\partial y^2}
+ \frac{\partial^2 w}{\partial z^2}
$$

Selected LaTeX equations:
```
$$
\nabla\
= \frac{\partial }{\partial x} \,\hat{i}
+ \frac{\partial }{\partial y} \,\hat{j}
+ \frac{\partial }{\partial z} \,\hat{k}
$$
```

## Conservation Laws

Most physics-based modelling relies on the use of conservation laws. Most common are mass, momentum and energy, two of which are described here briefly.

### Mass

Mass conservation is defined using the continuity equation, which describes the flux of a quantity per unit volume:

$$
\frac{\partial \rho}{\partial t}
+ \nabla \cdot (\rho\mathbf{u})
= 0
$$
where $\rho$ and $\mathbf{u}$ are the density and velocity of a material; for the FVM we will typically consider fluids, but the law is also valid for (deformable) solids.

### Momentum

Newton's laws of motion imply that momentum is conserved in a system which does not lose matter or have external forces acting on it. Conservation equations draw from Newton's second law, which states that the net force, $\mathbf{F}$, applied by a particle is equal to the rate of change of momentum:

$$
\mathbf{F} = \frac{d}{dt}(m \mathbf{u})
$$

where $m$ and $\mathbf{u}$ are mass and velocity of the particle. A force balance equation can then be constructed by accounting for all forces in a system. A static situation serves as a simple example, in this case a fluid in hydrostatic equilibrium:

$$
- \nabla \rho + \rho \mathbf{g} = 0
$$

which is easy to see in 1D as the hydrostatic pressure $h\rho$ of a water column of height $h$. For non-hydrostatic situations, various forces can be included depending on the complexity of the problem desired. When combined with the mass continuity equation, this culminates in the Navier-Stokes equations for fluid flow.

For solids, conservation of momentum is expressed by the Cauchy equation:

$$
\rho \frac{\mathrm{D}\mathbf{u}}{\mathrm{D}t} = \nabla \cdot \mathbf{\sigma} + \mathbf{f}
$$

where $\mathbf{\sigma}$ is a stress tensor, $\mathbf{f}$ is the body force and $\mathrm{D}$ represents the total derivative in the Lagrangian reference frame.

## Material Derivative

The _material derivative_ (also called _Lagrangian derivative_) describes the time rate of change of a scalar or vector quantity $\phi(\mathrm{x},t)$ that is subject to a velocity field $\mathrm{u}(\mathrm{x},t)$:

$$
\frac{\mathrm{D} \phi}{\mathrm{D}t}
= \frac{\partial \phi}{\partial t}
+ \mathbf{u} \cdot \nabla \phi
$$

where $\mathrm{D}$ represents the total derivative in the Lagrangian reference frame. This concept is explained in more detail in (see {ref}`fvm_frames`).

## Conservation Equations

Although a complete derivation is outside the scope of this textbook, it is useful to present a few commonly used conservation equations. They are generally oriented to fluid flow, although the first can be easily applied to a deformable solid body as well as various scalar and vector fields, for example, temperature, pressure or magnetism.

### Advection-Diffusion Equation

Many phenomena can be described by the advection-diffusion equation. To derive it for an arbitrary quantity $\phi$, conservation of mass and momentum are invoked, formulated using the material derivative. Consider the quantity to be a a scalar or vector field and a function of space and time, $\phi=\phi(\mathbf{x}, t)$. It is also transported by particles in the fluid, which is described by a velocity vector field, $\mathbf{u}$. For incompressible flow, constant diffusion coefficient ($D$) and no source terms, the conservation equation is:

$$
\frac{\partial \phi}{\partial t}
+  \mathbf{u} \cdot \nabla \phi
= D \nabla^2 \phi
$$

From left to right, these three terms are explained as follows, relative to the quantity $\phi$:
1. Transient effect: rate of change of quantity $\phi$
2. Convection: transport due to velocity field $\mathbf{u}$
3. Diffusion: transport due to gradient of quantity $\phi$

See the Navier-Stokes section for a more detailed description using momentum, ($\rho \,\mathrm{u}$), as the vector quantity of interest.

Sometimes the term _convection_ is used interchangeably with advection; technically the difference is that advection specifies a quantity that is carried by the fluid, rather than the fluid particles themselves (convection).

Selected LaTeX equations:
```
$$
\frac{\partial \phi}{\partial t}
+  \mathbf{u} \cdot \nabla \phi
= C \nabla^2 \phi
$$
```

### Navier-Stokes Equations

Derivation of the Navier-Stokes equations typically begins with conservation of momentum, where the Cauchy term is divided into a volumetric and deviatoric stress ($\mathbf{\sigma}$ and $\mathbf{\tau}$):

$$
\rho \frac{\mathrm{D}\mathbf{u}}{\mathrm{D}t} 
= -\nabla p 
+ \nabla \cdot \mathbf{\tau}
+ \mathbf{f}
$$

Where $\mathbf{f}$ is a body force and $\mathrm{D}$ represents the total derivative in the Lagrangian reference frame. Conservation of mass and the material derivative give:

$$
\frac{\partial (\rho\,\mathbf{u})}{\partial t}
+ \nabla \cdot (\rho \,\mathbf{u} \,\mathbf{u}^T )
= -\nabla p 
+ \nabla \cdot \mathbf{\tau}
+ \mathbf{f}
$$

There are many ways of presenting the Navier-Stokes equations, depending on various assumptions, constitutive laws, reference frames, etc. For our purposes in civil and environmental engineering and applied earth sciences, we can solve a majority of problems by considering incompressible, viscous Newtonian flow. In this case:

$$
\frac{\partial (\rho \,\mathbf{u})}{\partial t}
+  (\rho  \,\mathbf{u} \cdot \nabla) \,\mathbf{u}
= -\nabla p 
+ \mu \nabla^2 \mathbf{u}
+ \mathbf{f}
$$

where $\mu$ is the dynamic viscosity (SI units: [kg/m/s]). Note that since $\rho$ is not changing in time and incompressible, it can be moved outside the partial derivative terms, but it is kept together with $\mathbf{u}$ in this case to provide consistent notation with other reference texts. From left to right, these five terms are explained as follows, relative to the quantity of interest, momentum per unit volume, $\rho \,\mathbf{u}$:
1. Transient effect: rate of change
2. Convection: transport due to velocity field $\mathbf{u}$
3. Internal source
4. Diffusion: transport due to gradient of the velocity field $\mathbf{u}$
5. External source

In addition, terms 1 and 2 form the inertial component, whereas terms 3 and 4 form represent stress divergence.

Selected LaTeX equations:
```
$$
\frac{\partial (\rho \,\mathbf{u})}{\partial t}
+  (\rho  \,\mathbf{u} \cdot \nabla) \,\mathbf{u}
= -\nabla p 
+ \mu \nabla^2 \mathbf{u}
+ \mathbf{f}
$$
```