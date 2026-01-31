import React from 'react';
import './ProductDemo.css';

function ProductDemo() {
  return (
    <section className="product-demo" id="demo">
      <div className="container">
        <h2>See It In Action</h2>
        <p className="section-subtitle">Simple, fast, and efficient - designed for everyone</p>
        
        <div className="demo-grid">
          {/* Billing Screen */}
          <div className="demo-card">
            <div className="demo-mockup billing-screen">
              <div className="screen-header">
                <div className="header-title">
                  <span className="icon">🛒</span>
                  <span>New Bill</span>
                </div>
              </div>
              <div className="screen-body">
                <div className="quick-search">
                  <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <span className="search-text">Search or Scan Product...</span>
                  </div>
                </div>
                
                <div className="bill-items">
                  <div className="bill-item">
                    <div className="item-info">
                      <span className="item-name">Rice 1kg</span>
                      <span className="item-qty">× 2</span>
                    </div>
                    <span className="item-price">₹100</span>
                  </div>
                  <div className="bill-item">
                    <div className="item-info">
                      <span className="item-name">Sugar 1kg</span>
                      <span className="item-qty">× 1</span>
                    </div>
                    <span className="item-price">₹45</span>
                  </div>
                  <div className="bill-item">
                    <div className="item-info">
                      <span className="item-name">Tea Powder</span>
                      <span className="item-qty">× 1</span>
                    </div>
                    <span className="item-price">₹180</span>
                  </div>
                </div>

                <div className="bill-footer">
                  <div className="total-amount">
                    <span>Total</span>
                    <span className="amount">₹325</span>
                  </div>
                  <button className="checkout-btn">
                    Complete Payment
                  </button>
                </div>
              </div>
            </div>
            <h3>Fast Billing</h3>
            <p>Scan products, add to cart, and complete checkout in seconds</p>
          </div>

          {/* Add Product Screen */}
          <div className="demo-card">
            <div className="demo-mockup inventory-screen">
              <div className="screen-header">
                <div className="header-title">
                  <span className="icon">➕</span>
                  <span>Add New Product</span>
                </div>
              </div>
              <div className="screen-body">
                <div className="form-group">
                  <label>Product Name</label>
                  <div className="input-field">
                    <span className="input-text">Basmati Rice 5kg</span>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Price</label>
                    <div className="input-field">
                      <span className="input-text">₹ 450</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Stock Qty</label>
                    <div className="input-field">
                      <span className="input-text">50</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Category</label>
                  <div className="input-field">
                    <span className="input-text">Groceries</span>
                  </div>
                </div>

                <div className="form-group">
                  <label>GST Rate</label>
                  <div className="gst-options">
                    <div className="gst-option">0%</div>
                    <div className="gst-option active">5%</div>
                    <div className="gst-option">12%</div>
                    <div className="gst-option">18%</div>
                  </div>
                </div>

                <button className="save-btn">
                  ✓ Save Product
                </button>
              </div>
            </div>
            <h3>Easy Product Entry</h3>
            <p>Add products with just name, price, and stock - simple form, no complexity</p>
          </div>

          {/* View Reports Screen */}
          <div className="demo-card">
            <div className="demo-mockup reports-screen">
              <div className="screen-header">
                <div className="header-title">
                  <span className="icon">📊</span>
                  <span>Today's Sales</span>
                </div>
              </div>
              <div className="screen-body">
                <div className="summary-cards">
                  <div className="summary-card blue">
                    <div className="card-icon">💰</div>
                    <div className="card-content">
                      <div className="card-value">₹12,450</div>
                      <div className="card-label">Total Sales</div>
                    </div>
                  </div>
                  
                  <div className="summary-card green">
                    <div className="card-icon">📋</div>
                    <div className="card-content">
                      <div className="card-value">48</div>
                      <div className="card-label">Bills</div>
                    </div>
                  </div>
                </div>

                <div className="recent-sales">
                  <div className="section-title">Recent Transactions</div>
                  <div className="sale-item">
                    <div className="sale-info">
                      <span className="sale-id">#1248</span>
                      <span className="sale-time">2:30 PM</span>
                    </div>
                    <span className="sale-amount">₹325</span>
                  </div>
                  <div className="sale-item">
                    <div className="sale-info">
                      <span className="sale-id">#1247</span>
                      <span className="sale-time">2:15 PM</span>
                    </div>
                    <span className="sale-amount">₹580</span>
                  </div>
                  <div className="sale-item">
                    <div className="sale-info">
                      <span className="sale-id">#1246</span>
                      <span className="sale-time">1:55 PM</span>
                    </div>
                    <span className="sale-amount">₹1,200</span>
                  </div>
                </div>

                <button className="report-btn">
                  View Detailed Report
                </button>
              </div>
            </div>
            <h3>Clear Reports</h3>
            <p>See your sales at a glance - no confusion, just the numbers that matter</p>
          </div>
        </div>

        <div className="demo-features">
          <div className="feature-highlight">
            <span className="highlight-icon">⚡</span>
            <div className="highlight-text">
              <strong>3 Simple Steps:</strong> Scan → Bill → Print. That's it!
            </div>
          </div>
          <div className="feature-highlight">
            <span className="highlight-icon">👨‍💼</span>
            <div className="highlight-text">
              <strong>No Training Needed:</strong> Your staff can start using it immediately
            </div>
          </div>
          <div className="feature-highlight">
            <span className="highlight-icon">📱</span>
            <div className="highlight-text">
              <strong>Works Everywhere:</strong> Desktop, tablet, or mobile - your choice
            </div>
          </div>
        </div>

        <div className="demo-cta">
          <a href="#demo-video" className="btn btn-primary">
            <span className="play-icon">▶</span>
            Watch 2-Min Demo
          </a>
          <a href="#trial" className="btn btn-secondary">
            Try It Free Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductDemo;