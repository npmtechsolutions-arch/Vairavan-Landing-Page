import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      quote: 'This POS system transformed our billing process. We can now serve twice as many customers in the same time!',
      rating: 5,
      name: 'Rajesh Kumar',
      business: 'Owner, Kumar Electronics'
    },
    {
      quote: 'Easy to use, affordable, and the support team is always helpful. Best investment for our pharmacy.',
      rating: 5,
      name: 'Priya Sharma',
      business: 'Manager, MediCare Pharmacy'
    },
    {
      quote: 'The inventory management feature alone has saved us thousands. Highly recommend for any retail business.',
      rating: 5,
      name: 'Amit Patel',
      business: 'Owner, Patel Supermarket'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <p className="section-subtitle">Join hundreds of satisfied businesses across India</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.business}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;