import React, { useState } from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import '../css/MarketPrices.css';

// Dummy data for 15 crops, 10 markets, and 8 locations
const marketPrices = [
    { id: 1, crop: "Wheat", pricePerKg: 25, market: "Market A", location: "Delhi" },
    { id: 2, crop: "Rice", pricePerKg: 35, market: "Market A", location: "Delhi" },
    { id: 3, crop: "Corn", pricePerKg: 20, market: "Market B", location: "Delhi" },
    { id: 4, crop: "Soybean", pricePerKg: 40, market: "Market C", location: "Mumbai" },
    { id: 5, crop: "Wheat", pricePerKg: 28, market: "Market D", location: "Mumbai" },
    { id: 6, crop: "Rice", pricePerKg: 37, market: "Market D", location: "Mumbai" },
    // Add more dummy data for 15 crops, 10 markets, and 8 locations
];

// Function to prepare the bar chart data for selected crops and location
const getBarData = (crops, location) => {
    const filteredData = marketPrices.filter(
        price => crops.includes(price.crop.toLowerCase()) && price.location.toLowerCase() === location.toLowerCase()
    );

    const markets = [...new Set(filteredData.map(data => data.market))]; // Unique markets

    const datasets = crops.map((crop, index) => {
        const cropData = filteredData.filter(data => data.crop.toLowerCase() === crop);
        return {
            label: crop.charAt(0).toUpperCase() + crop.slice(1), // Capitalize crop name
            data: markets.map(market => {
                const marketPrice = cropData.find(data => data.market === market);
                return marketPrice ? marketPrice.pricePerKg : 0; // Set 0 if no price available for the market
            }),
            backgroundColor: `rgba(${index * 60 + 100}, ${index * 80 + 50}, ${index * 100 + 150}, 0.6)`,
            borderColor: `rgba(${index * 60 + 100}, ${index * 80 + 50}, ${index * 100 + 150}, 1)`,
            borderWidth: 1
        };
    });

    return {
        labels: markets, // Markets as labels
        datasets: datasets
    };
};

const MarketPrices = () => {
    const [location, setLocation] = useState('');
    const [crops, setCrops] = useState('');
    const [barData, setBarData] = useState(null);

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleCropsChange = (event) => {
        setCrops(event.target.value);
    };

    const handleSearch = () => {
        const cropList = crops.split(',').map(crop => crop.trim().toLowerCase());
        if (cropList.length > 0 && location) {
            const data = getBarData(cropList, location);
            setBarData(data);
        }
    };

    return (
        <Grid container spacing={4} className="market-prices-container" justifyContent="center">
            <Grid item xs={12} md={10} className="card">
                <Typography variant="h3" align="center" gutterBottom>
                    Crop Market Prices
                </Typography>

                {/* Search Section */}
                <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Enter your location" 
                        value={location} 
                        onChange={handleLocationChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter crops (comma-separated)" 
                        value={crops} 
                        onChange={handleCropsChange}
                    />
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </div>

                {/* Bar Chart for Crop Prices */}
                {barData ? (
                    <div className="bar-chart-container">
                        <Typography variant="h6" align="center">Crop Prices in {location}</Typography>
                        <Bar 
                            data={barData}
                            options={{
                                responsive: true,
                                animation: {
                                    duration: 1500,
                                    easing: 'easeInOutBounce'
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        title: {
                                            display: true,
                                            text: 'Price per Kg (₹)'
                                        }
                                    },
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Markets'
                                        }
                                    }
                                }
                            }}
                        />
                    </div>
                ) : (
                    <Typography variant="body1" align="center">
                        Please enter a location and crop to view the market prices.
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};

export default MarketPrices;
