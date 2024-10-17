(multivariate_variables)=
# Multivariate Continuous Random Variables

This page covers fundamental concepts for _continuous random variables._ As we are interested in considering more than one variable simultaneously, the term _multivariate_ is used. We will start by translating the concepts covered on the previous page from _discrete events_, allowing us to arrive at a clear understanding of the concept of probabilistic _dependence_ for multivariate continuous random variables.

## From Discrete to Continuous

Although the previous page considered _discrete events_ $A$ and $B$, the interpretation of probabilistic concepts are directly analogous to the case of _continuous random variables._

### Intervals

Recall that a continuous random variable $X$ can take an infinite number of values; this is because a _realization_ of the random variable, $x$, can be any real number (if the distribution is unbounded):

$$
x \in \mathbb{R}
$$

We are typically interested in a specific combination of values of a random variable, thus it is useful to denote an _interval_ as $\Omega$, for example

$$
\Omega = {x \in \mathbb{R}: a \leq x < b}
$$

defines an interval of the random variable $X$ between $x=a$ and $x=b$. Such intervals could be defined as the need arises, for example, $\Omega$ contains the set $x \in \mathbb{R}$ such that:

$$
\begin{cases} 
   &x \leq a \\
   &x > b 
\end{cases}
$$

However, most of the time we are interested in intervals where the random variable is greater than or less than a specific value.

:::{card} Definitions
Given a specific value of interest $x^*$ for a random variable $X$, **exceedance** is the condition:

$$
\Omega_{e} = {x \in \mathbb{R}: x > x^*}
$$

Similarly, _non-exceedance_ is the condition:

$$
\Omega_{ne} = {x \in \mathbb{R}: x \leq x^*}
$$

Note that $\Omega_{ne}$ is the complement of $\Omega_{e}$.

:::

Having defined intervals, it should now be obvious how to translate the concepts from discrete events to continuous random variables:

$$
A \;\;\rightarrow\;\; \Omega
$$

A discrete event is analogous to an interval $x \subseteq \mathbb{R}$, and instead of the probability of event $A$, $P(A)$, we will refer to the probability of a realization $x$ being in the interval $\Omega$, denoted $P[\Omega]$.

In the case of _two_ random variables, $\Omega$ is defined for both, and the _interval_ becomes a _region:_

$$
\Omega = 
\begin{cases} 
   x \in \mathbb{R}: & x \subseteq \Omega_x \\
   y \in \mathbb{R}: & y \subseteq \Omega_y
\end{cases}
$$

For now we will consider only the case where the multivariate region $\Omega$ consists of intervals defined for each of the random variables individually, as in the equation above. In a later section we will describe $\Omega$ as a _function of random variables._ In addition, to easily distinguish the individual random variables, we introduce the term _marginal_:

:::{card} Definition
A **marginal** distribution is the univariate distribution associated with a single random variable that is part of a multivariate distribution.
:::

### One Random Variable

The distribution of $X$ is described with a probability _density_ function (PDF), $f_X(x)$. Integration of the _density_ function over a specific interval $\Omega$ gives the _probability_ of the random variable $X$ taking a value $x$ within that interval, for example:

$$
P[\Omega]
= \int_{\Omega} f_X(x) \, \textrm{d}x
$$

A commonly used interval is $\Omega_{ne}$, the non-exceedance interval described above:

$$
\Omega=\Omega_{ne}
\;\; \rightarrow \;\;
P[\Omega_{ne}]
= P[X \leq x^*]
= F_X(x^*)
= \int_{-\infty}^{x^*} f_X(x) \, \textrm{d}x
$$

where $F_X(x^*)$ is the cumulative _distribution_ function (CDF), which by definition evaluates interval $\Omega_{ne}$.

:::{card} Definitions
The **exceedance probability**, $P[\Omega_{e}]$, and **non-exceedance probability**, $P[\Omega_{ne}]$ are analogous to the intervals defined above:

$$
P[\Omega_{e}] = P[X > x^*] = 1 - F_X(x^*)
$$

$$
P[\Omega_{ne}] = P[X \leq x^*] = F_X(x^*)
$$

:::

### Two Random Variables

Extending the notation above for the case of two random variables $X$ and $Y$, the _bivariate_ distribution (i.e., the _multivariate_ distribution for two random variables) has PDF $f_{X,Y}(x,y)$ and CDF $F_{X,Y}(x,y)$, respectively. Probabilities can be computed as follows:

$$
P[X\leq x,Y\leq y]
= F_{X,Y}(x, y)
= \int_{-\infty}^{y}\int_{-\infty}^{x}
  f_{X,Y}(x, y)\,\textrm{d}x\,\textrm{d}y
$$

The equation above arises from the definition of the multivariate CDF, and is also illustrates a specific combination of two intervals: the _joint non-exceedance_ of $X$ and $Y$. The term _joint_ arises from the need to describe more than one variable in a multivariate context. 

:::{card} Definition
The distribution of more than one random variable described in the same probability space is a **joint distribution.** For the bivariate case the **joint probability density function** is $f_{X,Y}(x,y)$. A **joint probability**, $P[\Omega]$, is that found by integrating the joint PDF  sub-region of the probability space:

$$
P[\Omega] = \int_\Omega f_{X,Y}(x,y) \;\textrm{d}x\;\textrm{d}y
$$

where $\Omega$ can be defined as a combination of each

:::

## Intersection: AND, Joint

As in the case of discrete events, the AND case for continuous random variables is when both "situations" occur together. Applying the definitions from above provides the following definition:

$$
P[X \leq x, Y \leq y] = F_{X,Y}(x, y)
$$

:::{card} Definition
The **AND probability** is the _intersection_ of two events $P[X \subseteq \Omega_{x,e}, X \subseteq \Omega_{y,e}]$.
:::


However, note that we can evaluate joint probabilities that are defined by any combination of intervals of the marginal distributions. between other "events". For example, joint exceedance, as described above, or joint non-exceedance. It is conventionally associated with the _joint exceedance_ case to distinguish from the joint non-exceedance case, which is simply evaluated with the _joint CDF._

```{tip}
The term _AND probability_ can be assumed to mean _joint exceedance_, unless explicitly stated otherwise.
```

Computing the AND probability is not as straightforward as the non-exceedance probability: it requires the use of conditional probability. However, it _is_ possible to compute the AND probability emperically, so let's try it!

### AND: Empirical Computation

Here, we will illustrate the concepts of AND (and later OR) probabilities using a bivariate case of the discharges of two rivers located close to each other, $q_1$ and $q_2$, respectively. We will assume that we have 34 observations each of the discharges (taken at the same time). In the figure below (panel (a)), you can see the observations.

```{figure} ./figures/samples_marginal.png

---

---
Samples of the discharges of two rivers ($q_1$ and $q_2$): (a) paired observations, and (b) paired observations highlighting data for the marginal case $q_1>100 m^3/s$.
```

In panel (b) in the figure above, we have highlighted the number of events where $q_1>100 m^3/s$. We can thus compute $P(q_1>100 m^3/s) = 11/34 \approx 0.32$ (the marginal parobability of $q_1$).

We can apply a similar approach to compute the joint probabilities of $q_1$ and $q_2$. As you an see in the figure below, the region of the samples where $q_1 \leq 100 m^3/s$ and $q_2 \leq 75 m^3/s$ is highlighted. Thus, we can compute the joint probability of non-exceedance $P[q_1 \leq 100, q_2 \leq 75]$ by counting the number of observations in that region. This results in:

$$
P[q_1 \leq 100, q_2 \leq 75] = 21/34 \approx 0.62
$$

```{figure} ./figures/and.png
---
width: 60%
---
Samples of the discharges of two rivers ($q_1$ and $q_2$) highlighting the non-exceedance region, $q_1 \leq 100 m^3/s$ and $q_2 \leq 75 m^3/s$.
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
