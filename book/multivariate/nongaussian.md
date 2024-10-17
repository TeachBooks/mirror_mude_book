
# Non-Gaussian Multivariate Distributions

The multivariate Gaussian distribution $\Phi_X(x)$ is a simple, effective and widely used approach for capturing dependence in multivariate situations. However, for continuous random variables, it has limitations due to it's inability to capture:

- non-Gaussian marginal distributions
- non-linear dependence

Fortunately there are many methods available that can take this into account, for example:
- Copulas
- Vine-Copulas
- Parametric and Non-Parametric Bayesian Networks

In this chapter we will focus on the use of a Copula, which provides a simple, yet incredibly flexible way to take into account non-Gaussian marginals _and_ non-linear dependence. However, for simplicity we will stick to the Gaussian Copula, which considers _linear_ dependence, just as the Multivariate Gaussian distribution does.

F(x,y) = C(u,v)f(x)f(y)

u, v = F(x), F(y)

## Bivariate copulas

Sklar theorem

Advantages: decoupling of the margins

