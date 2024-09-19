// Dashboard.js
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaSyncAlt, FaFilter } from 'react-icons/fa';
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
    <div className="dashboard-container container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-center">Weekly Sales Overview</h3>
        <button className="btn btn-outline-primary" onClick={refreshData}>
          <FaSyncAlt className="me-2" /> Refresh Data
        </button>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-10 col-lg-8">
          <div className="card chart-container shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">Sales Data</h5>
                <button className="btn btn-outline-secondary">
                  <FaFilter className="me-2" /> Filter
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
