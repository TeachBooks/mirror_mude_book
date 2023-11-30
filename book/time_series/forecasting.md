# Forecasting

## Best Linear Unbiased Prediction (BLUP)

Consider the (augmented) linear model of observation equations as

$$\begin{bmatrix}Y \\ Y_p\end{bmatrix}=\begin{bmatrix}A \\ A_p \end{bmatrix}x+\begin{bmatrix}\epsilon \\ \epsilon_p \end{bmatrix}, \hspace{10px}\mathbb{D}\left(\begin{array}{c}Y\\ Y_p\end{array}\right)=\begin{bmatrix}\Sigma_{Y} & \Sigma_{YY_p} \\\Sigma_{Y_p Y} & \Sigma_{Y_p} \end{bmatrix}$$

The best linear unbiased estimation, **BLUE**, of $x$ is:

$$\hat{X}=(A^T\Sigma_{Y}^{-1}A)^{-1}A^T\Sigma_{Y}^{-1}Y, \hspace{10px} \Sigma_{\hat{X}}=(A^T\Sigma_{Y}^{-1}A)^{-1}$$

Without derivation, we now give the best linear unbiased prediction, **BLUP**, of $Y_p$:

$$\hat{Y_p}=A_p\hat{X}+\Sigma_{Y_p Y}\Sigma_{Y}^{-1}\hat{\epsilon}= Y_F + Y_N$$

with the covariance matrix

$$\Sigma_{\hat{Y_p}}=A_p\Sigma_{\hat{X}}A_p^T+\Sigma_{Y_p Y}\Sigma_{Y}^{-1}\Sigma_{\hat{\epsilon}}\Sigma_{Y}^{-1}\Sigma_{YY_p}$$

*Two processes play a role in prediction:*
* $\hat{Y}_F = A_p\hat{X}$ is the deterministic part modelling the functional effects (such as trend and seasonality).
* $\hat{Y}_N= \Sigma_{Y_p Y}\Sigma_{Y}^{-1}\hat{\epsilon}$ is the stochastic part (stochastic process).

### Important remarks:

* For a purely random process (white noise), we have $\Sigma_{Y_p Y}=0$ and, therefore, stochastic process/part cannot affect the prediction;
* We focus on the ARMA random process to forecast future values. Below we will see how to determine orders $p$ and $q$ in ARMA($p,q$) (this optional material);
* Above it was explained that $\hat{\epsilon}$ has been estimated with BLUE. The time series $\hat{\epsilon}$ can in principle also be obtained from different [transformation methods](stationarize) such as
**differencing**, **function-based**, or **moving averaging**;
* For the sake of simplicity, the new time series is again denoted as the zero-mean stationary time series $Y_t = Y(t)$, of which the ‘non-stationarity’ effect has been removed from the data to make it stationary.

:::{card}
## OPTIONAL: Identifying orders of ARMA process

In time series analysis, [ACF and PACF plots](ACF) can be used to provide the model orders: The value of $p$ for AR and the value of $q$ for MA, and hence to select the best model for forecasting.

Here we assume the time series is stationary. We can then plot the ACF and PACF to identify the orders of AR and MA (numbers $p$ and $q$ of coefficients $\beta_i$ and $\theta_i$) in the ARMA model.

We first look for a gradual diminishing pattern (tail-off pattern) in either ACF or PACF. The following guidelines can then be used to interpret ACF and PACF plots:

* If the **tail-off** pattern is at ACF, then AR (and not MA) is an appropriate model. The cut-off at PACF will then provide order $p$ for AR($p$);
* If the **tail-off** pattern is at PACF, then MA (and not AR) is an appropriate model. The cut-off at ACF will then provide order $q$ for MA($q$);
* If the **tail-off** pattern is at both ACF and PACF, then the stochastic process cannot be expressed just as AR or MA. The appropriate model is then ARMA.
* Test data is usually required to validate the selected orders $p$ and $q$.

### Example: identification of AR(1)

The tail-off pattern is at ACF. AR has a cut-off at PACF at lag 1. The best model is then AR(1) = ARMA($p=1,q=0$)

![pacf_acf](./figs/pacf_acf.png "pacf_acf")

### Example: identification of MA(1)

The tail-off pattern is at PACF. MA has a cut-off at ACF at lag 1. The best model is then MA(1) = ARMA($p=0,q=1$)

![pacf_acf_2](./figs/pacf_acf_2.png "pacf_acf_2")

:::

## Estimation of coefficients of ARMA process

If the values of $p$ and $q$ of the ARMA($p,q$) process are known, the question is: **how can we estimate the coefficients $\beta_1,...,\beta_p$ and $\theta_1,...,\theta_q$?**

Here, we only elaborate on AR(2) = ARMA(2,0) using best linear unbiased estimation (BLUE) to estimate $\beta_1$ and $\beta_2$. The method can be generalized to estimate ARMA($p,q$).

**Example: Parameter estimation of AR(2)**

The AR(2) is of the form

$$Y_t=\beta_1 Y_{t-1}+\beta_2 Y_{t-2}+\epsilon_t$$

This indicates that the **predicted value** is of the form

$$\hat{Y}_{t|t-1}=\hat{\beta}_1Y_{t-1}+\hat{\beta}_2Y_{t-2}$$

for which we first need the estimates $\hat{\beta}_1$ and $\hat{\beta}_2$.

```{note}
The hat in the previous expression indicates predicted value, the subscript $t|t-1$ indicates that it is the predicted value at time $t$ using observations up till and including time $t-1$.
```

The difference between $Y_t$ and $\hat{Y}_{t|t-1}$ is called the prediction error:

$$\hat{\epsilon}_{t|t-1}=Y_t-\hat{Y}_{t|t-1}=Y_t-\hat{\beta}_1Y_{t-1}-\hat{\beta}_2Y_{t-2}$$

In order to esitimate the $\beta_i$ we can now set up the following observation equations (starting from $t=3$):

$$\begin{align*}
\epsilon_{3|2}&=Y_3-\beta_1Y_2-\beta_2Y_1\\ \epsilon_{4|3}&=Y_4-\beta_1Y_3-\beta_2Y_2\\ &\vdots\\ \epsilon_{m|m-1}&=Y_m-\beta_1Y_{m-1}-\beta_2Y_{m-2}
\end{align*}$$

Giving the following linear model of observation equations:

$$\begin{bmatrix}Y_3 \\ Y_4 \\ \vdots \\ Y_m \end{bmatrix} = \begin{bmatrix}Y_2 & Y_1 \\Y_3 & Y_2\\ \vdots & \vdots\\ Y_{m-1}&Y_{m-2} \end{bmatrix}\begin{bmatrix}\beta_1 \\ \beta_2\end{bmatrix} + \begin{bmatrix}\epsilon_{3|2} \\ \epsilon_{4|3}\\ \vdots \\ \epsilon_{m|m-1} \end{bmatrix}$$

The BLUE estimator of $\beta=[\beta_1,\beta_2]^T$ is

$$\hat{\beta}=(\mathrm{A}^T\Sigma_{Y}^{-1}\mathrm{A})^{-1}\mathrm{A}^T\Sigma_{Y}^{-1}Y$$

A similar strategy can be followed to estimate the parameters $\theta$ of an MA process.

## Forecasting using ARMA($p,q$) process

After estimating the ARMA process parameters $\hat{\beta}_i,i=1,...,p$ and $\hat{\theta}_i,i=1,...,q$ they can be used to predict future values. The following expression on a zero-mean ARMA can then be used:

$$\hat{Y}_{t|t-1}=\hat{\beta}_1Y_{t-1}+...+\hat{\beta}_pY_{t-p}+\hat{\theta}_1\epsilon_{t-1}+...+\hat{\theta}_q\epsilon_{t-q}$$

The above formulation is in conjunction with the Best Linear Unbiased Predictor (BLUP) for $Y_t$ in a given stochastic process. The general form of BLUP is

$$\hat{Y}_p=\mathrm{A}_p\hat{X}+\Sigma_{Y_p Y}\Sigma_{Y}^{-1}\hat{\epsilon}$$

## Brief summary

The best linear unbiased prediction, **BLUP**, of $Y_p$ is ($Y_p$ is not observed, so we want to predict it; think of weather prediction for tomorrow):

$$\hat{Y_p}=A_p\hat{X}+\Sigma_{Y_p Y}\Sigma_{Y}^{-1}\hat{\epsilon} = \hat{Y}_F + \hat{Y}_N$$

**Two processes play a role in prediction:**
* $\hat{Y}_F = A_p\hat{x}$ is the deterministic part (functional effects). Least squares method (e.g. BLUE) can be used to estimate $\hat{x}$ and hence $A_p\hat{x}$
* $\hat{Y}_N = \Sigma_{Y_p Y}\Sigma_{Y}^{-1}\hat{\epsilon}=M\hat{\epsilon}$ is the stochastic part (stochastic process). We considered ARMA process, but we may use other stochastic processes
* Forecasting by alternative methods such as Machine Learning is also possible!