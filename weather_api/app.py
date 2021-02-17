# import necessary libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/index.html")
def logo():
    return render_template("index.html")

@app.route("/generic.html")
def ride():
    return render_template("generic.html")



# # Query the database and send the jsonified results
# , methods=["GET", "POST"]
@app.route("/landing.html")
def landing():

#     # Dependencies and Setup
#     # import matplotlib.pyplot as plt
#     # import pandas as pd
#     # import numpy as np
#     import requests
#     import time
#     # from scipy.stats import linregress
#     # import csv
#     import json
#     # Import API key
#     from api_keys import weather_api_key
#     #Geo coordinates of Orlando, FL
#     FL_lat = 28.5383
#     FL_lng = -81.3792
#     lat = FL_lat
#     lon = FL_lng

#     i = 0
#     while i < 1:
#         #Scraping the current weather data
#         url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&appid={weather_api_key}"
#         response =requests.get(url).json()
#         main_FL_data = response
#         for key, value in main_FL_data.items():
#             if key == "main":
#                 FL_weather = value
#         #Creating JSON for current weather data
#         current_weather_json = json.dumps(FL_weather, sort_keys=True, indent=4)
#         with open ('current_weather_data.json', 'w') as json_file:
#             json.dump(current_weather_json, json_file)
#         # print(current_weather_json)
#         i+=1
#         print("Loop completed.")
   
    return render_template("landing.html")

@app.route("/current_weather_data.json")
def weather():
    
    return render_template("landing.html")


@app.route('/background_process')
def backgroiund_process():
    # Dependencies and Setup
    # import matplotlib.pyplot as plt
    # import pandas as pd
    # import numpy as np
    import requests
    import time
    # from scipy.stats import linregress
    # import csv
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

        # weather_status = json.load('current_weather_data.json')
        print(current_weather_json)
        i+=1
        print("Loop completed.")
    lang= request.args.get('proglang')
    if str(lang).lower() == 'y':
        return jsonify(result = current_weather_json)
    else: 
        return jsonify(result= 'You are a rebel, I like it.  Enjoy!')


@app.route("/disney_MLpredictions.json")

def MLrides():
    # import json
    # rides_json = json.loads('disney_MLpredictions.json')
    # print(rides_json)
    # lang= request.args.get('proglang')
    # if str(lang) == '1/1/2022':
    #     return jsonify(result = current_weather_json)
    # else: 
    #     return jsonify(result= 'You are a rebel, I like it.  Enjoy!')
    
    return render_template("generic.html")    

			
		
# @app.route("/")
# def pals():
    

#     return jsonify(pet_data)


if __name__ == "__main__":
    app.run(debug=False)
