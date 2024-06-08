(ARMA)=
# ARMA process

The main goal is to introduce the AutoRegressive Moving Average (ARMA) model to describe a **stationary stochastic process**. Hence the ARMA model can be applied on time series where e.g. trend and seasonality are not present / removed, and only noise remains, or after applying other methods [to obtain a stationary time series](stationarize).

## Process definition

In an ARMA model, we forecast the variable of interest using a linear combination of its past values plus the current and past errors. A zero mean ARMA process of orders $p$ and $q$ can be written as follows:

$$S_t = \overbrace{\beta_1S_{t-1}+...+\beta_pS_{t-p}}^{\text{AR process}} + e_t + \overbrace{\theta_1 e_{t-1}+...+\theta_q e_{t-q}}^{\text{MA process}}$$ 

or as

$$S_t = \sum_{i=1}^p \beta_iS_{t-i}+e_t+\sum_{i=1}^q \theta_i e_{t-i}$$

Each observation is made up of a **random error** $e_t$ at that epoch, a linear combination of **past observations**, and a linear combination of **past errors**. The errors $e_t$  are uncorrelated purely random noise process, known also as white noise. We note the process should still be stationary, satisfying

$$\mathbb{E}(S_t)=0, \hspace{20px} \mathbb{D}(S_t)=\sigma^2,\quad \forall t$$

This indicates that parts of the total variability of the process come from the signal and noise of past epochs, and only a (small) portion belongs to the noise of that epoch (denoted as $e_t$). To have a better understanding of the process itself, we consider two special cases, $q=0$ and $p=0$.

### Special case 1: ARMA$(p,0) = $ AR$(p)$

The first special case we are going to study considers $q=0$. A zero mean $p$-order autoregressive (AR) random process, abbreviated to ARMA($p,0$) = AR($p$), can be written as follows

$$S_t = \beta_1S_{t-1}+...+\beta_pS_{t-p} + e_t=S_t = \sum_{i=1}^p \beta_iS_{t-i}+e_t$$

#### First-order AR(1) process

We will just focus on explaining $p=1$, i.e. the AR(1) process. A **zero-mean first order autoregressive** process can be written as follows

$$S_t = \beta S_{t-1}+e_t, \hspace{20px} -1\leq\beta<1, \hspace{20px} t=2,...,m$$

where $e_t$ is an i.i.d. noise process, e.g. distributed as $e_t\sim N(0,\sigma_{e}^2)$. See later the definition of $\sigma_{e}^2$.

:::{card} Exercise

In a zero-mean first order autoregressive process, abbreviated as AR(1), we have $m=3$ observations, $\beta=0.8$, and the generated white noise errors are $e = [e_1,\, e_2,\, e_3]^T=[1,\, 2,\, -1]^T$. What is the generated AR(1) process $S = [S_1,\, S_2,\, S_3]^T$?

a. $S = \begin{bmatrix}1 & 2.8 & 1.24\end{bmatrix}^T$  
b. $S = \begin{bmatrix} 0 & 2 & 0.6 \end{bmatrix}^T$  
c. $S = \begin{bmatrix} 1 & 2 & -1 \end{bmatrix}^T$  

```{admonition} Solution
:class: tip, dropdown

The correct answer is **a**. The AR(1) process can be initialized as $S_1=e_1=1$. The next values can be obtained through:

$$
S_t = \beta S_{t-1} + e_t
$$

Giving $S_2=0.8 S_1 + e_2 = 0.8\cdot 1 + 2 = 2.8$ and $S_3=0.8 S_2 + e_3 = 0.8\cdot 2.8 - 1= 1.24$, so we have:

$$
S = 
\begin{bmatrix}1 & 2.8 & 1.24\end{bmatrix}^T 
$$

```
:::

**Formulation**

Initializing $S_1=e_1$, with $\mathbb{E}(S_1)=\mathbb{E}(e_1)=0$ and $\mathbb{D}(S_1)=\mathbb{D}(e_1)=\sigma^2$. Following this, multiple applications of the above "autoregressive" formula ($S_t = \beta S_{t-1} + e_t$) gives:

$$
\begin{align*}
S_1&=e_1\\ 
S_2&=\beta S_1+e_2\\ 
S_3 &= \beta S_2+e_3 = \beta^2S_1+\beta e_2+e_3\\ 
&\vdots\\ 
S_m &= \beta S_{m-1} + e_m = \beta^{m-1}S_1+\beta^{m-2}e_2+...+\beta e_{m-1}+e_m
\end{align*}
$$

of which we still have (in order to impose the *stationarity*):

$$\mathbb{E}(S_t)=0 \hspace{5px}\text{and}\hspace{5px} \mathbb{D}(S_t)=\sigma^2, \hspace{10px} t=1,...,m$$

All the error components, $e_t$, are uncorrelated such that $Cov(e_t,e_{t+\tau})=0$ if $\tau \neq 0$, and with variance $\sigma_{e}^2$ which still needs to be determined.

**Autocovariance**

The mean of the process is zero and, therefore:

$$\mathbb{E}(S_t) = \mathbb{E}(\beta S_{t-1}+e_t) = \beta\mathbb{E}(S_{t-1})+\mathbb{E}(e_t) = 0$$

The variance of the process should remain constant as:

$$\mathbb{D}(S_t) = \mathbb{D}(\beta S_{t-1} +e_t) \Leftrightarrow \sigma^2=\beta^2\sigma^2+\sigma_{e}^2, \hspace{10px} t\geq 2$$

resulting in

$$\sigma_{e}^2 = \sigma^2 (1-\beta^2)$$

indicating that $\sigma_{e}^2$ is smaller than $\sigma^2$.

The autocovariance (covariance between $S_t$ and $S_{t+\tau}$) is

$$
\begin{align*}
c_{\tau}&=\mathbb{E}(S_t S_{t+\tau})-\mu^2 =\mathbb{E}(S_t S_{t+\tau})\\
&= \mathbb{E}(S_t(\beta^\tau S_t + \beta^{\tau-1} e_{t+1}+...)) = \beta^\tau\mathbb{E}(S_t^2)=\sigma^2\beta^\tau
\end{align*}$$

In the derivation above we used that:

$$
\begin{align*}
S_{t+\tau}=\beta^\tau S_t + \beta^{\tau-1} e_{t+1}+...+e_{t+\tau}
\end{align*}
$$

and the fact that $S_t$ and $e_{t+\tau}$ are uncorrelated for $\tau \neq 0$.

```{admonition} Derivation (optional)
:class: tip, dropdown

$$
\begin{align*}
S_{t+\tau}&= \beta^{t+\tau-1}S_1 + \beta^{t+\tau-2}e_2+...+ \beta^{\tau} e_{t}+ \beta^{\tau-1} e_{t+1}+...+e_{t+\tau}\\
&= \beta^{\tau} \left(\beta^{t-1}S_1 + \beta^{t-2}e_2+...+  e_{t}\right)+ \beta^{\tau-1} e_{t+1}+...+e_{t+\tau}\\
&=\beta^\tau S_t + \beta^{\tau-1} e_{t+1}+...+e_{t+\tau}
\end{align*}
$$

```

**Model structure of AR(1)**

$$\mathbb{E}(S) = \mathbb{E}\begin{bmatrix}S_1\\ S_2\\ \vdots\\ S_m\end{bmatrix} = \begin{bmatrix}0\\ 0\\ \vdots\\ 0\end{bmatrix}, \hspace{15px} \mathbb{D}(S)=\Sigma_{S}=\sigma^2 \begin{bmatrix}1&\beta&...&\beta^{m-1}\\ \beta&1&...&\beta^{m-2}\\ \vdots&\vdots&\ddots&\vdots\\ \beta^{m-1}&\beta^{m-2}&...&1\end{bmatrix}$$

* Autocovariance function $\implies$ $c_{\tau}=\sigma^2\beta^\tau$
* Normalized autocovariance function (ACF) $\implies$ $\rho_\tau=c_{\tau}/c_0=\beta^\tau$
* Larger value of $\beta$ indicates a long-memory random process
* If $\beta=0$, this is called *purely random process* (white noise)
* ACF is even, $c_{\tau}=c_{-\tau}=c_{|\tau|}$ and so is $\rho_{\tau}=\rho_{-\tau}=\rho_{|\tau|}$

Later in this section we will see how the coefficient $\beta$ can be estimated.

**Simulated example**

A time series has been simulated to have a standard normal distribution, $S_i \sim N(0,1)$. This indicates that the first entry is $S_1 \sim \text{N}(0,1)$ and the remaining errors are $e_i \sim N(0,1-\beta^2)$, $i=2,...,m=1000$. The time series is shown in {numref}`ar1example`. Time correlation can be visually seen in the data.

The normalized ACF shows the temporal correlation, $\rho_{\tau}=\beta^{\tau}$, where $\tau=0,1,2,...,m-1$.

```{figure} ./figs/ar1example.png
:name: ar1example
:width: 600px
:align: center

Left: time series for $\beta =0.7$ and $\beta =-0.7$. Right: corresponding normalized autocovariance functions.
```

### Special case 2: ARMA$(0,q) = $ MA$(q)$

A zero mean $q$-order moving average random process, abbreviated to ARMA(0,q) = MA(q), can be written as follows

$$S_t=\theta_1 e_{t-1}+...+\theta_q e_{t-q}+e_t$$

or

$$S_t=\sum_{i=1}^q \theta_i e_{t-i} + e_t$$

#### First-order MA(1) process

Here we will just focus on the case $q=1$, i.e. MA(1). A **zero-mean first order moving average process** can be written as:

$$S_t = \theta e_{t-1} + e_t, \hspace{10px} -1\leq\theta<1 \hspace{10px} t=2,...,m$$

where $e_t$ is an i.i.d. noise process (white noise), e.g. distributed as $e_t\sim N(0,\sigma_{e}^2)$

**Formulation**

Initializing $S_1=e_1$, with $\mathbb{E}(S_1)=\mathbb{E}(e_1)=0$, $Var(S_1)=\sigma^2$ and $Var(e_i)=\sigma_{e}^2$ for $i=2,\dots,m$. Following this, multiple applications of the above "moving average" formula  gives:

$$\begin{align*}S_1&=e_1\\ S_2&=\theta e_1+e_2\\ S_3 &= \theta e_2+e_3\\ &\vdots\\ S_m &= \theta e_{m-1} + e_m\end{align*}$$

of which we still have (in order to impose the *stationarity*):

$$\mathbb{E}(S_t)=0 \hspace{5px}\text{and}\hspace{5px} \mathbb{D}(S_t)=\sigma^2, \hspace{10px} t=1,...,m$$

All the error components, $e_t$, are uncorrelated such that $Cov(e_t,e_{t+\tau})=0$ if $\tau\neq 0$, and the variance is $\sigma_e^2$.

**Autocovariance**

The mean of the process is zero and, therefore:

$$\mathbb{E}(S_t) = \mathbb{E}(\theta e_{t-1}+e_t) =\theta\mathbb{E}(e_{t-1})+\mathbb{E}(e_t) = 0$$

The variance of the process should remain constant as:

$$\mathbb{D}(S_t) = \mathbb{D}(\theta e_{t-1}+e_t) \Leftrightarrow  \sigma^2=\theta^2\sigma_e^2+\sigma_e^2, \hspace{10px} t\geq 2$$

resulting in

$$ \sigma_e^2 = \frac{\sigma^2}{1+\theta^2}$$

indicaating that $\sigma_e^2$ is smaller than $\sigma^2$

The autocovariance is

$$c_1=Cov(S_t, S_{t+1}) = \sigma_e^2\theta\\ c_{-1}=Cov(S_t, S_{t-1}) =  \sigma_e^2\theta$$

and

$$c_{\tau}=Cov(S_t,S_{t+\tau}) = 0, \hspace{10px}\text{for}\hspace{5px}\tau\geq 2$$

The normalized auto-covariance function (ACF) follows:

$$\rho_{\tau}=\frac{c_{\tau}}{\sigma^2}=\begin{cases}\frac{\theta}{1+\theta^2}, \hspace{5px}&\text{if}\hspace{5px}\tau=1\\ 0, \hspace{5px}&\text{if}\hspace{5px}\tau\neq 1\end{cases}
$$

**Model structure**

$$\mathbb{E}(S) = \mathbb{E}\begin{bmatrix}S_1\\ S_2\\ \vdots\\ S_m\end{bmatrix} = \begin{bmatrix}0\\ 0\\ \vdots\\ 0\end{bmatrix}, \hspace{15px} \mathbb{D}(S)=\Sigma_{S}=\sigma^2\begin{bmatrix}1&\rho_1&0&\dots&0\\ \rho_1&1&\rho_1& &\\ 0&\rho_1&1&\ddots&0\\ \vdots& &\ddots&\ddots&\rho_1\\ 0&\dots&0&\rho_1&1\end{bmatrix}$$

In summmary: 

* Autocovariance function $\implies$ $c_{\tau}=\begin{cases}\frac{\sigma^2\theta}{1+\theta^2}, \hspace{5px}&\text{if}\hspace{5px}\tau=1\\ 0, \hspace{5px}&\text{if}\hspace{5px}\tau>1\end{cases}$

* Normalized auto-covariance function (ACF) $\implies$ $\rho_\tau=\begin{cases}\frac{\theta}{1+\theta^2}, \hspace{5px}&\text{if}\hspace{5px}\tau=1\\ 0, \hspace{5px}&\text{if}\hspace{5px}\tau\neq 1\end{cases}$

* ACF is even, $c_{\tau}=c_{-\tau}=c_{|\tau|}$ and so is $\rho_{\tau}=\rho_{-\tau}=\rho_{|\tau|}$

**Simulated example**

A time series has been simulated to have a standard normal distribution, $e_i \sim \text{N}(0,1)$. This indicates that the entries of $S$ have $S_i \sim \text{N}(0,1+\theta^2)$, $i=1,...,m=1000$, where the variance of the noise process is $\sigma^2 = 1+\theta^2$. In fact, $\sigma_{e_t}=1$, but not the random process MA(1) in total. The time series is shown in {numref}`ma1ex`. 

The normalized ACF shows the temporal correlation, $\rho_{\tau}=\frac{\theta}{1+\theta^2}$, if $\tau=1$, and $\rho_{\tau}=0$ if $\tau>1$.

MMMMM should delete the equation in the right panels!

```{figure} ./figs/ma1ex.png
:name: ma1ex
:width: 600px
:align: center

Left: time series for $\beta =0.9$ and $\beta =-0.9$. Right: corresponding normalized autocovariance functions.
```

## Estimation of coefficients of ARMA process

If the values of $p$ and $q$ of the ARMA($p,q$) process are known, the question is: **how can we estimate the coefficients $\beta_1,...,\beta_p$ and $\theta_1,...,\theta_q$?**

Here, we only elaborate on AR(2) = ARMA(2,0) using best linear unbiased estimation (BLUE) to estimate $\beta_1$ and $\beta_2$. The method can be generalized to estimate the parameters of an ARMA($p,q$) process.

**Example: Parameter estimation of AR(2)**

The AR(2) process is of the form

$$S_t=\beta_1 S_{t-1}+\beta_2 S_{t-2}+e_t$$

In order to esitimate the $\beta_i$ we can set up the following linear model of observation equations (starting from $t=3$):

$$\begin{bmatrix}S_3 \\ S_4 \\ \vdots \\ S_m \end{bmatrix} = \begin{bmatrix}S_2 & S_1 \\S_3 & S_2\\ \vdots & \vdots\\ S_{m-1}&S_{m-2} \end{bmatrix}\begin{bmatrix}\beta_1 \\ \beta_2\end{bmatrix} + \begin{bmatrix}e_{3} \\ e_{4}\\ \vdots \\ e_{m} \end{bmatrix}$$

The BLUE estimator of $\beta=[\beta_1,\beta_2]^T$ is

$$\hat{\beta}=(\mathrm{A}^T\mathrm{A})^{-1}\mathrm{A}^TS$$


## Worked example - Single Differencing

On this worked example, we will show that [single differencing](SD) induces an MA(1) process. The original time series is given as:

$$Y=\begin{bmatrix}Y_1\\ Y_2\\ \vdots \\ Y_m\end{bmatrix}, \hspace{10px} \Sigma_{Y}=\sigma^2 I_m$$

We apply single differencing which in this case results in a purely random process:

$$\begin{cases}S_1 = \Delta Y_1 = Y_1\\ S_2=\Delta Y_2 = Y_2 - Y_1\\ S_3=\Delta Y_3 = Y_3-Y_2\\ \quad\vdots \\ S_m= \Delta Y_m = Y_m - Y_{m-1}\end{cases}$$

In matrix notation, this can be written as:

$$\begin{bmatrix} S_1\\  S_2\\ \vdots \\  S_m\end{bmatrix} = \underbrace{\begin{bmatrix}
    1 & 0 &   & \dots & 0\\
    -1 & 1 & 0 &   &  \\
    0 & -1 & 1 & \ddots & \\
    \vdots & \ddots &\ddots & \ddots & 0 \\
    0 & \dots & 0 & -1 & 1
\end{bmatrix}}_{\mathrm{T}}\begin{bmatrix}Y_1\\ Y_2\\ \vdots \\ Y_m\end{bmatrix} \Longleftrightarrow S = \mathrm{T}Y$$

We apply the [variance propagation law](01_LinearProp):

$$\Sigma_{ S}=\mathrm{T}\Sigma_{Y}\mathrm{T}^T = \mathrm{T}\sigma^2I_m\mathrm{T}^T=\sigma^2\mathrm{TT}^T$$

such that we obtain:

$$\Sigma_{S} = \sigma^2\mathrm{TT}^T = 2\sigma^2\begin{bmatrix}1&-0.5&0&\dots&0\\ -0.5&1&-0.5& &\\ 0&-0.5&1&\ddots&0\\ \vdots& &\ddots&\ddots&-0.5\\ 0&\dots&0&-0.5&1\end{bmatrix}$$

We can see that the structure indeed corresponds with the covariance matrix of an AR(1) process, from which we see that $\rho_1=-0.5$. Now we can find the value of $\theta$: 

$$\begin{cases}\rho_1=-0.5=\frac{\theta}{1+\theta^2}\\  S_t = \theta e_{t-1}+e_t\end{cases}\implies \theta=-1 \implies S_t = e_t-e_{t-1}$$

:::{card} Exercise

For the stationary AR(2) process, calculate the ACF at lag 1. In other words, calculate $\rho_1$.

```{admonition} Solution
:class: tip, dropdown

For the AR($p$) process we know that $\mathbb{E}(S_t)=0$, and $Var(S_t)=\sigma^2$ ($\forall t$), and

$$S_t = \beta_1S_{t-1}+\beta_2S_{t-2}+e_t=
\begin{bmatrix}\beta_1 & \beta_2 & 1\end{bmatrix}\begin{bmatrix}S_{t-1} \\ S_{t-2} \\ e_t\end{bmatrix}$$

To compute the autocovariance function at lag 1, $c_1$, we need to compute the covariance between $S_{t-1}$ and $S_t$, which is given as

$$
\begin{align*}
c_1 &= \mathbb{E}(S_{t-1}S_t)
= \mathbb{E}\left(S_{t-1}
(\beta_1 S_{t-1} + \beta_2 S_{t-2} + e_t)
\right)
\\
&= \beta_1 \mathbb{E}(S_{t-1}^2)
+ \beta_2 \mathbb{E}(S_{t-2}S_{t-1})
+ \mathbb{E}(S_{t-1}e_t)\\
&= \beta_1 \sigma^2
+ \beta_2 c_1
\end{align*}$$


which gives

$$
\beta_1 \sigma^2 = c_1(1-\beta_2)
$$

or, because $\rho_1=c_1/\sigma^2$:

$$
\rho_1=\frac{\beta_1}{1-\beta_2}
$$

```
:::

## Brief Summary

The random processes (noise processes) considered here are:

* ARMA($p,q$) process

$$
S_t = \sum_{i=1}^p \beta_iS_{t-i}+e_t+\sum_{i=1}^q\theta_ie_{t-1}
$$

* AR($p$) process

$$
S_t = \sum_{i=1}^p \beta_iS_{t-i}+e_t
$$

* MA($q$) process

$$
S_t = e_t+\sum_{i=1}^q\theta_ie_{t-1}
$$

The parameters of these stochastic processes can be estimated using the least-squares method. This allows then to predict the stochastic process, needed for [forecasting](forecast).