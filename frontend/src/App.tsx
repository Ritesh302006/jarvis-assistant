import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ChatDemo from './components/ChatDemo';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <Features />
      <HowItWorks />
      <ChatDemo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
