
# Non-Gaussian Multivariate Distributions

The multivariate Gaussian distribution $\Phi_X(x)$ is a simple, effective and widely used approach for capturing dependence in multivariate situations. However, for continuous random variables, it has limitations due to it's inability to capture:

- non-Gaussian marginal distributions
- non-linear dependence

Fortunately there are many methods available that can take this into account, for example:
- Copulas
- Vine-Copulas
- Parametric and Non-Parametric Bayesian Networks

In this chapter we will focus on the use of a Copula, which provides a simple, yet incredibly flexible way to take into account non-Gaussian marginals _and_ non-linear dependence. However, for simplicity we will stick to the Gaussian Copula, which considers _linear_ dependence, just as the Multivariate Gaussian distribution does.

## Bivariate copulas

Bivariate copulas, or just copulas, are joint distributions with uniform marginal distributions in [0, 1]. According to Sklar theorem, any multivariate joint distribution of continuous variables can be described as a copula that models the dependence between the variables and a set of univariate marginal distributions. The definition of copula for the bivariate case is given by

$$
H_{X_1,X_2}(x_1, x_2)=C \{F_{X_1}(x_1), G_{X_2}(x_2)\}
$$

where $H_{X_1,X_2}(x_1, x_2)$ for $(x_1, x_2) \in \mathbb{R}^2$ is a joint distribution with marginals $F_{X_1}(x_1)$ and $G_{X_2}(x_2)$ in [0, 1] and a copula in the unit square $I^2=([0,1] \times [0,1])$, being this equation satisfied for all $(x_1, x_2) \in \mathbb{R}^2$.

**But what does that mean?**

When using copulas, we are going to model the univariate distributions for each variable and the dependence with different models. That gives us a lot of flexibility. 

Sklar theorem

Advantages: decoupling of the margins

F(x,y) = C(u,v)f(x)f(y)

u, v = F(x), F(y)

