# Time Series Stationarity

**Definition:** a stationary time series is a stochastic process whose joint probability distribution function does not change when shifted in time.

This means that parameters such as *mean* and *(co)variance* should also remain constant over time and not follow any trend, seasonality or irregularity.

* Mean of the process is time-independent

$$\mathcal{E}(y(t))=\mathcal{E}(y_t)=\mu$$

* Covariance of the process is independent of t for each $\tau$

$$\text{cov}(y_t,y_{t-\tau})=\sigma_{t,t-\tau}=\mathcal{E}((y_t-\mu)(y_{t-\tau}-\mu))=\sigma_\tau$$

* If $\tau=0$, the variance becomes also constant with respect to time

$$\mathcal{D}(y_t)=\text{var}(y_t)=\sigma_0=\mathcal{E}((y_t-\mu)^2)=\sigma^2$$

## Why stationary time series?

We desire to have stationary time series because:

* Non-stationary time series models are usually more difficult for prediction
* Random processes require time series to be stationary
* Best linear unbiased predictor (BLUP) property can be formulated for stationary time series

```{note}
Sometimes studying the non-stationarity causes (trend and seasonality) is
the subject of question/research.

However, many real-world time series are indeed non-stationary. We have to find tools to ensure their stationarity.
```

## How should we ensure stationarity?

In general, there are 5 ways to make a non-stationary time series to a stationary one. They are known as transformation methods. They are itemized as follows:

* **Difference transformation of data**:
  * Single differencing
    $$\Delta y_t = y_t - y_{t-1}$$
  * Double differencing
    $$\Delta^2 y_t = \Delta y_t - \Delta y_{t-1} = y_t - 2y_{t-1}+y_{t-2}$$

* **Moving average of data**:
  * Moving average
    $$\bar{y}_t \longleftarrow \frac{1}{k}(y_{t-1}+...+y_{t-k})$$
  * Handle residuals in stochastic model
    $$\Delta^2 y_t = \Delta y_t - \Delta y_{t-1} = y_t - 2y_{t-1}+y_{t-2}$$

* **Function-based transformation of data**:
  * Log transformation
    $$y_t \longleftarrow \log(y_t)$$
  * Square root transformation
    $$y_t \longleftarrow \sqrt{y_t}$$

* **Functional model least squares fit (de-trending)**:
  * Modelling the trend and seasonality
    $$y=Ax+e$$
  * Deal with residuals in the stochastic model
    $$y \longleftarrow e = y-Ax$$

* **Combination of abovementioned methods

### Single differencing

Single differencing of $y=[y_1,...,y_m]$ makes a time series $\Delta y_t=y_t - y_{t-1}, t\geq 2$ starting value of $\Delta y_1 = y_1$. This is a **regular transformation** of data, and hence allowed.

$$
\begin{bmatrix}
    \Delta y_1 \\ \Delta y_2 \\ \Delta y_3 \\ ... \\ \Delta y_m
\end{bmatrix} = 
\begin{bmatrix}
    1 & 0 & 0 & ... & 0\\
    -1 & 1 & 0 & ... & 0\\
    0 & -1 & 1 & ... & 0\\
    ... & ... $ ... & ... & ...\\
    0 & 0 & 0 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
    y_1\\ y_2\\ y_3\\ ...\\ y_m
\end{bmatrix}\Longleftrightarrow
\begin{bmatrix}
    y_1\\ y_2\\ y_3\\ ...\\ y_m
\end{bmatrix} = 
\begin{bmatrix}
    1 & 0 & 0 & ... & 0\\
    1 & 1 & 0 & ... & 0\\
    1 & 1 & 1 & ... & 0\\
    ... & ... $ ... & ... & ...\\
    1 & 1 & 1 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
    \Delta y_1 \\ \Delta y_2 \\ \Delta y_3 \\ ... \\ \Delta y_m
\end{bmatrix}
$$

### Moving average

### Function-based transformation

### Least-squares fit

## Testing stationarity

### ADF test

## Worked example