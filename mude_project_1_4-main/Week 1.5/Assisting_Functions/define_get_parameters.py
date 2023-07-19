'''
Returns the parameters for Gumbel and Expon distribution.
'''

# import any packages that are needed in your function here:
import numpy as np
# define your function here


def get_parameters_gumbel(mean, standard_dev):
    '''Return parameters of the Gumbel distribution, calculated from moments.'''
    # fill in the the function to find parameter_1, parameter_2
    gamma = 0.57721
    parameter_2 = np.sqrt((standard_dev**2 * 6)/np.pi**2)
    parameter_1 = mean + parameter_2 * gamma
    parameters = [parameter_1, parameter_2]
    return parameters


def get_parameters_exp(mean):
    '''Return parameters of the exponential distribution, calculated from moments.'''
    lamda = 1/mean
    return lamda

'''
If you would like to define a second distribution, you can use this:

def get_parameters_2(...

but remember to import it in the notebook by adding it as follows:
from function_get_parameters import get_parameters, get_parameters_2
'''
