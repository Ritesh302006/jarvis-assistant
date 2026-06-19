import React from 'react';

const Hero: React.FC = () => (
  <section id="top" className="hero">
    <div className="hero-copy">
      <p className="eyebrow">Advanced personal AI assistant</p>
      <h1>Good day, Sir. Your intelligent command center is online.</h1>
      <p className="hero-text">
        JARVIS provides concise answers, step-by-step technical help, learning support, productivity planning, and thoughtful suggestions when there is a better path forward.
      </p>
      <div className="hero-actions">
        <a className="primary-action" href="#demo">View Demo</a>
        <a className="secondary-action" href="#features">Explore Features</a>
      </div>
    </div>
    <aside className="status-card" aria-label="Assistant status">
      <div className="pulse-ring" />
      <h2>Systems Online</h2>
      <p>Professional tone · Clear formatting · Reliable assistance for building and learning</p>
    </aside>
  </section>
);

export default Hero;
