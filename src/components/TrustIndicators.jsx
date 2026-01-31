import React from 'react';
import './TrustIndicators.css';

function TrustIndicators() {
  const clients = [
    { name: 'Retail Plus', color: '#FF6B6B' },
    { name: 'Super Mart', color: '#4ECDC4' },
    { name: 'Quick Shop', color: '#45B7D1' },
    { name: 'Fresh Store', color: '#96CEB4' },
    { name: 'Smart Retail', color: '#FFEAA7' },
    { name: 'Mega Mart', color: '#DFE6E9' }
  ];

  return (
    <section className="trust-indicators">
      <div className="container">
        <h3>Trusted by 500+ Businesses</h3>
        <div className="client-logos">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <div className="logo-placeholder" style={{ backgroundColor: client.color }}>
                <span>{client.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="badges">
          <div className="badge">
            <div className="badge-icon gst-badge">
              <span className="badge-text">GST</span>
            </div>
            <p>GST Compliant</p>
          </div>
          <div className="badge">
            <div className="badge-icon secure-badge">
              <span className="badge-icon-symbol">🔒</span>
            </div>
            <p>100% Secure</p>
          </div>
          <div className="badge">
            <div className="badge-icon cloud-badge">
              <span className="badge-icon-symbol">☁️</span>
            </div>
            <p>Cloud Backup</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;