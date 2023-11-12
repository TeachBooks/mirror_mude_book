# Stability

Stability analysis provides insight into whether a numerical analysis scheme can be applied successfully, as well as to choose characteristics of a discretization scheme (e.g., time step or grid size). As shown with ODE's, the solution to the Cauchy equation and its existence depended directly on the method used: tje forward and backward Euler stability criterion.

The same approach can be applied to any time-dependent problem being solved with FVM: if forward Euler is used, the system is conditionally stable. However, the stability criterion derived for the Cauchy problem is not as simple to derive for the more complicated algebraic equations used in FVM. The backward Euler scheme could be used, as it is unconditionally stable; however, as an implicit method it is computationally expensive, requiring an iterative solution (e.g., Newton-Raphson) for each time step.

Fortunately the _Courant-Friedrich-Lewis criteria_ (CFL) can provide insight on stability based on the calculation of what is known as the _Courant number_, $C_N$:

$$C_{N}=\frac{u\Delta x}{\Delta t}<1$$

The Courant number describes the speed at which information leaves a finite volume cell the velocity inside the cell times the length of the cell $u\Delta x$,compared to the time step being used to advance in time, $\Delta t$. If $u\Delta x>\Delta t \implies$ explicit methods will be _unstable,_ for example, methods as Forward Euler and Runge-Kutta methods. In such cases, a problem should be set up such that the Courant number is less than one. Thuus, if a very fine spatial resolution is used, the time-set must be very small to maintain a Courant number that is less than 1. In contrast, if implicit schemes such as the backward Euler are used, Courant numbers as high as 200 are possible.