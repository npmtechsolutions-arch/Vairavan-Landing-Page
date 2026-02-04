import React, { useState } from 'react';
import './App.css';

// Import Login Component
import Login from './auth/Login';

// Import Admin Component
import AddPrice from './admin/AddPrice';
import SectionControl from './admin/SectionControl';

// Import your EXISTING components
import Header from './components/Header';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import TargetBusinesses from './components/TargetBusinesses';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductDemo from './components/ProductDemo';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  // ========================================
  // AUTHENTICATION STATE
  // ========================================
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'admin' or 'customer'

  // ========================================
  // NAVIGATION STATE
  // ========================================
  const [activeSection, setActiveSection] = useState('home');

  // ========================================
  // PRICING STATE (Single Source of Truth)
  // ========================================
  const [pricing, setPricing] = useState({
    basic: 1000,
    standard: 2000,
    premium: 3000
  });

  // ========================================
  // LOGIN HANDLER
  // ========================================
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setActiveSection('home'); // Start at home section
  };

  // ========================================
  // LOGOUT HANDLER
  // ========================================
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setActiveSection('home');
  };

  // ========================================
  // PRICING UPDATE HANDLER (Admin Only)
  // ========================================
  const handlePricingUpdate = (newPrices) => {
    setPricing(newPrices);
  };

  // ========================================
  // NAVIGATION ITEMS (Role-Based)
  // ========================================
  const getNavigationItems = () => {
    const baseItems = [
      { id: 'home', label: 'Home' },
      { id: 'features', label: 'Features' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'demo', label: 'Demo' },
      { id: 'contact', label: 'Contact' }
    ];

    // Add Admin-only section
    if (userRole === 'admin') {
      baseItems.push({ id: 'addprice', label: 'Add Price' });
    }

    return baseItems;
  };

  // ========================================
  // RENDER: LOGIN SCREEN
  // ========================================
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // ========================================
  // RENDER: MAIN APPLICATION
  // ========================================
  return (
    <div className="app">
      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <span className="nav-logo">📱</span>
            <span className="nav-title">BillFlow POS</span>
          </div>

          <div className="nav-menu">
            {getNavigationItems().map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <span className="role-badge">{userRole}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* HOME SECTION - All original landing page components */}
        {activeSection === 'home' && (
          <>
            <Hero />
            <TrustIndicators />
            <TargetBusinesses />
            <Benefits />
            <WhyChoose />
            <Testimonials />
            <HowItWorks />
            <FAQ />
            <FinalCTA />
          </>
        )}

        {/* FEATURES SECTION */}
        {activeSection === 'features' && <Features />}

        {/* PRICING SECTION - Pass pricing state as props */}
        {activeSection === 'pricing' && <Pricing pricing={pricing} />}

        {/* DEMO SECTION */}
        {activeSection === 'demo' && <ProductDemo />}

        {/* CONTACT SECTION */}
        {activeSection === 'contact' && <Footer />}

        {/* ADMIN ADD PRICE SECTION (Conditional Rendering) */}
        {activeSection === 'addprice' && userRole === 'admin' && (
          <AddPrice
            currentPrices={pricing}
            onUpdatePrices={handlePricingUpdate}
          />
        )}
      </main>
    </div>
  );
}

export default App;