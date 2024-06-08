import sys
import pandas as pd
import matplotlib.pyplot as plt

url = "https://surfdrive.surf.nl/files/index.php/s/fJrmp5XdXF02X4c/download"

# read the data skipping comment lines
weather = pd.read_csv(url,comment='#')

# set start and end time
start_date = pd.to_datetime(sys.argv[1],dayfirst=True)
end_date = pd.to_datetime(sys.argv[2],dayfirst=True)

# preprocess the data
weather['Local time'] = pd.to_datetime(weather['Local time'],dayfirst=True)
weather= weather[weather['Local time'].between(start_date,end_date)]

# create a plot
fig, ax = plt.subplots()
ax.plot(weather['Local time'], weather['T'])
# label the axes
ax.set_xlabel("Date of observation")
ax.set_ylabel("Temperature in Celsius")
ax.set_title("Temperature Observations")
# adjust the date labels, so that they look nicer
fig.autofmt_xdate()

# save the figure
fig.savefig('weather.png')