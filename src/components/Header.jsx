import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>POSBill</h2>
        </div>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Demo</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-cta">
          <a href="#trial" className="btn btn-primary">Start Free Trial</a>
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;