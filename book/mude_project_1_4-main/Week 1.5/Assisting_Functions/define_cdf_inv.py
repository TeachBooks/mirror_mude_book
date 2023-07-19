'''
Defines CDF INV for gumbel norm and expon distribution
'''

# import any packages that are needed in your function here:
from scipy.stats import norm, expon
# define your function here


def cdf_inv(prob, parameter_1, parameter_2):
    '''Return random var value x with prob P[X<x] using inverse CDF.'''
    return x

'''
If you would like to define a second distribution, you can use this:'''

def cdf_inv_norm(x, mean, std):
    '''Return random var value x with prob P[X<x] using inverse NORM CDF.'''
    x_2 = norm.ppf (x, loc=mean, scale=std)
    return x_2

def cdf_inv_expon(x, mean):
    '''Return random var value x with prob P[X<x] using inverse EXPON CDF.'''
    x_3= expon.ppf(x, scale=mean)
    return x_3

'''but remember to import it in the notebook by adding it as follows:
from function_cdf import cdf, cdf_inv_2
'''
