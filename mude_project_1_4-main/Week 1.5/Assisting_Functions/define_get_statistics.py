'''
Returns the mean, std , covariance and correlation coeff for 2 datasets.
'''

# import any packages that are needed in your function here:

import numpy as np
from scipy.stats.stats import pearsonr

# define your function here


def get_statistics(dataset_1, dataset_2):
    '''Return relevant statistics of two datasets.'''
    
    mean_1 = np.mean(dataset_1)
    mean_2 = np.mean(dataset_2)
    std_dev_1 = np.std(dataset_1)
    std_dev_2 = np.std(dataset_2)
    covariance = np.cov(dataset_1, dataset_2)[0, 1]
    correlatioon_coeff = pearsonr(dataset_1, dataset_2)[0]
    
    '''The line below specifies 6 values that must be returned by the function,
    but you may change the return variable format as needed, for example,
    if you wish to return a list of the mean values, rather than individual 
    variables.'''
    return mean_1, mean_2, std_dev_1, std_dev_2, covariance, correlation_coeff
