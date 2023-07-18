# Empirical Distributions

As you can imagine, it is possible to define a PDF and a CDF based on observations. Let's see it with an example dataset of wind speeds close to Schiphold Airport. The figure below shows the dataset which spans for 1 year.


```{figure} /sandbox/continuous/figures/data_overview.png
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

```{figure} /sandbox/continuous/figures/ecdf_wind.png
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

```{figure} /sandbox/continuous/figures/epdf_wind.png
---
scale: 75%
name: epdf

---
Empirical probability density function of the wind speed data.
```

[^density]: Happily, in most coding languages, the algorithm to compute the pdf is already implemented and we just need to plot a histogram selecting the option to show us the densities.