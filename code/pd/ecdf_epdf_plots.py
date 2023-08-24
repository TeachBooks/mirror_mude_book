#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Jun 30 14:21:12 2023

@author: pmaresnasarre
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import datetime
from math import ceil, trunc

data = pd.read_csv('Wind_Speed_1974_1975.csv', sep = ',')
data.iloc[:,0] = pd.to_datetime(data.iloc[:,0])

plt.rcParams.update({'font.size': 12})

#%% Timeseries plot

fig, axs=plt.subplots(1, 1)
axs.plot(data.iloc[:,0], data.iloc[:,2], 'k')
axs.set_xlim([datetime.datetime(1974, 9, 1, 0, 0), datetime.datetime(1975, 9, 1, 0, 0)])
axs.grid()
axs.set_xlabel('Date')
axs.set_ylabel('${W_s (m/s)}$')
fig.set_size_inches(12, 5)
fig.savefig('data_overview.png')


#%% ecdf
def ecdf(var):
    x = np.sort(var) # sort the values from small to large
    n = x.size # determine the number of datapoints
    y = np.arange(1, n+1) / n
    return [y, x]

ecdf_wind = ecdf(data.iloc[:,2])

fig, ax = plt.subplots(1,1, figsize=(7,5), layout='constrained')
ax.step(ecdf_wind[1], ecdf_wind[0], color = 'cornflowerblue')
ax.set_xlabel('${W_s}$ (m/s)')
ax.set_ylabel('${P[X \leq x]}$')
ax.grid()

fig.savefig('ecdf_wind.png')

#%% epdf
obs = data.iloc[:,2]

bin_size = 2

min_value = data.iloc[:,2].min()
max_value = data.iloc[:,2].max()

n_bins = ceil((max_value-min_value)/bin_size)
bin_edges = np.linspace(trunc(min_value), ceil(max_value), n_bins+1)

count = []
for i in range(len(bin_edges)-1):
    n = len(obs[(obs<bin_edges[i+1]) & (obs>bin_edges[i])])
    count.append(n)
    
freq = [k/len(obs) for k in count]
densities = [k/bin_size for k in freq]

fig, ax = plt.subplots(1,1, figsize=(7,5), layout='constrained')
ax.bar((bin_edges[1:] + bin_edges[:-1]) * .5, densities, width=(bin_edges[1] - bin_edges[0]), 
       edgecolor = 'cornflowerblue', color = 'lightskyblue', alpha = 0.6)
ax.set_xlabel('${W_s}$ (m/s)')
ax.set_ylabel('pdf')
ax.grid()

fig.savefig('epdf_wind.png')


