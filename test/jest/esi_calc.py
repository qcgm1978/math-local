#! /usr/bin/env python

import numpy as np
import pandas as pd
from PyPDF2 import PdfFileReader

# -----------------------------------------------------------------------------

def esi_calc(xe, x, w=0.57):
    """ The earth similar index.
    Parameters
    ----------
    x  : int
        Parameter value of the exoplanet
    xe : int
        Reference value (planet earth)
    w  : int
        Weighted value 

    Return
    ------
    esi : earth similarity index
    """

    esi = (1 - np.abs((xe - x)/(xe + x))**w

    return(esi)

# -----------------------------------------------------------------------------

def scrape_pdf(file):
    '''
    Scrapes TESS *dvr.pdf files to get the characteristics
    of potential planet candidates.
    
    Parameters
    ----------
    file : str
        The path to the TESS dvr.pdf file.
    
    Returns
    -------
    df : dataframe
        A dataframe containing each planet candidate's 
        characteristics (planet number, temperature, 
        stellar flux and radius).
    '''
    
    # Find and read the planet summary page
    with open(file, 'rb') as f:
        reader = PdfFileReader(f)
        page = 0
        contents = ['']
        while contents[0] != '1SUMMARY':
            contents = reader.getPage(page).extractText().split('\n')
            page += 1

    # Gather each planet candidate's characteristics
    n_planets = int(contents[-15])
    candidate = []
    temps = []
    fluxes = []
    radii = []
    for i in np.arange(n_planets):
        candidate.append(contents[-15-(13*i)])
        temps.append(contents[-5-(13*i)])
        fluxes.append(contents[-6-(13*i)])
        radii.append(contents[-7-(13*i)])

    # Put this planet info into a dataframe
    df = pd.DataFrame({'planet_n':candidate, 'temp':temps,
                       'flux':fluxes, 'radius':radii})
    df = df.iloc[::-1].reset_index(drop=True)

    return df
