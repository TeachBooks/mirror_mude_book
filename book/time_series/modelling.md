# Modelling and Estimation

The goal is to apply the **Best Linear Unbiased Estimation (BLUE)** and **hypothesis testing** to time series modelling, estimation and model identification, i.e.

* The BLUE of parameters of interest (on components of time series)
* Confidence intervals of parameters of interest
* Model identification using test statistics (harmonic estimation)

$$H_0: y=Ax+e \hspace{5px}\text{vs.}\hspace{5px} H_a: y=Ax+Cz+e$$

## Components of time series

In general, we may distinguish the following components in a time series:

* **Trend:** General behavior and variation of the process
* **Seasonality:** Regular seasonal variations
* **Offset:** A common practice in many time series
* **Noise:** White or colored noise

To make a linear model of observation equations, assume that the time series data, $y=[y(t_1),...,y(t_m)]=[y_1,...,y_m]$ consists of four components as follows:

* Nose component/process (white, ARMA, etc.)
* A linear trend with an intercept $y_0$ and a rate $r$
* A seasonality signal expressed e.g. as a pure sine function $(\omega,A,\phi)=(\omega,a,b)$
* An offset at epoch $t_k$

## Best Linear Unbiased Estimation (BLUE)

If the components of time series are known, we may use the linear model of observation equations to estimate those components.

Consider the linear model of observation equations as

$$y=Ax+e, \hspace{10px} \mathbb{D}(y)=Q_{yy}$$

The BLUE of $x$ is:

$$\hat{x}=(A^TQ_{yy}^{-1}A)^{-1}A^TQ_{yy}^{-1}y,\hspace{10px}Q_{\hat{x}\hat{x}}=(A^TQ_{yy}^{-1}A)^{-1}$$

The BLUE of $y$ and $e$ is

$$\hat{y}=P_Ay,\hspace{10px}Q_{\hat{y}\hat{y}}=P_AQ_{yy}$$

and

$$\hat{e}=P_A^{\perp}y,\hspace{10px}Q_{\hat{e}\hat{e}}=P_A^{\perp}Q_{yy}$$

where $P_A = A(A^TQ_{yy}^{-1}A)^{-1}A^TQ_{yy}^{-1}$ and $P_A^{\perp}=I-A(A^TQ_{yy}^{-1}A)^{-1}A^TQ_{yy}^{-1}$ are two orthogonal projectors, such that

$$P_AP_A=P_A \hspace{5px}\text{and}\hspace{5px}P_A^{\perp}P_A^{\perp}=P_A^{\perp}$$

### Model of observation equations

The linear model, consisting of the above three components plus noise, is of the form

$$y_t = y_0+rt+a\cos{\omega t}+b\sin{\omega t}+ou_k(t)+e_t$$

The linear model should indeed be written for all time instances $t_1,...,t_m$, resulting in $m$ equations as ($i=1,...,m$)

$$y(t_1) = y_0+rt_1+a\cos{\omega t_1}+b\sin{\omega t_1}+ou_k(t_1)+e(t_1)\\ y(t_2) = y_0+rt_2+a\cos{\omega t_2}+b\sin{\omega t_2}+ou_k(t_2)+e(t_2)\\ ... \\ y(t_i) = y_0+rt_i+a\cos{\omega t_i}+b\sin{\omega t_i}+ou_k(t_i)+e(t_i)\\ ... \\ y(t_m) = y_0+rt_m+a\cos{\omega t_m}+b\sin{\omega t_m}+ou_k(t_m)+e(t_m)$$

These equations can be written in a compact matrix notation as

$$y=Ax+e$$

where

$$\overbrace{\begin{bmatrix}y_1\\ y_2\\ ...\\ y_k\\ ...\\ y_m\end{bmatrix}}^{y} = \overbrace{\begin{bmatrix}1&t_1&\cos{\omega t_1}&\sin{\omega t_1}&0\\ 1&t_2&\cos{\omega t_2}&\sin{\omega t_2}&0\\ ...&...&...&...&...\\ 1&t_k&\cos{\omega t_k}&\sin{\omega t_k}&0\\ ...&...&...&...&...\\ 1&t_m&\cos{\omega t_m}&\sin{\omega t_m}&0\end{bmatrix}}^{A}\overbrace{\begin{bmatrix}y_0\\ r\\ a\\ b\\ o\end{bmatrix}}^{x}+\overbrace{\begin{bmatrix}e_1\\ e_2\\ ...\\ e_k\\ ...\\ e_m\end{bmatrix}}^{e}$$

with the $m$ x $m$ covariance matrix

$$\mathbb{D}(y)=Q_{yy}=\begin{bmatrix}\sigma_1^2&\sigma_{12}&...&\sigma_{1m}\\ \sigma_{21}&\sigma_{2}^2&...&\sigma_{2m}\\ ...&...&...&...\\ \sigma_{m1}&\sigma_{m2}&...&\sigma_{m}^2\end{bmatrix}$$

### Estimation of parameters

If we assume the covariance matrix, $\mathbb{D}(y)=Q_{yy}$, is known, we can estimate $x$ using the BLUE: $\hat{x}=(A^TQ_{yy}^{-1}A)^{-1}A^TQ_{yy}^{-1}y$, $Q_{\hat{x}\hat{x}}=(A^TQ_{yy}^{-1}A)^{-1}$, giving

$$\hat{x}=\begin{bmatrix}\hat{y_0}\\ \hat{r}\\ \hat{a}\\ \hat{b}\\ \hat{o}\end{bmatrix},\hspace{10px}Q_{\hat{x}\hat{x}}=\begin{bmatrix}\sigma_{\hat{y}_0}^2& \sigma_{\hat{y}_0\hat{r}}& \sigma_{\hat{y}_0\hat{a}}& \sigma_{\hat{y}_0\hat{b}}& \sigma_{\hat{y_0}\hat{o}}\\ \sigma_{\hat{r}\hat{y}_0}& \sigma_{\hat{r}}^2& \sigma_{\hat{r}\hat{a}}& \sigma_{\hat{r}\hat{b}}& \sigma_{\hat{r}\hat{o}}\\ \sigma_{\hat{a}\hat{y_0}}& \sigma_{\hat{a}\hat{r}}& \sigma_{\hat{a}}^2& \sigma_{\hat{a}\hat{b}}& \sigma_{\hat{a}\hat{o}}\\ \sigma_{\hat{b}\hat{y_0}}& \sigma_{\hat{b}\hat{r}}& \sigma_{\hat{b}\hat{a}}& \sigma_{\hat{b}}^2& \sigma_{\hat{b}\hat{o}}\\ \sigma_{\hat{o}\hat{y_0}}& \sigma_{\hat{o}\hat{r}}& \sigma_{\hat{o}\hat{a}}& \sigma_{\hat{o}\hat{b}}& \sigma_{\hat{o}}^2\end{bmatrix}$$

Given $\hat{x}$ and $Q_{\hat{x}\hat{x}}$, we can obtain a *confidence region* for the parameters. For example, assuming the observations are normally distributed, a 99% **confidence interval** for the rate $r$ is ($\alpha=0.01$):

$$\hat{r}-Z_{\alpha/2}\sigma_{\hat{r}} \leq r \leq \hat{r}+Z_{\alpha/2}\sigma_{\hat{r}}$$

where $\sigma_{\hat{r}} = \sqrt{(Q_{\hat{x}\hat{x}})_{22}}$ is the standard deviation of $\hat{r}$ and $Z_{\alpha/2}=2.58$ is the critical value obtained from the standard normal distribution.

## Model identification

The design matrix $A$ is usually assumed to be known. So far, we have assumed the frequency $\omega$ of the periodic pattern (seasonality, for example) in a $a\cos{\omega t} + b\sin{\omega t}$ is known, so the design matrix $A$ can be directly obtained. In some applications, however, such information is hidden in the data, and needs to be identified/detected. Linear model identification is a way to reach this goal.

***How to determine $\omega$ if it is unknown a priori?***

### Discrete Fourier Transform (DFT)

The first method we will study is the **Discrete Fourier Transform**. The DFT or fast FT (FFT) of a real time series, $y_t$, is a complex array as

$$\text{DFT}(y(t))=Y(\nu)$$

having a real and an imaginary part. The power at each frequency component can be computed by squaring the magnitude of that frequency component: **power spectral density** (PSD).

$$S_{yy}(\nu)=P_\nu=\frac{1}{m\Delta t}|Y(\nu)|^2$$

where $|Y(\nu)|$ is the magnitude at the frequency $\nu$. If a significant seasonality is present at frequency $\nu=\omega$, there should be a clear peak at this frequency, so

$$S_{yy}(\omega)=P_\omega=\frac{1}{m\Delta t}|Y(\omega)|^2$$

shows more peaked than the neighboring powers.

### Least Squares Harmonic Estimation (LS-HE)

The second method we will study is hypothesis testing, here called **Least Squares Harmonic Estimation** (LS-HE). We make use of the hypothesis testing to test the validity of the linear model and, hence, to improve it.

We put forward two hypotheses:

$$H_0: y=Ax+e \hspace{5px}\text{vs.}\hspace{5px} H_a: y=Ax+Cz+e$$

```{admonition} Example
:class: tip, dropdown

$$H_0: y_t=y_0+rt+e_t \hspace{10px} H_a: y_t=y_0+rt+a\cos{\omega t}+b\sin{\omega t}+e_t$$

$$\begin{bmatrix}y_1\\ y_2\\ ...\\ y_m\end{bmatrix} = \begin{bmatrix}1&t_1\\ 1&t_2\\ ...&...\\ 1&t_m\end{bmatrix}\begin{bmatrix}y_0\\ r\end{bmatrix} + \begin{bmatrix}e_1\\ e_2\\ ...\\ e_m\end{bmatrix}\hspace{5px}\text{vs.}\hspace{5px}\begin{bmatrix}y_1\\ y_2\\ ...\\ y_m\end{bmatrix} = \begin{bmatrix}1&t_1\\ 1&t_2\\ ...&...\\ 1&t_m\end{bmatrix}\begin{bmatrix}y_0\\ r\end{bmatrix}+\begin{bmatrix}\cos{\omega t_1}&\sin{\omega t_1}\\ \cos{\omega t_2}&\sin{\omega t_2}\\ ...&...\\ \cos{\omega t_m}&\sin{\omega t_m}\end{bmatrix}\begin{bmatrix}a\\ b\end{bmatrix}+\begin{bmatrix}e_1\\ e_2\\ ...\\ e_m\end{bmatrix}$$

![hypotheses](./figs/hypotheses.png "hypotheses")

```

The test statistic is obtained using the following power (with $\hat{e}_0=P_A^\perp y$, the least squares residuals under $H_0$)

$$T=\hat{e}_0^TQ_{yy}^{-1}C(C^TQ_{yy}^{-1}P_A^\perp C)^{-1}C^TQ_{yy}^{-1}\hat{e}_0$$

This test statistic, having chi-square distribution, can be tested in a given confidence level (2 is the columns of $C$)

$$T\sim\chi^2(2,0)$$

**Special case:** for a zero-mean ($\hat{e}_0=y$ and $A=0$) white noite ($Q_{yy}=I$) time series, we have

$$T = y^T C(C^TC)^{-1}C^Ty$$

This, in fact, can be show to be identical to a scaled version (by factor 2) of PSD, as explained in the last subchapter.

```{note} Proof: Implementation of T(q=2) test statistics

As we have seen just before, the test statistics can be obtained and it is of the form:

$$T=e_0^TQ_{yy}^{-1}C(C^TQ_{yy}^{-1}P_A^\perp C)^{-1}C^TQ_{yy}^{-1}e_0$$

or, with $P_A^{\perp}Q_{yy}Q_{yy}^{-1}=Q_{e_0e_0}Q_{yy}^{-1}$, as:

$$T_q=e_0^TQ_{yy}^{-1}C(C^TQ_{yy}^{-1}Q_{e_0e_0}Q_{yy}^{-1}C)^{-1}C^TQ_{yy}^{-1}e_0$$

where

$$Q_{e_0e_0}=Q_{yy}-A(A^TQ_{yy}^{-1}A)^{-1}A^T$$

If we assume $Q_{yy}=\sigma^2I$, we then have

$$T_q=e_0^TC(C^TQ_{e_0e_0}C)^{-1}C^Te_0=\sigma^{-2}e_0^TC(C^T(I-A(A^TA)^{-1}A^T)C)^{-1}C^Te_0$$

or

$$T_q=\sigma^{-2}e_0^TC(C^TC-C^TA(A^TA)^{-1}A^TC)^{-1}C^Te_0$$

```

#### Example LS power spectral density

![ls-psd](./figs/ls-psd.png "ls-psd")

## Worked proof: equality of PSD and LS-HE T-test statistics

[On the equality of the PSD and the LS-HE T-test statistics](./proof.pdf)

