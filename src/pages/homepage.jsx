

import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <button>
        <a href="/login">Login</a>
      </button>
    </div>
  );
};

export default HomePage;