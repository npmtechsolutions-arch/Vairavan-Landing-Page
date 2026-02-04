import React from "react";
import "./Pricing.css";

const Pricing = ({ pricing }) => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">POS Pricing Plans</h2>
      <p className="pricing-subtitle">
        Choose the best plan for your business growth
      </p>

      <div className="pricing-cards">

        {/* BASIC PLAN */}
        <div className="pricing-card">
          <h3>Basic</h3>
          <p className="price">₹{pricing?.basic}</p>
          <ul>
            <li>✔ Billing & Invoicing</li>
            <li>✔ Product Management</li>
            <li>✔ Daily Reports</li>
            <li>✖ GST Reports</li>
          </ul>
          <button>Get Started</button>
        </div>

        {/* STANDARD PLAN */}
        <div className="pricing-card featured">
          <h3>Standard</h3>
          <p className="price">₹{pricing?.standard}</p>
          <ul>
            <li>✔ All Basic Features</li>
            <li>✔ GST Billing</li>
            <li>✔ Stock Management</li>
            <li>✔ Monthly Reports</li>
          </ul>
          <button>Most Popular</button>
        </div>

        {/* PREMIUM PLAN */}
        <div className="pricing-card">
          <h3>Premium</h3>
          <p className="price">₹{pricing?.premium}</p>
          <ul>
            <li>✔ All Standard Features</li>
            <li>✔ Multi-Store Support</li>
            <li>✔ Cloud Backup</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button>Buy Now</button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;