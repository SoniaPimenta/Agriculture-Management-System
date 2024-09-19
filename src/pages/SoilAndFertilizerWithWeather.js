import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import '../css/Weather.css';

const Weather = () => {
  const [city, setCity] = useState(''); // City name input by user
  const [weatherData, setWeatherData] = useState(null); // Holds the weather data
  const [soilType, setSoilType] = useState(''); // Soil type
  const [fertilizers, setFertilizers] = useState([]); // Fertilizer suggestions
  const API_KEY = '56423e0c1b17e786dab6b02691f65caa'; // Provided API key

  const fetchWeather = async () => {
    if (city) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeatherData(response.data);
        determineSoilAndFertilizers(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  const determineSoilAndFertilizers = (data) => {
    const temp = data.main.temp;
    const weatherCondition = data.weather[0].main.toLowerCase();

    // Simple logic for determining soil type based on temperature and weather condition
    if (temp > 30 && weatherCondition.includes('clear')) {
      setSoilType('Sandy Soil');
      setFertilizers(['Nitrogen Fertilizer', 'Potassium Fertilizer']);
    } else if (temp > 20 && weatherCondition.includes('rain')) {
      setSoilType('Clay Soil');
      setFertilizers(['Phosphorus Fertilizer', 'Organic Fertilizer']);
    } else {
      setSoilType('Loamy Soil');
      setFertilizers(['Balanced NPK Fertilizer']);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
    document.getElementById('weather-containerr').style.width = '700px';
  };

  // Graph data for analytics (dummy data for demo)
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Crop Growth (%)',
        data: [30, 45, 60, 75],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className='weather-wrapper'>

      <div id='weather-containerr' className="weather-container">
        <h2 className="header">Smart Farmer's Weather & Soil Guide</h2>

        <form onSubmit={handleSubmit} className="location-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit" className="btn">Get Weather</button>
          </div>
        </form>

        {weatherData && (
          <div className="weather-info">
            <div className="weather-display">
              <h3>{weatherData.name}, {weatherData.sys.country}</h3>
              <div className="temp">
                {Math.round(weatherData.main.temp)}°C
              </div>
              <div className="weather-icon">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>
              <p>{weatherData.weather[0].description}</p>
              <p>Wind: {weatherData.wind.speed} km/h</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
            </div>

            <div className="soil-fertilizer">
              <h4>Soil Type: {soilType}</h4>
              <h4>Recommended Fertilizers:</h4>
              <ul>
                {fertilizers.map((fertilizer, index) => (
                  <li key={index}>{fertilizer}</li>
                ))}
              </ul>
            </div>

            <div style={{width:'100%'}} className="chart-container">
              <Line data={chartData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
