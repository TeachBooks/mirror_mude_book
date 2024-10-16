(multivariate_variables)=
# Multivariate Random Variables

Let's move now to continuous variables! We will start translating the concepts you refreshed in the previous page from discrete to continuous random variables and we will introduce the concept of probabilistic dependence.

## AND and OR probabilities for continuous random variables

The AND probability or intersection of two continuous random variables, X and Y, typically refers to the **joint probability** which denoted as

$$
F(x, y) = F(X \leq x, Y \leq y)
$$

However, note that we can perform the intersection between other "events". This is, we could define the probability of the intersection of X and Y exceeding x and y, respectively, $F(X > x, Y > y)$, or the probability of the intersection of X exceeding x and Y being equal or below y, $F(X > x, Y \leq y)$.

### Let's compute it with samples!

Here, we will illustrate the concepts of AND and OR probabilities using a bivariate case of the discharges of two rivers located close to each other, $q_1$ and $q_2$, respectively. We will assume that we have 34 observations of the discharges at the same time. In the figure below (panel (a)), you can see how those observations look.

```{figure} ./figures/samples_marginal.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$): (a) paired observations, and (b) paired observations highlighting those where $q_1>100 m^3/s$.
```

In panel (b) in the figure above, we have highlighted the number of events where $q_1>100 m^3/s$. We could compute $P(q_1>100 m^3/s) = 11/34 \approx 0.32$.

We can apply a similar approach to compute the joint probabilities of $q_1$ and $q_2$. As you an see in the figure below, you can see highlighted the region of the samples where $q_1 \leq 100 m^3/s$ and $q_2 \leq 75 m^3/s$. Thus, we can compute the joint probability $F(q_1 \leq 100, q_2 \leq 75)$ by counting the number of observations in that region so $F(q_1 \leq 100, q_2 \leq 75) = 21/34 \approx 0.62$

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

The relationship above highlights the connection between the joint cumulative distribution function (CDF) and the marginal CDFs of two independent random variables, X and Y.

### Is dependence relevant?

Opposite to the definition of independence, X and Y are considered dependent when the value of one variable influences the value of the other variable and, thus, we cannot make use of the above simplification.

Let's now go back to the above example of computing the joint probabilities of $q_1$ and $q_2$. We computed ir from the samples as $F(q_1 \leq 100, q_2 \leq 75) = 21/34 \approx 0.62$.

```{figure} ./figures/and.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$) highlighting those where $q_1 \leq 100 m^3/s$ and $q_2 \leq 75 m^3/s$.
```

If we would have compute $F(q_1 \leq 100, q_2 \leq 75)$ assuming independence, we would obtain

$$
F(q_1 \leq 100, q_2 \leq 75) = F(q_1 \leq 100)F(q_2 \leq 75) = 23/34 \times 22/34 \approx 0.44
$$

There is a significant difference between both approaches (0.62 vs. 0.44), illustrating the relevance of dependence.

## Conditional probability of continuous variables

A conditional probability is a measure of the probability of an event occurring given that another event has already occurred.  The following relationship holds for events X and Y:

$P(x<X \vert y<Y) = \frac {P(x<X \bigcap y<Y )}{P(y<Y)} = \frac{F(x, y)}{F(y)}$

$ F(x, y) = F(x \vert y)F(y) = F(y \vert x)F(x) $

Where:

1. $P(x<X \vert y<Y)$ represents the conditional probability that event X is less than a certain value x, given that event Y is less than a certain value y.

2. $P(x<X \bigcap y<Y)$ represents the joint probability that both X is less than x and Y is less than y.

3. $F(x, y)$ represents the joint cumulative distribution function (CDF) of X and Y, which gives the probability that both X and Y are less than or equal to their respective values x and y.

4. $F(x)$ represents the marginal cumulative distribution function (CDF) of X, which gives the probability that X is less than or equal to x.

5. $F(y)$ represents the marginal cumulative distribution function (CDF) of Y, which gives the probability that Y is less than or equal to y.

### Let's go back to our example!

Imagine that we have a rudimentary measurement device of the discharges in river one, so we know that $q_1 > x$. If $q_2$ is **independent** from $q_1$, knowing the value of $q_1$ does not provide us with any information so 

$$
P(q_2 > y| q_1 > x) = \frac{P(q_2 > y \cap q_1 > x)}{P(q_1 > x)} = \frac{P(q_2 > y)\cancel{P( q_1 > x)}}{\cancel{P(q_1 > x)}} = P(q_2 > y)
$$

However, since these rivers are located close to each other, it is likely that they belong to the same system and their discharges are the result of similar drivers. Therefore, knowing information about one discharge gives us information about the discharge of the other river and, thus, $q_1$ and $q_2$ are expected to be correlated and are **dependent** on each other. We could compute $P(q_2 > y| q_1 > x)$ by using the joint probability distribution of $q_1$ and $q_2$ to evaluate $P(q_2 > y \cap q_1 > x)$ accounting for the dependence.

Let's see if we can also calculate conditional probabilities from our observations. Imagine that we want to know what is the probability of $q_2 > 150 m^3/s$ given that we know that $q_1 > 130m^3/s$, so $P(q_2 > 150 m^3/s|q_1 > 130m^3/s)$. As you can see in panel (a) in the Figure below, there are 6 samples where $q_1 > 130m^3/s$. That is now the 'space' where we are, that is our 'reality' now. In panel (b), we can see that two of those samples fulfill that $q_2 > 150 m^3/s$. Therefore, we can compute the aforementioned conditional probability as

$$
P(q_2 > 150 m^3/s|q_1 > 130m^3/s)=2/6 \approx 0.33
$$

```{figure} ./figures/conditional.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$): (a) highlighting those where $q_1 > 130 m^3/s$, (b)  highlighting where $q_1 > 130 m^3/s$, and $q_2 > 150 m^3/s$.
```

Note that if we would assume independence, we would obtain $P(q_2 > 150 m^3/s|q_1 > 130m^3/s)=P(q_2 > 150 m^3/s)=2/34 \approx 0.06$. The large difference between both probabilities, illustrates the role of dependence.

**So now we need a way to describe dependence!** 
