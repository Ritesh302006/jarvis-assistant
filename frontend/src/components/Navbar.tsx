import React from 'react';

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => (
  <nav className="navbar" aria-label="Main navigation">
    <a className="brand" href="#top" aria-label="JARVIS home">
      <span className="brand-orb" />
      JARVIS
    </a>
    <div className="nav-actions">
      <a href="#features">Features</a>
      <a href="#how-it-works">How it works</a>
      <a href="#demo">Demo</a>
      <button type="button" onClick={() => setIsDarkMode((current) => !current)}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  </nav>
);

export default Navbar;
