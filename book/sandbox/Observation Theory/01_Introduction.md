# Introduction

As in other physical sciences, empirical data are used in Civil and Environmental Engineering and Applied Earth Sciences to make inferences so as to describe physical reality. Many such problems involve the determination of unknown parameters that bear a functional relationship to the set of observed data or measurements. This determination or parameter estimation can be based on different estimation principles. 
From experience we know that various uncertain phenomena can be modeled as a random variable (or a random vector), say $Y$. Examples are: the uncertainty in instrument readings due to measurement errors; the variable strength of material of a certain type,  the variable lifetime of pieces of equipment of a particular type after they have been put into service; the number of "hits" in a certain time interval on a particular Web page; the variable size, weight, or contents of products of a particular type delivered by a production line, etc. 
Here we develop the principles and underlying theory of (1) Least-squares estimation, (2) Best linear unbiased estimation, and (3) Maximum likelihood estimation. Special attention is given to how the uncertainty in the measurements propagates into parameter estimation results.

Parameter estimation requires specification of the underlying functional and stochastic models. It may happen, however, that some parts of the models are misspecified, thereby invalidating the results of estimation. Some measurements, for instance, may be corrupted by blunders, or the chosen model my fail to give an adequate description of physical reality. Methods of model testing will be developed for the detection, identification and adaptation of model errors.

*Functional model*: describes the functional relationship between the observed variables (*observables*) and the unknown parameters. In case this relationship is linear, it will have a form:
$$E(Y) = \mathrm{A}X$$
where $X$ is a vector with the unknown parameters, and $\mathrm{A}$ is referred to as the *design matrix*. $E(.)$ is the expectation operator.

*Stochastic model*: describes the uncertainty of the observables in the form of the variance-covariance matrix.

```{note}
:class: dropdown
Add note about linear regression.
```
