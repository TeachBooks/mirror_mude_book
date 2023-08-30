# Goodness of Fit

Make sure the concepts introduced here set up the GOF for distributions in 1.7.

Topics:
- error (types)
- ?

Antonio has already grabbed a bunch of GOF measures in [this Deepnote notebook](https://deepnote.com/workspace/mude-3f61-58d0e5fa-870d-41bb-9ee5-bcd624fbf376/project/uncertainty-99977174-65e8-445a-a453-47fc02602d6f/notebook/Assignment%20-%20Week%201.1-283160ea7b7649c7a8ca381512535534). Let's start making a list of it.

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