import React from 'react';
import './Pricing.css';

function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '₹999',
      period: '/month',
      features: [
        '1 User Account',
        'Up to 500 Products',
        'Basic Reports',
        'Email Support',
        'Cloud Backup'
      ],
      cta: 'Start Basic'
    },
    {
      name: 'Standard',
      price: '₹1,999',
      period: '/month',
      features: [
        '3 User Accounts',
        'Unlimited Products',
        'Advanced Reports',
        'Priority Support',
        'Cloud Backup',
        'Multi-Store Support'
      ],
      cta: 'Start Standard',
      popular: true
    },
    {
      name: 'Premium',
      price: '₹3,999',
      period: '/month',
      features: [
        'Unlimited Users',
        'Unlimited Products',
        'Custom Reports',
        '24/7 Support',
        'Cloud Backup',
        'Multi-Store Support',
        'API Access',
        'Dedicated Manager'
      ],
      cta: 'Start Premium'
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Simple, Transparent Pricing</h2>
        <p className="section-subtitle">Choose the plan that fits your business needs</p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <a href="#signup" className="btn btn-primary">{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;