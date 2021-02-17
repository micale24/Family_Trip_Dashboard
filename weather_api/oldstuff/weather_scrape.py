# Dependencies and Setup
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import requests
import time
from scipy.stats import linregress
import csv
import json
# Import API key
from api_keys import weather_api_key
#Geo coordinates of Orlando, FL
FL_lat = 28.5383
FL_lng = -81.3792
lat = FL_lat
lon = FL_lng

i = 0
while i < 1:
    #Scraping the current weather data
    url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&appid={weather_api_key}"
    response =requests.get(url).json()
    main_FL_data = response
    for key, value in main_FL_data.items():
        if key == "main":
            FL_weather = value
    #Creating JSON for current weather data
    current_weather_json = json.dumps(FL_weather, sort_keys=True, indent=4)
    with open ('current_weather_data.json', 'w') as json_file:
        json.dump(current_weather_json, json_file)
    # print(current_weather_json)
    i+=1
    print("Loop completed.")



