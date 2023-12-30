# Extreme Value Analysis

When studying continuous distribution functions, observations are modelled using parametric distribution functions, such as the Gaussian or Exponential distributions. These parametric distributions ease the computation of probabilities and allow the inference of values of the modelled random variable that are not within the available observations. There, a key concept arises: the **tail of the distribution**. When extrapolating out of the set of observations, the fitting of the parametric distribution to the tail of the distribution was crucial to guarantee an accurate extrapolation. Do you remember the following plot from one of the workshops?

```{figure} ../figures/EVA/previous_work.png

---

---
Exceedance plot in log-scale from the workshop on continuous distribution functions.
```

In that workshop, we fitted a right-tailed Gumbel distribution to observations on energy consumptions. Gumbel distribution was selected since data presented positive skewness (right tail). However, while the behavior around the central moments was well represented by the Gumbel distribution, the tail was not properly modelled.

**But what happens if my main interest is the tail?**

In Engineering and Geosciences, typically there is an interest in the tails of the distributions. For instance, flood protection systems will be designed to withstand extreme rainfall events or extreme discharges, not only daily conditions. These extreme events are located in the tails of the distribution. Moreover, extreme events are typically scarce in our datasets. The available timeseries are usually short (e.g.: 20 years) in comparison with the design events that the system needs to withstand (e.g.: 1,000 years event). **Extreme Value Analysis (EVA) focuses on those events located at the tails of the distribution and provides a framework to identify and model the stochastic behavior of extreme events so events which have not been observed can be inferred.**

 In the following chapters, the formal concept of extreme will be introduced, as well as the techniques to sample them without a dataset and probabilistically model them. At the end of these chapters, you can also find some supplementary videos, in case you prefer that format.