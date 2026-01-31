import React from 'react';
import './App.css';
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
  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustIndicators />
      <TargetBusinesses />
      <Features />
      <HowItWorks />
      <ProductDemo />
      <Benefits />
      <Pricing />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;