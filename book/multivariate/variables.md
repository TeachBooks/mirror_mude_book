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

Here, we will illustrate the concepts of AND, OR and conditional probabilities using a bivariate case the discharges of two rivers, $q_1$ and $q_2$, respectively. We will assume that we have 34 observations of the discharges at the same time. In the figure below (panel (a)), you can see how those observations look.

```{figure} ./figures/samples_marginal.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$): (a) paired observations, and (b) paired observations highlighting those where $q_1>100 m^3/s$.
```

In panel (b) in the figure above, we have highlighted the number of events where $q_1>100 m^3/s$. We could compute $P(q_1>100 m^3/s) = 11/34 \approx 0.32$.

We can apply a similar approach to compute the joint probabilities of $q_1$ and $q_2$. As you an see in the figure below, you can see highlighted the region of the samples where $q_1 \leq 100 m^3/s$ and $q_2 \leq 75 m^3/s$. Thus, we can compute the joint probability $F(q_1 \leq 100, q_2 \leq 75)$ by counting the number of observations in that region so $F(q_1 \leq 100, q_2 \leq 75) = 21/34 = 0.62$

```{figure} ./figures/and.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$) highlighting those where $q_1 \leq 100 m^3/s$ and $q_2 \leq 75 m^3/s$.
```

Moving now to the OR case, in the panel (c) of the figure below, the area where $q_1 \leq 100 m^3/s \cup q_2 \leq 75 m^3/s$ is highlighted. Thus, we could count the samples in that area and compute $P(q_1 \leq 100 m^3/s \cup q_2 \leq 75 m^3/s)$ the same way as for the joint probability before: $P(q_1 \leq 100 m^3/s \cup q_2 \leq 75 m^3/s)=24/34 \approx 0.71$

```{figure} ./figures/or.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$): (a) highlighting those where $q_1 \leq 100 m^3/s$, (b)  highlighting where $q_2 \leq 75 m^3/s$, and (c) highlighting those where $q_1 \leq 100 m^3/s \cup q_2 \leq 75 m^3/s$.
```

Moreover, similar to discrete events, it is also possible to compute the OR probability as the sum of the marginal probabilities (panels (a) and (b) in the figure above) minus the joint probability, as we would be counting it twice

$$
P(q_1 \leq 100 m^3/s \cup q_2 \leq 75 m^3/s) = \\

= P(q_1 \leq 100 m^3/s) + P(q_2 \leq 75 m^3/s) - P(q_1 \leq 100 m^3/s \cap q_2 \leq 75 m^3/s)=\\
= (23+22-21)/34 = 24/34 \approx 0.71
$$

As previously mentioned, when evaluating a multivariate (here bivariate) cumulative distribution function, we obtain joint probabilities ($F(x, y)= F(X \leq x, Y \leq y)$). However, when designing or assessing a system, it is usually interesting to evaluate $F(X > x, Y > y)$. **Note that $F(X > x, Y > y) \neq 1 - F(X \leq x, Y \leq y)$.** In the figure below, we illustrate the process of how to compute $F(X > x, Y > y)$.

```{figure} ./figures/and_exceed.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$): (a) highlighting those where $q_1 \leq 100 m^3/s$, (b)  highlighting where $q_2 \leq 75 m^3/s$, and (c) highlighting those where $q_1 > 100 m^3/s \cap q_2 > 75 m^3/s$.
```

We can calculate $P(q_1 > 100 m^3/s \cap q_2 > 75 m^3/s)$ making use of the property that $\int_{-\infty}^{+\infty}f_X(x)dx =1$. This is, we deduct from 1 the marginal probabilities of being below or equal 100 and 75 $m^3/s$, respectively, and we add the joint probability of both being below 100 and 75 $m^3/s$, respectively, at the same time to prevent removing the same area twice. Thus, we can compute $P(q_1 > 100 m^3/s \cap q_2 > 75 m^3/s)$ as

$$
P(q_1 > 100 m^3/s \cap q_2 > 75 m^3/s) = \\

= 1 - P(q_1 \leq 100 m^3/s) - P(q_2 \leq 75 m^3/s) + P(q_1 \leq 100 m^3/s \cap q_2 \leq 75 m^3/s)=\\
= 1-(23+22-21)/34 = 24/34 \approx 0.29
$$

We can confirm that calculating by counting the samples highlighted in panel (c) in the figure above.


## Independent continuous random variables

When two random variables, X and Y, are independent, the value of one variable does not influence the value of the other variable. And, formally, X and Y are considered independent **if and only if** the joint probability function (or cumulative distribution function) can be factorized into the product of their marginal probability functions (or cumulative distribution functions). This is, 

$F(x, y) = P(x<X \bigcap y<Y ) = P(x<X)P(y<Y) = F(x)F(y)$

The different relationships above highlights the connection between the joint cumulative distribution function (CDF) and the marginal CDFs of two independent random variables, X and Y.

## Conditional probability of continuous variables

Compute probabilities from samples.

Illustrate the difference between the theoretical and empirical probabilities. Include a table that summarizes them and describe how this can be used to validate the multivariate distribution (**obviously** we should illustrate a case where dependence is important: many observations where _both_ rivers flood).

**Illustrate explicitly that this is the thing that is inaccurate in the example:**

$$
F_{X_1,X_2}(X_1>x_1,X_2>x_2)
$$

**So now we need a way to describe dependence!** 
