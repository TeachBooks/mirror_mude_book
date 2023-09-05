
## Mean and variance propagation laws

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

### Function of one random variable 

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

:::{card} Example $X=Y^2$

$$
\begin{align*}
\mathbb{E}(X)&\approx \mu_Y^2 + \frac{1}{2}\cdot 2 \cdot \sigma_Y^2= \mu_Y^2+\sigma_Y^2\\
\sigma_X^2 &\approx \left( 2\mu_Y\right)^2\sigma_Y^2 = 4\mu_Y^2\sigma_Y^2
\end{align*}
$$
:::

### Function of two random variables 
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

### Functions of $n$ random variables
The propagation laws for functions of $n$ random variables are as follows:

$$
\mathbb{E}(X)\approx q(\mu_Y)+\frac{1}{2} \sum_{i=1}^{n}\left(\frac{\partial^2 q}{\partial Y_i^2}\right)_0\sigma_i^2 + \frac{1}{2} \sum_{i=1}^{n}\sum_{j=1,j\neq i}^{n} \left(\frac{\partial^2 q}{\partial Y_i \partial Y_j}\right)_0Cov(Y_1,Y_2)
$$

$$
\sigma_X^2 \approx \sum_{i=1}^{n}\left(\frac{\partial q}{\partial Y_i}\right)_0^2\sigma_i^2  + \sum_{i=1}^{n}\sum_{j=1,j\neq i}^{n}\left(\frac{\partial q}{\partial Y_i}\right)_0\left(\frac{\partial q}{\partial Y_j}\right)_0Cov(Y_i,Y_j)
$$


