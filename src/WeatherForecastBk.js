import React from 'react';
import WeatherItem from './WeatherItem';

const WeatherForecast = ({ forecast }) => {
  // Organize forecast data by day
  const organizedForecast = {};
  forecast.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0]; // Extract date from dt_txt
    if (!organizedForecast[date]) {
      organizedForecast[date] = [];
    }
    organizedForecast[date].push(item);
  });

  return (
    <div>
      <h2>Weather Forecast</h2>
      {Object.keys(organizedForecast).map(date => (
        <div key={date}>
          <h3>{new Date(date).toLocaleDateString()}</h3>
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Date and Time</th>
                <th>Temperature (°F)</th>
                <th>Weather Description</th>
              </tr>
            </thead>
            <tbody>
              {organizedForecast[date].map((item, index) => (
                <WeatherItem key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;




