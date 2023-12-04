(optional)=
# Supplementary material

```{admonition} MUDE Exam Information
:class: tip, dropdown
The material on this page is provided to give you extra insight into time series analysis and how it is used in practice. This material is not part of the exam.
```

## Partial ACF

A partial ACF (PACF) is a covariance between an observation in a time series with observations at prior time steps with the relationships of intervening observations removed. We work this out using a simple example.

:::{card} Illustration of PACF

Let us assume that we have an autoregressive noise process

$$Y_t = \beta Y_{t-1}+\epsilon_t, \hspace{30px} 0\leq\beta<1, \hspace{30px} t=2,...,m$$

where $\epsilon_t$ is an i.i.d noise process (e.g. distributed as $\epsilon_t\sim N(0,\sigma^2)$). Multiple applications of the above *autoregressive* formula give

$$\begin{align*}
Y_t&=Y_t\\ 
Y_{t+1} &= \beta Y_t + \epsilon_{t+1}\\ 
Y_{t+2}&=\beta Y_{t+1} + \epsilon_{t+2} = \beta^2 Y_t + \beta \epsilon_{t+1} + \epsilon_{t+2}\\ &\vdots \end{align*}$$

We can show that the covariance between $Y_t$ and $Y_{t+1}$ is

$$
Cov(Y_t, Y_{t+1})  = \sigma^2\beta
$$

We can also show that the covariance between $Y_t$ and $Y_{t+2}$ is

$$
Cov(Y_t, Y_{t+2}) =  \sigma^2\beta^2
$$

Hence, the $Y_t$ and $Y_{t+2}$ are correlated, even though according to the expression $Y_t = \beta Y_{t-1}+\epsilon_t$ should just depend on the previous value. This makes sense, since the previous value again depends on its own previous value, et cetera. However, using the partial ACF allows to 'remove' this correlation.

### Worked example (optional)

Let us now take a look into a worked example on PACF to remove the intervening term, $\beta Y_{t+1}$ between $Y_t$ and $Y_{t+2}$. As we saw before, ACF can be obtained from

$$
\text{COV} = Cov(Y_t, Y_{t+2}) =  \sigma^2\beta^2
$$

Regarding the partial ACF, it is knowns from the autoregression $Y_t = \beta Y_{t-1}$ that $\hat{Y}_t = \hat{Y}_{t+2} = \beta Y_{t+1}$. Therefore:

$$
\begin{align*}
\text{PCOV} &= Cov(Y_t-\hat{Y}_t,Y_{t+2}-\hat{Y}_{t+2})\\&=Cov(Y_t-\beta Y_{t+1},Y_{t+2}-\beta Y_{t+1})
\\ & = \mathbb{E}((Y_t-\beta Y_{t+1})(Y_{t+2}-\beta Y_{t+1}))\\
& = \mathbb{E}(Y_tY_{t+2}-\beta Y_t Y_{t+1}-\beta Y_{t+1}Y_{t+2} + \beta^2Y_{t+1}^2)\\
& = \sigma^2\beta^2-\beta\sigma^2\beta-\beta\sigma^2\beta+\sigma^2\beta^2=0
\end{align*}
$$

This shows indeed that with the partial ACF the correlation for a time lag of 2 (or higher) becomes zero.

#### Normalized ACF vs Partial ACF (optional)

The figure shows a simulated example of $Y_t = 0.8Y_{t-1}+\epsilon_t$ having 1000 samples. The spectrum of the normalized ACF clearly shows that there is a (decreasing) correlation up till lag 10, while the spectrum of the partial ACF only shows correlation at lag 1.

![acf_pacf](./figs/acf_pacf.png "acf_pacf")

:::

## Identifying orders of ARMA process

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


## Testing stationarity

Different tests can be performed to test whether or not a time series is stationary. One of the commonly used methods is the **Augmented Dickey-Fuller (ADF)** test. **ADF** is also optional material. 

Consider a time series

$$Y_t = \beta Y_{t-1}+\epsilon_t$$

where we see that the value at time $t$ depends on the previous value at time $t-1$ plus the noise $\epsilon_t$ (this is an autoregressive process, as we will see later in the section [ARMA process](ARMA)). This implies that if $\beta=1$, the noise is **accumulated** and thus the process is **not stationary**. It is known to be a so-called *random walk noise* process. 

Single differencing gives

$$
\begin{align*}
\Delta Y_t = Y_t - Y_{t-1} &= \beta Y_{t-1}+\epsilon_t-Y_{t-1}\\
&= (\beta - 1)Y_{t-1}+\epsilon_t \\&= \gamma Y_{t-1} + \epsilon_t
\end{align*}
$$

The parameter $\gamma = \beta-1$ plays an important role to test the stationarity of the time series.

### ADF test

The ADF test is performed using the following two hypotheses:

* **Null Hypothesis ($\mathcal{H}_0$)**: Time series is non-stationary ($\gamma=0\implies\beta=1$)
* **Alternative Hypothesis ($\mathcal{H}_a$)**: Time series is stationary ($\gamma<0\implies\beta<1$)

The null hypothesis assumes that the time series consists of non-stationary noise, mainly **Random Walk** noise. Under the alternative hypothesis, the Random Walk noise is absent, and therefore the time series is stationary.

The test statistic is (which can be tested in a given confidence level) given by:

$$
T_{\text{ADF}}=\frac{\hat{\gamma}}{\sigma_{\hat{\gamma}}}
$$

The test statistic, $T_{ADF}$ is a **negative number**. The more negative it is, the stronger the rejection of the hypothesis, and hence the more level of confidence that the series is a stationary process.

(BLUP)=
## Best Linear Unbiased Prediction (BLUP)

Best Linear Unbiased Prediction (BLUP) is the equivalent of Best Linear Unbiased Estimation (BLUE). BLUE can be applied to estimate *deterministic* values, while BLUP is applied in case some of the parameters are of a *random* nature. In case of forecasting, this is indeed the case if the underlying noise process is not white noise.

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


```{note}
For a purely random process (white noise), we have $\Sigma_{Y_p Y}=0$ and, therefore, the stochastic process/part will affect the prediction.
```
