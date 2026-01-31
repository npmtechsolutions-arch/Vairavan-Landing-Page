import React from 'react';
import './Benefits.css';

function Benefits() {
  const benefits = [
    { title: 'Faster Checkout', description: 'Reduce billing time by 50% and serve more customers', icon: '🚀' },
    { title: 'Reduced Errors', description: 'Eliminate manual calculation mistakes and pricing errors', icon: '✅' },
    { title: 'Easy Staff Training', description: 'Simple interface means new staff learn in minutes', icon: '👨‍🏫' },
    { title: 'Better Business Control', description: 'Real-time insights help you make informed decisions', icon: '🎯' },
    { title: 'Save Time & Money', description: 'Automate tasks and focus on growing your business', icon: '💰' }
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2>Benefits That Matter</h2>
        <p className="section-subtitle">See real improvements in your daily operations</p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;