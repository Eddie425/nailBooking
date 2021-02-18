from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
# from flask_cors import CORS #comment this on deployment
from api.UserApi import UserApi
import quickstart

app = Flask(__name__, static_url_path='', static_folder='nailBooking_FE/dist')
# CORS(app) #comment this on deployment
api = Api(app)


@app.route("/", defaults={'path': ''})
def serve(path):
    print("call index.html")
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/calendarEvent")
def get_calendarEvent():
    print("call calendarEvent")
    events = quickstart.get_event()
    event_time_array = []
    for event in events:
        start = event['start'].get('dateTime', event['start'].get('date'))
        event_time_array.append("Honda")
    return event_time_array


api.add_resource(UserApi, '/flask/hello')
