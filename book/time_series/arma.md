(ARMA)=
# ARMA process

The main goal is to introduce the Auto-Regressive Moving Average (ARMA) stochastic process, as a widely used stochastic process. 

## Process definition

In an ARMA model, we forecast the variable of interest using a linear combination of its past values plus the current and past errors. A zero mean ARMA process of orders $p$ and $q$ can be written as follows:

$$Y_t = \overbrace{\beta_1Y_{t-1}+...+\beta_pY_{t-p}}^{\text{AR process}} + \epsilon_t + \overbrace{\theta_1 \epsilon_{t-1}+...+\theta_q \epsilon_{t-q}}^{\text{MA process}}$$ 

or as

$$Y_t = \sum_{i=1}^p \beta_iY_{t-i}+\epsilon_t+\sum_{i=1}^q \theta_i \epsilon_{t-i}$$

Each observation is made up of a **random error** $\epsilon_t$ at that epoch, a linear combination of **past observations**, and a linear combination of **past errors**. We note the process should still be stationary, satisfying

$$\mathbb{E}(Y_t)=0, \hspace{20px} \mathbb{D}(Y_t)=\sigma^2,\quad \forall t$$

To have a better understanding of the process itself, we consider two special cases, $q=0$ and $p=0$.

### Special case 1: ARMA$(p,0) = $ AR$(p)$

The first special case we are going to study considers $q=0$. A zero mean $p$-order autoregressive (AR) random process, abbreviated to ARMA($p,0$) = AR($p$), can be written as follows

$$Y_t = \beta_1Y_{t-1}+...+\beta_pY_{t-p} + \epsilon_t=Y_t = \sum_{i=1}^p \beta_iY_{t-i}+\epsilon_t$$

#### First-order AR(1) process

We will just focus on explaining $p=1$, i.e. the AR(1) process. A **zero-mean first order autoregressive** process like this, can be written as follows

$$Y_t = \beta Y_{t-1}+\epsilon_t, \hspace{20px} -1\leq\beta<1, \hspace{20px} t=2,...,m$$

where $\epsilon_t$ is an i.i.d. noise process, e.g. distributed as $\epsilon_t\sim N(0,\sigma^2)$.

**Formulation**

Initializing $Y_1=\epsilon_1$, with $\mathbb{E}(Y_1)=\mathbb{E}(\epsilon_1)=0$ and $\mathbb{D}(Y_1)=\mathbb{D}(\epsilon_1)=\sigma^2$. Following this, multiple applications of the above "autoregressive" formula ($Y_t = \beta Y_{t-1} + \epsilon_t$) gives:

$$
\begin{align*}
Y_1&=\epsilon_1\\ 
Y_2&=\beta Y_1+\epsilon_2\\ 
Y_3 &= \beta Y_2+\epsilon_3 = \beta^2Y_1+\beta \epsilon_2+\epsilon_3\\ 
&\vdots\\ 
Y_m &= \beta Y_{m-1} + \epsilon_m = \beta^{m-1}Y_1+\beta^{m-2}\epsilon_2+...+\beta \epsilon_{m-1}+\epsilon_m
\end{align*}
$$

of which we still have (in order to impose the *stationarity*):

$$\mathbb{E}(Y_t)=0 \hspace{5px}\text{and}\hspace{5px} \mathbb{D}(Y_t)=\sigma^2, \hspace{10px} t=1,...,m$$

All the error components, $\epsilon_t$, are uncorrelated such that $Cov(\epsilon_t,\epsilon_{t+\tau})=0$ if $\tau \neq 0$, and with variance $\sigma_{\epsilon}^2$.

**Autocovariance**

The mean of the process is zero and, therefore:

$$\mathbb{E}(Y_t) = \mathbb{E}(\beta Y_{t-1}+\epsilon_t) = \beta\mathbb{E}(Y_{t-1})+\mathbb{E}(\epsilon_t) = 0$$

The variance of the process should remain constant as:

$$\mathbb{D}(Y_t) = \mathbb{D}(\beta Y_{t-1} +\epsilon_t) \Leftrightarrow \sigma^2=\beta^2\sigma^2+\sigma_{\epsilon}^2, \hspace{10px} t\geq 2$$

resulting in

$$\sigma_{\epsilon}^2 = \sigma^2 (1-\beta^2)$$

The autocovariance (covariance between $Y_t$ and $Y_{t+\tau}$) is

$$
\begin{align*}
c_{\tau}&=\mathbb{E}(Y_t Y_{t+\tau})-\mu^2 =\mathbb{E}(Y_t Y_{t+\tau})\\
&= \mathbb{E}(Y_t(\beta^\tau Y_t + \beta^{\tau-1} \epsilon_{t+1}+...)) = \beta^\tau\mathbb{E}(Y_t^2)=\sigma^2\beta^\tau
\end{align*}$$

In the derivation above we used that:

$$
\begin{align*}
Y_{t+\tau}=\beta^\tau Y_t + \beta^{\tau-1} \epsilon_{t+1}+...+\epsilon_{t+\tau}
\end{align*}
$$

and the fact that $Y_t$ and $\epsilon_{t+\tau}$ are uncorrelated for $\tau \neq 0$.

```{admonition} Derivation (optional)
:class: tip, dropdown

$$
\begin{align*}
Y_{t+\tau}&= \beta^{t+\tau-1}Y_1 + \beta^{t+\tau-2}\epsilon_2+...+ \beta^{\tau} \epsilon_{t}+ \beta^{\tau-1} \epsilon_{t+1}+...+\epsilon_{t+\tau}\\
&= \beta^{\tau} \left(\beta^{t-1}Y_1 + \beta^{t-2}\epsilon_2+...+  \epsilon_{t}\right)+ \beta^{\tau-1} \epsilon_{t+1}+...+\epsilon_{t+\tau}\\
&=\beta^\tau Y_t + \beta^{\tau-1} \epsilon_{t+1}+...+\epsilon_{t+\tau}
\end{align*}
$$

```

**Model structure**

$$\mathbb{E}(Y) = \mathbb{E}\begin{bmatrix}Y_1\\ Y_2\\ \vdots\\ Y_m\end{bmatrix} = \begin{bmatrix}0\\ 0\\ \vdots\\ 0\end{bmatrix}, \hspace{15px} \mathbb{D}(Y)=\Sigma_{Y}=\sigma^2 \begin{bmatrix}1&\beta&...&\beta^{m-1}\\ \beta&1&...&\beta^{m-2}\\ \vdots&\vdots&\ddots&\vdots\\ \beta^{m-1}&\beta^{m-2}&...&1\end{bmatrix}$$

* Autocovariance function $\implies$ $c_{\tau}=\sigma^2\beta^\tau$
* Normalized autocovariance function (ACF) $\implies$ $\rho_\tau=c_{\tau}/c_0=\beta^\tau$
* Larger value of $\beta$ indicates a long-memory random process
* If $\beta=0$, this is called *purely random process* (white noise)
* ACF is even, $c_{\tau}=c_{-\tau}=c_{|\tau|}$ and so is $\rho_{\tau}=\rho_{-\tau}=\rho_{|\tau|}$

Recall that $\rho_{\tau}$ can be estimated as explained in the section on [autocovariance](NACF), and from that an estimate $\beta$ can be obtained.

**Simulated example**

A time series has been simulated to have a standard normal distribution, $Y_i \sim N(0,1)$. This indicates that the first entry is $Y_1 \sim \text{N}(0,1)$ and the remaining errors are $\epsilon_i \sim N(0,1-\beta^2)$, $i=2,...,m=1000$. The time series is shown in {numref}`ar1example`. Time correlation can be visually seen in the data.

The normalized ACF shows the temporal correlation, $\rho_{\tau}=\beta^{\tau}$, where $\tau=0,1,2,...,m-1$.

```{figure} ./figs/ar1example.png
:name: ar1example
:width: 600px
:align: center

Left: time series for $\beta =0.7$ and $\beta =-0.7$. Right: corresponding normalized autocovariance functions.
```

### Special case 2: ARMA$(0,q) = $ MA$(q)$

A zero mean $q$-order moving average random process, abbreviated to ARMA(0,q) = MA(q), can be written as follows

$$Y_t=\theta_1 \epsilon_{t-1}+...+\theta_q \epsilon_{t-q}+\epsilon_t$$

or

$$Y_t=\sum_{i=1}^q \theta_i \epsilon_{t-i} + \epsilon_t$$

#### First-order MA(1) process

Here we will just focus on the case $q=1$, i.e. MA(1). A **zero-mean first order moving average process** like this one can be written as:

$$Y_t = \theta \epsilon_{t-1} + \epsilon_t, \hspace{10px} -1\leq\theta<1 \hspace{10px} t=2,...,m$$

where $\epsilon_t$ is an i.i.d. noise process (white noise), e.g. distributed as $\epsilon_t\sim N(0,\sigma_{\epsilon}^2)$

**Formulation**

Initializing $Y_1$ and $\epsilon_1$, with $\mathbb{E}(Y_1)=\mathbb{E}(\epsilon_1)=0$, $\mathbb{D}(Y_1)=\sigma^2$ and $\mathbb{D}(\epsilon_1)=\sigma_{\epsilon}^2$. Following this, multiple applications of the above "moving average" formula ($Y_t = \theta \epsilon_{t-1} + \epsilon_t$) gives:

$$\begin{align*}Y_1&=\epsilon_1\\ Y_2&=\theta \epsilon_1+\epsilon_2\\ Y_3 &= \theta \epsilon_2+\epsilon_3\\ ...\\ Y_m &= \theta \epsilon_{m-1} + \epsilon_m\end{align*}$$

of which we still have (in order to impose the *stationarity*):

$$\mathbb{E}(Y_t)=0 \hspace{5px}\text{and}\hspace{5px} \mathbb{D}(Y_t)=\sigma^2, \hspace{10px} t=1,...,m$$

All the error components, $\epsilon_t$, are uncorrelated such that $Cov(\epsilon_t,\epsilon_{t+\tau})=0$ if $\tau\neq 0$, and the variance is $\sigma_\epsilon^2$.

**Autocovariance**

The mean of the process is zero and, therefore:

$$\mathbb{E}(Y_t) = \mathbb{E}(\theta \epsilon_{t-1}+\epsilon_t) =\theta\mathbb{E}(\epsilon_{t-1})+\mathbb{E}(\epsilon_t) = 0$$

The variance of the process should remain constant as:

$$\mathbb{D}(Y_t) = \mathbb{D}(\theta \epsilon_{t-1}+\epsilon_t) \Leftrightarrow  \sigma^2=\theta^2\sigma_\epsilon^2+\sigma_\epsilon^2, \hspace{10px} t\geq 2$$

resulting in

$$ \sigma_\epsilon^2 = \frac{\sigma^2}{1+\theta^2}$$

The autocovariance is

$$c_1=Cov(Y_t, Y_{t+1}) = \sigma_\epsilon^2\theta\\ c_{-1}=Cov(Y_t, Y_{t-1}) =  \sigma_\epsilon^2\theta$$

and

$$c_{\tau}=Cov(Y_t,Y_{t+\tau}) = 0, \hspace{10px}\text{for}\hspace{5px}\tau\geq 2$$

The normalized auto-covariance function (ACF) follow as:

$$\rho_{\tau}=\frac{c_{\tau}}{\sigma^2}=\begin{cases}\frac{\theta}{1+\theta^2}, \hspace{5px}&\text{if}\hspace{5px}\tau=1\\ 0, \hspace{5px}&\text{if}\hspace{5px}\tau\neq 1\end{cases}
$$

**Model structure**

$$\mathbb{E}(Y) = \mathbb{E}\begin{bmatrix}Y_1\\ Y_2\\ \vdots\\ Y_m\end{bmatrix} = \begin{bmatrix}0\\ 0\\ \vdots\\ 0\end{bmatrix}, \hspace{15px} \mathbb{D}(Y)=\Sigma_{Y}=\sigma^2\begin{bmatrix}1&\rho_1&0&\dots&0\\ \rho_1&1&\rho_1& &\\ 0&\rho_1&1&\ddots&0\\ \vdots& &\ddots&\ddots&\rho_1\\ 0&\dots&0&\rho_1&1\end{bmatrix}$$

In summmary: 

* Autocovariance function $\implies$ $c_{\tau}=\begin{cases}\frac{\sigma^2\theta}{1+\theta^2}, \hspace{5px}&\text{if}\hspace{5px}\tau=1\\ 0, \hspace{5px}&\text{if}\hspace{5px}\tau>1\end{cases}$

* Normalized auto-covariance function (ACF) $\implies$ $\rho_\tau=\begin{cases}\frac{\theta}{1+\theta^2}, \hspace{5px}&\text{if}\hspace{5px}\tau=1\\ 0, \hspace{5px}&\text{if}\hspace{5px}\tau\neq 1\end{cases}$

* ACF is even, $c_{\tau}=c_{-\tau}=c_{|\tau|}$ and so is $\rho_{\tau}=\rho_{-\tau}=\rho_{|\tau|}$

Recall that $\rho_{\tau}$ can be estimated as explained in the section on [autocovariance](NACF), and from that an estimate $\theta$ can be obtained.

**Simulated example**

A time series has been simulated to have a standard normal distribution, $\epsilon_i \sim \text{N}(0,1)$. This indicates that the entries of $Y$ have $Y_i \sim \text{N}(0,1+\theta^2)$, $i=1,...,m=1000$. The time series is shown in {numref}`ma1ex`. 

The normalized ACF shows the temporal correlation, $\rho_{\tau}=\frac{\theta}{1+\theta^2}$, if $\tau=1$, and $\rho_{\tau}=0$ if $\tau>1$.

MMMMM should delete the equation in the right panels!

```{figure} ./figs/ma1ex.png
:name: ma1ex
:width: 600px
:align: center

Left: time series for $\beta =0.9$ and $\beta =-0.9$. Right: corresponding normalized autocovariance functions.
```

## Worked example - Single Differencing

On this worked example, we will show that [single differencing](SD) induces an MA(1) process. Let us consider

$$Y=\begin{bmatrix}Y_1\\ Y_2\\ \vdots \\ Y_m\end{bmatrix}, \hspace{10px} \Sigma_{Y}=\sigma^2 I_m$$

Having $\Delta Y_1 = Y_1$, then:

$$\begin{cases}\Delta Y_2 = Y_2 - Y_1\\ \Delta Y_3 = Y_3-Y_2\\ \quad\vdots \\ \Delta Y_m = Y_m - Y_{m-1}\end{cases}$$

In matrix notation, this can be written as:

$$\begin{bmatrix}\Delta Y_1\\ \Delta Y_2\\ \vdots \\ \Delta Y_m\end{bmatrix} = \underbrace{\begin{bmatrix}
    1 & 0 &   & \dots & 0\\
    -1 & 1 & 0 &   &  \\
    0 & -1 & 1 & \ddots & \\
    \vdots & \ddots &\ddots & \ddots & 0 \\
    0 & \dots & 0 & -1 & 1
\end{bmatrix}}_{\mathrm{T}}\begin{bmatrix}Y_1\\ Y_2\\ \vdots \\ Y_m\end{bmatrix} \Longleftrightarrow \Delta Y = \mathrm{T}Y$$

Therefore:

$$\Sigma_{\Delta Y}=\mathrm{T}\Sigma_{Y}\mathrm{T}^T = \mathrm{T}\sigma^2I_m\mathrm{T}^T=\sigma^2\mathrm{TT}^T$$

which can simplify to:

$$\Sigma_{\Delta Y} = \sigma^2\mathrm{TT}^T = 2\sigma^2\begin{bmatrix}1&-0.5&0&\dots&0\\ -0.5&1&-0.5& &\\ 0&-0.5&1&\ddots&0\\ \vdots& &\ddots&\ddots&-0.5\\ 0&\dots&0&-0.5&1\end{bmatrix}$$

Now we need to find the value of $\theta$ to get $\Delta Y_t$. Therefore:

$$\begin{cases}\rho_1=-0.5=\frac{\theta}{1+\theta^2}\\ \Delta Y_t = \theta \epsilon_{t-1}+\epsilon_t\end{cases}\implies \theta=-1 \implies \Delta Y_t = \epsilon_t-\epsilon_{t-1}$$

## Brief Summary

The random processes (noise processes) considered here are:

* ARMA($p,q$) process

$$
Y_t = \sum_{i=1}^p \beta_iY_{t-i}+\epsilon_t+\sum_{i=1}^q\theta_i\epsilon_{t-1}
$$

* AR($p$) process

$$
Y_t = \sum_{i=1}^p \beta_iY_{t-i}+\epsilon_t
$$

* MA($q$) process

$$
Y_t = \epsilon_t+\sum_{i=1}^q\theta_i\epsilon_{t-1}
$$

The parameters of these stochastic processes should be estimated.