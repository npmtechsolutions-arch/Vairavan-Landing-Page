import React from 'react';
import './WhyChoose.css';

function WhyChoose() {
  const reasons = [
    { title: 'Made for Indian Businesses', description: 'Built specifically for Indian retail and service businesses', icon: '🇮🇳' },
    { title: 'GST Compliant', description: 'Fully compliant with GST regulations and invoice requirements', icon: '📋' },
    { title: 'Affordable', description: 'Pricing that works for small and medium businesses', icon: '💵' },
    { title: 'Local Language Support', description: 'Interface available in Hindi, Tamil, Telugu, and more', icon: '🗣️' },
    { title: '24/7 Support', description: 'Dedicated customer support team ready to help anytime', icon: '🤝' }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <h2>Why Choose Our POS System?</h2>
        <p className="section-subtitle">Designed with Indian businesses in mind</p>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;