import React from 'react';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import PanaflexSection from './components/PanaflexSection';
import AboutStallContact from './components/AboutStallContact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Hero />
      <ProductSection />
      <PanaflexSection />
      <AboutStallContact />
    </div>
  );
};

export default App;
