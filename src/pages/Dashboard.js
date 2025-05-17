import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const gotoweather = () => navigate('/weather');
  const gotomarket = () => navigate('/Marketplace');
  const gotoCroptracker = () => navigate('/CropTracker');
  const gotoGovernmentSchemes = () => navigate('/GovernmentSchemes');
  const gotoMarketPrices = () => navigate('/MarketPrices');

  return (
    <div className="dashboard-container">
      <div className="overlay" />
      <div className="content">
        <h1>Discover the Healing Power of Ayurveda.</h1>
        <button className="primary-btn" onClick={gotoweather}>
          Book an Appointment now
        </button>

        <div className="nav-links">
          <button onClick={gotoweather}>Weather</button>
          <button onClick={gotomarket}>Marketplace</button>
          <button onClick={gotoCroptracker}>Crop Tracker</button>
          <button onClick={gotoGovernmentSchemes}>Government Schemes</button>
          <button onClick={gotoMarketPrices}>Market Prices</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
