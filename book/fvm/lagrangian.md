(fvm_frames)=
# Lagrangian and Eulerian Reference Frames

```{note} Important things to retain from this chapter

* Relationship between Eulerian and Lagrangian frames 
* Lagrangian derivative that expresses this relationship mathematically 
* Why one works with an Eulerian frame (generally) in fluid mechanics  

```
In physics-based modelling, a _reference frame_ describes a coordinate system that is defined relative to specific points of interest. _Lagrangian_ and _Eulerian_ reference frames are two approaches used in fluid mechanics that are useful for describing the motion and behavior of a fluid over time. Although they are completely different perspectives on the same phenomenon, both are necessary to fully model the movement of particles or elements within the fluid mathematically.

Some concepts and notation on this page are explained further in {ref}`notation page <fvn_notation>`.

```{admonition} MUDE Exam Information

:class: tip

This page is to provide background information to support the flow-focused conervation equations that are used in FVM. You are not expexted to reproduce this for the exam, but reading through it will give you a better understanding for why and how the equations are derived, as well as different modelling persectives.
```

**Lagrangian Frame**

In a Lagrangian frame, one follows the particles as they move through space; {numref}`gauss4` illustrates how a particle is described in Cartesian coordinates for the Lagrangian frame using position $\mathbf{x}_L(t)$ and velocity $\mathbf{u}_L$. The reference frame is illustrated by the small Cartesian coordinate system  attached to the particle. Because the frame is moving with the particle it will not witness any relative motion. Therefore, position and velocity are functions of time only, not space.

A Lagrangian frame is helpful for understanding the history and trajectory of individual particles. In fluid mechanics it is suitable for studying issues like particle dispersion, tracer movement or tracking the paths of specific objects in a flow. For solid mechanics it is useful for describing deformation.

```{figure} ./figs/gauss4.png
---
width: 60%
name: gauss4
---
Lagrangian (left) and Eulerian (right) reference frames.
```

**Eulerian Frame**

Instead of following individual particles, the Eulerian frame observes what is happening at fixed points in space; {numref}`gauss4` illustrates how particle velocity is described in Cartesian coordinates for the Eulerian frame using $\mathbf{u}(x,y,z,t)$. The reference frame is illustrated by the small unit volume surrounding the particle. Because the frame stays fixed, the Eulerian frame is often described as "watching the particles move through the box."

A Eulerian frame is helpful suitable for studying the overall properties of a fluid, for example: flow patterns, pressure distribution or heat transfer. It provides a global view of what is happening in the volume at various locations. 

In summary, the Lagrangian frame follows individual elements as they move through space, providing a particle-focused view, whereas the Eulerian frame makes observations from fixed points in space, offering a location-based perspective. The choice between these frames depends on the specific problem one is trying to solve and in many cases, a combination of both frames may be used to gain a complete understanding of a fluid. 

## Material Derivative

As the reference frames are can be related by a mapping (one-to-one transformation) between two Cartesian coordinate systems, $\mathbf{x}_L=\chi(\mathbf{x})$, the velocity and location vectors are the same for a small change in time, $dt$. This is called _Lagrangian-Eulerian equivalence_, and is illustrated in {numref}`gauss5`.

```{figure} ./figs/gauss5.png
---
width: 60%
name: gauss5
---
Displaced particle in Lagrangian (left) and Eulerian (right) reference frames.
```

Consider a system of particles in motion using the reference frames in {numref}`gauss5` from time $t$ to $t+\t$. In the Lagrangian frame a new velocity is observed for the particle of interest at time $t+dt$ (a function of time only). The reference frame has moved with the particle (black circle), and a new particle is now in the location of the frame at time $t$ (white circle). On the other hand, in the Eulerian frame the original particle (black circle) has simply left the cube after time $dt$ has passed and a new particle (white circle) is observed with a different velocity (a function of both time and space). In this case, the reference frame does not move.

For small $dt$ and if the spatial scale at which the particles are being observed is much larger than the scale of the particles themselves (the molecular scale), the particle system can be viewed as a continuous mass (i.e., a fluid or deformable solid). Therefore, the change in velocity in the Lagrangian frame is the same as the change observed in the Eulerian frame. In other words, the two descriptions of motion of the black and white circles are equivalent. Mathematically:

$$
d\mathbf{u_L}(t)=d\mathbf{u}(x,y,z,t)
$$

The right-hand side is a function of 4 variables; application of the chain rule of differentiation leads to:

$$
d\mathbf{u_L}(t)
= \frac{\partial\mathbf{u}}{\partial x}dx
+ \frac{\partial\mathbf{u}}{\partial y}dy
+ \frac{\partial\mathbf{u}}{\partial z}dz
+ \frac{\partial\mathbf{u}}{\partial t}dt
$$

Dividing by $dt$ while recalling that $\frac{dx}{dt}=u$, which is the $x$-component of velocity, one gets:

$$
\frac{d\mathbf{u_L}(t)}{dt}
= u\frac{\partial\mathbf{u}}{\partial x}
+ v\frac{\partial\mathbf{u}}{\partial y}
+ w\frac{\partial\mathbf{u}}{\partial z}
+ \frac{\partial\mathbf{u}}{\partial t}
$$

This is the mathematical representation of Lagrangian-Eulerian equivalence, and implies that the quantities on both sides are the same in the Cartesian frame. Rearranging and combining terms the _material derivative_ (or _Lagrangian derivative_):
$$
\frac{D\mathbf{u}}{Dt}
= \frac{\partial\mathbf{u}}{\partial t}
+ (\mathbf{u}\cdot\nabla)\,\mathbf{u}
$$

While we will not use the material derivative often in this textbook, it is important for work in continuum mechanics. When conservation laws are used to model real-world phenomenon, especially flow applications, measurements are being performed at specific locations defined in a Lagrangian frame, for example, probes (points) or electromagnetic or sound waves (lines), but the phenomenon is being measures in an Eulerian frame. In other words, observing changes in a volume (or multiple volumes) rather than the movement of a particle in the fluid of interest. The Lagrangian derivative is the only way to convert the Eulerian spatial experimental data into a (Lagrangian) description of the way that the fluid moves through space and time.