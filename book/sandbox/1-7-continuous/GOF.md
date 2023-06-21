
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

As previously introduced, the tails of the distributions are key to allow the inference of values which have not been observed yet. Therefore, it is important to check whether the distribution used to model the observations is performing properly in that region. A simple trick to do so is to use a logarithmic scale (log-scale). That way, a "zoom in" on those points in the tail is performed instead of focusing on the bulk of the data. In the figure below, the representation of the cdf in normal and log-scale is shown.



### Probability plot

aaa

## Formal hypothesis test: Kolmogorov-Smirnov test







## Let's code it!

Pseudo code is presented. Note that here the first element in a vector corresponds to index 1.

    read observations

    #define parameters
    dl = 48 #in hours
    th = linspace(min_threshold, max_threshold, step) #range_thresholds

    for i in length(th):
        excesses = find_peaks(observations, threshold = th[i], distance = dl) - th[i]
        for j in length(years):
            n_excesses[j] = count(excesses[j])
        e_mean[i] = mean(n_excesses)
        var_mean[i] = var(n_excesses)
    
    plot(x = th, y = e_mean/var_mean)


[^cunnane]: Cunnane (1979). A note on the Poisson assumption in partial duration series models. *Water Resources Research*, 15 (2), 489-494.

[^poisson]: Don't you remember it? Go back to our section in Poisson processes!