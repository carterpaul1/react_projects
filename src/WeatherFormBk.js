import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForecast from './WeatherForecast';
import './WeatherForm.css'; 

const apiKey = '73d4e3622b358090e5235cc0e0affca9';

const fetchData = async (zipCode, setForecast, setError) => {
  try {
    const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
      params: {
        zip: zipCode,
        appid: apiKey,
        units: 'metric',
      },
    });
    setForecast(forecastResponse.data);
    setError(null);
  } catch (err) {
    setError('Failed to fetch weather data. Please check the ZIP code and try again.');
    setForecast(null);
  }
};

const WeatherForm = () => {
  const [zipCode, setZipCode] = useState('');
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (zipCode) {
      fetchData(zipCode, setForecast, setError);
    }
  }, [zipCode]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zipCode) {
      fetchData(zipCode, setForecast, setError); // Call fetchData function
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="input" 
        />
        <button type="submit" className="button">Get Weather Forecast</button>
      </form>
      {error && <p>{error}</p>}
      {forecast && <WeatherForecast forecast={forecast} />}
    </div>
  );
};

export default WeatherForm;






