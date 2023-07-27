'''
This *.py file is for the MUDE week 1.3 Project. For now you should
only use it to define functions. Do not carry out any calculations
in this file (use a notebook instead). Later in MUDE you will learn
more about how to use *.py files (the 'Modules' workshop).

For now, you should write one function per *.py file, and each file
should have two parts:
1. import packages needed in your function
2. define your function
'''

# import any packages that are needed in your function here:
import numpy as np
from scipy.stats import expon, norm
# define your function here

def ecdf(var):
    x = np.sort(var)
    n = x.size
    f = np.arange(1, n+1)/n
    return x, f

'''but remember to import it in the notebook by adding it as follows:
from function_cdf import cdf, cdf_2
'''

