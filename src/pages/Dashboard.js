// Dashboard.js
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaSyncAlt, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css'; // Custom styles

const initialData = [
  { name: 'Mon', sales: 6000 },
  { name: 'Tue', sales: 4500 },
  { name: 'Wed', sales: 3000 },
  { name: 'Thu', sales: 1500 },
  { name: 'Fri', sales: 5000 },
  { name: 'Sat', sales: 4000 },
  { name: 'Sun', sales: 7000 },
];

const Dashboard = () => {
  const navigate = useNavigate(); 
    const gotoweather=()=>{
        navigate('/weather');
    }
    const gotomarket=()=>{
      navigate('/Marketplace');
  }
  const gotoCroptracker=()=>{
    navigate('/CropTracker');
}
const gotoGovernmentSchemes=()=>{
  navigate('/GovernmentSchemes');
}
const gotoMarketPrices=()=>{
  navigate('/MarketPrices');
}
  const [data, setData] = useState(initialData);

  const refreshData = () => {
    // Simulate new random data for interactivity
    const newData = initialData.map((day) => ({
      ...day,
      sales: Math.floor(Math.random() * 7000) + 1000,
    }));
    setData(newData);
  };

  return (
    <div className='dashy'>
      <div className='dashy-corners'>
      <div className='dashy-left'>
      <div className='dashy-box'>
    <h3 onClick={gotoweather}>Weather</h3>
    <h3 onClick={gotomarket}>Market Place</h3>
    </div>
      </div>
      <div className='dashy-right'>
      <div className='dashy-box'>
    <h3 onClick={gotoCroptracker}>Crop Tracker</h3>
    <h3 onClick={gotoGovernmentSchemes}>Government Schemes</h3>
    </div>
      </div>
      </div>
      <div className='dashy-center'>
    <h3 onClick={gotoMarketPrices}>Market Prices</h3>
      </div>

    </div>
  );
};

export default Dashboard;
