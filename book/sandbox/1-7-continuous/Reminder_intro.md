
# Introduction to continuous distributions

In this section, a reminder on the basic concepts of probabily theory is given focusing on the following concepts:
- Random variable,
- Probability density function (PDF),
- Cumulative distribution function (CDF).
- Empirical distributions.

## Some basic concepts

Fundamental probability concepts are a pre-requisite for this course. While we try to explain key concepts throughout the course materials, you should refer to an appropriate textbook if something is unclear, or if you desire further explanation or mathematical proofs. You have also available the [online course](https://tudelft-citg.github.io/learn-probability/intro_in_toc.html) we prepared for you.

The discussion about what probability is, as well as the interpretation of what it means, has been going on for centuries, and we won’t cover it here. Lukcily, most modern perspectives on probability are compatible and can be traced back to a few key fundamental concepts, known as the axioms of probability. These three axioms are summarized here:
1. The probability of any event is $[0,1]$.
2. The set of all possible outomes has probability 1.0.
3. If two events are mutually exclusive, the probability of both events (the union) is the sum of their probabilities: $P[A \cup B]=P(A)+P(B)$

While they may seem simple, these axioms are actually precise mathematical statements that provide the basis for a number of theorems and proofs which allow us to apply probability theory to a wide range of applications.

## Random Variable

From a previous course on probability and statistics you probably remember the use of Venn diagrams to aid our understanding of arithmetic involving probability. The box represented the sample space, with circles (and their relative size) representing various events and their probability of occurrence. The concept of a random variable is nothing more than a mapping of this sample space to a number line, which allows us to combine probability theory with calculus. We use a capital letter to denote a random variable and realizations of that random variable are described with a lower case letter. For example, consider a discrete random variable, $X$, which can take 1, 2 or 3 as possible outcomes. We can write the probability of each event mathematically as:

$
p_X(x_i)=P(X=x_i)
$

Where $i = 1,2,3$ and $P$ is mathematical notation for describing the event in the parenthesis. The function describes the probability for all outcomes of $P$ (i.e., the sample space), which, as implied by the axioms, should sum to 1.

This simple example is actually a discrete random variable, because the values of $X$ take on a finite number of values. For most of this course, however, we will work with continuous random variables, which can take on an infinite set of values. A key characteristic of continuous variables is that the probaility of an event must be defined over an interval. For example, we might be interested in the probability that $X$ takes a value between 3 and 4, which we will see in the next sections.

The mapping of a sample space to a number line combined with a (mathematical) specification of probability describes how probability is distributed across all events in the sample space. For this reason we use the term *probability distribution* to describe the mathematical functions defining probability for outcomes of a random variable, regardless of whether it is discrete or continous.

## Probability Density Function (PDF)

To mathematically describe the distribution of probability for a continuous random variable, we define the probability density function (PDF) of $X$ as $f_X(x)$, such that

$
f_X(x)dx = P(x < X \leq x + dx)
$

To qualify as a probability distribution, the function must satisfy the conditions $f_X(x) \geq 0$ and $\int_{-\infty}^{+\infty}f_X(x)dx =1$, which can be related to the axioms. Note that in this case we use lower case $x$ as the argument of the PDF, and upper case $X$ denotes the random variable. Similarly, the function $f_Y(u)$ describes the PDF of the random variable $Y$.

## Cumulative Distribution Function (CDF)

It’s important to realize that while the PDF describes the distribution of probability across all values of the random variable, probability density is not equivalent to probability. The density allows us to quantify the probability of a certain interval of the continuous random variable, through integration. In the equation below, the mathamtical relationship between the CDF (denoted here as $F(x)$) and the PDF (denoted as $f(x)$) is shown.

$
F(x) = \int_{-\infty}^{x}f(x)dx
$

The definition of the CDF includes an integral that begins at negative infinity and continues to a specific value, $x$, which defines the interval over which the probability is computing. In other words, **the CDF gives the probability that the random variable 
$X$ has a value less than $x$**.

It should be easy to see from the definition of the CDF that the probability of observing an exact value of a continuous random variable is exactly zero. This is an important observation, and also an important characteristic that separates continuous and discrete random variables.

## Empirical distributions

As you can imagine, it is possible to define a PDF and a CDF based on observations. Let's see it with an example dataset of wind speeds close to Schiphold Airport. The figure below shows the dataset which spans for 1 year.


```{figure} /sandbox/1-7-continuous/figures/data_overview.png
---
scale: 100%
name: data_wind

---
Time series of wind speed close to Schiphol Airport.
```

Let's start computing the empirical CDF. We need to assign to each observation a non-exceedance probability. To do so, we just need to sort to observations and compute the non-exceedance probabilities using the ranks. This is illustrated below with pseudo-code.

    read observations

    #sort the observations in ascending order
    x = sort(observations, order=ascending)

    #calculate the non-exceedance probabilities
    length = len(x)
    non_exc_prob = range(from=1, to=length+1, by=1)/length

    #plot ecdf
    plot(x, non_exc_prob)

Using the above algorithm, the following figure is obtained. Note that empirical CDFs are usually plotted using a step plot.

```{figure} /sandbox/1-7-continuous/figures/ecdf_wind.png
---
scale: 75%
name: ecdf

---
Empirical cumulative distribution function of the wind speed data.
```

It can be useful to also visualize the empirical PDF. As mentioned above, the PDF is the derivative of the CDF, leading to the following equation.

$
f(x) = F'(x) = \lim_{\Delta x \to 0} \frac{F(x+\Delta x)-F(x)}{\Delta x}
$

Thus, we can compute the empirical PDF assuming a bin size. To do so, we need to count the number of observations in each bin and calculate the relative frequency of each bin by dividing that count with the total number of observations. The density will be then those relative frequencies divided by the bin size. This process is illustrated with the following pseudo-code [^density].


    read observations

    #Assume the bin size
    bin_size = 2

    #Calculate the number of bins and the bin edges given the bin size
    min_value = min(observations)
    max_value = max(observations)

    n_bins = (max_value-min_value)/bin_size 
    bin_edges = linspace(trunc(min_value), ceil(max_value), n_bins+1)

    #Count the number of observations in each interval
    count = []
    for in in range(len(bin_edges)-1):
        n = len(observations>bin_edges[i] and observations<bin_edges[i+1])
        count.append(n)

    #Compute relative frequencies
    freq = count/len(observations)

    #Compute densities
    densities = freq/bin_size

    #plot epdf
    mid_points = (bin_edges[1:] + bin_edges[:-1]) * 0.5
    bar(mid_points, densities, width=bin_size)

Using the above algorithm, the following figure is obtained. We can see that most of the density is concentrated between 2 and 9 m/s.

```{figure} /sandbox/1-7-continuous/figures/epdf_wind.png
---
scale: 75%
name: epdf

---
Empirical probability density function of the wind speed data.
```

[^density]: Happily, in most coding languages, the algorithm to compute the pdf is already implemented and we just need to plot a histogram selecting the option to show us the densities.