
# Return Period & Design Life

In the previous sections,the concept of Return Period ($RT$) and the first sampling technique for extreme observations, Block Maxima, were introduced. Here, $RT$ will be extended to cover the concepts related to the design life in the context of Block Maxima sampling technique.

If we go to guidelines and recommendations, there are four key concepts to parameterize safety in the design phase:
- Probability of failure in one year ($p_{f,y}$).
- Return period ($RT$), usually given in years. According to the previous definition, $RT = 1/p_{f,y}$.
- Design life ($DL$): lifetime of the infrastructure.
- Probability of failure in the design life of the structure ($p_{f,DL}$).

We have already seen $RT$ and $p_{f,y}$. Using Block Maxima with a time block = 1 year (called Yearly Maxima), we can fit a GEV distribution and obtain the non-exceedance yearly probabilities of the desired return levels. However, **how can we obtain the exceedance probability along the design life?**

## Deriving the probability of failure along the design life
We already saw that extremes could be assimilated as a Bernoulli process: for each year (trial), we check if the observed value exceeds our design value (success) or not (failure). Thus, the number of exceedances over a design value (successes) in a given number of years (trials) will follow the Binomial distribution if each trial is independent.

Let's calculate the probability of observing an event $z_0$ higher than the design value $z_q$ at least once in $DL$ years ($p_{f,DL}$). 

First, we calculate the probability of not failing along $DL$ applying the Binomial distribution as

$
p_X(0) = P[X=0|DL, p_{f,y}] = \binom{DL}{0}p_{f,y}^0(1-p_{f,y})^{DL-0} = (1-p_{f,y})^{DL} $

The probability of failing at least once in $DL$ can be computed as $1 - p_X(0)$ (1 - no failure), so

$
p_{f,DL} = 1 - p_X(0) = 1 - (1-p_{f,y})^{DL} 
$

Applying $RT = 1/p_{f,y}$, we can rewrite $RT$ as function of $p_{f,DL}$.

$
p_{f,y} = 1 - (1 - p_{f,DL})^{1/DL} \\[10pt]
$

$
RT = 1/p_{f,y} = \frac{1}{1 - (1 - p_{f,DL})^{1/DL}}
$

And now you can compute the design $RT$ based on the $DL$ and $p_{f,DL}$ recommended in design guidelines!