import React, { useState, useEffect } from 'react';
const YOUR_API_KEY = '56423e0c1b17e786dab6b02691f65caa'; // Provided API key


const WeatherTracker = ({ location }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (location) {
      // Fetch weather data based on location
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${YOUR_API_KEY}`)
        .then((res) => res.json())
        .then((data) => setWeather(data));
    }
  }, [location]);

  return (
    <div className="weather-tracker">
      {weather ? (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      ) : (
        <p>Enter location to get weather information</p>
      )}
    </div>
  );
};

export default WeatherTracker;
