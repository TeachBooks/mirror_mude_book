(fvm)=
# PDEs and the Finite Volume Method

The Finite Volume Method (FVM) is a numerical approach for solving partial differential equations (PDEs); it builds on many of the concepts covered by the Finite Difference Method (FDM), covered earlier in this textbook. One main advantage of the finite volume method is that it is well-suited to flow-based problems (e.g., computational fluid dynamics), but it is also a relatively simple method that can be applied to a wide variety of physics-based conservation laws (e.g., mass, momentum and energy). 

The general scheme for FV problems is as follows:

1. Convert the PDE to integral formulation, over a volume of interest
2. Apply Gauss's Theorem on the bounding surface
3. Discretize the integral equations over finite volumes
4. Apply a numerical scheme to solve the discretized equations (typically in time)

These topics will be discussed in more detail after the method is introduced below.

## Comparison with Finite Differences

**MMMMM** is this really necessary? It seems to mix the discretization and lagrange/euler frames.

**FIGURE??** gauss2 but add red box showing (future) FV. maybe combine with the figures below (generic volume)

The finite difference method (FDM) ... imagine you are observing how a property of interest, such as the temperature or flow speed, changes at pre-defined discrete grid points in a field over time. These observations when used with the underlying differential equations, can generate insight into how the field changes over time and space.  

Given fluids don’t have a shape of their own, it is challenging (but possible) to define a discrete set of points that can represent the fluid. Therefore, one deals with fluids using discrete finite volumes in space. 

Imagine the flow of water inside a river but divided into a finite number of volumes that are fixed (for simplicity) in space inside the a river. To track the flow of water, one can simply track the volume of water and its change inside each finite volume. Because mass must remain conserved, the total volume (mass times the constant density of water; an incompressible fluid), is also conserved. This basic conservation law can be expressed mathematically for each finite volume (as a differential equation). If one can solve the underlying equation for the each volume, one can track the overall flow of water.

## Problem Formulation

Volume

```{figure} ./figs/gauss1.png
---
width: 60%
name: gauss1
---
Generalized schematic of a 3D "volume", $\Omega$, illustrated by a 2D ellipse. The bounding surface $\Gamma$, surface normal vector $\mathbf{\hat{n}}$ and vector field 
```

Chop it into blocks

**FIGURE** overlay the grid from the FDM comparison on the volume?

Each element is like this

**FIGURE** start with gauss3


## Why is FVM useful?

Below are a few examples (not an exhaustive list) of how the FVM is used in various civil and environmental engineering and geosciences applications. You are likely to encounter one (or more) such problems in your future courses:

* **Fluid mechanics and hydrodynamics**: simulating the flow in rivers and reservoirs, predicting flood propagation, analysing groundwater flow, pipe and open-channel flows and conduits. FVM allows the discretisation of complex spaces to estimate properties such as velocity, pressure and even concentration.  

* **Heat Transfer**: conduction through different materials, optimising heating and cooling systems in buildings and analysing the thermal behaviour of structures.  

* **Pollutant transport and dispersion**: simulate the impact of pollutants in the atmosphere or water bodies. This is crucial for designing pollution control systems and assessing contamination. 

* **Structural Analysis**: the FVM is primarily associated with fluid mechanics and heat transfer but it can be adapted for stress and deformation in solid structures. This technique is particularly useful in geotechnical engineering and civil infrastructure. 

* **Multiphysics Problems**: FVM can handle multi-physics simulations by combining fluid flow, heat transfer, chemical reactions, stress analysis, chemical transport and other processes in a single model. For example, FVM can analyse the thermal behaviour of a dam holding back sediment-laden water. 

In short, the FVM is powerful tool for understanding and predicting the behavior of complex systems, which ultimately aids design, analysis and decision-making.