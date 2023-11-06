(fvm)=
# Introduction to the Finite Volume Method

Previously, you were introduced to the Finite Difference Method (FDM), which is a numerical approach that discretizes both space and time, allowing one to approximate the behavior of physical systems and better understand how things change within a given _field_. In this case, the _field_ in question could be the distribution of heat in a medium, the wind velocity over a large volume of the atmosphere, etc.  

One can understand the FDM with a simple analogy - imagine you are observing how a property of interest, such as the temperature or flow speed, changes at pre-defined discrete grid points in a field over time. These observations when used with the underlying differential equations, can generate insight into how the field changes over time and space.  

The **Finite Volume Method (FVM)** is an extension of the FDM to **solve partial differential equations** that represent **conservation laws in physics** (mass, momentum and energy), often required to resolve physical processes like fluid flow and heat transfer.  

Given fluids don’t have a shape of their own, it is challenging (but possible) to define a discrete set of points that can represent the fluid. Therefore, one deals with fluids using discrete finite volumes in space. 

```{admonition} Example
:class: tip, dropdown

As an analogy, imagine the flow of water inside a river but divided into a finite number of volumes that are fixed (for simplicity) in space inside the a river. To track the flow of water, one can simply track the volume of water and its change inside each finite volume. Because mass must remain conserved, the total volume (mass times the constant density of water; an incompressible fluid), is also conserved. This basic  conservation law can be expressed mathematically for each finite volume (as a differential equation). If one can solve the underlying equation for the each volume, one can track the overall flow of water.

```

## Why is this relevant?

We will leave you with a few examples (not an exhaustive list) of how the FVM is applied in civil engineering and geosciences. You are likely to encounter one (or more) such problems future courses. 

* **Fluid mechanics and hydrodynamics**: simulating the flow in rivers and reservoirs, predicting flood propagation, analysing groundwater flow, pipe and open-channel flows and conduits. FVM allows the discretisation of complex spaces to estimate properties such as velocity, pressure and even concentration.  

* **Heat Transfer**: conduction through different materials, optimising heating and cooling systems in buildings and analysing the thermal behaviour of structures.  

* **Pollutant transport and dispersion**: simulate the impact of pollutants in the atmosphere or water bodies. This is crucial for designing pollution control systems and assessing contamination. 

* **Structural Analysis**: the FVM is primarily associated with fluid mechanics and heat transfer but it can be adapted for stress and deformation in solid structures. This technique is particularly useful in geotechnical engineering and civil infrastructure. 

* **Multiphysics Problems**: FVM can handle multi-physics simulations by combining fluid flow, heat transfer, chemical reactions, stress analysis, chemical transport and other processes in a single model. For example, FVM can analyse the thermal behaviour of a dam holding back sediment-laden water. 

In short, the FVM is powerful tool for in civil engineering and geosciences for understanding and predicting the behaviour of complex systems, which ultimately aids for design, analysis and decision-making. 

---

```{note} Objectives for this chapter

In this chapter you will be introduced to:

* Differences between FDM and FVM
* Gauss’s theorem for converting a conservation law in its differential form to an integral form 
* Application of Gauss’s theorem to conservation laws (mass and momentum only) 
* Discrete solution of the integral form of the conservation laws (finite volume method) 

And, with this, the **main objectives** for this chapter involve:

* Revising the parts on numerical integration, discretisation of derivatives using the Taylor series, forward and backward Euler time integration and Cauchy problems from the week on the FDM
* Understanding the conversion of a partial differential equation into its integral form 
* Discretising space as finite volumes and calculating fluxes (similar to discretising space as points and calculating derivatives as part of the FDM) 
* The stability of differential equations being solved using the FVM (similar to FDM) 

```

For the sake of brevity, equations and explanations concerning the FDM, will only be referenced. Please go to the relevant chapters when in doubt or lacking context.  