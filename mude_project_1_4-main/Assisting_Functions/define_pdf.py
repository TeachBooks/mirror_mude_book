'''
Defines gumbel norm and expon pdf functions

'''

from scipy.stats import norm, expon
import numpy as np
# define your function here


def pdf_gumbel(x, alpha, beta):
    '''Return Gumbel PDF of random var x --> 𝑓(𝑥)=1/𝛽 * 𝑒^−(𝑧+𝑒^−𝑧), where 𝑧=(𝑥−𝛼)/𝛽'''
    z = (x - alpha)/beta
    pdf_of_x = 1 / beta * np.exp(-(z + np.exp(-z)))
    return pdf_of_x

def pdf_norm(x, mean, std):
    '''Return NORM PDF of random var x '''
    pdf_of_x_2 = norm.pdf(x, loc=mean, scale=std)
    return pdf_of_x_2
    
def pdf_expon(x, mean):
    '''Return EXPON PDF of random var x '''
    pdf_of_x_3 = expon.pdf(x, scale=mean)
    return pdf_of_x_3


'''but remember to import it in the notebook by adding it as follows:
from function_pdf import pdf, pdf_2
'''
