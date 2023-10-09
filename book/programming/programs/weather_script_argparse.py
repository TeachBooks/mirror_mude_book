import argparse
import pandas as pd
import matplotlib.pyplot as plt

url = "https://surfdrive.surf.nl/files/index.php/s/fJrmp5XdXF02X4c/download"

# read the data skipping comment lines
weather = pd.read_csv(url,comment='#')

parser = argparse.ArgumentParser()
# set start and end time
parser.add_argument('-s', '--start', type=str, default="1/1/2019", help="Start time")
parser.add_argument('-e', '--end', type=str, default="1/1/2021", help="End time")
parser.add_argument('-o', '--output', type=str, default="spring_in_tapiola.png", help="Output filename")

args = parser.parse_args()

start_date = pd.to_datetime(args.start,dayfirst=True)
end_date = pd.to_datetime(args.end,dayfirst=True)
file_name = args.output

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
fig.savefig(file_name)
