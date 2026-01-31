import React from 'react';
import './TargetBusinesses.css';

function TargetBusinesses() {
  const businesses = [
    { name: 'Retail Store', icon: '🏪' },
    { name: 'Supermarket', icon: '🛒' },
    { name: 'Restaurant / Cafe', icon: '☕' },
    { name: 'Pharmacy', icon: '💊' },
    { name: 'Hardware Store', icon: '🔧' },
    { name: 'Electronics Shop', icon: '📱' }
  ];

  return (
    <section className="target-businesses">
      <div className="container">
        <h2>Perfect for Every Business Type</h2>
        <p className="section-subtitle">Whether you run a small shop or a large retail chain, our POS system adapts to your needs</p>
        <div className="business-grid">
          {businesses.map((business, index) => (
            <div key={index} className="business-card">
              <div className="business-icon">{business.icon}</div>
              <h3>{business.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TargetBusinesses;