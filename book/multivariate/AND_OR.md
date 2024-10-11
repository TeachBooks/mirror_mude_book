
# Basic concepts to start

Before going further into continuous multivariate distributions, we will start with a reminder of some basic concepts you have seen previously: independence, AND and OR probabilities, and conditional probability.

If you also need further practice or to revisit other concepts such as mutually exclusive events or collectively exhaustive, you can go [here](https://teachbooks.github.io/learn-probability/section_01/Must_know_%20probability_concepts.html).

## AND and OR probabilities

Let's move back to discrete events to explain what AND and OR probabilities are. Imagine two events, A and B. These can be, for instance, the fact that it rains today (A) and the fact that the temperature is below 10 degrees (B).


```{figure} ../events.pdf

---

---
Venn diagram of the events A and B.
```

## Independence

When two random variables, X and Y, are independent, it means that the occurrence or value of one variable does not influence the occurrence or value of the other variable.

Formally, X and Y are considered independent **if and only if** the joint probability function (or cumulative distribution function) can be factorized into the product of their marginal probability functions (or cumulative distribution functions). This is, 

$F(x, y) = P(x<X \bigcap y<Y ) = P(x<X)P(y<Y) = F(x)F(y)$

The different relationships above highlights the connection between the joint cumulative distribution function (CDF) and the marginal CDFs of two independent random variables, X and Y.

Definition of independence 

Definition of And and OR probabilities using Venn diagrams

Move to continuous distributions and compute them from samples

## Conditional probability

Point to Bayes

Definition to conditional probability

Compute conditional probabilities from samples
