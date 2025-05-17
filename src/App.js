// App.js

import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import GovernmentSchemes from './pages/GSchemes';
import MarketPrices from './pages/MarketPrices';
import CropTracker from './pages/CropTracker';
import Marketplace from './pages/Marketplace';
import SoilAndFertilizerWithWeather from './pages/SoilAndFertilizerWithWeather';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/croptracker" element={<CropTracker />} />
        <Route path="/governmentschemes" element={<GovernmentSchemes />} />
        <Route path="/marketprices" element={<MarketPrices />} />
        <Route path="/weather" element={<SoilAndFertilizerWithWeather />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Removed OTP route */}
      </Routes>
    </Router>
  );
}

export default App;
