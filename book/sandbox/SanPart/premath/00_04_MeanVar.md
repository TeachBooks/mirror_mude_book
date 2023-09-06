(meanvar)=
# Expectation (mean) and variance

## Mean or expectation
The mean is the first moment of a probability distribution and is also referred to as the *expectation* of the random variable $X$, and is defined as:

$$
\mathbb{E}(X) = \mu_X = \sum_{i=1}^N x_i p_X (x_i)
$$

for discrete distributions, where $p_Y(x_i)$ are the probability masses for all possible outcomes $x_i$, $i=1,\ldots,N$.

For continuous distributions the equivalent is:

$$
\mathbb{E}(X) = \mu_X = \int_{-\infty}^{\infty} x f_X (x)dx
$$

where $f_X (x)$ is the probability density function.

We will often use the notation $\mathbb{E}(X)=\mu_X$.

The empirical or sample mean based on $m$ outcomes (or: realizations) $x_i$ can be computed as:

$$
\hat{\mu}_X = \frac{1}{m}\sum_{i=1}^m x_i
$$

where we use the ^-symbol to indicate it is an *estimate* of the mean based on a number of realizations.

In analogy, the theoretical mean or expected value of a continuous random variable follows as:

## Variance 

The outcomes or realizations of a random variable will by definition inhibit a certain spread; they will fluctuate around the mean. The variance  or dispersion  of a random variable  is a measure of these fluctuations around the mean, and is defined by:

$$
\begin{align*}
\mathbb{D}(X) = \sigma^2_X &= \mathbb{E}((X-\mu_X)^2)\\
&= \int_{-\infty}^{\infty} (x-\mu_X)^2 f_X (x)dx
\end{align*}
$$

Hence, the variance equals the expectation of the squared deviations from the mean value. The variance is the *second central moment*.

Based on the formula for the sample mean, we can also find the expression for the sample variance:

$$
\hat{\sigma}_{X}^2 = \frac{1}{m-1}\sum_{i=1}^m (x_i-\hat{\mu}_X)^2
$$

Note that here we divide by $m-1$ instead of $m$. The reason is that otherwise you would get a sample variance which on average would deviate from the true value. In other words, by dividing by $m-1$ we guarantee that if you would repeatedly determine the sample variance based on a new set of $m$ observations, the average of these sample variances converges to the true variance. For large $m$ this of course does not matter much.

The standard deviation $\sigma_X$ of random variable $X$ is given by the square root of its variance.

