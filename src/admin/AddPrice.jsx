import React, { useState } from 'react';
import './AddPrice.css';

const AddPrice = ({ currentPrices, onUpdatePrices }) => {
  // ========================================
  // STATE MANAGEMENT
  // ========================================
  const [basicPrice, setBasicPrice] = useState('');
  const [standardPrice, setStandardPrice] = useState('');
  const [premiumPrice, setPremiumPrice] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  // ========================================
  // FORM SUBMIT HANDLER
  // ========================================
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const basic = parseFloat(basicPrice);
    const standard = parseFloat(standardPrice);
    const premium = parseFloat(premiumPrice);

    if (!basicPrice || !standardPrice || !premiumPrice) {
      showMessage('Please fill in all price fields', 'error');
      return;
    }

    if (isNaN(basic) || isNaN(standard) || isNaN(premium)) {
      showMessage('Please enter valid numbers', 'error');
      return;
    }

    if (basic <= 0 || standard <= 0 || premium <= 0) {
      showMessage('Prices must be greater than zero', 'error');
      return;
    }

    // Update prices in parent component (App.jsx)
    onUpdatePrices({
      basic: basic,
      standard: standard,
      premium: premium
    });

    // Clear form
    setBasicPrice('');
    setStandardPrice('');
    setPremiumPrice('');

    // Show success message
    showMessage('Prices updated successfully!', 'success');
  };

  // ========================================
  // MESSAGE DISPLAY HELPER
  // ========================================
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 4000);
  };

  // ========================================
  // RENDER
  // ========================================
  return (
    <section className="addprice-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Update Pricing Plans</h2>
          <p className="section-subtitle">
            Modify subscription prices (visible to all users immediately)
          </p>
        </div>

        {message && (
          <div className={`message-banner ${messageType}`}>
            <span className="message-icon">
              {messageType === 'success' ? '✓' : '⚠️'}
            </span>
            {message}
          </div>
        )}

        <div className="addprice-layout">
          {/* UPDATE FORM */}
          <div className="form-card">
            <h3 className="form-title">Set New Prices</h3>
            <form onSubmit={handleSubmit} className="price-form">
              <div className="form-grid">
                <div className="input-wrapper">
                  <label htmlFor="basic-price">
                    <span className="label-icon">💼</span>
                    Basic Plan (₹)
                  </label>
                  <input
                    type="number"
                    id="basic-price"
                    value={basicPrice}
                    onChange={(e) => setBasicPrice(e.target.value)}
                    placeholder={`Current: ₹${currentPrices.basic}`}
                    min="1"
                    step="1"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="standard-price">
                    <span className="label-icon">🚀</span>
                    Standard Plan (₹)
                  </label>
                  <input
                    type="number"
                    id="standard-price"
                    value={standardPrice}
                    onChange={(e) => setStandardPrice(e.target.value)}
                    placeholder={`Current: ₹${currentPrices.standard}`}
                    min="1"
                    step="1"
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="premium-price">
                    <span className="label-icon">⭐</span>
                    Premium Plan (₹)
                  </label>
                  <input
                    type="number"
                    id="premium-price"
                    value={premiumPrice}
                    onChange={(e) => setPremiumPrice(e.target.value)}
                    placeholder={`Current: ₹${currentPrices.premium}`}
                    min="1"
                    step="1"
                  />
                </div>
              </div>

              <button type="submit" className="update-button">
                <span className="button-icon">💾</span>
                Update Prices
              </button>
            </form>
          </div>

          {/* CURRENT PRICES DISPLAY */}
          <div className="current-prices-card">
            <h3 className="card-title">Current Active Prices</h3>
            <div className="prices-display">
              <div className="price-row">
                <span className="price-label">
                  <span className="dot basic"></span>
                  Basic Plan
                </span>
                <span className="price-value">₹{currentPrices.basic}/month</span>
              </div>
              <div className="price-row featured">
                <span className="price-label">
                  <span className="dot standard"></span>
                  Standard Plan
                </span>
                <span className="price-value">₹{currentPrices.standard}/month</span>
              </div>
              <div className="price-row">
                <span className="price-label">
                  <span className="dot premium"></span>
                  Premium Plan
                </span>
                <span className="price-value">₹{currentPrices.premium}/month</span>
              </div>
            </div>
            <p className="info-text">
              💡 Changes will be reflected immediately in the Pricing section
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPrice;
