# Autocovariance function (ACF)

The goal of this chapter is to introduce the autocovariance function (ACF) for a stationary time series, and describe the relationship between ACF and power spectral density (PSD).

As in the Chapter on {ref}`OT`, the variance component is often determined based on the precision of an observation (at a given epoch), and the covarience components quantitatively indicate the statistical dependence (or independence) between observations. In this case, dependence is inherently introduced by the phyiscal processes that produce the signal (of which our time series is a sample), and in fact our time series methods seek to (mathematically) account for this.

## Autocovariance and autocorrelation

Let us assume an arbitrary (discrete) time series, $Y=[Y_1,Y_2,...,Y_m]^T$, with mean $\mathbb{E}(Y)=\mu$ and variance $\sigma^2_{i}=\sigma^2$.

The *formal* autocovariance is defined as

% see below MMMMM

$$
Cov(Y_t, Y_{t-\tau}) = \mathbb{E}((Y_t-\mu)(Y_{t-\tau}-\mu))=\mathbb{E}(Y_tY_{t-\tau})-\mu^2=c_{\tau}
$$

```{note}
The reason to refer to *auto*covariance is that we are considering the covariance of $Y$ with itself (with a certain time lag $\tau$). If the covariance of $Y$ with the time series of another variable, $X$, would be considerd, this is referred to as the *cross*-covariance. 
```

The *formal* autocorrelation is defined as

$$
r_{\tau} = \mathbb{E}(Y_tY_{t-\tau})
$$

```{note}
When we have a zero-mean time series, $\mu=0$, it follows that $c_{\tau}=r_{\tau}$
```

### Empirical autocovariance

The least-squares method or maximum likelihood method can be used to estimate the empirical autocovariance function of a time series. Let us see how!

**Least-squares estimations**

For a given stationary time series $Y = [Y_1,Y_2,...,Y_m]^T$, the least-squares estimator of the **autocovariance function** is given by

$$\
\hat{C}_{\tau} = \frac{\sum_{i=1}^{m-\tau}(Y_i-\mu)(Y_{i+\tau}-\mu)}{m-\tau}, \hspace{25px} \tau=0,1,...,m-1$$

The least-squares estimator of **autocorrelation** (also called empirical autocorrelation function) is then

$$
\hat{R}_{\tau}=\frac{\sum_{i=1}^{m-\tau}Y_i Y_{i+\tau}}{m-\tau}, \hspace{25px} \tau=0,1,...,m-1
$$

**Maximum likelihood estimations**

The maximum likelihood estimator of **autocovariance** is given by

$$
\hat{C}_{\tau} = \frac{\sum_{i=1}^{m-\tau}(Y_i-\mu)(Y_{i+\tau}-\mu)}{m}, \hspace{25px} \tau=0,1,...,m-1
$$

Note that this is a biased estimator, $\mathbb{E}(\hat{C}_{\tau})\neq c_{\tau}$.

Similarly, the maximum likelihood estimate of the autocorrelation follows as:

$$
\hat{R}_{\tau}=\frac{\sum_{i=1}^{m-\tau}Y_i Y_{i+\tau}}{m}, \hspace{25px} \tau=0,1,...,m-1
$$

```{note}
Here we use capitals for $\hat{C}_{\tau}$ and $\hat{R}_{\tau}$ since **estimators** are always a function of the random observables $Y_t$.
```

```{note}
Always check which of the estimators a certain software tool uses! 
% MMMMM Easier said than done? https://www.statsmodels.org/dev/generated/statsmodels.tsa.stattools.acovf.html
```

### Covariance matrix based on autocovariance

The structure of a covariance matrix for a stationary time series is purely symmetric and it looks like

$$
\Sigma_{Y} = \begin{bmatrix} 
\sigma^2 & c_1 & c_2 & \dots & c_{m-1}\\ 
c_1 & \sigma^2 & c_1 & \ddots  & \vdots \\ 
c_2 & c_1 & \sigma^2 &  \ddots & c_2  \\ 
\vdots & \ddots & \ddots & \ddots & c_1\\ c_{m-1} &  & c_2 & c_1 & \sigma^2\end{bmatrix}$$

There are $m$ (co)variance components - **one** variance component, $\sigma^2 = c_0$, and $m-1$ covariance components, $c_i$.

```{note}
The covariance matrix $\Sigma_{Y}$ has constant values along the top-left to bottom-right diagonal and is called a _Toeplitz matrix._
```

(NACF)=
## Normalized ACF

The least-squares estimator of the autocovariance function (ACF) has the following properties (derivations are outside the scope of MUDE):

* The empirical autocovariance function is an unbiased estimator of the formal autocovariance function

$$
\mathbb{E}(\hat{C}_{\tau}) =  c_\tau
$$

* The normalized autocovariance estimator can directly be obtained from the autocovariance estimator as

% MMMMM here we have rho_tau again. Maybe also good to points out upper- and lower-case C/c...is it a random variable/realization thing? Seems to be slightly different, since each c corresponds to a RV X_{t_i}, but C and c notation seems to imply that c is a realization of a stochastic variable/process C?

$$
\hat{\rho}_{\tau} = \frac{\hat{C}_{\tau}}{\hat{C_0}}, \hspace{20px}\tau = 0,...,m-1 \implies \hat{\rho}_0 = 1
$$

```{note}
The estimated normalized autocovariance is the same as  the time dependent Pearson correlation coefficient.
```

* The variance of the normalized ACF can be approximated as

$$
\sigma_{\hat{\rho}_{\tau}}^2 = \frac{1}{m-\tau}+\frac{2\hat{\rho}^2_{\tau}}{m}
$$

* If $m$ is sufficiently large, $\hat{\rho}_{\tau}$ is normally distributed as

$$
\hat{\rho}_{\tau} \sim N(\rho_{\tau},\sigma^2_{\hat{\rho}_{\tau}})
$$

### Worked example

Let us consider a time series of $m=100$ observations, such that

$$
\hat{\rho}_1 = 0.4
$$

We know that 

$$
\hat{\rho}_1 \sim N(\rho_1,\sigma^2_{\hat{\rho}_1})
$$

with $\rho_1$ unknown and

$$
\sigma^2_{\hat{\rho}_1}=\frac{1}{m-1}+\frac{2\hat{\rho}^2_1}{m}=0.0133\implies\sigma_{\hat{\rho}_1}=0.1153
$$

We will now apply a test whether the estimated autocorrelation is significant. The null hypothesis assumes there is **no** correlation:

* $\mathcal{H}_0$: $\rho_1=0$
* $\mathcal{H}_a$: $\rho_1 \neq 0$

Since we know the distribution of $\hat{\rho}_1$, a suitable test statistic would be:

$$
T = \frac{\hat{\rho}_1}{\sigma_{\hat{\rho}_1}} \sim N(0,1)
$$

where we would reject $\mathcal{H}_0$ if $|T|>k_{\alpha}$. With a false alarm rate of $\alpha = 0.01$, we find that the critical value can be obtained from the [table of the standard normal distribution](tabl\epsilon_standardnormal). Note that we have a 2-sided critical region, hence we need to look up the value for $0.5\alpha$.

In this example, we obtain:

$$
(T = 3.47 ) > (k_{\alpha}=2.58)
$$

and hence the null hypothesis is rejected, implying that the autocorrelation is significant.


## Power spectral density

The power spectral density (PSD) explains how the power (variance) of the signal is distributed over different frequencies. For instance, the PSD of a pure sine wave is flat *except* at its constituent frequency, where it will show a peak. Purely random noise has a flat power spectrum, indicating that all frequencies have an identical contribution to the variance of the signal!

### PSD vs ACF

Knowledge on ACF, in time domain, is mathematically equivalent to knowledge on PSD, in the frequency domain, and vice-versa. And, from here, you might have a clue of where this is taking us... The PSD is the **discrete Fourier transform (DFT)** of the ACF.

$$\text{DFT}(\hat{c}_{\tau})=S_{Y}(k), \hspace{35px} \tau = 1,...,m \hspace{5px}\text{and}\hspace{5px} k = 1,...,m$$

Writing it out, this means

$$\text{DFT}\left(\frac{1}{m}\sum_{i=1}^m y_i y_{i+\tau}\right)=\frac{1}{m\Delta t}Y_s(k) Y_s(k)^*=\frac{1}{m\Delta t}|Y_s(k)|^2$$

where the Fourier coefficients (see [DFT section](FFT)) are:

$$Y_s(k)  = \Delta t\sum_{i=1}^my_ie^{-j\frac{2\pi}{m}(k-1)(i-1)}$$

```{note}
In signal processing, it is common to write a sampled (discrete) signal as a small letter $y(t_i)=y_i$ and the Fourier coefficients with capitals $Y_k$. Since we also use capitals to indicate that $Y$ is a random variable, we describe the DFT here for a realization $y$ of $Y$, and use the notation $Y_s(k)$ for the Fourier coefficients.
```

Conversely, the inverse discrete Fourier transform (IDFT) of the PSD is the ACF, so

$$\text{IDFT}(S_{Y}(k))=\hat{c}_{\tau}, \hspace{35px} \tau = 1,...,m \hspace{5px}\text{and}\hspace{5px} k = 1,...,m$$

```{figure} ./figs/ACF_PSD.png
---
height: 300px
name: ACF_PSD
---
Time series data, auto-covariance and its power spectral density plots of white noise above and colored noise (not purely random) below.
```

The PSD explains how the power (variance) of the signal is distributed over different frequencies. The PSD of a pure sine wave is flat except at its constituent frequency.
Purey random noise (i.e., white noise) has a flat power, indicating that all frequencies have identical contribution in making the variance of the signal. This is however not the case for time-correlated noise because different frequencies have different power values in making the total signal variability.

## Partial ACF

A partial ACF (PACF) is a covariance between an observation in a time series with observations at prior time steps with the relationships of intervening observations removed. We work this out using a simple example.

```{admonition} MUDE exam information
:class: tip, dropdown
The concept of PACF and derivation is optional and will not be assessed on the exam.
```

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

% MMMMM Why all of a sudden t+2 instead of t-2?

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