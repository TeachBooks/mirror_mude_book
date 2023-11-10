# Removed Material

From final draft changes just prior to week 2.1 2023.

_Warning: most of the notation is inconsistent!_



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