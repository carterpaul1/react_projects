import React from 'react';

const WeatherItem = ({ item }) => {
  const tempCelsius = item.main.temp;
  const tempFahrenheit = (tempCelsius * 9/5) + 32;

  return (
    <tr>
      <td>{item.dt_txt}</td>
      <td>{tempFahrenheit.toFixed(2)} °F</td>
      <td>{item.weather[0].description}</td>
    </tr>
  );
};

export default WeatherItem;






