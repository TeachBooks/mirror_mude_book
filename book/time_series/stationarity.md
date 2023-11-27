# Time Series Stationarity


```{admonition} Definition
A stationary time series is a stochastic process whose statistical properties do not depend on the time at which it is observed.
```

This means that parameters such as *mean* and *(co)variance* should remain constant over time and not follow any trend, seasonality or irregularity.

* Mean of the process is time-independent

$$\mathbb{E}(Y(t))=\mathbb{E}(Y_t)=\mu$$

* Covariance of the process is independent of $t$ for each time shift $\tau$:

$$
Cov(Y_t,Y_{t-\tau})=\mathbb{E}((Y_t-\mu)(Y_{t-\tau}-\mu))=c_\tau
$$

* The variance (i.e., $\tau=0$) is then also constant with respect to time :

$$
Var(Y_t)=\mathbb{E}((Y_t-\mu)^2)=c_0=\sigma^2
$$

## Why stationary time series?

Stationarity is important if we want to use a time series for forecasting (predicting future behaviour), which is not possible if the statistical properties change over time.

In practice, we may in fact be interested in for instance the trend and seasonality of a time series. Also, many real-world time series are of course non-stationary. Therefore the approach is to first "stationarize" the time series (e.g., remove the trend), use this stationary time series to predict future states based on the statistical properties (stochastic process), and then apply a back-transformation to account for the non-stationarity (e.g., add back the trend).


## How to "stationarize" a time series?

In general, there are five ways to make a non-stationary time series to a stationary one. They are known as transformation methods. An important requirement is that such transformation in regular, or admissible, meaning that a back-transformation is possible. 

These methods are:

* Difference transformation of data
* Moving average of data
* Function-based transformation of data
* Least-squares fit (de-trending)
* Combination of abovementioned methods

### Single and double differencing

Single differencing of $Y=[Y_1,...,Y_m]^T$ makes a time series $\Delta Y_t=Y_t - Y_{t-1},\; t\geq 2$ with starting value of $\Delta Y_1 = Y_1$. This is a **regular transformation** of data, and hence allowed, as shown in the equation below.

$$
\begin{bmatrix}
    \Delta Y_1 \\ \Delta Y_2 \\ \Delta Y_3 \\ ... \\ \Delta Y_m
\end{bmatrix} = 
\begin{bmatrix}
    1 & 0 & 0 & \dots & 0\\
    -1 & 1 & 0 & \dots & 0\\
    0 & -1 & 1 & \dots & 0\\
    \vdots & \vdots &\vdots & \ddots & \vdots \\
    0 & 0 & 0 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
    Y_1\\ Y_2\\ Y_3\\ ...\\ Y_m
\end{bmatrix}\Longleftrightarrow
\begin{bmatrix}
    Y_1\\ Y_2\\ Y_3\\ ...\\ Y_m
\end{bmatrix} = 
\begin{bmatrix}
    1 & 0 & 0 & \dots & 0\\
    1 & 1 & 0 & \dots & 0\\
    1 & 1 & 1 & \dots & 0\\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & 1 & 1 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
    \Delta Y_1 \\ \Delta Y_2 \\ \Delta Y_3 \\ ... \\ \Delta Y_m
\end{bmatrix}
$$

#### Worked example

Let us consider the following time series

$$
Y_t = y_0+vt+\epsilon_t
$$

This time series is non-stationary, due to the presence of a linear trend (the expectation is a function of $t$).

Now we will apply single differencing to the time series:

$$
\begin{align*}
\Delta Y_t = Y_t-Y_{t-1} &= y_0+vt+\epsilon_t-(Y_0+v(t-1)+\epsilon_{t-1}) \\
&= v+\Delta \epsilon_t
\end{align*}
$$

It follows that $\mathbb{E}(\Delta Y_t)=v$, and therefore not a function of $t$ anymore.

Now consider

$$
Y_t = y_0+vt+at^2+\epsilon_t
$$

We again apply single differencing:

$$
\begin{align*}
\Delta Y_t = Y_t-Y_{t-1} &= y_0+vt+at^2+\epsilon_t-(Y_0+v(t-1)+a(t-1)^2+\epsilon_{t-1}) \\
&= v-a+2at+\Delta \epsilon_t
\end{align*}
$$

In this case we find that $\mathbb{E}(\Delta Y_t)=v-a+2at$, which is still a function of $t$ and therefore not stationary. The solution would be to continue the process, which is referred to as *double differencing*:

$$
\Delta^2 Y_t = \Delta Y_t - \Delta Y_{t-1}
$$

:::{card} Exercise

Show for yourself that applying double differencing to the time series $Y_t = y_0+vt+at^2+\epsilon_t$ results in a stationary time series $\Delta^2 Y_t$.

```{admonition} Solution
:class: tip, dropdown

$$
\begin{align*}
\Delta^2 Y_t = \Delta Y_t-\Delta Y_{t-1} &= v-a+2at+\Delta \epsilon_t-(v-a+2a(t-1)+\Delta \epsilon_{t-1}) \\&= 2a+\Delta^2\epsilon_t
\end{align*}
$$

with $\mathbb{E}(\Delta^2 Y_t)=2a$.
```

```{figure} ./figs/doubledifference.png 
---
height: 300px
name: doubledifference
---
Original time series (second-order polynomial) on the left; double differenced time series on the right.
```
:::

### Moving average

The moving average of $Y = [Y_1, ..., Y_m]^T$ will create a time series $\bar{Y}_t = {\bar{Y}_1,...,\bar{Y}_m}$, with 

$$
\bar{Y}_t = \frac{1}{k}\sum_{i=-m}^{m}Y_{t-i}
$$

where the length of the interval over which the average is taken is equal to $k=2m+1$.

The difference between two time series provides a (nearly) stationary time series $\Delta Y_t = Y_t - \bar{Y}_t$.

```{figure} ./figs/moving_avg.png
---
height: 300px
name: moving_avg
---
Original time series and moving average on the right; stationarized times series on the left.
```


### Function-based transformation

A function-based transformation of $Y=[Y_1,...,Y_m]^T$ makes a time series $S_t \longleftarrow f(Y_t)$. For example, a log function would downscale the range of variations of the data. This is a nonlinear but *regular* transformation of data, and hence allowed.

```{figure} ./figs/function_transf.png 
---
height: 300px
name: function_transf
---
Original time series on the right; stationarized times series on the left (not log-scale on vertical axis).
```

### Least-squares fit

If we can express the time series $Y=[Y_1, ..., Y_m]^T$ with a linear model of observation equations as $Y = \mathrm{Ax} + \epsilon$, we can apply [best linear unbiased estimation](BLUE) (equivalent to weighted least-squares) to estimate the parameters $\mathrm{x}$ that describe e.g. the trend and seasonality:

$$
\hat{X}=\mathrm{A}(\mathrm{A}^T\Sigma_{yy}^{-1}\mathrm{A})^{-1}\mathrm{A}^T\Sigma_{yy}^{-1}Y 
$$

A "detrended" time series is obtained in the form of the residuals 

$$
\hat{\epsilon} = Y - \mathrm{A}\hat{X}
$$ 

The **de-trended $\hat{\epsilon}$ is assumed to be stationary** for further **stochastic processing**. This is also an admissible transformation because $Y$ can uniquely be reconstructed as $Y=\mathrm{A}\hat{X}+\hat{\epsilon}$. 

Let us take a look into an example:

```{figure} ./figs/least_squares.png 
---
height: 300px
name: least_squares
---
Example of a time series (right graph) with linear and seasonal trend. The residuals (= stationary time series) after applying BLUE are shown on the left.
```

MMMMM include the model (equations) as well!!


:::{card} **Testing stationarity**

```{admonition} MUDE exam information
:class: tip, dropdown
This part is optional and will not be assessed on the exam.
```

Different tests can be performed to test whether or not a time series is stationary. One of the commonly used methods is the **Augmented Dickey-Fuller (ADF)** test. 

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

:::
