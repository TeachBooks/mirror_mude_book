
# Gumbel distribution

Gumbel distribution is widely used to model maximum and minimum values of natural phenomena, such as wave storms or floods. You will learn more about this application in the Extreme Value Analysis section. The PDF of the Gumbel distribution is given by 

$
f(x) = \frac{1}{\beta}e^{-\left( \frac{x-\mu}{\beta} + e^{-\left( \frac{x-\mu}{\beta} \right)}\right)}
$

where $\mu$ is the location parameter and $\beta>0$ is the scale parameter. In the figure below the influence of these parameters is presented.

In the right pannel of the figure below, an example of the PDF of three Gumbel Exponential distributions is shown. The first two distributions (black and blue continuous lines) present the same $\beta=1$ but different $\mu_{black}=0$ and $\mu_{blue}=2$. This produces a shift towards the positive values of the distribution, being the mode $=\mu$. Note that the shape of the PDF is identical, so $\mu$ does not influence the dispersion of the distribution. This can also be seen in the left pannel, where random samples from the distribution are drawn. The samples coming from the distribution with $\mu_{blue}=2$ are higher than those coming from the one with $\mu_{black}=0$, while both present a similar dispersion.

Regarding the third distribution (red crosses in the left pannel and red dashed line in the right pannel), it presents the same $\mu=0$ than the first distribution (black dots in the left pannel and continuous black line in the right pannel) but different $\beta$: $\beta_{black}=1$ and $\beta_{red}=3$. In the right pannel, it can be observed that both distributions present the same mode in $x=0$. However, the dispersion of the distribution with $\beta_{red}=3$ is way higher. This effect can also be seen in the random samples in the left pannel. Random samples from $\beta_{black}=1$ range from -2 to 4 approximately, while random samples from $\beta_{red}=3$ range from -2 to 8 approximately, having one sample a value of almost 14. 

```{figure} /sandbox/continuous/figures/gumbel.png

---

---
Gumbel distribution function: (left) random samples, and (right) PDF.
```

Integrating the PDF, the following expression of the CDF is derived

$
F(x) = e^{-e^{-\frac{x-\mu}{\beta}}}
$

which is displayed in the figure below.

```{figure} /sandbox/continuous/figures/gumbel_cdf.png

---

Gumbel distribution function: CDF.
```

The influence of the parameters can also be observed in the CDF. The continuous blue and black distributions present the same shape while the blue distribution is shifted towards positive values due to the higher value of $\mu$. Regarding the dashed red distribution, the slope of the CDF is way more gentle, showing a higher dispersion than the other two distributions due to the higher value of $\beta$.

## Some properties

The mean of the Gumbel distribution can be computed as

$
E[X]=\mu + \gamma \beta
$

where $\gamma \approx 0.577$ is the Euler-Mascheroni constant. The variance is given by

$
Var[X] = \frac{\pi^2}{6}\beta^2
$

Finally, note that Gumbel distribution is not symmetric and presents positive skewness. This is, it presents a tail towards positive values. Actually, the skewness of this distribution can be analytically computed and it is approximately 1.14.