(AR)=
# AR process

The main goal is to introduce the AutoRegressive (AR) model to describe a **stationary stochastic process**. Hence the AR model can be applied on time series where e.g. trend and seasonality are not present / removed, and only noise remains, or after applying other methods [to obtain a stationary time series](stationarize).

## Process definition

In an AR model, we forecast the variable of interest using a linear combination of its past values. A zero mean AR process of orders $p$ can be written as follows:

$$S_t = \overbrace{\beta_1S_{t-1}+...+\beta_pS_{t-p}}^{\text{AR process}} + e_t $$ 

or as

$$S_t = \sum_{i=1}^p \beta_iS_{t-i}+e_t$$

Each observation is made up of a **random error** $e_t$ at that epoch, a linear combination of **past observations**. The errors $e_t$  are uncorrelated purely random noise process, known also as white noise. We note the process should still be stationary, satisfying

$$\mathbb{E}(S_t)=0, \hspace{20px} \mathbb{D}(S_t)=\sigma^2,\quad \forall t$$

This indicates that parts of the total variability of the process come from the signal and noise of past epochs, and only a (small) portion belongs to the noise of that epoch (denoted as $e_t$). To have a better understanding of the process itself, we consider two special cases, $q=0$ and $p=0$.

### First-order AR(1) process

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

## Estimation of coefficients of AR process

If the values of $p$ of the AR($p$) process is known, the question is: **how can we estimate the coefficients $\beta_1,...,\beta_p$?**

Here, we only elaborate on AR(2) using best linear unbiased estimation (BLUE) to estimate $\beta_1$ and $\beta_2$. The method can be generalized to estimate the parameters of an AR($p$) process.

**Example: Parameter estimation of AR(2)**

The AR(2) process is of the form

$$S_t=\beta_1 S_{t-1}+\beta_2 S_{t-2}+e_t$$

In order to estimate the $\beta_i$ we can set up the following linear model of observation equations (starting from $t=3$):

$$\begin{bmatrix}S_3 \\ S_4 \\ \vdots \\ S_m \end{bmatrix} = \begin{bmatrix}S_2 & S_1 \\S_3 & S_2\\ \vdots & \vdots\\ S_{m-1}&S_{m-2} \end{bmatrix}\begin{bmatrix}\beta_1 \\ \beta_2\end{bmatrix} + \begin{bmatrix}e_{3} \\ e_{4}\\ \vdots \\ e_{m} \end{bmatrix}$$

The BLUE estimator of $\beta=[\beta_1,\beta_2]^T$ is

$$\hat{\beta}=(\mathrm{A}^T\mathrm{A})^{-1}\mathrm{A}^TS$$


where $\mathrm{A}=\begin{bmatrix}S_2 & S_1 \\S_3 & S_2\\ \vdots & \vdots\\ S_{m-1}&S_{m-2} \end{bmatrix}$ and $S=\begin{bmatrix}S_3 \\ S_4 \\ \vdots \\ S_m \end{bmatrix}$.

Notice that S and A are vectors of length $(m-2)$ and $(m-2\times 2)$, respectively.