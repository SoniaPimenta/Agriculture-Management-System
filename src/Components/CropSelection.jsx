import React, { useState } from 'react';

const CropSelection = ({ onCropSubmit }) => {
  const [location, setLocation] = useState('');
  const [crop, setCrop] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCropSubmit({ location, crop });
  };

  return (
    <form onSubmit={handleSubmit} className="crop-selection">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control"
        placeholder="Enter location"
      />
      <select
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
        className="form-control mt-2"
      >
        <option value="">Select Crop</option>
        <option value="Wheat">Wheat</option>
        <option value="Rice">Rice</option>
        <option value="Corn">Corn</option>
      </select>
      <button type="submit" className="btn btn-primary mt-2">Get Prices</button>
    </form>
  );
};

export default CropSelection;
