
# Exponential distribution

Another widely used distribution function is the Exponential distribution. For instance, it is applied to model the waiting time between succesive events of a Poisson process. The PDF of the Exponential distribution is given by

$
f(x) = \lambda e^{-\lambda x} \hspace{1cm} for \ x \geq 0, \lambda>0
$

$
f(x) = 0 \hspace{1cm} otherwise
$

where $\lambda$ is the parameter of the distribution, which is often called *rate*. In the RIGHT pannel of the figure below, an example of two Exponential distributions with $\lambda =1$ and $\lambda = 2$ is shown. As you can see, the maximum density in the PDF of en Exponential distribution is located at zero and it is followed by an Exponential decay. The higher the parameter $\lambda$, the higher the value of the density in $x=0$ and the faster the decay. In other words, the higher the parameter $\lambda$, the more concentrated the values of the random variable which are likely to occur and, thus, the lower the standard deviation. This can be seen on the left pannel of the figure, where random samples of the distribution are plotted. There you can see how higher values of the random variable $x$ appear when $\lambda = 1$, presenting then a higher dispersion.

```{figure} /sandbox/continuous/figures/exponential.png

---

---
Exponential distribution function: (left) random samples, and (right) PDF.
```



Integrating the PDF, the following expression of the CDF is obtained

$
F(x) = 1 - e^{-\lambda x}
$

which is visually represented in the figure below.

```{figure} /sandbox/continuous/figures/exponential_cdf.png

---

---
Exponential distribution function: CDF.
```

The influence of the parameter $\lambda$ can also be observed in the CDF. The higher the parameter $\lambda$, the faster the CDF reaches values of the non-exceedance probability close to 1. Thus, lower variability of the random variable is obtained.

**Memoryless property of the exponential distribution? Exercise with that? Time between earthquakes?**