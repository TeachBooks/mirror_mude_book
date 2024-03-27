If all $X_i$ in the random vector $X= [\begin{array}{llll} X_1 & X_2 & \ldots &X_m \end{array}]^T$ are normally distributed, then $X$ will have the *multivariate normal distribution*, for which the PDF is given as:
$$f_{X} (x) = \frac{1}{\sqrt{\det(2\pi \Sigma_{X})}} \exp(-\frac{1}{2}(x-\mu_X)^T \Sigma_{X}^{-1}(x-\mu_X) )$$
which is determined by the expectation $\mu_X$ and covariance matrix $\Sigma_X$.

Notation: $X\sim N(\mu_X,\Sigma_X)$

An example of the bivariate normal PDF is shown below; in this example $ \sigma_{X_1}=1$ and $\sigma_{X_2}=2$ and $\rho(X_1,X_2)=0.7$.

### Tool to play with bivariate normal PDF

In this small demo you can create plots of the bivariate normal PDF, including a scatter plot of generated realizations, where you can play with the values of the means, standard deviations and correlation coefficient. Adjust the values in the sliders to the right and observe how the results changes. 

<iframe src="./elements/element_2D_Gaussian.html" width="900" height="300" frameborder="0"></iframe>