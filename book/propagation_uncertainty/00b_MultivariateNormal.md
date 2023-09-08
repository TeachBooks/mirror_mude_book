
## Multivariate normal distribution

If all $X_i$ in the random vector $X= [\begin{array}{llll} X_1 & X_2 & \ldots &X_m \end{array}]^T$ are normally distributed, then $X$ will have the *multivariate normal distribution*, for which the PDF is given as:

$$
f_{X} (x) = \frac{1}{\sqrt{\det(2\pi \Sigma_{X})}} \exp(-\frac{1}{2}(x-\mu_X)^T \Sigma_{X}^{-1}(x-\mu_X) )
$$

which is determined by the expectation $\mu_X$ and covariance matrix $\Sigma_X$.

Notation: $X\sim N(\mu_X,\Sigma_X)$

An example of the bivariate normal PDF is shown in {numref}`normal2D`; in this example $ \sigma_{X_1}=1$ and $\sigma_{X_2}=2$ and $\rho(X_1,X_2)=0.7$.

```{figure} figures/01_bivariatenormal.png
---
height: 350px
name: normal2D
---
Example of bivariate normal PDF and corresponding scatterplot with 2000 realizations.
```