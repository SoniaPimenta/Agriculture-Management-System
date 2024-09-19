// // import React from "react";

// // const Forecast= ()=> {
// // 	return(
// //         // <div class="login-container">
// //         //      <div class="login-card">
// //         //         <div class="login-left">
// //         //         <img src="C:\Users\Administrator\Desktop\hackathon\code-o-fiesta\src\assets\majdoor.jpg" alt="Logo" className="logo" />
// //         //          </div>
// //         //          <div class="login-right">
// //         //         <div class="text">Welcome !</div>
// //         //         <form className="login-form"></form>
// //         //             <div class="input-group">
// //         //                 <label for="username">Username</label>
// //         //                 <input type="text" id="username" placeholder="Enter your username" />
// //         //             </div>
// //         //             <div class="input-group">
// //         //                 <label for="password">Password</label>
// //         //                 <input type="password" id="password" placeholder="Enter your password" />
// //         //             </div>
// //         //             <div class="forgot-password">
// //         //                 <a href="#">Forgot Password?</a>
// //         //             </div>
// //         //             <button type="submit" class="btn">Login</button>
// //         //             </div>
// //         //             </div>
// //         //             </div>
// //         <div className="wrapper">
// //     <form action="">
// //         <h1>Login</h1>
// //         <div className="input-box">
// //             <input type="text" placeholder="Username" required />
// //             <i className='bx bxs-user'></i>
// //         </div>
// //         <div className="input-box">
// //             <input type="password" placeholder="Password" required />
// //             <i className='bx bxs-lock-alt'></i>
// //         </div>
// //         <div className="remember-forgot">
// //             <label>
// //                 <input type="checkbox" />Remember Me
// //             </label>
// //             <a href="#">Forgot Password</a>
// //         </div>
// //         <button type="submit" className="btn">Login</buttaon>
// //         <div className="register-link">
// //             <p>Don't have an account? <a href="#">Register</a></p>
// //         </div>
// //     </form>
// // </div>
// //     )
// // }

// // export default Forecast;

import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("New York"); // Default location

  const API_KEY = "56423e0c1b17e786dab6b02691f65caa"; // Replace with your OpenWeatherMap API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=56423e0c1b17e786dab6b02691f65caa&units=metric`;

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="weather-wrapper">
      <h2>Weather Forecast for Crops</h2>
      <div className="input-box">
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter your location"
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>

      {weatherData ? (
        <div className="weather-info">
          <h3>{weatherData.name}</h3>
          {/* Check if weatherData.main exists before accessing its properties */}
          {weatherData.main && (
            <>
              <p>Temperature: {weatherData.main.temp} °C</p>
              <p>Humidity: {weatherData.main.humidity} %</p>
            </>
          )}
          {/* Check if weatherData.wind exists */}
          {weatherData.wind && <p>Wind Speed: {weatherData.wind.speed} m/s</p>}
          {/* Check if weatherData.weather array exists and has data */}
          {weatherData.weather && weatherData.weather[0] && (
            <p>Condition: {weatherData.weather[0].description}</p>
          )}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherForecast;


















import React, { useState } from 'react';
import axios from 'axios';
import '../css/Weather.css';

const Weather = () => {
  const [city, setCity] = useState(''); // City name input by user
  const [weatherData, setWeatherData] = useState(null); // Holds the weather data
  const API_KEY = '56423e0c1b17e786dab6b02691f65caa'; // Provided API key

  const fetchWeather = async () => {
    if (city) {
      try {
        // Fetching the current weather based on the city name
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeatherData(response.data); // Store the weather data in state
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    fetchWeather(); // Fetch weather data for the entered city
  };

  return (
    <div className="weather-container">
      <h2>Weather Forecast</h2>

      <form onSubmit={handleSubmit} className="location-form">
        <div>
          <input
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)} // Update the city state on input change
          />
        </div>
        <button type="submit">Get Weather</button>
      </form>

      {/* If weather data exists, display it */}
      {weatherData && (
        <div className="weather-display">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <div className="temp">{Math.round(weatherData.main.temp)}°C</div>
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
      )}
    </div>
  );
};

export default Weather;
