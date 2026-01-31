import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    { number: '1', title: 'Add Products', description: 'Set up your inventory with product names, prices, and stock' },
    { number: '2', title: 'Start Billing', description: 'Scan or search products and add them to the bill instantly' },
    { number: '3', title: 'Print or Share Invoice', description: 'Generate GST-compliant invoices and share via WhatsApp or email' },
    { number: '4', title: 'View Reports', description: 'Track sales, inventory, and business performance in real-time' }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <p className="section-subtitle">Get started in 4 simple steps</p>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;