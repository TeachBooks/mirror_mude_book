
# Goodness of fit

In the previous sections you have fitted a continuous distribution to your data... you can choose several. Which one is the best model? Answer: GOF.

## Visual inspection



```{figure} ../figures/EVA/Threshold_DI.png

---

---
DI por wave data.
```



## Let's code it!

Pseudo code is presented. Note that here the first element in a vector corresponds to index 1.

    read observations

    #define parameters
    dl = 48 #in hours
    th = linspace(min_threshold, max_threshold, step) #range_thresholds

    for i in length(th):
        excesses = find_peaks(observations, threshold = th[i], distance = dl) - th[i]
        for j in length(years):
            n_excesses[j] = count(excesses[j])
        e_mean[i] = mean(n_excesses)
        var_mean[i] = var(n_excesses)
    
    plot(x = th, y = e_mean/var_mean)


[^cunnane]: Cunnane (1979). A note on the Poisson assumption in partial duration series models. *Water Resources Research*, 15 (2), 489-494.

[^poisson]: Don't you remember it? Go back to our section in Poisson processes!