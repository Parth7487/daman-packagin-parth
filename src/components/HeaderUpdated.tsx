
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from './ui/button';

const HeaderUpdated: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const phoneNumber = "+919426877849";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Features', path: '/features' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4" style={{ height: '185px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/33086455-9827-4f07-ba92-208b1880b389.png" 
              alt="Daman Packaging Logo" 
              className="h-[170px] w-[170px]" 
            />
          </Link>

          {/* Contact Buttons for Desktop */}
          {!isMobile && (
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-800"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone size={16} />
                <span>+91 94268 77849</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
                onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 1 1 0c0 .97 2 3 2 3a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3" />
                </svg>
                <span>WhatsApp</span>
              </Button>
            </div>
          )}

          {/* Desktop Navigation - Updated with larger, bolder text */}
          {!isMobile && (
            <nav>
              <ul className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-lg font-bold transition-colors ${
                        isActive(item.path)
                          ? 'text-blue-700'
                          : 'text-gray-800 hover:text-blue-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Mobile Navigation Toggle */}
          {isMobile && (
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-lg font-bold py-2 ${
                      isActive(item.path)
                        ? 'text-blue-700'
                        : 'text-gray-800 hover:text-blue-700'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Contact Buttons for Mobile */}
            <div className="flex flex-col gap-3 mt-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 bg-blue-700 text-white hover:bg-blue-800"
                onClick={() => window.location.href = `tel:${phoneNumber}`}
              >
                <Phone size={16} />
                <span>+91 94268 77849</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center gap-2 bg-green-600 text-white hover:bg-green-700"
                onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 1 1 0c0 .97 2 3 2 3a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3" />
                </svg>
                <span>WhatsApp</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderUpdated;
