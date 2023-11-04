# A note on stability

```{note} Important things to retain from this chapter

* Stability is not a concept for the finite difference method alone
* How an instability can arise while solving equations with the finite volume method
* How the instability can be dealt with

```

**Instability is inherent** to all mathematical methods, especially when applied to complex differential equations. In the week on the FDM, you were shown how the solution to the simple Cauchy equation and its existence depended directly on the method used for solving equation with the FDM (forward and back Euler stability criterion).

The same will apply to any time-dependent problem being solved with the FVM. If one uses the **forward Euler** scheme, say with the Navier-Stokes equations, the system is **conditionally stable**. But the stability criterion as we had so easily derived for the Cauchy problem in FDM, is not as simple to derive for more complex equations. As an alternative, one can choose to use the **unconditionally stable backward Euler scheme** but that will require an iterative solution (using Newton-Raphson), in which one will have to calculate the derivatives of the equation and perform a matrix inversion (FVM like FDM will have matrices!). A topic so complicated that it is a line of research by itself. 

But as a rule of thumb, one can use the **CFL criterion** (Courant-Friedrich-Lewis) based on the calculation of what is known as the **Courant number**:

$$\text{Courant}=\frac{u\Delta x}{\Delta t}<1$$

What this number actually tells you is how fast the information leaves a finite volume cell, i.e. the velocity inside the cell times the length of the cell $u\Delta x$ as compared to the time step being used to advance in time, $\Delta t$. If $u\Delta x>\Delta t \implies$ there will be **instability** for **explicit** time methods as Forward Euler and Runge-Kutta methods. Therefore, in such cases, the Courant number should ***always*** be less than one. This also means that if one is using a very fine spatial resolution to resolve spatial features accurately, the time-set must be very small to maintain a Courant number that is less than 1. But if one uses an implicit scheme such as the backward Euler, one can have Courant numbers as high as 200! 