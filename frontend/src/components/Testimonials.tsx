import React from 'react';

const testimonials = [
  '“JARVIS turns vague ideas into clear next steps.”',
  '“The technical explanations are concise and practical.”',
];

const Testimonials: React.FC = () => (
  <section className="section testimonials-section">
    <p className="eyebrow">Signal</p>
    <h2>Trusted for focused, useful responses.</h2>
    <div className="steps-grid">
      {testimonials.map((quote) => (
        <blockquote className="feature-card" key={quote}>
          <p>{quote}</p>
        </blockquote>
      ))}
    </div>
  </section>
);

export default Testimonials;
