import React from 'react';

const steps = [
  'Clarify the objective when the request is ambiguous.',
  'Think through the solution and organize the response.',
  'Deliver concise output with examples for technical topics.',
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="section steps-section">
    <p className="eyebrow">Workflow</p>
    <h2>A calm, structured process for every request.</h2>
    <div className="steps-grid">
      {steps.map((step, index) => (
        <article className="feature-card" key={step}>
          <span>{index + 1}</span>
          <h3>{step}</h3>
        </article>
      ))}
    </div>
  </section>
);

export default HowItWorks;
