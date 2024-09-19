// import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GovernmentSchemes from './pages/GSchemes';
import MarketPrices from './pages/MarketPrices';
import CropTracker from './pages/CropTracker';
import Marketplace from './pages/Marketplace';
import SoilAndFertilizerWithWeather from './pages/SoilAndFertilizerWithWeather';
// import Dashboard from './Components/dashboard';
function App() {
  return (
    
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Weather" element={<Weather />} /> */}
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/CropTracker" element={<CropTracker />} />
        <Route path="/GovernmentSchemes" element={<GovernmentSchemes />} />
        <Route path="/MarketPrices" element={<MarketPrices />} />
        <Route path="/Weather" element={<SoilAndFertilizerWithWeather />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Redirect to dashboard if already logged in */}
      </Routes>
    </Router>
  );
}

export default App;
