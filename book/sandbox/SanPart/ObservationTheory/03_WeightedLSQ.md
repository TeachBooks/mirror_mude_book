# Weighted least-squares estimation
In ordinary least-squares estimation, we assume that all observations are equally important. In many cases this is not realistic, as observations may be obtained by different measurement systems, or under different circumstances. We want our methodology for least-squares estimation to be able to take this into account.

We achieve this goal by introducing a weight matrix in the normal equation. In the unweighted least-squares approach, we arrive at the normal equation by pre-multiplying both sides of $\mathrm{y=Ax}$ with the transpose of the design matrix $\mathrm{A^T}$:

$$ 
\mathrm{y=Ax} \; \rightarrow \; \mathrm{A^T\;  y = A^T\; A x }
$$

In the weighted least-squares approach, we add weight matrix $W$ to this pre-multiplication factor, i.e., $ \mathrm{A^T W}$, to obtain the normal equation:

$$ 
\mathrm{y=Ax} \; \rightarrow \; \mathrm{A^T W \; y = A^TW \; A x}
$$

The normal matrix is now defined as $\mathrm{N=A^T W A}$. From this, assuming that the normal matrix $N$ is invertible (non-singular) we find the weighted least-squares estimate $ \hat{x} $, 

$$ 
\mathrm{\hat{x} = (A^T W A)^{-1} A^T W y}
$$

We also find the derived estimate $ \mathrm{\hat{y}} $ and $ \mathrm{\hat{e}} $:

$$
\mathrm{\hat{y} = A \hat{x}  = A (A^T W A )^{-1} A^T W y}
$$

$$
 \mathrm{\hat{\epsilon} = y - \hat{y}= y - A \hat{x} = y-A (A^T W A )^{-1} A^T W y = (I- A(A^T W A )^{-1} A^T W) y}
$$

## Video
```{eval-rst}
.. raw:: html

    <iframe width="560" height="315" src="https://www.youtube.com/embed/iJmkkz37EuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Discussion on the weight matrix
The weight matrix $\mathrm{W}$ expresses the (relative) weights between the observations. It is always a square matrix. The size of the weight matrix depends on the number of observations, $m$. The size of the weight matrix is $m\times m$. 

If it is a unit matrix ($\mathrm{W=I}$), this implies that all observations have equal weight. Note that in this case the equations are equal to the ordinary least-squares solution. 

If it is a diagonal matrix, with different values on the diagonal, this implies that entries with a higher value correspond to the observations which are considered to be of more importance. If the weight matrix has non-zero elements on the off-diagonal positions, this implies that (some) observations are correlated.

## Weighted least-squares estimator: properties

Until now, we have looked at the weighted least-squares solution of a single *realization* of the observations, where generally we assume that it is a realization of the *random* observable vector $Y$, since measurements are affected by random errors. As such it follows the the weighted least-squares *estimator* is given by:

$$
\hat{X}  = \mathrm{(A^T W A )^{-1} A^T W} Y
$$

This estimator has two important properties: it is *linear* and *unbiased*.

The linearity property is due to the fact that $\hat{X}$ is a linear function of the observables $Y$.

The unbiased property means that the expectation of $\hat{X}$ is equal to the true (but unknown) $\mathrm{x}$. This can be shown as follows:

$$
\mathbb{E}(\hat{X})  = \mathrm{(A^T W A )^{-1} A^T W} \mathbb{E}(Y) = \mathrm{(A^T W A )^{-1} A^T W Ax = x}
$$

This a very desirable property. It applies that if we would repeat the measurements many times to obtain a new estimate, the *average of the estimated* values would be equal to the truy values.