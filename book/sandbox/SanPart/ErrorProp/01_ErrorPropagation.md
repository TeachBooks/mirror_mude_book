(01_errorprop)=
# Propagation of uncertainty
## Functions of random variables
In engineering and sciences we often work with functions of random variables, since when estimating or modelling something, the output is a function of the random input variables, see {numref}`functions`

```{figure} ../figures/ErrorPropagation/01_Functions.png
---
height: 350px
name: functions
---
Output of a model $X$ is function of random input $Y$.
```

Some simple examples are:
* conversion of temperature measured in degrees Celsius to temperature in degrees Fahrenheit: $T_f = q(T_c)=\frac{9}{5}T_c+32$
* taking the mean of $m$ repeated measurements $Y_i$: $\hat{X}=q(Y_1,\ldots,Y_m)=\frac{1}{m}\sum_{i=1}^m Y_i$
* subsurface temperature $T_z$ as a function of depth $Z$ and surface temperature $T_0$ and known $a$: $T_z = T_0 + aZ$
* wind loading $F$ on a building as function of area of building face $A$, wind pressure $P$, drag coefficient $C$: $F = A\cdot P\cdot C$
* Evaporation $Q$ using Bowen Ratio Energy Balance as function of the net radiation $R$, ground heat flux $G$, bowen ratio $B$: $Q =q(R,G,B) =\frac{R-G}{1-B}$

{numref}`temp` shows an example of the distribution of the average July temperature in a city, both in degrees Celsius and degrees Fahrenheit. Due to the change of units, the PDF is transformed, the mean is shifted and the variance changed.

```{figure} ../figures/ErrorPropagation/01_Temp.png
---
height: 600px
name: temp
---
Distribution of temperature in degrees Celsius and degrees Fahrenheit.
```
The question we are interestein is: **how does the statistical uncertainty in input data propagate in the output variables?**

Here, will only consider the propagation of the mean (= expectation) and (co-)variances, and not the transformation of the full PDF or CDF.



The general form of our problem will be given as follows. Consider the single function of $m$ random variables

$$
X = q(Y)=q(Y_1,\ldots,Y_m)
$$

with the mean and covariance matrix of $Y$ known:

$$
\mathbb{E}(Y)=\mu_Y, \quad \mathbb{D}(Y)=\Sigma_Y
$$

**What is then the mean and variance of $X$?**

Let's start with the mean for the case that the function is linear: 

$$
q(Y)=a_1 Y_1+ a_2 Y_2 +\cdots+ a_m Y_m + c
$$

with the $a_i$ and $c$ deterministic constants. Since the expectation operator is a linear operator, we have:

$$
\mathbb{E}(q(Y))=\mathbb{E}(a_1 Y_1+ a_2 Y_2 +\cdots a_m Y_m + c)= a_1 \mathbb{E}(Y_1)+\cdots+ a_m \mathbb{E}(Y_m)+c
$$

But what if the function is non-linear? Then we can use the [Taylor series](PM_taylor) approximation of $q(Y)$. 

## Function of one random variable 

We will first look at the simplest case, where we have a function of a single random variable, $X=q(Y)$, with the Taylor approximation:

$$
q(Y)\approx q(\mu_Y) +\left(\frac{\partial q}{\partial Y}\right)_0(Y-\mu_Y) + \frac{1}{2!} \left(\frac{\partial^2 q}{\partial Y^2}\right)_0(Y-\mu_Y)^2 + \text{H.O.T}
$$

where we take the mean $y_0=\mu_Y$ as the logical initial guess of the random vector $Y$. (H.O.T. stands for higher-order terms). The subscript $_0$ indicates that the partial derivatives are evaluated at $y_0=\mu_Y$.

Due to the linearity of the expectation we then find as a second-order approximation of $\mathbb{E}(q(Y))$, known as *mean propagation law*:

$$
\begin{align*}
\mathbb{E}(X)=\mathbb{E}(q(Y))&\approx \mathbb{E}(q(\mu_Y) +\left(\frac{\partial q}{\partial Y}\right)_0(Y-\mu_Y) + \frac{1}{2!} \left(\frac{\partial^2 q}{\partial Y^2}\right)_0(Y-\mu_Y)^2)\\
&= \mathbb{E}(q(\mu_Y)) +\left(\frac{\partial q}{\partial Y}\right)_0\mathbb{E}\left((Y-\mu_Y)\right) + \frac{1}{2} \left(\frac{\partial^2 q}{\partial Y^2}\right)_0\mathbb{E}\left((Y-\mu_Y)^2\right)\\
&= q(\mu_Y)+\frac{1}{2} \left(\frac{\partial^2 q}{\partial Y^2}\right)_0\sigma_Y^2
\end{align*}
$$
where in order to arrive at the last equation we should recognize that:
* $\mathbb{E}(q(\mu_Y))=q(\mu_Y)$ (since $\mu_Y$ is deterministic and known) 
* $\mathbb{E}(Y-\mu_Y)=\mathbb{E}(Y)-\mu_Y= 0$ 
* $\mathbb{E}\left((Y-\mu_Y)^2\right)=\sigma_Y^2$.

For the variance of $X=q(Y)$ it generally suffices to use a first-order approximation. The result follows as:

$$
\sigma_X^2 =\left(\frac{\partial q}{\partial Y}\right)_0^2\sigma_Y^2
$$

and is referred to as the *variance propagation law*.

### Example $X=Y^2$

$$
\begin{align*}
\mathbb{E}(X)&\approx \mu_Y^2 + \frac{1}{2}\cdot 2 \cdot \sigma_Y^2= \mu_Y^2+\sigma_Y^2\\
\sigma_X^2 &\approx \left( 2\mu_Y\right)^2\sigma_Y^2 = 4\mu_Y^2\sigma_Y^2
\end{align*}
$$

## Function of two random variables 
Let's consider the case that we have one function of two random variables, $Y = [Y_1\; \;Y_2]^T$ with known mean and covariance matrix:

$$
\mathbb{E}(Y)=\mu_Y =\begin{bmatrix}\mu_1\\ \mu_2 \end{bmatrix}, \quad \Sigma_Y= \begin{bmatrix}\sigma_1^2 & Cov(Y_1,Y_2)\\ Cov(Y_1,Y_2)&\sigma_2^2 \end{bmatrix}
$$

The Taylor series approximations of $X=q(Y_1,Y_2)$ follow as:

$$
\begin{align*}
\mathbb{E}(X)&\approx q(\mu_Y)+\frac{1}{2} \left(\frac{\partial^2 q}{\partial Y_1^2}\right)_0\sigma_1^2 +\frac{1}{2} \left(\frac{\partial^2 q}{\partial Y_2^2}\right)_0\sigma_2^2 + \left(\frac{\partial^2 q}{\partial Y_1 \partial Y_2}\right)_0Cov(Y_1,Y_2)\\
\sigma_X^2 &\approx \left(\frac{\partial q}{\partial Y_1}\right)_0^2\sigma_1^2 + \left(\frac{\partial q}{\partial Y_2}\right)_0^2\sigma_2^2 + 2\left(\frac{\partial q}{\partial Y_1}\right)_0\left(\frac{\partial q}{\partial Y_2}\right)_0Cov(Y_1,Y_2)
\end{align*}
$$

These are thus the mean and variance propagation laws for a function of two random variables. Pay attention to the $\approx$-sign.

If $Y_1$ and $Y_2$ are independent, we have that $Cov(Y_1,Y_2)=0$, such that the last term in both equations disappears.


:::{card} Exercise mathematical pendulum

We will measure the period on one oscillation $T$ of a pendulum, and also the length $L$ of the pendulum. Both measurements are affected by random errors, and therefore the 'calculated' gravitational acceleration $G$ is a function of two random variables:

$G=q(L,T)= 4\pi \frac{L}{T^2}$ 

Apply the mean and variance propagation laws to approximate the mean and variance of $G$ given that the expectations 
$\mathbb{E}(L)= \mu_L$ and $\mathbb{E}(T)= \mu_T$, as well as the variances $\sigma^2_L$ and $\sigma^2_T$ are known, and the covariance $Cov(L,T)=0$.

```{admonition} Solution
:class: tip, dropdown
First determine the first- and second-order partial derivatives of the function $q(L,T)$ to obtain:

$$
\mathbb{E}(X)\approx 4\pi \frac{\mu_L}{\mu_T^2} + 12\pi^2 \frac{\mu_L}{\mu_T^4}\sigma_T^2
$$


$$
\sigma^2_G \approx 16\pi^4\frac{1}{\mu_T^4}\sigma_L^2 +64\pi^4 \frac{\mu_L^2}{\mu_T^6}\sigma_T^2
$$

```
:::
## Functions of $n$ random variables
The propagation laws for functions of $n$ random variables are as follows:

$$
\mathbb{E}(X)\approx q(\mu_Y)+\frac{1}{2} \sum_{i=1}^{n}\left(\frac{\partial^2 q}{\partial Y_i^2}\right)_0\sigma_i^2 + \frac{1}{2} \sum_{i=1}^{n}\sum_{j=1,j\neq i}^{n} \left(\frac{\partial^2 q}{\partial Y_i \partial Y_j}\right)_0Cov(Y_1,Y_2)
$$

$$
\sigma_X^2 \approx \sum_{i=1}^{n}\left(\frac{\partial q}{\partial Y_i}\right)_0^2\sigma_i^2  + \sum_{i=1}^{n}\sum_{j=1,j\neq i}^{n}\left(\frac{\partial q}{\partial Y_i}\right)_0\left(\frac{\partial q}{\partial Y_j}\right)_0Cov(Y_i,Y_j)
$$




(01_LinearProp)=
## Linear propagation laws of mean and covariance

### Linear function of two random variables
Consider a linear function of two random variables

$$
X = q(Y)=a_1 Y_1+ a_2 Y_2 + c
$$

We can now show that $\mathbb{E}(q(Y))= a_1 \mathbb{E}(Y_1)+a_2 \mathbb{E}(Y_2)+c$ using our Taylor approximations. The first-order partial derivatives namely follow as

$$
\frac{\partial q}{\partial Y_1}= a_1, \; \frac{\partial q}{\partial Y_2}= a_2
$$

and all the higher-order derivatives are zero, and consequently all higher-order terms in the Taylor series will be zero. The expectation of $q(Y)$ follows therefore as

$$
\mathbb{E}(q(Y))= q(\mu_1,\mu_2)=a_1 \mu_1 + a_2\mu_2 + c
$$

which is exact (i.e., not an approximation anymore).

### Exercise

In a similar fashion derive the variance of $X$, which is also an exact result.

 ```{admonition} Solution
:class: tip, dropdown
First determine the first- and second-order partial derivatives of the function $q(L,T)$ to obtain:

$$
\sigma_X^2 = a_1^2 \sigma_1^2 + a_2^2 \sigma_2^2 + 2a_1 a_2 Cov(Y_1,Y_2)
$$

Note that it does not depend on the deterministic constant $c$.
```

### Linear functions of $n$ random variables 
Note that the linear function of two random variables can also be written as $q(Y) = \begin{bmatrix} a_1 & a_2\end{bmatrix}\begin{bmatrix}Y_1 \\ Y_2\end{bmatrix}+c$. We will now generalize to the case where we have $m$ linear functions of $n$ variables, which can be written as a linear system of equations:

$$ 
X= \begin{bmatrix} X_1\\ X_2 \\ \vdots \\ X_m \end{bmatrix}= \begin{bmatrix} a_{11}&a_{12}&\dots&a_{1n}\\a_{21}&a_{22}&\dots&a_{2n} \\ \vdots&\vdots&\vdots&\vdots \\ a_{m1}&a_{m2}&\dots&a_{mn} \end{bmatrix} \begin{bmatrix} Y_1\\ Y_2 \\ \vdots \\ Y_n \end{bmatrix} +\begin{bmatrix} c_1\\ c_2 \\ \vdots \\ c_n \end{bmatrix}=\mathrm{A}Y+\mathrm{c}
$$

with known $\mathbb{E}(Y)$ and covariance matrix $\Sigma_Y$, and $\mathrm{c}$ a vector with deterministic variables.

The linear propagation laws of the mean and covariance matrix are given by

$$
\mathbb{E}(X) = \mathrm{A}\mathbb{E}(Y)+\mathrm{c}
$$ 

$$
\Sigma_{X} =\mathrm{A}\Sigma_Y \mathrm{A}^T
$$

These is an exact results, since for linear functions the higher-order terms of the Taylor approximation become zero and thus the approximation error is zero.



### Exercise
Consider the linear system of equations

$$
X=\begin{bmatrix}1&1 \\ 1&-2\end{bmatrix}\begin{bmatrix}Y_1 \\ Y_2\end{bmatrix}
$$

with 

$$
\mu_Y = \begin{bmatrix}0 \\ 0\end{bmatrix},\; \Sigma_Y= \begin{bmatrix}3&0 \\ 0&3\end{bmatrix}
$$

Apply the linear propagation laws to find $\mathbb{E}(X)=\mu_X$ and $\Sigma_X$.

 ```{admonition} Solution
:class: tip, dropdown

$$
\mu_X=\begin{bmatrix}1&1 \\ 1&-2\end{bmatrix}\begin{bmatrix}0 \\ 0\end{bmatrix}=\begin{bmatrix}0 \\ 0\end{bmatrix}
$$

$$
\Sigma_X = \begin{bmatrix}1&1 \\ 1&-2\end{bmatrix}\begin{bmatrix}3&0 \\ 0&3\end{bmatrix}\begin{bmatrix}1&1 \\ 1&-2\end{bmatrix}=\begin{bmatrix}6&-3 \\ -3&15\end{bmatrix}
$$

```
