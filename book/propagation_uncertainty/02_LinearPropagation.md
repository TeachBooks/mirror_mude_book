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

:::{card} Exercise

In a similar fashion derive the variance of $X$, which is also an exact result.

 ```{admonition} Solution
:class: tip, dropdown
First determine the first- and second-order partial derivatives of the function $q(L,T)$ to obtain:

$$
\sigma_X^2 = a_1^2 \sigma_1^2 + a_2^2 \sigma_2^2 + 2a_1 a_2 Cov(Y_1,Y_2)
$$

Note that it does not depend on the deterministic constant $c$.
```
:::

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

These are exact results, since for linear functions the higher-order terms of the Taylor approximation become zero and thus the approximation error is zero.

:::{card} Exercise 
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
:::