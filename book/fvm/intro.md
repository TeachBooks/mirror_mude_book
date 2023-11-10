(fvm)=
# PDEs and the Finite Volume Method

The Finite Volume Method (FVM) is a numerical approach for solving partial differential equations (PDEs); it builds on many of the concepts covered by the Finite Difference Method (FDM), covered earlier in this textbook. One main advantage of the finite volume method is that it is relatively simple to apply to a wide variety of physics-based conservation laws (e.g., mass, momentum and energy), and an Eulerian reference frame, making it well-suited to flow-based problems (e.g., fluid flow). 

## PDEs

In general we will consider conservation problems, for example a simple mass balance:

$$
\textrm{Input} - \textrm{Output} = \Delta \textrm{Storage}
$$

For mass

- 

## FVM Overview

The general scheme for FV problems is as follows:

1. Convert the PDE to integral formulation, over a volume of interest
2. Apply Gauss's Theorem on the bounding surface
3. Discretize the integral equations over finite volumes
4. Apply a numerical scheme to solve the discretized equations (typically in time)


to that discretizes both space and time, allowing one to approximate the behavior of physical systems and better understand how things change within a given _field_. In this case, the _field_ in question could be the distribution of heat in a medium, the wind velocity over a large volume of the atmosphere, etc.  

One can understand the FDM with a simple analogy - imagine you are observing how a property of interest, such as the temperature or flow speed, changes at pre-defined discrete grid points in a field over time. These observations when used with the underlying differential equations, can generate insight into how the field changes over time and space.  

The **Finite Volume Method (FVM)** is an extension of the FDM to **solve partial differential equations** that represent **conservation laws in physics** (mass, momentum and energy), often required to resolve physical processes like fluid flow and heat transfer.  

Given fluids don’t have a shape of their own, it is challenging (but possible) to define a discrete set of points that can represent the fluid. Therefore, one deals with fluids using discrete finite volumes in space. 

```{admonition} Example
:class: tip

Imagine the flow of water inside a river but divided into a finite number of volumes that are fixed (for simplicity) in space inside the a river. To track the flow of water, one can simply track the volume of water and its change inside each finite volume. Because mass must remain conserved, the total volume (mass times the constant density of water; an incompressible fluid), is also conserved. This basic conservation law can be expressed mathematically for each finite volume (as a differential equation). If one can solve the underlying equation for the each volume, one can track the overall flow of water.

```

## Problem Formulation

```{figure} ./figs/gauss1.png
---
width: 60%
name: gauss1
---
Generalized schematic of a 3D "volume", $\Omega$, illustrated by a 2D ellipse. The bounding surface $\Gamma$, surface normal vector $\mathbf{\hat{n}}$ and vector field 
```



## Why is FVM useful?

Below are a few examples (not an exhaustive list) of how the FVM is used in various civil engineering and geosciences applications. You are likely to encounter one (or more) such problems in your future courses:

* **Fluid mechanics and hydrodynamics**: simulating the flow in rivers and reservoirs, predicting flood propagation, analysing groundwater flow, pipe and open-channel flows and conduits. FVM allows the discretisation of complex spaces to estimate properties such as velocity, pressure and even concentration.  

* **Heat Transfer**: conduction through different materials, optimising heating and cooling systems in buildings and analysing the thermal behaviour of structures.  

* **Pollutant transport and dispersion**: simulate the impact of pollutants in the atmosphere or water bodies. This is crucial for designing pollution control systems and assessing contamination. 

* **Structural Analysis**: the FVM is primarily associated with fluid mechanics and heat transfer but it can be adapted for stress and deformation in solid structures. This technique is particularly useful in geotechnical engineering and civil infrastructure. 

* **Multiphysics Problems**: FVM can handle multi-physics simulations by combining fluid flow, heat transfer, chemical reactions, stress analysis, chemical transport and other processes in a single model. For example, FVM can analyse the thermal behaviour of a dam holding back sediment-laden water. 

In short, the FVM is powerful tool for in civil engineering and geosciences for understanding and predicting the behaviour of complex systems, which ultimately aids for design, analysis and decision-making. 

---

```{admonition} FVM Objectives

In the FVM part of this textbook, we will cover the following:

* Differences between finite difference and finite volume methods
* Gauss’s theorem (also called the divergence theorem) for converting a conservation law in its differential form to an integral form
* Application of Gauss’s theorem to conservation laws (specifically, mass and momentum) 
* Discrete solution of the integral form of the conservation laws (finite volume method) 

In practice, we will use the following tools:

* Conversion of a partial differential equation into its integral form 
* Numerical integration and discretisation of derivatives using the Taylor series, forward and backward Euler time integration and Cauchy problems
* Discretising space as finite volumes and calculating fluxes (similar to discretising space as points and calculating derivatives as part of the FDM) 
* Stability of differential equations being solved using the FVM (similar to FDM) 

Some of these topics have already been covered elsewhere in this textbook.

``` 


