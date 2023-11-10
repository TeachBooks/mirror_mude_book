(fvm_notation)=
# Notation and Formulas

At the moment, this page only applies for the Finite Volume Method.

LaTeX commands are provided to help you use the same notation in your Markdown-formatted reports (optional).

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

Locations or quantities in a 1-dimensional (1D) discretized continuum in are expressed as a column vector, for example, the velocity in the $x$- or $\hat{i}$-direction at points $i=1:n$ is:

$$
u_i \; \forall \; i
= \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_n \end{bmatrix}
= \begin{bmatrix} u_1 & u_2 & \dots & u_n\end{bmatrix}^T
$$

LaTeX commands:
```
\mathbf{u} = u \,\hat{i} + v \,\hat{j} + w \,\hat{k}
```

## Derivatives

The _total_ or _direct derivative_ uses $d$. For example, if $z=g(y)$ and $y=f(x)$, the chain rule is:

$$
\frac{dz}{dx} = \frac{d}{dx}g(f(x)) = \frac{dz}{dy}\frac{dy}{dx}
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

The Laplacian is defined as $\nabla^2$ applied to a scalar, which produces a scalar quantity:

$$
\nabla^2 \phi
= \frac{\partial^2 u}{\partial x^2}
+ \frac{\partial^2 v}{\partial y^2}
+ \frac{\partial^2 w}{\partial z^2}
$$



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
\rho \frac{D\mathbf{u}}{Dt} = \nabla \cdot \mathbf{\sigma} + \mathbf{f}
$$

where $\mathbf{\sigma}$ is a stress tensor and $\mathbf{f}$ is the body force.

## Conservation Equations

Although a complete derivation is outside the scope of this textbook, it is useful to present a few commonly used conservation equations. They are generally oriented to fluid flow, although the first can be easily applied to a deformable solid body as well as various scalar and vector fields, for example, temperature, pressure or magnetism.

### Advection-Diffusion Equation

Many phenomena can be described by the advection-diffusion equation. To derive it for an arbitrary quantity $\phi$, conservation of mass and momentum are invoked, formulated using the material derivative. Consider the quantity to be a a scalar or vector field and a function of space and time, $\phi=\phi(\mathbf{x}, t)$. It is also transported by particles in the fluid, which is described by a velocity vector field, $\mathbf{u}$. For incompressible flow, constant diffusion coefficient ($C$) and no source terms, the conservation equation is:

$$
\frac{\partial \phi}{\partial t}
+  \mathrm{u} \cdot \nabla \phi
= C \nabla^2 \phi
$$

From left to right, these three terms are explained as follows, relative to the quantity $\phi$:
1. Transient effect: rate of change of quantity $\phi$
2. Convection: transport due to velocity field $\mathbf{u}$
3. Diffusion: transport due to gradient of quantity $\phi$

See the Navier-Stokes section for a more detailed description using momentum, ($\rho \,\mathrm{u}$), as the vector quantity of interest.

Sometimes the term _convection_ is used interchangeably with advection; technically the difference is that advection specifies a quantity that is carried by the fluid, rather than the fluid particles themselves (convection).

### Navier-Stokes Equations

Derivation of the Navier-Stokes equations typically begins with conservation of momentum, where the Cauchy term is divided into a volumetric and deviatoric stress ($\mathbf{\sigma}$ and $\mathbf{\tau}$):

$$
\rho \frac{D\mathbf{u}}{Dt} 
= -\nabla p 
+ \nabla \cdot \mathbf{\tau}
+ \mathbf{f}
$$

Where $\mathbf{f}$ is a body force. Conservation of mass and the material derivative give:

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



**MMMMM: below here is just copy-paste from Dhruv's original text, as typed in latex by Joao. Between the text and the ppt, no two equations used consistent notation...**

$$\rho\left(\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u}\cdot\nabla)\mathbf{u}\right) = -\nabla p + \mu\nabla^2\mathbf{u} + \mathbf{f}$$


For each force, one must interpolate the value at the center of the cell to estimate the flux at the faces as done previously for the mass flux. If done correctly, we will obtain:

$$\rho\frac{Dv}{Dt}=\frac{\partial(\rho v)}{\partial t}+\mathbf{\nabla}\cdot(\rho v\mathbf{v})=\frac{\partial\tau_{xy}}{\partial x}+\frac{\partial(-p+\tau_{yy})}{\partial y}+\frac{\partial\tau_{zy}}{\partial z}+F_y$$

Extending to all three directions, we obtain **Newton's second law for an incompressible fluid**:

$$\rho\frac{Dv}{Dt}=\frac{\partial(\rho v)}{\partial t}+\mathbf{\nabla}\cdot(\rho v\mathbf{v})=\nabla p+\mathbf{\nabla}\cdot(\mu\mathbf{\nabla}v)+\mathbf{F}$$

The above equation, together with the conservation of mass (i.e. the continuity equation):

$$\frac{\partial\rho}{\partial t}+\mathbf{\nabla}\cdot(\rho\mathbf{v})=0$$

$$\frac{\partial}{\partial t}\left(\int_{\Omega}\rho\mathbf{v}d\Omega\right)+\int_{\Gamma}\rho\mathbf{v}(\mathbf{v}\cdot\mathbf{n})d\Gamma=\int_{\Gamma}p\mathbf{n}d\Gamma+\int_{\Gamma}\mathbf{\bar{\tau}}\cdot\mathbf{n}d\Gamma+\int_{\Omega}\mathbf{F}d\Omega$$

The above equations are the **integral form of the Navier-Stokes equations**.