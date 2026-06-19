import React from 'react';

const features = [
  'Answer questions with clear context',
  'Write, explain, and debug code',
  'Summarize information into action items',
  'Generate creative ideas and plans',
];

const Features: React.FC = () => (
  <section id="features" className="section">
    <p className="eyebrow">Features</p>
    <h2>Designed to help you move faster, Sir.</h2>
    <div className="feature-grid">
      {features.map((feature) => (
        <article className="feature-card" key={feature}>
          <span>✦</span>
          <h3>{feature}</h3>
          <p>Receive polished, practical support with examples and next steps when the task calls for them.</p>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
