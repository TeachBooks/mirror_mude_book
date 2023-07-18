# Taylor series

## Taylor's theorem for approximating functions of 1 variable

Taylor’s theorem can be used to approximate a function $f(x)$ with the so called $p$-th order Taylor polynomial:

$$
f(x) \approx f(x_0) +\frac{\partial}{\partial x}f(x_0)\Delta x + \frac{1}{2!} \frac{\partial^2}{\partial x^2}f(x_0)\Delta x^2 + \ldots +\frac{1}{p!} \frac{\partial^p}{\partial x^p}f(x_0)\Delta x^p=P_k (x)
$$

where it is required that the function $f: \mathbb{R}\mapsto \mathbb{R}$ is $p$-times differentiable at the point $x_0 \in \mathbb{R}$, and $\Delta x = x-x_0$.

The approximation error is equal to 

$$
R_p(x) = f(x)- P_k (x) 
$$

and is called the remainder term.

Example:

A linear approximation (also called linearization) of $f(x) = \cos(x)$ at $x_0$ is obtained by the 1st order Taylor polynomial as:

$$
f(x) \approx \cos x_0 – \sin x_0 \Delta x
$$

## First-order Taylor polynomial for linearizing a function of $n$ variables

In this course we will only need first-order Taylor approximations for linearizing non-linear functions of $x$ being a vector with $n$ variables. The corresponding Taylor polynomial is then given by:

$$
f(x) \approx f(x_0)  + \partial_{x_1} f(x_0) \Delta x_0+ \partial_{x_2} f(x_0) \Delta x_0+ \ldots + \partial_{x_n} f(x_0) \Delta x_0
$$

where we need the $n$ partial derivatives of function $f$ evaluated at $x_0$.

