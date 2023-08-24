#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jun 21 13:36:10 2023

@author: pmaresnasarre
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import expon
from scipy.stats import norm
from scipy.stats import kstest

#%% Functions

def ecdf(var):
    x = np.sort(var) # sort the values from small to large
    n = x.size # determine the number of datapoints
    y = np.arange(1, n+1) / n
    return [y, x]

#%% Plots

#overview

obs = [19.54, 9.12, 11.89, -0.29, 2.65, 3.63, 10.49, 3.61, 8.50, -5.25, 3.23, 
       0.88, -2.88, 7.53, 6.40, 5.16, -1.66, 10.63, 6.75, 3.50, 12.32, 32.67, 17.21]

plt.rcParams.update({'font.size': 12})

fig, ax = plt.subplots(1,2, figsize=(10,5), layout='constrained')

ax[0].hist(obs, density=True, edgecolor = 'cornflowerblue', 
           facecolor = 'lightskyblue', alpha = 0.6, bins = 8)
ax[0].set_xlabel('x')
ax[0].set_ylabel('pdf')
ax[0].grid()

ax[1].step(ecdf(obs)[1], ecdf(obs)[0], color = 'cornflowerblue')
ax[1].set_xlabel('x')
ax[1].set_ylabel('${P[X \leq x]}$')
ax[1].grid()

#normal distribution
q_norm=norm.ppf(ecdf(obs)[0], loc=5.17, scale=5.76)

#exponential distribution
q_expon=expon.ppf(ecdf(obs)[0], loc=-5.25, scale=10.42)

#QQplot
fig, ax=plt.subplots(figsize=(6,6))
ax.scatter(ecdf(obs)[1],q_norm, 40, 'cornflowerblue', label='N(5.17, 5.76)')
ax.scatter(ecdf(obs)[1],q_expon, 40, edgecolor = 'k', facecolor='w', label='Expon(-5.25, 10.42)')
ax.plot([-10,30], [-10,30], 'k')
ax.set_ylabel('Theoretical quantiles')
ax.set_xlabel('Empirical quantiles')
ax.grid()
ax.set_ylim([-10,30])
ax.set_xlim([-10,30])
ax.legend()

#cdfs
x = np.linspace(0.01, 0.99, 50)
cdf_norm=norm.ppf(x, loc=5.17, scale=5.76)
cdf_expon=expon.ppf(x, loc=-5.25, scale=10.42)

#Log-scale
fig, ax = plt.subplots(1,2, figsize=(10,5), layout='constrained')

ax[0].plot(cdf_norm, 1-x,'cornflowerblue', label='N(5.17, 5.76)')
ax[0].plot(cdf_expon, 1-x, 'k', label='Expon(-5.25, 10.42)')
ax[0].scatter(ecdf(obs)[1], 1-ecdf(obs)[0], 40, 'r', label = 'Observations')
ax[0].grid()
ax[0].legend()
ax[0].set_xlabel('x')
ax[0].set_ylabel('${P[X > x]}$')

ax[1].plot(cdf_norm, 1-x,'cornflowerblue', label='N(5.17, 5.76)')
ax[1].set_yscale('log')
ax[1].plot(cdf_expon, 1-x, 'k', label='Expon(-5.25, 10.42)')
ax[1].scatter(ecdf(obs)[1], 1-ecdf(obs)[0], 40, 'r', label = 'Observations')
ax[1].grid()
ax[1].legend()
ax[1].set_xlabel('x')
ax[1].set_ylabel('${P[X > x]}$')

#KS test

fig, ax = plt.subplots(1,1, figsize=(6,5), layout='constrained')

ax.step(ecdf(obs)[1], ecdf(obs)[0], color = 'cornflowerblue')
ax.plot(cdf_norm, x, color = 'k')
ax.set_xlabel('x')
ax.set_ylabel('${P[X \leq x]}$')
ax.grid()
ax.annotate('', xy=(3, 0.39), xytext=(2.94, 0.49), arrowprops=dict(arrowstyle='<->', ec = 'r'))
ax.annotate('Maximum distance', xy=(3, 0.39), xytext=(-8.75, 0.42), fontsize = 10, c ='r')


stat, pvalue = kstest(obs, cdf_norm)

