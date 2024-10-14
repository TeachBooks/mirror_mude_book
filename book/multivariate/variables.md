(multivariate_variables)=
# Multivariate Random Variables

Let's move now to continuous variables! First, we will start translating the concepts you refreshed in the previous page from discrete to continuous random variables.

## AND and OR probabilities for continuous random variables

The AND probability or intersection of two continuous random variables, X and Y, typically refers to the **joint probability** which denoted as

$$
F(x, y) = F(X \leq x, Y \leq y)
$$

However, note that we can perform the intersection between other "events". This is, we could define the probability of the intersection of X and Y exceeding x and y, respectively, $F(X > x, Y > y)$, or the probability of the intersection of X exceeding x and Y being equal or below y, $F(X > x, Y \leq y)$.

### Let's compute it with samples

Here, we will illustrate the concepts of AND, OR and conditional probabilities using a bivariate case the discharges of two rivers, $q_1$ and $q_2$, respectively. We will assume that we have 35 observations of the discharges at the same time. In the figure below (panel (a)), you can see how those observations look.

```{figure} ../figures/samples_marginal.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$): (a) paired observations, and (b) paired observations highlighting those where $q_1>100 m^3/s$.
```

In panel (b) in the figure above, we have highlighted the number of events where $q_1>100 m^3/s$. We could compute $P(q_1>100 m^3/s) = 11/(35+1) \approx 0.31$ [^note].

## Independent continuous random variables

When two random variables, X and Y, are independent, the value of one variable does not influence the value of the other variable. And, formally, X and Y are considered independent **if and only if** the joint probability function (or cumulative distribution function) can be factorized into the product of their marginal probability functions (or cumulative distribution functions). This is, 

$F(x, y) = P(x<X \bigcap y<Y ) = P(x<X)P(y<Y) = F(x)F(y)$

The different relationships above highlights the connection between the joint cumulative distribution function (CDF) and the marginal CDFs of two independent random variables, X and Y.

## Samples

Compute probabilities from samples.

Illustrate the difference between the theoretical and empirical probabilities. Include a table that summarizes them and describe how this can be used to validate the multivariate distribution (**obviously** we should illustrate a case where dependence is important: many observations where _both_ rivers flood).

**Illustrate explicitly that this is the thing that is inaccurate in the example:**

$$
F_{X_1,X_2}(X_1>x_1,X_2>x_2)
$$

**So now we need a way to describe dependence!** 

[^note]: Remember that when computing empirical probabilities, we use the convention of dividing by the number of observations + 1 in order to prevent probabilities of 1.