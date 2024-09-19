import React, { useState } from 'react';
import '../css/Marketplace.css';

const dummyTools = [
  { id: 1, name: 'Tractor', price: '$500/day', description: 'Heavy-duty farming tractor.' },
  { id: 2, name: 'Plow', price: '$150/day', description: 'Efficient for soil preparation.' },
  { id: 3, name: 'Seeder', price: '$200/day', description: 'Used for planting seeds.' },
  { id: 4, name: 'Harvester', price: '$300/day', description: 'Ideal for harvesting crops.' },
  { id: 5, name: 'Sprinkler System', price: '$80/day', description: 'Automatic irrigation system.' },
  { id: 6, name: 'Water Pump', price: '$100/day', description: 'Used for pumping water.' },
  { id: 7, name: 'Cultivator', price: '$120/day', description: 'Helps in soil aeration.' },
];

const dummyCattle = [
  { id: 1, name: 'Cow', price: '$1000', description: 'Healthy dairy cow.' },
  { id: 2, name: 'Bull', price: '$1500', description: 'Strong and healthy bull.' },
  { id: 3, name: 'Goat', price: '$250', description: 'Perfect for milk production.' },
  { id: 4, name: 'Sheep', price: '$300', description: 'Wool-producing sheep.' },
  { id: 5, name: 'Chicken', price: '$50', description: 'Egg-laying chicken.' },
  { id: 6, name: 'Buffalo', price: '$1200', description: 'Robust and healthy buffalo.' },
];

const Marketplace = () => {
  const [type, setType] = useState('tools');
  
  return (
    <div className="marketplace-container">
      <h1>Marketplace for Farming Tools & Cattle</h1>

      <div className="toggle-section">
        <button className={type === 'tools' ? 'active' : ''} onClick={() => setType('tools')}>Tools</button>
        <button className={type === 'cattle' ? 'active' : ''} onClick={() => setType('cattle')}>Cattle</button>
      </div>

      <div className="listing-section">
        {type === 'tools' ? (
          <div className="card-container">
            {dummyTools.map(tool => (
              <div key={tool.id} className="item-card">
                <h3>{tool.name}</h3>
                <p><strong>Price:</strong> {tool.price}</p>
                <p>{tool.description}</p>
                <button className="buy-btn">Buy</button>
                <button className="rent-btn">Rent</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="card-container">
            {dummyCattle.map(animal => (
              <div key={animal.id} className="item-card">
                <h3>{animal.name}</h3>
                <p><strong>Price:</strong> {animal.price}</p>
                <p>{animal.description}</p>
                <button className="buy-btn">Buy</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
