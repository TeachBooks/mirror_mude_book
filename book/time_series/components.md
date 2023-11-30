# Components of time series

A time series is a sequence of data points indexed in time in order to study a phenomenon. It is thus the data collected at different points in time. The data are usually collected at fixed time intervals rather than just recording them intermittently or randomly. The fixed interval, in the time domain, is defined as 'sampling interval' and, in the frequency domain, is defined as 'sampling rate' or 'sampling frequency', expressed for example in Hz.

A time series is denoted as 

$$Y(t) = [Y(t_1), Y(t_2), \ldots{}, Y(t_m)]^T$$

The $Y(t_i)$ are random variables, since the data is affected by noise.

The time instants, also defined as epochs, are $t_i = i \Delta t$, indicating that the samples are equally spaced in time intervals of $\Delta t$. Assuming a unit time interval (i.e., $\Delta t=1$), then $t_i = i$ and we can write the time series as 

$$Y(t) = [Y(1), Y(2), \ldots{}, Y(m)]^T = [Y_1, Y_2, \ldots{}, Y_m]^T$$

```{figure} ./figs/time_series.png
:name: time_series
:width: 700px
:align: center

Example of time series with equally spaced time interval $\Delta t$
```

A time series can be decomposed as follows:

$$Y(t) = tr(t) + s(t) + o(t) + b(t) + N(t)$$

where we distinguish the following components:

1. $tr(t)$ = trend, provides the general behavior and variation of the process
2. $s(t)$ = seasonality, shows the regular seasonal variations
3. $o(t)$ = offset, is a discontinuity (or jump) in the data
4. $b(t)$ = irregularities and outliers (also referred to as biases), due to unexpected reasons. Irregularities will not be considered in this book.
5. $N(t)$ = noise, can be white or colored noise.

## Trend

The trend is the general pattern of the time series and shows its long-term changes. It is observed when there is an increasing or decreasing slope in the time series.

```{figure} ./figs/trend.png
:name: trend
:width: 600px
:align: center

Monthly time series of global mean sea level measurements using Satellite Altimetry technique. Source image: https://www.cmar.csiro.au/sealevel/sl_hist_last_decades.html
```

{numref}`trend` shows a positive trend (red line) of around $3.5$ mm/year, which in this case indicates sea level rise. This however needs to be further investigated and tested statistically (see {ref}`hypothesis_testing` and also {ref}`modelling_tsa`).

Trend analysis expresses the changes of the variable of interest with respect to time $t$.
We address here two types of trend analysis.:

1. Linear trend analysis. The time-dependent variable $Y(t)$ changes at a (constant) linear rate over time: $Y_t = y_0 + r t + \epsilon_t$
2. Log-linear trend analysis. The time-dependent variable changes at a (constant) exponential rate over time: $ln(Y_t) = y_0 + r t + \epsilon_t$

:::{card} Example - linear trend

Assume $\hat y_0 = 5$ and $\hat r = 2$.

Therefore, $Y_t = \hat y_0 + \hat r  t = 5 + 2  t$. At $t=10$, $Y_{10} = 5 + 2 \times 10 = 25$.
:::

:::{card} Example - log-linear trend

Assume again $\hat y_0 = 5$ and $\hat r = 2$.

$ln(Y_t) = \hat y_0 + \hat r  t = 5 + 2  t$. At $t=10$, $ln(Y_{10}) = 5 + 2 \times 10 \Rightarrow Y_{10} = 72004899337.4$
:::

## Seasonality

Seasonal variations explain regular fluctuations in a certain period of time (e.g. a year), usually caused by climate and weather conditions (e.g. temperature, rainfall), cycles of seasons, customs, traditional habits, weekends, or holidays. For example, the weekly signal is usually evident in the volume of people engaged in shopping (likely more people prefer going shopping in the weekends)

From {numref}`trend` it is also possible to see the seasonal variations: in fact sea levels are higher in summer and lower in winter. The annual warming/cooling cycle is the main contributor to these seasonal variations.

Regular seasonal variations in a time series might be handled by using a sinusoidal model with one or more sinusoids whose frequency may be known or unknown depending on the context. A harmonic model for seasonal variation can be of the following two equivalent forms (using that $\sin(u+v)= \sin u \cos v + \cos u \sin v$):

$$ 
\begin{align*}
Y(t) &= \sum_{k=1} ^p A_k  \sin(k \omega_0  t + \theta_k)  + \epsilon_t\\
&= \sum_{k=1} ^p \left(a_k  \cos(k \omega_0  t) + b_k  \sin(k \omega_0 t) \right)+ \epsilon_t
\end{align*}
$$

with the coefficients $a_k =A_k\sin\theta_k$ and $b_k=A_k\cos\theta_k$, and where $\omega_0$ is the base (fundamental) frequency of the seasonal variation and is fixed or is determined by Spectral Analysis methods such as {ref}`dft` or FFT. To be more specific, we can use the {ref}`psd` and {ref}`LS-HE` to determine the unknown frequencies. 

The coefficients $a_k $ and $b_k$ can be determined using the least-squares method. From this the original sinusoids can be obtained using:

$$ A_k = \sqrt{a_k^2 + b_k^2}, \hspace{1cm} \theta_k = \arctan(\frac{a_k}{b_k}), \hspace{1cm} k = 1, \ldots{}, p $$

(season)=
:::{card} Example - seasonal variations

```{figure} ./figs/sine_wave_1.jpg
:name: trendab
:width: 600px
:align: center

Seasonal variations components: blue line is the time series $Y(t)$; red and green lines represent the contributions $a  \cos(0.5\pi t)$ and  $b   \sin(0.5\pi t)$, respectively.
```

The seasonal variation is given as $y = A \sin(\omega_0 t + \theta)$.

Assume amplitude $A=2$, base frequency $\omega_0=0.5\pi$ and initial phase $\theta = -0.8 \pi$ (rad), see top panel of {numref}`trendab`.

$y(t) = 2 \sin(0.5 \pi t - 0.8\pi)$

The time-delay of the phase is $0.5 t - 0.8 = 0 \Rightarrow t = 1.6 \equiv \theta_t$.

Alternatively we can write 

$y(t) = a  \cos(0.5\pi t) + b   \sin(0.5\pi t)$

where $a = A  \sin(\theta)=-1.1756$ and $b=A  \cos(\theta)=-1.6180$.

:::

## Offset (jump)

Offsets are sudden changes in time series. There are different underlying reasons why we encounter offsets in time series. 

```{figure} ./figs/offset.png
:name: offset
:width: 700px
:align: center

Example of time series with two offsets. 
```

As a deterministic sudden change, offsets can be handled by a step function such as a Heaviside step function whose epoch (time instant) can be known or unknown (to be detected) depending on the time series.

In this case the time series is written as 

$$ Y(t) = \sum_{k=1}^q o_k u_k(t)+\epsilon_t$$

where $q$ is the series of offsets (in {numref}`offset` there are two offsets, hence $q=2$) and each of them is expressed as a Heaviside step function 

$$u_k(t) = \left\{
\begin{array}{ll}
      0 & \text{if} \hspace{0.3cm} t<t_k \\
      1 & \text{if} \hspace{0.3cm} t\geq t_k \\
\end{array} 
\right.  $$

## Noise 

Noise simply refers to random fluctuations in the time series about its typical pattern. In general we can talk about white and colored noise in time series analysis. The following characteristics are associated with noise:

- Noise is not necessarily synonymous to error, but part of noise is the random error.
- It is required to filter out unwanted random variations, and detect meaningful information (i.e., a signal) from noise processes.
- Transforming data from the time domain to the frequency domain allows to filter out the frequencies that pollute the data.
- White noise can be decomposed into its constituent components (frequencies) like white light.  In principle, white noise contains all wavelengths/colors, each contributing equally to the fluctuations observed in the data.
- Colored noise can seriously affect the analysis of time series, and their parameters of interest. Short-term colored noise has also predictive property (used for forecasting).

A purely random process (or white noise process) yields a sequence of uncorrelated zero-mean random variables. This zero-mean random process is of the form

$$ Y(t)=Y_t=\epsilon_t $$

where $\epsilon_t$ is the independent identically distributed (i.i.d.) error at epoch $t$. Therefore, the observation/noise at time $t$ is not dependent on the previous observations.

### Stochastic model

A stationary zero-mean random process has an expectation of zero (functional model), and a scaled identity matrix as its covariance matrix (stochastic model). The functional and stochastic models of white noise are of the form 

$$
\mathbb{E}(Y) =  \mathbb{E} \left[\begin{array}{c} y_1 \\ y_2 \\ \vdots \\ y_m \end{array}\right] = \left[\begin{array}{c} 0 \\ 0 \\ \vdots \\ 0 \end{array}\right]
$$

and 

$$
\mathbb{D}(Y) =  \Sigma_{Y} = \sigma^2 \left[\begin{array}{ccc} 1 & 0 & \ldots{} & 0 \\ 0 & 1 & \ldots{} & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \ldots{} & 1 \end{array}\right]
$$

The noise can be represented with a Gaussian distribution with mean $\mu=0$ and variance $\sigma^2$, that is $\epsilon(t) \sim \textbf{N}(0, \sigma^2)$.

:::{card} Example - time series consisting of a trend, annual signal (seasonality), an offset and pure random noise (white noise)

It can be written as 

$$Y(t) = y_0 + rt + a \text{cos}(\omega_0 t) + b \text{sin}(\omega_0 t) + o u_k(t) + \epsilon(t)$$

where 
- $y_0$ is the intercept (e.g. in mm)
- $r$ is the rate (e.g. in mm/year)
- $a$ and $b$ are the coefficients of the signal, (e.g. annual signal)
- $\omega_0$ is the frequency (e.g. 1 cycle/year)
- $o$ is the offset starting at time $t_k$
- $\epsilon(t)$ is the i.i.d. random noise, i.e. $\epsilon(t) \sim \textbf{N}(0, \sigma^2)$.
:::