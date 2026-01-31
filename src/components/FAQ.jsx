import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.'
    },
    {
      question: 'Can I use this without internet?',
      answer: 'Absolutely. Our POS system works offline and automatically syncs when you reconnect to the internet.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use bank-level encryption and perform daily backups to ensure your data is always safe and secure.'
    },
    {
      question: 'Can I migrate from my current POS system?',
      answer: 'Yes, our team will help you migrate all your data from your existing system at no extra cost.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI, net banking, and provide invoice-based payment for annual plans.'
    },
    {
      question: 'Do you provide training?',
      answer: 'Yes, we provide free online training sessions and have detailed video tutorials to help you get started.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;