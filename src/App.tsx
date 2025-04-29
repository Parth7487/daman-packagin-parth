
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Index from './pages/Index';
import Products from './pages/Products';
import Features from './pages/Features';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

// Import components
import HeaderUpdated from './components/HeaderUpdated';
import FooterExtended from './components/FooterExtended';
import { Toaster } from './components/ui/toaster';

import './App.css';

function App() {
  return (
    <Router>
      <HeaderUpdated />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterExtended />
      <Toaster />
    </Router>
  );
}

export default App;
