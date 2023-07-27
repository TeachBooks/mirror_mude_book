from Assisting_Functions.z_calculator import *

def calculate_rho_gas(p, temp, comp, y):
    ''' rho = Mp/Z(p)RT where M = sum(Miyi)''' 
    R = 8.1345e-2 # J/K/mol
    M = 0
    
    # add your code here
    for i in range(len(comp)):
        M += props(comp[i], 'Mw') * y[i]
    z = vapour_compress(p, temp, y, comp)[0]
    
    return M * p / (z * R * temp)
   
def calculate_poro(p, phi0, p0):
    
    # add your code here
    cr = 1e-5

    return phi0 * (1 + cr * (p - p0))

def calculate_dphi_drho(p, t, comp, y, phi0, p0):
    h = 1e-4
    
    # add your code here
    dp = - h
    
    phi2 = calculate_poro(p + h, phi0, p0)
    phi1 = calculate_poro(p, phi0, p0)
    
    rho2 = calculate_rho_gas(p + h, t, comp, y)
    rho1 = calculate_rho_gas(p, t, comp, y)
    
    dphi_drho = (1/dp) * (phi2 * rho2 - phi1 * rho1)
    
    return dphi_drho