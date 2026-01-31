import React from 'react';
import './Features.css';

function Features() {
  const features = [
    { title: 'Fast Billing', description: 'Process transactions in seconds with our intuitive interface', icon: '⚡' },
    { title: 'Inventory Management', description: 'Track stock levels, get low stock alerts, and manage products easily', icon: '📦' },
    { title: 'GST & Tax', description: 'Automatic GST calculation and compliant invoice generation', icon: '📊' },
    { title: 'Sales Reports', description: 'Detailed insights into your daily, weekly, and monthly sales', icon: '📈' },
    { title: 'Customer Management', description: 'Maintain customer database and track purchase history', icon: '👥' },
    { title: 'Multi-User Access', description: 'Multiple staff members can use the system simultaneously', icon: '🔐' },
    { title: 'Offline / Online Mode', description: 'Works seamlessly even without internet connection', icon: '🌐' },
    { title: 'Cloud Backup', description: 'Automatic daily backups keep your data safe and secure', icon: '☁️' }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Powerful Features for Your Business</h2>
        <p className="section-subtitle">Everything you need to run your business efficiently</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;