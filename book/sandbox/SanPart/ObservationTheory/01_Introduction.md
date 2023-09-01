# Introduction

As in other physical sciences, empirical data are used in Civil and Environmental Engineering and Applied Earth Sciences to make inferences so as to describe physical reality. Many such problems involve the determination of unknown model parameters that bear a functional relationship to the set of observed data or measurements. This determination or parameter estimation can be based on different estimation principles. 

From experience we know that various uncertain phenomena can be modeled as a random variable (or a random vector), say $Y$. Examples are: the uncertainty in instrument readings due to random measurement errors; the variable strength of material of a certain type,  the variable lifetime of pieces of equipment of a particular type after they have been put into service; the number of "hits" in a certain time interval on a particular Web page; the variable size, weight, or contents of products of a particular type delivered by a production line, etcetera. We will refer to these random variables (our iput data) $Y$ as the *observables*.

The unknown model parameters will be denoted as $\mathrm{x}$. The ingredients for this part on sensing and observation theory can then be summarized as follows:
* a model to describe relation between observables $Y$ and parameters of interest $\mathrm{x}$
* estimation method(s) to estimate the parameters as function of $Y$: $\hat{X}=q(Y)$ (i.e., the estimation method defines the function $q$)
* uncertainty propagation to assess the precision of the estimated parameters $\hat{X}$
* hypothesis testing to account for errors in data and/or to choose best model from different candidates

```{admonition} Definition
The *functional model* describes the functional relationship between the observed variables (*observables*) and the unknown parameters. 

In case the functional relationship is linear, the functional model will have the form:

$$
\mathbb{E}(Y) = \mathrm{Ax}\quad \text{or} \quad Y=\mathrm{Ax}+\epsilon
$$

where $\mathrm{x}$ is a vector with the unknown model parameters, and $\mathrm{A}$ is referred to as the *design matrix*. $\mathbb{E}(.)$ is the expectation operator. The random errors are given by $\epsilon$ and are assumed to have zero mean: $\mathbb{E}(\epsilon)=0$.
```

MMMMM

EXERCISE : show that the two expressions in the Definition above are indeed the same.

Some examples of functional models will be shown in [the next subsection](01_funcmodel)

Next, we will develop the principles and underlying theory of (1) Least-squares estimation, (2) Best linear unbiased estimation, and (3) Maximum likelihood estimation. 

Special attention is then given to how the uncertainty in the measurements propagates into parameter estimation results, such that we can assess the precision of the estimated parameters. For that purpose we need the stochastic model.

```{admonition} Definition
The *stochastic model* describes the uncertainty of the observables in the form of the covariance matrix $\Sigma_Y=\Sigma_{\epsilon}$.
```

This covariance matrix is assumed to be known here. In practice, it can be determined based on a calibration campaign: taking repeated measurements and calculate the empirical (co-)variances. Note that the uncertainty in the observations is fully attributed to the random errors, therefore we have that the covariance matrix of the observables is equal to that of the random errors.

Parameter estimation requires specification of the underlying functional and stochastic models. It may happen, however, that some parts of the models are misspecified, thereby invalidating the results of estimation. Some measurements, for instance, may be corrupted by blunders, or the chosen model my fail to give an adequate description of physical reality. Testing for such misspecifications is the topic of the last section of this chapter.

(01_funcmodel)=
## Functional and stochastic model: examples
MMMMM
Relate to 'modelling' in MUDE.

introduce redundancy


## Estimation and linear regression

The goal of estimation is the estimate *model parameters* from a set of observations. In Civil Engineering, Applied Earth Sciences and Environmental Engineering this is needed in many monitoring and sensing applications, such as:
* Sea level rise
* Land subsidence / uplift
* Air quality monitoring
* Settlement of soils 
* Tunnel deformation
* Bridge motions
* Traffic flow rates
* Water vapor content for numerical weather prediction
* Ground water level

In this part, we will introduce different estimation principles, starting with (weighted) least-squares. Next, Best Linear Unbiased estimation and Maximum Likelihood estimation will be introduced, providing the probabilistic framework  for estimating *model* parameters from *uncertain data*.

*Linear regression* aims to estimate the relationship between so-called *dependent* and *independent* variables, the latter also referred to as *predictors*, since once the relationship is known, these can be used to predict the behaviour of the dependent variables. Examples of bivariate regression model applications:
* predict *river run-off* (dependent variable) based on *amount of rainfall* (independent variable), see {numref}`Regres`
* predict *house prices* (dependent variable) based on their *energy label*(independent variable)
* predict *geothermal power production* (dependent variable) based on *brine temperature* (independent variable)
* predict *structural deformation* (dependent variable) based on *wind load* (independent variable)


```{figure} ../figures/ObservationTheory/01_Regression.png
---
height: 350px
name: Regres
---
Linear regression example for amount of rainfall (independent variable) and river runoff (dependent variable).
```

The least-squares and maximum likelihood principles are used for estimating these relationships.

Supervised machine learning [**ADD LINK TO MACHINE LEARNING PART**] is all about finding relationships between target (dependent) variables and certain features (predictors), and therefore regression analysis. However, in this part, we will focus on monitoring and sensing applications, and not on linear regression.
