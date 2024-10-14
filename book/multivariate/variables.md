(multivariate_variables)=
# Multivariate Random Variables







## Independence

When two random variables, X and Y, are independent, it means that the occurrence or value of one variable does not influence the occurrence or value of the other variable.

Formally, X and Y are considered independent **if and only if** the joint probability function (or cumulative distribution function) can be factorized into the product of their marginal probability functions (or cumulative distribution functions). This is, 

$F(x, y) = P(x<X \bigcap y<Y ) = P(x<X)P(y<Y) = F(x)F(y)$

The different relationships above highlights the connection between the joint cumulative distribution function (CDF) and the marginal CDFs of two independent random variables, X and Y.

Definition of independence 

### Illustration

Definition of And and OR probabilities using bivariate plots and compared to the Venn diagrams.

## Samples

Compute probabilities from samples.

Illustrate the difference between the theoretical and empirical probabilities. Include a table that summarizes them and describe how this can be used to validate the multivariate distribution (**obviously** we should illustrate a case where dependence is important: many observations where _both_ rivers flood).

**Illustrate explicitly that this is the thing that is inaccurate in the example:**

$$
F_{X_1,X_2}(X_1>x_1,X_2>x_2)
$$

**So now we need a way to describe dependence!** 