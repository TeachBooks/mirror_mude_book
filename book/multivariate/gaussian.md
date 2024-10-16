
# Multivariate Gaussian distribution

One of the simplest approaches we have to define a multivariate distribution, $F(x, y)$, is through the multivariate Gaussian distribution. This model assumes that both the marginals and the dependence are Gaussian. As you saw in previous chapters, the Gaussian distribution is not always the best model so the applicability of the multivariate Gaussian is limited. However, it is a convenient model since it can be manipulated analytically and we can use it as a first approach to model the dependence. 

## Definition of bivariate Gaussian distribution
The bivariate Gaussian distribution for two random variables $X_1$ and $X_2$ is defined as

$$
\phi_{\rho}(x_1, x_2) = \frac{1}{2\pi \sigma_1 \sigma_2 \sqrt{1-\rho^2}} \exp \left( - \frac{\left( \frac{x_1-\mu_1}{\sigma_1}\right) -\left( \frac{2\rho (x_1-\mu_1)(x_2-\mu_2)}{\sigma_1 \sigma_2}\right) +\left(\frac{x_2-\mu_2}{\sigma_2} \right)}{2(1-\rho^2)}\right)
$$

where $x_1$ and $x_2$ are values of the random variables, $\sigma_1$ and $\sigma_2$ are the standard deviations of the random variables, $\rho$ is the correlation coefficient between $X_1$ and $X_2$, and $\mu_1$ and $\mu_2$ are the mean values of the random variables. Therefore, it has five parameters: $\mu_1$, $\mu_2$, $\sigma_1$, $\sigma_2$ and $\rho$.

We can rewrite the above expression in matricial form as

$$
\phi_{\rho}(x_1, x_2) = \frac{1}{\sqrt{(2\pi)^2 \begin{vmatrix} \sigma_1^2 \ \ \ \ Cov(X_1, X_2) \\ Cov(X_1, X_2) \ \ \sigma_2^2 \\ \end{vmatrix}}} \exp \left( (x_1 - \mu_1 \ x_2-\mu_2) \begin{pmatrix} \sigma_1^2 \ \ \ Cov(X_1, X_2) \\ Cov(X_1, X_2) \ \ \ \sigma_2^2 \end{pmatrix} \begin{pmatrix} x_1 - \mu_1 \\ x_2 - \mu_2 \end{pmatrix} \right)
$$

where $Cov(X_1, X_2)$ is the covariance of the random variables $X_1$ and $X_2$. We can also present the above form in a compressed fashion as

$$
\phi_{\rho}(x_1, x_2) = \frac{1}{\sqrt{(2\pi)^2 |\boldsymbol{\Sigma|}}} \exp{-\frac{1}{2}(\boldsymbol{x-\mu})^T \boldsymbol{\Sigma}^{-1} (\boldsymbol{x-\mu})}
$$

where $\boldsymbol{x}$ is the vector of values of the random variable, $\boldsymbol{\mu}$ is the vector of means, and $\boldsymbol{\Sigma}$ is the covariance matrix[^note].

The cumulative distribution function of the bivariate Gaussian distribution would then be defined as

$$
\Phi_{X_1,X_2}(x_1,x_2)=P(X_1 \leq x_1, X_2 \leq x_2)=\int_{-\infty}^{x_1}{\int_{-\infty}^{x_2}{\phi_{\rho}(s_1, s_2)ds_1ds_2}}
$$

Note that when talking about the Gaussian distribution instead of using $F_{X_1,X_2}(x_1,x_2)$, we use $\Phi_{X_1,X_2}(x_1,x_2)$, but it means the same!

```{figure} ./figures/bivariate_gaussian.png

---

---
Bivariate Gaussian distribution: (left) probability density function, and (right) cumulative distribution function.
```

In the figure below, you have the PDF and CDF of a bivariate Gaussian distribution for a correlation coefficient $\rho=0.77$. Also, you can plan with the interactive element below changing the correlation value yourself. Observe how the distribution's _density_ contours, or a scatter plot of _samples,_ change when you adjust the correlation.

<iframe src="../_static/elements/element_correlation.html" width="600" height="400" frameborder="0"></iframe>

## Conditionalizing a bivariate Gaussian distribution

aa

## From 2D to 3D: multivariate margins

Analytical conditionalization of the 3D Gaussian: 2D margin!

**case study**: return to the river flooding case and illustrate the effect of dependence. figure and table.

[^note]: You already studied covariance matrices [here](correl).