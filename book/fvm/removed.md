# Removed Material

From final draft changes just prior to week 2.1 2023.

_Warning: most of the notation is inconsistent!_

## Final short summary

To summarise this chapter more holistically:

* The FVM is convenient for solving problems related to fluid mechanics
* The approach is similar to the FDM but now we solve an integral form of the differential equation
* Time-based problems will require a stability analysis regardless of the method used (FVM/FDM)

The **mathematical concepts** that you have learnt:

* Gauss’s theorem for converting the divergence operator into a surface integral
* Lagrangian derivative that helps use information obtained in a Eulerian frame, which is the norm in fluid mechanics and simulation.
* The general form of the conservation law for any physical quantity 
* How one can use the general conservation law to derive any fundamental conservation equation (mass, momentum and energy) for a fluid in continuum without having to remember the equations themselves.
* Discretisation over a finite volume and obtaining fluxes and face parameters.

```{note} Final remarks

The FVM is a powerful method, without which, any design that has something to do with fluid cannot be realised. The method is based on conservation law and hence, is fundamental and versatile and therefore, is found in applications from fluid mechanics to electromagnetism!

```


## intro

Given fluids don’t have a shape of their own, it is challenging (but possible) to define a discrete set of points that can represent the fluid. Therefore, one deals with fluids using discrete finite volumes in space. 

Imagine the flow of water inside a river but divided into a finite number of volumes that are fixed (for simplicity) in space inside the a river. To track the flow of water, one can simply track the volume of water and its change inside each finite volume. Because mass must remain conserved, the total volume (mass times the constant density of water; an incompressible fluid), is also conserved. This basic conservation law can be expressed mathematically for each finite volume (as a differential equation). If one can solve the underlying equation for each volume, one can track the overall flow of water.

## gauss

**MMMMM:** this is out of place becuase this page only has the divergence theorem, it does not state conservation laws. Move.

Together with the conservation equation

* Change in mass inside a volume equals the rate at which mass enters or leaves through its surface (conservation of mass);
* Change in momentum of the volume equals the sum of all forces acting on its surface (conservation of momentum, Newton’s second law);
* Change in energy of the volume equals the sum of heat transfer and the work done at the surface (conservation of energy).  

**MMMMM:** E/L RF's...in or out?



## misc equations


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