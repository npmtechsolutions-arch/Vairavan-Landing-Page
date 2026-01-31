import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3>POSBill</h3>
          <p>Modern POS billing system for Indian businesses. Fast, reliable, and GST-compliant.</p>
        </div>

        <div className="footer-section">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#demo">Demo</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p><strong>NPM Tech Solutions</strong></p>
          <p>No 12, Parsn Sristi Mahal</p>
          <p>Vilangudi, Madurai</p>
          <p>Email: info@posbill.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 NPM Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;