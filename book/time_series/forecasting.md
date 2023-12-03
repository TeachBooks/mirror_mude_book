(forecast)=
# Forecasting

## Best Linear Unbiased Prediction (BLUP)

Consider the (augmented) linear model of observation equations as

$$\begin{bmatrix}Y \\ Y_p\end{bmatrix}=\begin{bmatrix}\mathrm{A} \\ \mathrm{A}_p \end{bmatrix}x+\begin{bmatrix}\epsilon \\ \epsilon_p \end{bmatrix}, \hspace{10px}\mathbb{D}\left(\begin{array}{c}Y\\ Y_p\end{array}\right)=\begin{bmatrix}\Sigma_{Y} & \Sigma_{YY_p} \\\Sigma_{Y_p Y} & \Sigma_{Y_p} \end{bmatrix}$$

The best linear unbiased estimation, **BLUE**, of $x$ is:

$$\hat{X}=(\mathrm{A}^T\Sigma_{Y}^{-1}\mathrm{A})^{-1}\mathrm{A}^T\Sigma_{Y}^{-1}Y,\hspace{10px}\Sigma_{\hat{X}}=(\mathrm{A}^T\Sigma_{Y}^{-1}\mathrm{A})^{-1}$$

Without derivation, we now give the best linear unbiased prediction, **BLUP**, of $Y_p$:

$$\hat{Y_p}=\mathrm{A}_p\hat{X}+\Sigma_{Y_p Y}\Sigma_{Y}^{-1}\hat{\epsilon}= \hat{Y}_F + \hat{Y}_N$$

with the covariance matrix

$$\Sigma_{\hat{Y_p}}=\mathrm{A}_p\Sigma_{\hat{X}}\mathrm{A}_p^T+\Sigma_{Y_p Y}\Sigma_{Y}^{-1}\Sigma_{\hat{\epsilon}}\Sigma_{Y}^{-1}\Sigma_{YY_p}$$

*Two processes play a role in prediction:*
* $\hat{Y}_F = \mathrm{A}_p\hat{X}$ is the deterministic part modelling the functional effects (such as trend and seasonality).
* $\hat{Y}_N= \Sigma_{Y_p Y}\Sigma_{Y}^{-1}\hat{\epsilon}$ is the stochastic part (stochastic process).

### Important remarks:

* For a purely random process (white noise), we have $\Sigma_{Y_p Y}=0$ and, therefore, the stochastic process/part cannot affect the prediction;
* We focus on the ARMA random process to forecast future values. How to determine orders $p$ and $q$ of an ARMA($p,q$) processs is in the [optional material](optional);
* Above it was explained that $\hat{\epsilon}$ has been estimated with BLUE. The time series $\hat{\epsilon}$ can in principle also be obtained from different [transformation methods](stationarize) such as
**differencing**, **function-based**, or **moving averaging**;
* For the sake of simplicity, the new time series is again denoted as the zero-mean stationary time series $Y_t = Y(t)$, of which the ‘non-stationarity’ effect has been removed from the data to make it stationary.

## Forecasting using ARMA($p,q$) process

After estimating the ARMA process parameters $\hat{\beta}_i,i=1,...,p$ and $\hat{\theta}_i,i=1,...,q$ they can be used to predict future values. The following expression on a zero-mean ARMA can then be used:

MMMMM Needs clarification! Should it be $\hat{\epsilon}$?? And is $\hat{Y}_{t|t-1}= \hat{Y}_N$?

MMMMM The $\epsilon$ here is not the same as the $\epsilon$ in the model at start of chapter (here it is only random errors, above it includes stochastic process)

$$\hat{Y}_{t|t-1}=\hat{\beta}_1Y_{t-1}+...+\hat{\beta}_pY_{t-p}+\hat{\theta}_1\epsilon_{t-1}+...+\hat{\theta}_q\epsilon_{t-q}$$

%The above formulation is in conjunction with the Best Linear Unbiased Predictor (BLUP) for $Y_t$ in a given stochastic process. Further elaboration is beyond the scope of this week. The general form of BLUP is

%$$\hat{Y}_p=\mathrm{A}_p\hat{X}+\Sigma_{Y_p Y}\Sigma_{Y}^{-1}\hat{\epsilon}$$
