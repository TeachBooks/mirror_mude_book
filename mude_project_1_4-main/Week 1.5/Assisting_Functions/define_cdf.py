'''
defines CDF for gumbel norm and expon distributions
'''

# import any packages that are needed in your function here:
import numpy as np
from scipy.stats import expon, norm
# define your function here


def cdf_gumbel(x, alpha, beta):
    '''Return Gumbel CDF of random var x as function of alpha and beta --> 𝐹(𝑥)=𝑒^−𝑒^−𝑧'''
    sort = np.sort(x)
    z = (sort - alpha) / beta
    cdf_of_x = np.exp(- np.exp(-z))
    return cdf_of_x

def cdf_norm(x, mean, std):
    ''' Return Normal CDF of random var x as function of mean and std'''
    cdf_of_x_2 = norm.cdf(x, loc=mean, scale=std)
    return cdf_of_x_2

def cdf_expon(x, mean):
    '''Return Exponential CDF of random var x as function of mean --> 𝐹(𝑥)=1-𝑒^(−𝜆𝑥)'''
    cdf_of_x3 = expon.cdf(x, scale=mean)
    return cdf_of_x3


'''but remember to import it in the notebook by adding it as follows:
from function_cdf import cdf, cdf_2
'''

