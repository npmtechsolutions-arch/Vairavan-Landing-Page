import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">🚀 #1 POS Solution in India</div>
          <h1>Modern POS Billing System for Your Business</h1>
          <p className="hero-subtitle">
            Fast, reliable, and GST-compliant billing software designed for Indian retailers, 
            restaurants, and businesses. Start billing in minutes with our intuitive interface.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>GST Compliant</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Offline Mode</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Cloud Backup</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#trial" className="btn btn-primary">
              Start Free Trial
              <span className="btn-arrow">→</span>
            </a>
            <a href="#demo" className="btn btn-secondary">
              <span className="play-icon">▶</span>
              Watch Demo
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <strong>500+</strong>
              <span>Active Businesses</span>
            </div>
            <div className="stat-item">
              <strong>50K+</strong>
              <span>Daily Transactions</span>
            </div>
            <div className="stat-item">
              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="mockup-title">POSBill Dashboard</div>
            </div>
            <div className="mockup-content">
              <div className="mockup-sidebar">
                <div className="sidebar-item active">📊 Dashboard</div>
                <div className="sidebar-item">🛒 Billing</div>
                <div className="sidebar-item">📦 Inventory</div>
                <div className="sidebar-item">📈 Reports</div>
                <div className="sidebar-item">👥 Customers</div>
              </div>
              <div className="mockup-main">
                <div className="stats-grid">
                  <div className="stat-card blue">
                    <div className="stat-value">₹45,280</div>
                    <div className="stat-label">Today's Sales</div>
                  </div>
                  <div className="stat-card green">
                    <div className="stat-value">127</div>
                    <div className="stat-label">Transactions</div>
                  </div>
                  <div className="stat-card orange">
                    <div className="stat-value">1,248</div>
                    <div className="stat-label">Products</div>
                  </div>
                  <div className="stat-card purple">
                    <div className="stat-value">₹2.4L</div>
                    <div className="stat-label">Monthly Revenue</div>
                  </div>
                </div>
                <div className="chart-area">
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '45%'}}></div>
                  <div className="chart-bar" style={{height: '90%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                  <div className="chart-bar" style={{height: '95%'}}></div>
                  <div className="chart-bar" style={{height: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-element element-1">
            <div className="float-card">
              <span className="float-icon">✓</span>
              <span className="float-text">Invoice Generated</span>
            </div>
          </div>
          <div className="floating-element element-2">
            <div className="float-card">
              <span className="float-icon">📊</span>
              <span className="float-text">Real-time Analytics</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 600,80 900,40 L1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;