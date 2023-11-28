(ARMA)=
# ARMA process

The main goal is to introduce the Auto-Regressive Moving Average (ARMA) stochastic process, as a widely used stochastic process. This includes

* ARMA ($p,q$) process
* ARMA ($p,0$) = AR($p$) process $\implies$ AR(1)
* ARMA ($0,q$) = MA($q$) process $\implies$ MA(1)

## Process definition

In an ARMA model, we forecast the variable of interest using a linear combination of its past values plus the current and past errors. A zero mean ARMA process of orders $p$ and $q$ can be written as follows:

$$Y_t = \overbrace{\beta_1Y_{t-1}+...+\beta_pY_{t-p}}^{\text{AR process}} + \epsilon_t + \overbrace{\theta_1 \epsilon_{t-1}+...+\theta_q \epsilon_{t-q}}^{\text{MA process}}$$ 

or as

$$Y_t = \sum_{i=1}^p \beta_iY_{t-i}+\epsilon_t+\sum_{i=1}^q \theta_i \epsilon_{t-i}$$

Each observation is made up of a **random error** at that epoch, a linear combination of **past observations**, and a linear combination of **past errors**. We note the process should still be stationary, satisfying

$$\mathbb{E}(Y)=0, \hspace{20px} \mathbb{D}(Y)=\sigma^2=\text{constant}$$

To have a better understanding of the process itself, we consider two special cases, $q=0$ and $p=0$.

### Special case 1 - ARMA$(p,0) = $ AR$(p)$

The first special case we are going to study considers $q=0$. A zero mean $p$-order autoregressive (AR) random process, abbreviated to ARMA($p,0$) = AR($p$), can be written as follows

$$Y_t = \beta_1Y_{t-1}+...+\beta_pY_{t-p} + \epsilon_t$$

or

$$Y_t = \sum_{i=1}^p \beta_iY_{t-i}+\epsilon_t$$

We will just focus on explaining $p=1$, i.e. AR(1). A **zero-mean first order autoregressive** process like this, can be written as follows

$$Y_t = \beta Y_{t-1}+\epsilon_t, \hspace{20px} -1\leq\beta<1, \hspace{20px} t=2,...,m$$

where $\epsilon_t$ is an i.i.d. noise process, e.g. distributed as $\epsilon_t\sim\mathbb{N}(0,\sigma^2)$

#### First-order AR(1)

**Formulation**

Initializing $Y_1=\epsilon_1$, with $\mathbb{E}(Y_1)=\mathbb{E}(\epsilon_1)=0$ and $\mathbb{D}(Y_1)=\mathbb{D}(\epsilon_1)=\sigma^2$. Following this, multiple applications of the above "autoregressive" formula ($Y_t = \beta Y_{t-1} + \epsilon_t$) give:

$$
\begin{align*}
Y_1&=\epsilon_1\\ 
Y_2&=\beta Y_1+\epsilon_2\\ 
Y_3 &= \beta Y_2+\epsilon_3 = \beta^2Y_1+\beta \epsilon_2+\epsilon_3\\ 
&\vdots\\ 
Y_m &= \beta Y_{m-1} + \epsilon_m = \beta^{m-1}Y_1+\beta^{m-2}\epsilon_2+...+\beta \epsilon_{m-1}+\epsilon_m
\end{align*}
$$

of which we still have (to impose the *stationarity*):

$$\mathbb{E}(Y_t)=0 \hspace{5px}\text{and}\hspace{5px} \mathbb{D}(Y_t)=\sigma^2, \hspace{10px} t=1,...,m$$

All the noise components, $\epsilon_t$, are uncorrelated as $\mathbb{E}(\epsilon_t,\epsilon_{t+\tau})=0$ if $\tau = 0$. If $\tau\neq 0$, then $\mathbb{E}(\epsilon_t,\epsilon_{t+\tau})=\sigma^2$.

**Autocovariance**

The mean of the process is zero and, therefore:

$$\mathbb{E}(Y_t) = \mathbb{E}(\beta Y_{t-1}+\epsilon_t) = \beta\mathbb{E}(Y_{t-1})+\mathbb{E}(\epsilon_t) = 0$$

The variance of the process should remain constant as:

$$\mathbb{D}(Y_t) = \mathbb{D}(\beta Y_{t-1}+\epsilon_t) = \beta^2\sigma^2+\sigma^2=\sigma^2, \hspace{10px} t\geq 2$$

resulting in

$$c_{\tau}^2 = \frac{\sigma^2}{1-\beta^2} \Longleftrightarrow \sigma^2 = c_{\tau}^2(1-\beta^2)$$

The auto-covariance (covariance between $Y_t$ and $Y_{t+\tau}$) is
%MMMMM in stationarity there is \Sigma_{yy}. we keep \Sigma_{yy} or \Sigma_{YY}? same issue for modelling
$$\Sigma_{yy}(Y_t,Y_{t+\tau})=\mathbb{E}(Y_t,Y_{t+\tau})$$

resulting in

$$\Sigma_{yy}(Y_t,Y_{t+\tau}) = \mathbb{E}(Y_t, Y_{t+\tau}) = \mathbb{E}(Y_t(\beta^\tau Y_t + ...)) = \beta^\tau\mathbb{E}(Y_t^2)=c_{\tau}^2\beta^\tau$$

**Model structure**

$$\mathbb{E}(Y) = \mathbb{E}\begin{bmatrix}Y_1\\ Y_2\\ ...\\ Y_m\end{bmatrix} = \begin{bmatrix}0\\ 0\\ ...\\ 0\end{bmatrix}, \hspace{15px} \mathbb{D}(Y)=\Sigma_{yy}=c_{\tau}^2\begin{bmatrix}1&\beta&...&\beta^{m-1}\\ \beta&1&...&\beta^{m-2}\\ ...&...&...&...\\ \beta^{m-1}&\beta^{m-2}&...&1\end{bmatrix}$$

* Auto-covariance function $\implies$ $\Sigma_{yy}(\tau)=c_{\tau}=c_{\tau}^2\beta^\tau$
* Normalized auto-covariance function (ACF) $\implies$ $\rho_{YY}(\tau)=\rho_\tau=\beta^\tau$
* Larger value of $\beta$ indicates long-memory random process
* If $\beta=0$, this is called *purely random process* (white noise)
* $\Sigma_{yy}(\tau)=\Sigma_{yy}(-\tau)=\Sigma_{yy}(|\tau|)$ and so is $\rho_{YY}(\tau)=\rho_{YY}(-\tau)=\rho_{YY}(|\tau|)$

**Simulated example**

A time series has been simulated to have a standard normal distribution, $Y_i \sim \textbf{N}(0,1)$. This indicates that the first entry is $Y_1 \sim \text{N}(0,1)$ and the remaining errors are $\epsilon_i \sim \textbf{N}(0.1-\beta^2)$, $i=2,...,m=1000$. Time correlation is visually seen in data.

Normalized ACF can clearly show the temporal correlation, $\rho_{YY}(\tau)=\beta^\tau$, where $\tau=0,1,2,...,m-1$

![ar1example](./figs/ar1example.png "ar1example")

### Special case 2 - ARMA$(0,q) = $ MA$(q)$

A zero mean $q$-order moving average random process, abbreviated to ARMA(0,q) = MA(q), can be written as follows

$$Y_t=\theta_1 \epsilon_{t-1}+...+\theta_q \epsilon_{t-q}+\epsilon_t$$

or

$$Y_t=\sum_{i=1}^q \theta_i \epsilon_{t-i} + \epsilon_t$$

Here we will just focus on the case $q=1$, i.e. MA(1). A **zero-mean first order moving average process** like this one can be written as:

$$Y_t = \theta \epsilon_{t-1} + \epsilon_t, \hspace{10px} -1\leq\theta<1 \hspace{10px} t=2,...,m$$

where $\epsilon_t$ is an i.i.d. noise process (white noise), e.g. distributed as $\epsilon_t\sim\textbf{N}(0,\sigma_{\epsilon}^2)$

#### First-order MA(1)

**Formulation**

Initializing $Y_1$ and $\epsilon_1$, with $\mathbb{E}(Y_1)=\mathbb{E}(\epsilon_1)=0$, $\mathbb{D}(Y_1)=\sigma^2$ and $\mathbb{D}(\epsilon_1)=\sigma_{\epsilon}^2$. Following this, multiple applications of the above "moving average" formula ($Y_t = \theta \epsilon_{t-1} + \epsilon_t$) give:

$$\begin{align*}Y_1=\epsilon_1\\ Y_2=\theta \epsilon_1+\epsilon_2\\ Y_3 = \theta \epsilon_2+\epsilon_3\\ ...\\ Y_m = \theta \epsilon_{m-1} + \epsilon_m\end{align*}$$

of which we still have (to impose the *stationarity*):

$$\mathbb{E}(Y_t)=0 \hspace{5px}\text{and}\hspace{5px} \mathbb{D}(Y_t)=\sigma^2, \hspace{10px} t=1,...,m$$

All the noise components, $\epsilon_t$, are uncorrelated as $\mathbb{E}(\epsilon_t,\epsilon_{t+\tau})=\sigma_\epsilon^2$ if $\tau = 0$. If $\tau\neq 0$, then $\mathbb{E}(\epsilon_t,\epsilon_{t+\tau})=0$.

**Auto-covariance**

The mean of the process is zero and, therefore:

$$\mathbb{E}(Y_t) = \mathbb{E}(\theta \epsilon_{t-1}+\epsilon_t) = \theta\mathbb{E}(\epsilon_{t-1})+\mathbb{E}(\epsilon_t) = 0$$

The variance of the process should remain constant as:

$$\mathbb{D}(Y_t) = \mathbb{D}(\theta \epsilon_{t-1}+\epsilon_t) = \theta^2\sigma_\epsilon^2+\sigma_\epsilon^2=\sigma^2, \hspace{10px} t\geq 2$$

resulting in

$$\sigma^2 = \frac{\sigma_\epsilon^2}{1+\theta^2} \Longleftrightarrow \sigma_\epsilon^2 = \frac{\sigma^2}{1+\theta^2}$$

The auto-covariance (covariance between $Y_t$ and $Y_{t+\tau}$) is

$$\Sigma_{yy}(Y_t,Y_{t+\tau})=\mathbb{E}(Y_t,Y_{t+\tau}) = 0, \hspace{10px}\text{for}\hspace{5px}\tau\geq 2$$

resulting in

$$\Sigma_{yy}(Y_t, Y_{t+1}) = \mathbb{E}((\theta \epsilon_{t-1} + \epsilon_t)(\theta \epsilon_t + \epsilon_{t+1})) = \sigma_\epsilon^2\theta\\ \Sigma_{yy}(Y_t, Y_{t-1}) = \mathbb{E}((\theta \epsilon_{t-1} + \epsilon_t)(\theta \epsilon_{t-2} + \epsilon_{t-1})) = \sigma_\epsilon^2\theta$$

```{note}
Only $\Sigma_{yy}(Y_t, Y_{t\pm 1}) = \mathbb{E}(Y_t, Y_{t\pm 1})\neq 0$
```

**Model structure**

$$\mathbb{E}(y) = \mathbb{E}\begin{bmatrix}Y_1\\ Y_2\\ ...\\ Y_m\end{bmatrix} = \begin{bmatrix}0\\ 0\\ ...\\ 0\end{bmatrix}, \hspace{15px} \mathbb{D}(y)=\Sigma_{yy}=c_{\tau}^2\begin{bmatrix}1&\rho_1&0&...&0\\ \rho_1&1&\rho_1&...&0\\ 0&\rho_1&1&...&...\\ ...&...&...&...&\rho_1\\ 0&0&...&\rho_1&1\end{bmatrix}$$

* Auto-covariance function $\implies$ $\Sigma_{yy}(\tau)=c_{\tau}=\begin{cases}\frac{c_{\tau}^2\theta}{1+\theta^2}, \hspace{5px}\text{if}\hspace{5px}\tau=1\\ 0, \hspace{5px}\text{if}\hspace{5px}\tau>1\end{cases}$

* Normalized auto-covariance function (ACF) $\implies$ $\rho_{YY}(\tau)=\rho_\tau=\begin{cases}\frac{\theta}{1+\theta^2}\end{cases}, \hspace{5px}\text{if}\hspace{5px}\tau=1\\ 0, \hspace{5px}\text{if}\hspace{5px}\tau\neq 1$

* ACF is even, $\Sigma_{yy}(\tau)=\Sigma_{yy}(-\tau)=\Sigma_{yy}(|\tau|)$ and so is $\rho_{YY}(\tau)=\rho_{YY}(-\tau)=\rho_{YY}(|\tau|)$

**Simulated example**

A time series has been simulated to have a standard normal distribution, $\epsilon_i \sim \text{N}(0,1)$. This indicates that the entries of $y$ have $Y_i \sim \text{N}(0.1+\theta^2)$, $i=1,...,m=1000$.

Normalized ACF can clearly show the temporal correlation, $\rho_{YY}(\tau)=\frac{\theta}{1+\theta^2}$, if $\tau=1$, and $\rho_{YY}(\tau)=0$ if $\tau>1$

![ma1ex](./figs/ma1ex.png "ma1ex")

## Brief Summary

The random processes (noise processes) explained are:

* ARMA(p,q) process

$$
Y_t = \sum_{i=1}^p \beta_iY_{t-i}+\epsilon_t+\sum_{i=1}^q\theta_i\epsilon_{t-1}
$$

* AR(p) process

$$
Y_t = \sum_{i=1}^p \beta_iY_{t-i}+\epsilon_t
$$

* MA(q) process

$$
Y_t = \epsilon_t+\sum_{i=1}^q\theta_i\epsilon_{t-1}
$$

* The parameters of these stochastic processes should be estimated (e.g. by LSE or MLE)

## Worked example - Single Differencing

On this worked example, we will try to show that single differencing induces an MA(1). Let us consider

$$Y=\begin{bmatrix}Y_1\\ Y_2\\ ...\\ Y_m\end{bmatrix}, \hspace{10px} \Sigma_{yy}=c_{\tau}^2\begin{bmatrix}1&0&...&0\\ 0&1&...&0\\ ...&...&...&...\\ 0&0&...&1\end{bmatrix}=c_{\tau}^2 I_m$$

Having $\Delta Y_1 = Y_1$, then:

$$\begin{cases}\Delta Y_2 = Y_2 - Y_1\\ \Delta Y_3 = Y_3-Y_2\\ ...\\ \Delta Y_m = Y_m - Y_{m-1}\end{cases}$$

In matrix notation, this can be written as:

$$\begin{bmatrix}\Delta Y_2\\ \Delta Y_3\\ ...\\ \Delta Y_m\end{bmatrix} = \begin{bmatrix}-1&1&0&...&0&0\\ 0&-1&1&...&0&0\\ ...&...&...&...&...\\ 0&0&0&...&-1&1\end{bmatrix}\begin{bmatrix}Y_1\\ Y_2\\ ...\\ Y_m\end{bmatrix} \Longleftrightarrow \Delta Y = TY$$

Therefore:

$$\Sigma_{\Delta Y\Delta Y}=T\Sigma_{yy}T^T = Tc_{\tau}^2I_mT^T=c_{\tau}^2TT^T$$

which can simplify to:

$$\Sigma_{\Delta Y\Delta Y} = c_{\tau}^2TT^T = 2c_{\tau}^2\begin{bmatrix}1&-0.5&0&...&0\\ -0.5&1&-0.5&...&0\\ 0&-0.5&1&...&0\\ ...&...&...&...&...\\ 0&0&0&...&1\end{bmatrix}$$

Now we need to find the value of $\theta$ to get $\Delta Y_t$. Therefore:

$$\begin{cases}\rho_1=-0.5=\frac{\theta}{1+\theta^2}\\ \Delta Y_t = \theta \epsilon_{t-1}+\epsilon_t\end{cases}\implies \theta=-1 \implies \Delta Y_t = \epsilon_t-\epsilon_{t-1}$$