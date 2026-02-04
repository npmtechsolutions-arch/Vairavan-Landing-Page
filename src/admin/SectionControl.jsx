import React, { useState } from 'react';
import './SectionControl.css';

function SectionControl({ visibleSections, onVisibilityChange }) {
  const [sections, setSections] = useState(visibleSections);
  const [showMessage, setShowMessage] = useState(false);

  const handleToggle = (sectionName) => {
    const updatedSections = {
      ...sections,
      [sectionName]: !sections[sectionName]
    };
    setSections(updatedSections);
    onVisibilityChange(updatedSections);

    // Show success message
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sectionsList = [
    { key: 'hero', label: 'Hero Section', description: 'Home page with welcome message' },
    { key: 'features', label: 'Features Section', description: 'Product features and benefits' },
    { key: 'pricing', label: 'Pricing Section', description: 'Subscription plans and pricing' },
    { key: 'demo', label: 'Demo Section', description: 'Product demonstration and testimonials' },
    { key: 'contact', label: 'Contact Section', description: 'FAQ and contact information' }
  ];

  return (
    <section className="section-control">
      <div className="section-control-container">
        <div className="section-control-header">
          <h2>Customer Visible Sections</h2>
          <p>Control which sections are accessible to customers</p>
        </div>

        {showMessage && (
          <div className="success-notification">
            ✓ Section visibility updated
          </div>
        )}

        <div className="control-card">
          <div className="control-list">
            {sectionsList.map((section) => (
              <div key={section.key} className="control-item">
                <div className="control-info">
                  <label className="control-label">
                    <input
                      type="checkbox"
                      checked={sections[section.key]}
                      onChange={() => handleToggle(section.key)}
                      className="control-checkbox"
                    />
                    <span className="control-title">{section.label}</span>
                  </label>
                  <p className="control-description">{section.description}</p>
                </div>
                <div className="control-status">
                  <span className={`status-badge ${sections[section.key] ? 'active' : 'inactive'}`}>
                    {sections[section.key] ? 'Visible' : 'Hidden'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="control-footer">
          <div className="info-box">
            <strong>Note:</strong> You (admin) can always access all sections. 
            Customers will only see sections marked as "Visible".
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionControl;
