from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load environment variables from .env file
load_dotenv()
API_KEY = os.getenv('OPENWEATHER_API_KEY')

@app.route('/forecast', methods=['GET'])
def get_forecast():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is required'}), 400

    # Fetch weather data from OpenWeatherMap
    url = f'http://api.openweathermap.org/data/2.5/forecast/daily?q={city}&cnt=7&appid={API_KEY}&units=metric'
    response = requests.get(url)

    if response.status_code == 401:
        return jsonify({'error': 'Unauthorized: Check your API key'}), 401

    if response.status_code != 200:
        return jsonify({'error': 'Error fetching data from OpenWeatherMap'}), response.status_code

    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
