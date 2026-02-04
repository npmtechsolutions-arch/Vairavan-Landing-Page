import React, { useState } from 'react';
import './Header.css';

function Header({ activeSection, onSectionChange, userRole, onLogout, visibleSections }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section) => {
    onSectionChange(section);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>POSBill</h2>
        </div>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {visibleSections.hero && (
            <a 
              href="#hero" 
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            >
              Home
            </a>
          )}
          
          {visibleSections.features && (
            <a 
              href="#features" 
              className={activeSection === 'features' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
            >
              Features
            </a>
          )}
          
          {visibleSections.pricing && (
            <a 
              href="#pricing" 
              className={activeSection === 'pricing' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('pricing'); }}
            >
              Pricing
            </a>
          )}
          
          {visibleSections.demo && (
            <a 
              href="#demo" 
              className={activeSection === 'demo' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('demo'); }}
            >
              Demo
            </a>
          )}
          
          {visibleSections.contact && (
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Contact
            </a>
          )}

          {/* Admin Only Links */}
          {userRole === 'admin' && (
            <>
              <a 
                href="#addprice" 
                className={activeSection === 'addprice' ? 'active admin-link' : 'admin-link'}
                onClick={(e) => { e.preventDefault(); handleNavClick('addprice'); }}
              >
                Add Price
              </a>
              
              <a 
                href="#sectioncontrol" 
                className={activeSection === 'sectioncontrol' ? 'active admin-link' : 'admin-link'}
                onClick={(e) => { e.preventDefault(); handleNavClick('sectioncontrol'); }}
              >
                Section Control
              </a>
            </>
          )}
        </nav>

        <div className="header-actions">
          <span className="user-role">{userRole === 'admin' ? 'Admin' : 'Customer'}</span>
          <button className="btn btn-logout" onClick={onLogout}>
            Logout
          </button>
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