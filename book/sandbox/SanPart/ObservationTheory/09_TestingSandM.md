# Hypothesis testing for Sensing and Monitoring
Statistical hypothesis testing is applied for many applications and in different forms. Here, we will restrict ourselves to applications in observation theory with the following general form for the hypotheses:

$$
\begin{align*}
\mathcal{H}_0: \mathbb{E}(Y) &= \mathrm{Ax}; \; &\mathbb{D}(Y)=\Sigma_Y \\
\mathcal{H}_a: \mathbb{E}(Y) &= \mathrm{Ax + C\nabla} = \begin{bmatrix}\mathrm{A} & \mathrm{C}\end{bmatrix}\begin{bmatrix}\mathrm{x} \\ \nabla\end{bmatrix};\; &\mathbb{D}(Y)=\Sigma_Y
\end{align*}
$$

where $\nabla$ is a $q$-vector with extra parameters compared to the nominal model under $\mathcal{H}_0$, and $\mathrm{C}$ is the $m\times q$ matrix augmenting the design matrix.

### Examples 
Example for outlier
Example for linear trend versus second-order polynomial

***

## Testing procedure

### Step 1 is to apply BLUE for both the null and alternative hypothesis

Under $\mathcal{H}_0$ we obtain the estimator of $\mathrm{x}$ and the residuals as:

$$
\begin{align*}
\hat{X}&=(\mathrm{A}^T\Sigma_Y^{-1}\mathrm{A})^{-1}\mathrm{A}^T\Sigma_Y^{-1}Y \\
\hat{\epsilon} &= Y - \mathrm{A}\hat{X}
\end{align*}
$$

The residuals are important measure for the misfit between individual observations and the fitted model. Recall that BLUE provides us with the solution for $\mathrm{x}$ which minimizes the weighted squared norm of residuals $\hat{\epsilon}^T\Sigma_Y^{-1}\hat{\epsilon}$ (note that $\Sigma_Y=\Sigma_{\epsilon}$), see [Weighted least-squares estimation](03_wls), and it makes sense that this is a good measure for the discrepancy between data and model. This is especially clear if we consider (the common) case that $\Sigma_Y$ is a diagonal matrix with the variances $\sigma_i$ ($i=1,\ldots,m$) of the random errors on the diagonal, since then:

$$
\hat{\epsilon}^T\Sigma_Y^{-1}\hat{\epsilon} = \sum_{i=1}^m \frac{\epsilon^2_i}{\sigma^2_i}
$$

This is thus the sum of *squared residuals* (= estimated errors) divided by the variance of the random errors.

It can be shown that the distribution of the weighted squared norm of residuals is given by the central $\chi^2$-distribution:

$$
\hat{\epsilon}^T\Sigma_Y^{-1}\hat{\epsilon} \sim \chi^2 (m-n,0)
$$

with $m-n$ the redundancy (number of observations $m$ minus number of unknowns $n$). 

MMM
link to Chi2 distribution section

For the alternative hypothesis, the BLUE solution follows as:

$$
\begin{align*}
\begin{bmatrix}\hat{X}_a\\ \hat{\nabla} \end{bmatrix}&=(\begin{bmatrix}\mathrm{A} &\mathrm{C} \end{bmatrix}^T\Sigma_Y^{-1}\begin{bmatrix}\mathrm{A} &\mathrm{C} \end{bmatrix})^{-1}\begin{bmatrix}\mathrm{A} &\mathrm{C} \end{bmatrix}^T\Sigma_Y^{-1}Y \\
\hat{\epsilon}_a &= Y - \begin{bmatrix}\mathrm{A} &\mathrm{C} \end{bmatrix}\begin{bmatrix}\hat{X}_a\\ \hat{\nabla} \end{bmatrix}
\end{align*}
$$

where the subscript $_a$ is used to indicate that the solution is different from the one with the null hypothesis. Also, the corresponding weighted squared norm of residuals $\hat{\epsilon}_a^T\Sigma_Y^{-1}\hat{\epsilon}_a$ is to be computed.

### Step 2: apply test
As a test statistic to decide between $\mathcal{H}_0$ and $\mathcal{H}_a$ the difference between the weighted squared norms of residuals is used, which is known to have a Central $\chi^2$-distribution if $\mathcal{H}_0$ is true:

$$
T_q = \hat{\epsilon}^T\Sigma_Y^{-1}\hat{\epsilon}-\hat{\epsilon}_a^T\Sigma_Y^{-1}\hat{\epsilon}_a \sim \chi^2(q,0)
$$

where $q$ is equal to the number of additional parameters in $\mathcal{H}_a$.

We would reject $\mathcal{H}_0$ if:

$$
T_q = \hat{\epsilon}^T\Sigma_Y^{-1}\hat{\epsilon}-\hat{\epsilon}_a^T\Sigma_Y^{-1}\hat{\epsilon}_a > k_{\alpha}
$$

with $k_{\alpha}$ the threshold value based on a choice for the false alarm probability $\alpha$, see {numref}`chi2`

```{figure} ./figures/09_chi2.png
---
height: 250px
name: chi2
---
PDF of $\chi2$(q,0)-distribution with threshold value $k_{\alpha}$ based on chosen false alarm probability $\alpha$.
```

This test is known as the *Generalized Likelihood Ratio Test* (GLRT). It can be derived by using the the ratio of the likelihood functions for $\mathcal{H}_0$ and $\mathcal{H}_a$ (recall that the BLUE solution is equal to the maximum likelihood solution in our case since the data are assumed to be normally distributed). This is a logical choice since the purpose of our test is to decide whether $\mathcal{H}_0$ is sufficiently likely compared to $\mathcal{H}_a$. The derivation is beyond the scope of MUDE.

Important to mention is that this is the *most powerful* test: no other test statistic can be found that would result in a larger [detection power](betagamma) $\gamma$ for the same $\alpha$.

## Overall model test
Many options for the alternative hypothesis are possible, but instead of immediately testing the null hypothesis against a very specific alternative, it common to first apply the so-called *overall model test* (OMT): it is a test which just focuses on the validity of $\mathcal{H}_0$ (how well do data and model fit) without having a specific $\mathcal{H}_a$ in mind. This is identical to choosing the alternative hypothesis as follows:

$$
\mathcal{H}_a:\;\; \mathbb{E}(\underset{m\times 1}{Y})=\underset{m\times m}{\begin{bmatrix} \underset{m\times n}{\mathrm{A}} & \underset{m\times m-n}{\mathrm{C}}\end{bmatrix}}\underset{m\times 1}{\begin{bmatrix}\mathrm{x}\\\nabla\end{bmatrix}}
$$

Hence, $q=m-n$ and the matrix $\begin{bmatrix}\mathrm{A} & \mathrm{C}\end{bmatrix}$ becomes a square invertible matrix, such that the system becomes determined and the BLUE follows as (try to show yourself):

$$
\begin{bmatrix}\hat{X}_a \\ \hat{\nabla}\end{bmatrix} = \begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}^{-1}Y 
$$

```{admonition} Answer
:class: tip, dropdown

$$
\begin{align*}
\begin{bmatrix}\hat{X}_a \\ \hat{\nabla}\end{bmatrix} &= (\begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}^T\Sigma_Y^{-1} \begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix})^{-1}\begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}^T\Sigma_Y^{-1}Y \\
&= \begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}^{-1}\Sigma_Y \begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}^{-T}\begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}^T\Sigma_Y^{-1}Y \\
&= \begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}^{-1}Y 
\end{align*}
$$
```

From this follows that the residuals become zero:

$$
\hat{\epsilon}_a = Y- \begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}\hat{X} = Y - \begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}\begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}^{-1}Y = 0
$$

Hence, any alternative hypothesis for which the design matrix $\begin{bmatrix}\mathrm{A}&\mathrm{C}\end{bmatrix}$ is an $m\times m$ invertible matrix will result in residuals being equal to 0. This implies that any observed $\mathrm{y}$ will satisfy the alternative hypothesis, which can thus also be formulated as 

$$
\mathcal{H}_a:\;\; Y\in \mathbb{R}^m
$$

The OMT is obtained from the GLRT:

$$
T_{q=m-n} = \hat{\epsilon}^T\Sigma_Y^{-1}\hat{\epsilon} > k_{\alpha}
$$

since $\hat{\epsilon}_a = 0$.

## Estimation and testing procedure
If the OMT is accepted you are done and can present your estimation results, including precision and testing results. However, if the OMT is rejected, the next step would be to identify an alternative hypothesis that can be accepted. This might be an iterative procedure, since many options are possible for the alternative model.

The complete procedure is:
1. Define the nominal functional and stochastic model (under $\mathcal{H}_0$)
2. Apply BLUE 
3. Apply the overall model test (OMT)
4. If OMT accepted go to step 8; if OMT rejected go to step 5
5. Choose (another) specific alternative hypothesis
6. Apply generalized likelihood ratio test (GLRT) to decide whether the alternative hypothesis is indeed more likely
7. If alternative hypothesis accepted go to step 8; if rejected go back to step 5
8. Present estimates, precision and testing results

In some cases, you may immediately want to test between two competing models, for instance if you are interested in the height change of a point over time you may want to test a linear trend model (constant velocity) versus a model including a constant acceleration. In that case, the procedure would be:
1. Define the functional and stochastic models (under $\mathcal{H}_0$ and $\mathcal{H}_a$)
2. Apply BLUE for both models
3. Apply the generalized likelihood ratio test (GLRT)
4. Present estimates, precision and testing results for accepted model

