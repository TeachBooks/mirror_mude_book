
# Return Period

The Return Period ($RT$) is a widely used concept in guidelines and recommendations in the Engineering and Geosciences field to parameterize the safety level that a given structure or intervention needs to fulfill. Structures are designed to withstand external loadings (e.g.: floods or wave storms) whose distribution function is quantified using Extreme Value Analysis. The magnitude of the extreme event that the structure needs to withstand is then determined according to a given $RT$.

## Concept of return period

In short, $RT$ is the expected time between two exceedances of extreme events. This is, if I have a river discharge $q = 100 m^3/s$ with a $RT = 5 \ years$, it means that, on average, I will observe river discharges which exceed $100 m^3/s$ each 5 years.

**But how can I calculate it? Let's derive it!**

We want to estimate the time, on average, at which an event higher than a given value or threshold (design value, $z_q$) occurs, and we know that the exceedance probability is $P[X>z_q]=p$. We will assume that the process is stationary, so $p$ remains constant.

So, for each time unit (trial), we check if the observed value exceeds our design value (success) or not (failure). Does it ring the bell? [**It's a Bernoulli process!**](Bernoulli)

The probability that an event $z_0$ higher that $z_q$ occurs at a generic year $t$ is calculated as follows. We don't exceed the threshold in $t-1$ trials, so we have to multiply by $(1-p)(1-p)...$ $t-1$ times. We exceed the design value at time $t$, so we multiply by $p$. Note that we are assuming that each trial is independent, so exceeding the threshold in time $t$ is not dependent on the previous trials.

$
f(t) = P[z_0 \ at \ t] = (1-p)(1-p)...(1-p)p = (1-p)^{t-1}p
$

The obtained equation is a Geometric distribution which models the number of trials up to the first success. If we calculate the expectation of such distribution (the expected number of trials until we exceed the design value), we obtain the definition of return period

$
RT(t) = 1/p
$

So we have to wait 1/p times before the next occurrence of the extreme event.


