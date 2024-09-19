import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';
import '../css/CropTracker.css'; // Include your styling here

const dummyData = {
  rice: {
    stages: ['Seedling', 'Tillering', 'Panicle', 'Harvest'],
    data: [25, 30, 20, 25], // Sample data representing growth percentage in each stage
  },
  wheat: {
    stages: ['Germination', 'Tillering', 'Stem Extension', 'Harvest'],
    data: [20, 25, 25, 30],
  },
  maize: {
    stages: ['Vegetative', 'Tasseling', 'Silking', 'Harvest'],
    data: [15, 30, 25, 30],
  },
  // Add more dummy crop data as needed
};

const CropTracker = () => {
  const [cropName, setCropName] = useState('');
  const [cropData, setCropData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dummyData[cropName.toLowerCase()]) {
      setCropData(dummyData[cropName.toLowerCase()]);
    } else {
      setCropData(null); // Handle case when crop data is not found
    }
  };

  const pieChartData = cropData
    ? {
        labels: cropData.stages,
        datasets: [
          {
            data: cropData.data,
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
            hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
          },
        ],
      }
    : null;

  return (
    <div className="crop-tracker-container">
      <Card className="input-card">
        <Card.Body>
          <h2 className="name">Crop Growth Tracker</h2>
          <Form onSubmit={handleSubmit} className="crop-form">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter crop name (e.g., Rice, Wheat)"
                value={cropName}
                onChange={(e) => setCropName(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Track Crop
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {cropData && (
        <div className="analytics-section">
          <Card className="analytics-card">
            <Card.Body>
              <h3>Analytics for {cropName.charAt(0).toUpperCase() + cropName.slice(1)}</h3>
              <div className="chart-container">
                <Pie data={pieChartData} options={{ animation: { animateScale: true } }} />
              </div>
              <div className="analytics-details">
                <p><strong>Growth Stages:</strong></p>
                <ul>
                  {cropData.stages.map((stage, index) => (
                    <li key={index}>
                      {stage}: {cropData.data[index]}%
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CropTracker;
