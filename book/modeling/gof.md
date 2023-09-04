# Goodness of Fit

In the previous sections we have introduced the concept of model and the need of selecting an appropriate model *ad hoc* for our problem. Also, you have been introduced to the concepts of verification, validation and calibration. In the validation process, we compared the results of our model with known reference values to assess the performance of the model. **But how good is the performance?** If there are different verified and validated models I can use, **which one is better?**

We can make use of **goodness of fit (GOF) techniques** to support our answers to those questions. GOF techniques are objective and (mainly) quantitative metrics which provide insight into the performance of models. It is important to note that GOF techniques are not a ground truth, but an objective way of comparing models. Different techniques may lead to different results and it is the engineer who has to balance those outputs and select the best model. Thus, it is recommended to use more than one GOF technique in the decision-making process. In the subsequent sections, some commonly used GOF techniques are presented.

In order to illustrate these techniques, the following example will be used. Waves suffer several physical processes when travelling from offshore to the coast (namely, refraction, diffraction, shoaling, reflection and breaking). We typically have wave measurements offshore and need to propagate them using a propagation model to the coast to assess the loads on, for instance, a water intake or a structure. In this example, we have measurements of waves both offshore and near the shore obtained through physical model tests. We are going to assess how accurate the performance of the propagation model is for two wave features: the significant wave height ($H_{m0}$) and the mean wave period ($T_m$) [^reference]. GOF techniques will be applied to quantify this performance.

## How does it look?

The first step when addressing a problem is to visualize it. Thus, the first GOF technique recommended here (note that it is not a metric) is visual inspection. It is common practice to plot the reference values against the predictions given by our model, as shown below.

## Squared differences

RMSE, R2

## Bias


In many fields it is common practice to base the GOF on squared errors. RMSE is already in the Deepnote, but the coefficient of determination $R^2$ is also widely used (and has a nicer interpretation: percentage of variance explained by the model).

On a different line, I would also introduce some measure of relative bias (my model overpredicts or underpredicts).

[this](https://mude.citg.tudelft.nl/archive-2022/week-2-6/1-2-solutions.html#bias-variance-tradeoff) is a nice definition of bias but it misses the actual metrics (don’t know if I missed it). For instance, I have used the relative bias (defined below) in the past.

Bounded metrics always have a fixed range, for example, the relative bias ranges between -1 and 1, or the coefficient of determination or the relative mean squared error range between 0 and 1. They give a more universal meaning of error/bias since they do not depend on the units of what you are measuring (and it is easy to go back to those units if needed).


**take this and adapt to consistent notation**

Relative bias: a dimensionless measure of bias; closer to 0, the better.
$$
bias = \frac{1}{N_0}\sum_{i=1}^{N_0}\frac{e_i-o_i}{|o_i|} \qquad -1\leq bias \leq 1
$$
where $o_i$ and $e_i$ are the observed and estimated values.


[^reference]: Data extracted from Mares-Nasarre et al. (2022). Hydraulic stability of cube-armored mound breakwaters in depth-limited breaking wave conditions, 259, 111845.  https://doi.org/10.1016/j.oceaneng.2022.111845