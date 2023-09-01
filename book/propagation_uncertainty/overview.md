(01_errorprop)=
# Propagation of Uncertainty

In engineering and sciences we often work with functions of random variables, since when estimating or modelling something, the output is a function of the random input variables, see {numref}`functions`

```{figure} figures/01_Functions.png
---
height: 150px
name: functions
---
Output of a model $X$ is function of random input $Y$.
```

Some simple examples are:
* conversion of temperature measured in degrees Celsius to temperature in degrees Fahrenheit: $T_f = q(T_c)=\frac{9}{5}T_c+32$
* taking the mean of $m$ repeated measurements $Y_i$: $\hat{X}=q(Y_1,\ldots,Y_m)=\frac{1}{m}\sum_{i=1}^m Y_i$
* subsurface temperature $T_z$ as a function of depth $Z$ and surface temperature $T_0$ and known $a$: $T_z = T_0 + aZ$
* wind loading $F$ on a building as function of area of building face $A$, wind pressure $P$, drag coefficient $C$: $F = A\cdot P\cdot C$
* Evaporation $Q$ using Bowen Ratio Energy Balance as function of the net radiation $R$, ground heat flux $G$, bowen ratio $B$: $Q =q(R,G,B) =\frac{R-G}{1-B}$

{numref}`temp` shows an example of the distribution of the average July temperature in a city, both in degrees Celsius and degrees Fahrenheit. Due to the change of units, the PDF is transformed, the mean is shifted and the variance changed.

```{figure} figures/01_Temp.png
---
height: 300px
name: temp
---
Distribution of temperature in degrees Celsius and degrees Fahrenheit.
```
The question we are interested in is: **how does the statistical uncertainty in input data propagate in the output variables?**