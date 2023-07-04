
# Using parametric distributions as models

In the previous section, you were introduced to the concepts of random variable, probability density function (PDF) and cumulative distribution function (CDF) and how to compute them using empirical data. Here, the concept of parametric distribution as a model of the observed empirical distribution is introduced.

## Parametric distribution functions

Parametric distributions functions are mathematical models for the empirical distributions that we observe in our data. This is, a parametric CDF is just an equation which relates the non-exceedance probability with the value of the studied random variable. This equation has some parameters or coefficients that need to be fitted using our observations. 

**But why do we need them?** 

We typically fit a parametric distribution to our data for several reasons. The most important one is that the empirical distribution is limited to the observations we have. Using the empirical CDF, we can interpolate between the observed values, but we cannot extend it further and infer probabilities higher or lower than those we have observed. 

Another good reason to fit a parametric distribution is more on the practical side: an equation allows us to use all the power of analytic solutions and it is very easy to transfer and handle. Also, we can make use of the properties of the fitted distribution to have a further insight on the random variable we are studying.

## PDF and CDF of Gaussian distribution

You have already extensively used one parametric distribution! Does it ring the bell 'the bell curve'? During your BSc, you have probably used the Normal or Gaussian distribution, whose PDF presents a bell shape. The PDF of the Normal distribution is given by

$
f(x) = \frac{1}{\sigma \sqrt{2 \pi}}e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}
$

where $x$ is the value of the random variable and $\mu$ and $\sigma$ are the two parameters of the distribution. Thus, you can see that through the previous equation we establish a relationship between the probability densities and the values of the random variable. 
In the case of the Normal distribution, the parameters $\mu$ and $\sigma$ correspond to the mean and standard deviation of the random variable. However, this is not the case for all the distributions and it is also dependent on how it is parameterized.

As you have already seen, the previous expression provides us with probability densities, so we need to integrate it to obtain actual probabilities through the CDF (non-exceedance probabilities). In the case of the Normal distribution, there is no closed form of the CDF (the integral). 

Let's see how the distribution looks. In the figure below, the PDF and CDF of the Gaussian distribution are shown for different values of its parameters. In the PDF plot, you can see the bell shape that was already mentioned.


```{figure} /sandbox/1-7-continuous/figures/gaussian.png
---
scale: 75%
name: gaussian distr

---
Gaussian distribution function: PDF and CDF.
```

As shown in the legend, the black and blue lines present the same value of the standard deviation ($\sigma$), so in the PDF plot the width of the bell is the same. However, they have different values of the mean ($\mu$), which acts like a location parameter. Thus, increasing the mean moves the distribution towards the right, making more likely higher values of the random variable. You can also see that in the CDF plot. The distribution moves towards the right so for a given value, $x = 2$, $F(x=2) \approx 0.98$ for the black line and $F(x=2) \approx 0.84$ for the blue line. 

Regarding the standard deviation ($\sigma$), it can be interpreted as the dispersion around the mean ($\mu$). Thus, you can see in the PDF plot the the red distribution is wider that the black or blue ones, since the standard deviation is the double of the other two. You can also see the effect in the CDF plot, where the slope of the red distribution is more gentle than those of the black and blue distributions.

## Probability of other intervals

We saw that the CDF provides us with the non-exceedance probabilities, this is $[-\infty, x]$. But what happens if we are interested in the probabilities of another intervals? It is common to be interested in the probability of exceeding a value. For instance, wind speeds over a value can damage an structure or concentrations of a nutrient higher than a value can lead to eutrophication. Therefore, we want to integrate from  from a value $x$ to $\infty$. Here the probability axioms make this easy, since the PDF integrates to 1 over the sample space of the random variable:

$
\int_x^{+\infty}{f(x)dx} = 1 - \int_{-\infty}^x{f(x)dx} = 1 - F(x)
$

The figure below shows both the CDF and the complementary CDF.

```{figure} /sandbox/1-7-continuous/figures/survival.png
---
scale: 75%
name: survival gaussian

---
Gaussian distribution function: CDF and survival function or complemetary CDF.
```

Thus, the *exceedance probabilities* can be directly computed by substracting to 1 the non-exceedance probabilities obtained from the CDF. The result is called the *complementary CDF*. However, this function has many alternative names. The name *survival function* may sound odd due to its positive connotation, but this is appropriate when the random variable describes, for example, the lifetime of a structure.

Another interval is that between two values, $x_1$ and $x_2$ (where $x_2>x_1$). Using the CDF, $F(x_2)$, gives the probability of values below $x_2$ but also those below $x_1$. Then, we need to substract $F(x_2)-F(x_1)$ to obtain the probability of being in the interval $[x_1, x_2]$. In mathematical terms:

$
\int_{x_1}^{x_2}{f(x)}dx = \int_{-\infty}^{x_2}{f(x)}dx - \int_{-\infty}^{x_1}{f(x)}dx = F(x_2)-F(x_1)
$

## Inverse CDF

Often, in regulations and guidelines, it is required to design our structure or system for a value which is not exceeded more than $p$ percent of the time. Thus, we are facing the opposite problem: what is the value of the random variable, $x$ whose non-exceedance probability has a specified value, $p$? The solution is simple: the inverse of the CDF, $x = F^{-1}(p)$. As previously mentioned, the CDF is just an equation which in most occasions can be solved analytically, so we just need to work through the formula and calculate $x$ given $p$.