import React from 'react';
import './App.css';
import WeatherForm from './WeatherForm';

function App() {
  const cityId = '4776024'; // Newport News, Virginia

  return (
    <div className="App">
      <div className="App-header">
        <img src="ECPI-Seal.png" alt="ECPI-Seal" />
      </div>
	  <div>
      <h1>Every Three Hour forecast for Weather</h1>
	  <h1>The weather forecast is being pulled through an API Call to openWeathermap.com</h1>
      <WeatherForm />
    </div>
	</div>
  );
}

export default App;



