import React from 'react';
import './FinalCTA.css';

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Ready to Transform Your Business?</h2>
        <p>Join 500+ businesses already using our POS system. Start your free trial today!</p>
        <div className="cta-buttons">
          <a href="#trial" className="btn btn-primary">Start Free Trial</a>
          <a href="#contact" className="btn btn-secondary">Contact Sales</a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;