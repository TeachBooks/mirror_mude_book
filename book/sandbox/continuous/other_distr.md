
# Non-Gaussian distributions

So far, you have seen that we can use a parametric distribution to model the uncertainty in our observations. Also, you have revisited one of those parametric distributions, the Gaussian distribution, which is a widely used model since it has lots of applications such as modelling natural processes or measurement errors. Here, we will discuss an interesting property of this distribution, the lack of **asymmetry**, and introduce the concept of the **tail of the distribution**.

## Asymmetry

Asymmetry is a relevant property of a distribution which analyzes its shape. In the Figure below, you have the PDF of a Gaussian distribution.

```{figure} /sandbox/continuous/figures/one_gaussian.png

---

---
Gaussian PDF.
```

As you can see, the shape of the PDF is perfectly symmetric with respect to the mode[^mode] of the distribution. This leads to an interesting property: for perfectly symmetric distributions the mode, mean[^mean] and median[^median] have the same value.

As you can imagine, it is also possible to analyze the asymmetry of an empirical distribution. To this end, we can visually inspect the empirical PDF and compute the *sample coefficient of skewness* from a set of observations as

$
g_1 = \frac{\sum_{i=1}^n{(x_i-\overline{x})^3}}{ns^3}
$

where $x_i$ are the observations, $\overline{x}$ is the mean of the observations, $n$ is the number of observations, and $s$ is the standard deviation.

**And what happens when my observations are not symmetric?**

However, it is not always the case. It is very common to find asymmetric distributions 
## Tail of the distribution

## Lognormal distribution

for instance

## Exponential distribution

for instance


## Gumbel distribution

List of distr is tentative

[^mode]: The mode is the most frequently observed value and, thus, the value of the distribution with the highest value of the density in its PDF.
[^mean]: Visually from the PDF, we can define the mean as the value of the random variable which is the balance point of the distribution.
[^median]: Visually from the PDF, we can define the median as the value of the random variable which divides the PDF in two areas of the same value.