
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import existing pages
import Index from './pages/Index';
import Products from './pages/Products';
import Features from './pages/Features';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Import our newly created pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

// Import our updated components
import HeaderUpdated from './components/HeaderUpdated';
import FooterExtended from './components/FooterExtended';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Daman Packaging</title>
      </Helmet>
      <HeaderUpdated />
      <main>
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
      </main>
      <FooterExtended />
      <Toaster />
    </>
  );
}

export default App;
