
# Goodness of fit

In the previous sections you have studied the different mathematical models (continuous distribution functions) that we can use to model the univariate uncertainty of a random variable and how to fit them based on observations. Also, you have been introduced to some methods to fit those models. **But how do I choose between different models?**

The choice of the appropriate distribution function needs to be based first on the **physics of the random variable** we are studying. For instance, if I am studying the concentration of a gas in the atmosphere, negative values do not have a physical meaning, so the selected distribution function should not provide with those estimations.

Once we have accounted for the physical characteristics of the random variable, we can make use of **goodness of fit (GOF) techniques** to support our decision. This is, GOF techniques are not a ground truth, but an objective way of comparing models. Different techniques may lead to different judgments and it is you as expert who has to balance those outputs and select the best model to your judgment. Thus, it is recommended to use more than one GOF technique in the decision-making process. In the subsequent sections, some commonly used GOF techniques in the statistics field are presented.

In order to illustrate these techniques, the following toy example will be used. The set of observations is represented in the plots below by its pdf and cdf. A Gaussian ($N(5.17, 5.76)$) and an Exponential distributions ($Expon(-5.25, 10.42)$) are fitted to the data. GOF techniques will be applied to determine which one of the two models fits the data best.

```{figure} /sandbox/1-7-continuous/figures/GOF_data.png

---

---
Data overview.
```

## Graphical methods

GOF graphical methods are useful tools to have a first intuition of how different models are performing and confirm the results of other quantitative analysis. Here, you are introduce to three techniques: (1) QQ-plot, (2) Log-scale, and (3) Probability plot.

### QQ-plot

This technique is as simple as comparing the observations used to fit the model with the predictions of the model. Typically, the observations are represented in the x-axis and the predictions in the y-axis. Therefore, the perfect fit would be represented by the $45 ^\circ$-line.

Let's see it applied to the example data. Note that the term *"quantile"* is used in statistics to denote the values of the random variable.

```{figure} /sandbox/1-7-continuous/figures/QQplot.png
---
scale: 75%
name: rating_curve

---
QQ-plot.
```

In the QQ-plot, it is shown how the predictions given by the Gaussian distribution (in blue) closely follow the $45 ^\circ$-line. Those provided by the Exponential distribution are way further, detaching significantly from the $45 ^\circ$-line in the upper tail. Based on this graphical technique, it is possible to conclude that Normal distribution seems to be a better model for the data.


**Let's code it!**

Pseudo code is presented to illustrate the procedure to build a QQ-plot.

    read observations

    #calculate the empirical cdf
    p_emp, q_emp = ecdf(observations)

    #define the parameters of the Gaussian distribution
    mean_gaussian = 5.17
    sd_gaussian = 5.76
    
    #compute the values of the random variable predicted by the Normal distribution
    q_gaussian = cdf.norm(p_emp, param = [mean_gaussian, sd_gaussian])

    #define the parameters of the Exponential distribution
    loc_expon = -5.25
    scale_expon = 10.42
    
    #compute the values of the random variable predicted by the fitted distribution
    q_exponential = cdf.expon(p_emp, param = [loc_expon, scale_expon])
    
    scatter(q_emp, q_gaussian)
    scatter(q_emp, q_expon)


### Log-scale

As previously introduced, the tails of the distributions are key to allow the inference of values which have not been observed yet. Therefore, it is important to check whether the distribution used to model the observations is performing properly in that region. A simple trick to do so is to use a logarithmic scale (log-scale) to represent the exceedance probability plot. That way, we "zoom in" on those points in the tail instead of focusing on the bulk of the data. In the figure below, the representation of the cdf in regular and log-scale is shown.

```{figure} /sandbox/1-7-continuous/figures/log-scale.png
---
scale: 100%
name: rating_curve

---
Exceedance probability plot represented both in regular and logarithmic scale.
```

Analyzing the figure on the left side, it can be seen that the observations follow better the Normal distribution. However, it is not clear which one of the two distributions is performing better in the tail. By analyzing the plot on the right side, it is possible to answer that question. Again, it is observed that the data points follow better the Gaussian distribution. However, observations in the tail are not that well represented by the Gaussian distribution, being even closer to the Exponential distribution. Thus, since none of the considered distributions performs properly in the tail, it may be needed to consider another distribution to model the asymmetry of the data, such as the Gumbel or Lognormal distributions. 


### Probability plot or probability paper

This graphical technique consists on adapting the axis of the plot of the cdf accounting for the parametric distribution fitted so it is presented as a line. This is, the cdf of any Gaussian distribution will be plotted as a line in the Normal probability plot. Thus, in the x-axis a function of the values of the random variable is presented, while in the y-axis a function of the non-exceedance probabilities is shown. 

Let's see it with the example of the Exponential distribution. Its cdf is given by

$
F(x) = 1 - exp(-\lambda[x-\mu])
$

where $\lambda$ is the scale parameter and $\mu$ is the location parameter. A transformation is performed on the cdf so a linear relationship is established between the value of the random variable X and the non-exceedance probabilities. In the case of the Exponential distribution, it is just a matter of calculating logarithms to both sides of the equation as

$
ln[1-F(x)] = -\lambda[x-\mu]
$

In this manner, there is a linear relationship between $ln[1-F(x)]$ and $x$. Note that in the case of the Exponential distribution, the probability plot is the same as the log-scale! Therefore, the Exponential distribution was shown as a straight line in the previous plot, while the Gaussian distribution was not.

## Formal hypothesis test: Kolmogorov-Smirnov test






[^cunnane]: Cunnane (1979). A note on the Poisson assumption in partial duration series models. *Water Resources Research*, 15 (2), 489-494.

[^poisson]: Don't you remember it? Go back to our section in Poisson processes!