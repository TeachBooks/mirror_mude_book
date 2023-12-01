# Time Series Stationarity


```{admonition} Definition
A stationary time series is a stochastic process whose statistical properties do not depend on the time at which it is observed.
```

This means that parameters such as *mean* and *(co)variance* should remain constant over time and not follow any trend, seasonality or irregularity.

* Mean of the process is time-independent

$$\mathbb{E}(Y(t))=\mathbb{E}(Y_t)=\mu$$

* Covariance of the process is independent of $t$ for each time shift $\tau$ (so only a function of τ  and not t):

$$
Cov(Y_t,Y_{t-\tau})= Cov(Y_t,Y_{t+\tau}) =\mathbb{E}((Y_t-\mu)(Y_{t-\tau}-\mu))=c_\tau
$$

* The variance (i.e., $\tau=0$) is then also constant with respect to time :

$$
Var(Y_t)=\mathbb{E}((Y_t-\mu)^2)=c_0=\sigma^2
$$

## Why stationary time series?

Stationarity is important if we want to use a time series for forecasting (predicting future behaviour), which is not possible if the statistical properties change over time.

In practice, we may in fact be interested in for instance the trend and seasonality of a time series. Also, many real-world time series are of course non-stationary. Therefore the approach is to first "stationarize" the time series (e.g., remove the trend), use this stationary time series to predict future states based on the statistical properties (stochastic process), and then apply a back-transformation to account for the non-stationarity (e.g., add back the trend).

(stationarize)=
## How to "stationarize" a time series?

In general, there are five ways to make a non-stationary time series to a stationary one. They are known as transformation methods. An important requirement is that such transformation is regular, or admissible, meaning that a back-transformation is possible. 

Common methods are:

* Difference transformation of data
* Moving average of data
* Least-squares fit (detrending)

### Single and double differencing

Single differencing of $Y=[Y_1,...,Y_m]^T$ makes a time series $\Delta Y_t=Y_t - Y_{t-1},\; t\geq 2$ with starting value of $\Delta Y_1 = Y_1$. This is a **regular transformation** of data, and hence allowed, as shown in the equation below.

(SD)=
$$
\begin{bmatrix}
    \Delta Y_1 \\ \Delta Y_2 \\ \Delta Y_3 \\ \vdots \\ \Delta Y_m
\end{bmatrix} = 
\begin{bmatrix}
    1 & 0 &   & \dots & 0\\
    -1 & 1 & 0 &   &  \\
    0 & -1 & 1 & \ddots & \\
    \vdots & \ddots &\ddots & \ddots & 0 \\
    0 & \dots & 0 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
    Y_1\\ Y_2\\ Y_3\\ \vdots\\ Y_m
\end{bmatrix}\Longleftrightarrow
\begin{bmatrix}
    Y_1\\ Y_2\\ Y_3\\ \vdots \\Y_m
\end{bmatrix} = 
\begin{bmatrix}
    1 & 0 & 0 & \dots & 0\\
    1 & 1 & 0 & \dots & 0\\
    1 & 1 & 1 &  & \vdots\\
    \vdots & \vdots & \vdots & \ddots &0\\
    1 & 1 & 1 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
    \Delta Y_1 \\ \Delta Y_2 \\ \Delta Y_3 \\ \vdots \\ \Delta Y_m
\end{bmatrix}
$$

#### Worked example

Let us consider the following time series

$$
Y_t = y_0+rt+\epsilon_t
$$

This time series is non-stationary, due to the presence of a linear trend (the expectation is a function of $t$).

Now we will apply single differencing to the time series:

$$
\begin{align*}
\Delta Y_t = Y_t-Y_{t-1} &= y_0+rt+\epsilon_t-(y_0+r(t-1)+\epsilon_{t-1}) \\
&= r+\Delta \epsilon_t
\end{align*}
$$

It follows that $\mathbb{E}(\Delta Y_t)=r$, and therefore not a function of $t$ anymore.

Now consider

$$
Y_t = y_0+rt+at^2+\epsilon_t
$$

We again apply single differencing:

$$
\begin{align*}
\Delta Y_t = Y_t-Y_{t-1} &= y_0+rt+at^2+\epsilon_t-(y_0+r(t-1)+a(t-1)^2+\epsilon_{t-1}) \\
&= r-a+2at+\Delta \epsilon_t
\end{align*}
$$

In this case we find that $\mathbb{E}(\Delta Y_t)=r-a+2at$, which is still a function of $t$ and therefore not stationary. The solution would be to continue the process, which is referred to as *double differencing*:

$$
\Delta^2 Y_t = \Delta Y_t - \Delta Y_{t-1}
$$

:::{card} Exercise

Show for yourself that applying double differencing to the time series $Y_t = y_0+rt+at^2+\epsilon_t$ results in a stationary time series $\Delta^2 Y_t$.

````{admonition} Solution
:class: tip, dropdown

$$
\begin{align*}
\Delta^2 Y_t = \Delta Y_t-\Delta Y_{t-1} &= r-a+2at+\Delta \epsilon_t-(r-a+2a(t-1)+\Delta \epsilon_{t-1}) \\&= 2a+\Delta^2\epsilon_t
\end{align*}
$$

with $\mathbb{E}(\Delta^2 Y_t)=2a$.

```{figure} ./figs/doubledifference.png 
---
height: 300px
name: doubledifference
---
Original time series (second-order polynomial) on the left; double differenced time series on the right.
```
````
:::

### Moving average

The moving average of $Y = [Y_1, ..., Y_m]^T$ will create a time series $\bar{Y}_t = {\bar{Y}_1,...,\bar{Y}_m}$, with 

$$
\bar{Y}_t = \frac{1}{k}\sum_{i=1}^{k}Y_{t-i}
$$

where the length of the interval over which the average is taken is equal to $k$ (hence, the moving average only uses past values up till $k-1$ epochs ago).

The difference between two time series provides a (nearly) stationary time series $\Delta Y_t = Y_t - \bar{Y}_t$.

```{figure} ./figs/moving_avg.png
---
height: 300px
name: moving_avg
---
Original time series and moving average on the right; stationarized times series on the left.
```
:::{card} Exercise

Consider a random process time series as:

$$
Y_t
= U \cos (\theta t) + V \sin (\theta t)
$$

where $U$ and $V$ are two uncorrelated random variables with zero means, and unit variances and $\theta$ is a deterministic value in the interval $\theta \in [-\pi, \pi]$. Show that this noise process is stationary.

```{admonition} Solution
:class: tip, dropdown

Because $\mathbb{E}(U)=\mathbb{E}(V)=0$, it simply follows that 

$$
\mathbb{E}(Y_t)=0
$$

For a given $\tau$, the covariance between $Y_t$ and $Y_{t+\tau}$ is obtained as:

$$
\begin{align*}
c_\tau = Cov(Y_t, Y_{t+\tau})
&= \mathbb{E}(Y_tY_{t+\tau}) - \mathbb{E}(Y_t)\mathbb{E}(Y_{t+\tau})
= \mathbb{E}(Y_t Y_{t+\tau})\\
&= \mathbb{E}
\biggl(
    \bigl[ U \cos(\theta t) + V \sin(\theta t) \bigr]
    \bigl[ U \cos(\theta t + \theta \tau)
         + V \sin(\theta t + \theta \tau) \bigr]
\biggr)
\end{align*}
$$

The multiplication consists of four terms in which the terms $U^2$, $V^2$, $UV$ and $VU$ appear. Because the two random variables $U$ and $V$ are uncorrelated with zero means and unit variances, it follows that:

$$
\mathbb{E}(U^2) = \mathbb{E}(V^2) = 1
\quad \mathrm{and} \quad
\mathbb{E}(UV) = \mathbb{E}(VU) = 0
$$

This, with the previous equations, gives:

$$
Cov(Y_t, Y_{t+\tau})
= \cos(\theta t) \cos(\theta t + \theta \tau)
+ \sin(\theta t) \sin(\theta t + \theta \tau)
$$

Using the identity $\cos(a-b)=\cos(a)\cos(b)+\sin(a)\sin(b)$, it follows:

$$
Cov(Y_t, Y_{t+\tau})
= \cos(\theta t + \theta \tau - \theta t)
= \cos(\theta \tau)
$$

Which is a function of $\tau$, but not a function of time $t$. This shows that the random process is stationary.

```
:::

### Least-squares fit

If we can express the time series $Y=[Y_1, ..., Y_m]^T$ with a linear model of observation equations as $Y = \mathrm{Ax} + \epsilon$, we can apply [best linear unbiased estimation](BLUE) (equivalent to weighted least-squares) to estimate the parameters $\mathrm{x}$ that describe e.g. the trend and seasonality:

$$
\hat{X}=(\mathrm{A}^T\Sigma_{Y}^{-1}\mathrm{A})^{-1}\mathrm{A}^T\Sigma_{Y}^{-1}Y 
$$

A detrended time series is obtained in the form of the residuals 

$$
\hat{\epsilon} = Y - \mathrm{A}\hat{X}
$$ 

The **detrended $\hat{\epsilon}$ is assumed to be stationary** for further **stochastic processing**. This is also an admissible transformation because $Y$ can uniquely be reconstructed as $Y=\mathrm{A}\hat{X}+\hat{\epsilon}$. 

Let us take a look into an example:

```{figure} ./figs/least_squares.png 
---
height: 300px
name: least_squares
---
Example of a time series (right graph) with linear and seasonal trend. The residuals (= stationary time series) after applying BLUE are shown on the left.
```

In the example above, for each observation $Y_i = y_0+ rt_i+a\cos{\omega_0t_i}+b \sin{\omega_0t_i} + +x_3t_i+\epsilon_i$, where $a$ and $b$ describe the seasonality and $y_0$ and $r$ the trend. The time series then is:

$$
\begin{bmatrix}
    Y_1 \\ Y_2 \\  \vdots \\ Y_m
\end{bmatrix} = \begin{bmatrix}
    1&t_1&\cos{\omega_0 t_1} & \sin{\omega_0 t_1} \\
     1&t_2&\cos{\omega_0 t_2} & \sin{\omega_0 t_2} \\
       \vdots & \vdots & \vdots & \vdots \\ 
     1&t_m&\cos{\omega_0 t_m} & \sin{\omega_0 t_m}
\end{bmatrix}
\begin{bmatrix}
y_0 \\ r \\ a \\ b \end{bmatrix} + 
\begin{bmatrix}
    \epsilon_1 \\ \epsilon_2 \\  \vdots \\ \epsilon_m
\end{bmatrix}
$$

The time series of residuals (left panel) is indeed a stationary time series.

## ... and then what?

We have seen different ways of obtaining a stationary time series from the original time series. The reason is that in order to make predictions (forecasting future values) we need to account for both the **signal-of-interest** and the **noise**. [Estimating the signal-of-interest](modelling_tsa) was covered in the previous section. In the next sections we will show how the noise can be modelled as a stochastic process. Given a time series $Y=\mathrm{Ax}+\epsilon$, the workflow is as follows:

1. Estimate the signal-of-interest $\hat{X}=\mathrm{A}^T\Sigma_{Y}^{-1}\mathrm{A})^{-1}\mathrm{A}^T\Sigma_{Y}^{-1}Y$ (Section [Modelling and estimation](modelling_tsa)).

2. Model the noise using the Autoregressive Moving Average (ARMA) model, using the stationary time series $S:=\hat{\epsilon}=Y-\mathrm{A}\hat{X}$ (Section [ARMA](ARMA)).

3. Predict the signal-of-interest: $\hat{Y}_{signal}=\mathrm{A}_p\hat{X}$, where $\mathrm{A}_p$ is the design matrix describing the functional relationship between the future values $Y_p$ and $\mathrm{x}$ (Section [Forecasting](forecast)).

4. Predict the noise $\hat{\epsilon}_p$ based on the ARMA model.

5. Predict future values of the time series: $\hat{Y}_p=\mathrm{A}_p\hat{X}+\hat{\epsilon}_p$ (Section [Forecasting](forecast)).
