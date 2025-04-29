
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const HeaderUpdated: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'Products', 
      path: '/products',
      hasDropdown: true,
      dropdownItems: [
        { label: 'NARROW MOUTH DRUM', path: '/products#narrow-mouth-drum' },
        { label: 'OPEN MOUTH DRUM', path: '/products#open-mouth-drum' },
      ]
    },
    { label: 'Features', path: '/features' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const renderNavItem = (item: any) => {
    if (item.hasDropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className={`text-lg font-bold transition-colors flex items-center ${
            isActive(item.path)
              ? 'text-blue-700'
              : 'text-gray-800 hover:text-blue-700'
          }`}>
            {item.label}
            <ChevronDown size={16} className="ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.dropdownItems.map((dropdownItem: any, idx: number) => (
              <DropdownMenuItem key={idx}>
                <Link 
                  to={dropdownItem.path} 
                  className="w-full block py-1"
                  onClick={closeMenu}
                >
                  {dropdownItem.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    
    return (
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
    );
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4" style={{ height: '185px' }}>
          {/* Mobile Menu Button (Left Side) */}
          {isMobile && (
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
          
          {/* Logo (Centered on Mobile) */}
          <Link to="/" className={`flex items-center justify-center ${isMobile ? 'mx-auto' : ''}`}>
            <img 
              src="/lovable-uploads/33086455-9827-4f07-ba92-208b1880b389.png" 
              alt="Daman Packaging Logo" 
              className="h-[170px] w-[170px]" 
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav>
              <ul className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <li key={item.path || item.label}>
                    {renderNavItem(item)}
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Empty div to maintain spacing on mobile */}
          {isMobile && <div className="w-10"></div>}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path || item.label}>
                  {item.hasDropdown ? (
                    <div className="py-2">
                      <div className="text-lg font-bold mb-2">{item.label}</div>
                      <ul className="pl-4 space-y-2">
                        {item.dropdownItems.map((dropdownItem: any, idx: number) => (
                          <li key={idx}>
                            <Link
                              to={dropdownItem.path}
                              className={`block text-base py-1 ${
                                isActive(dropdownItem.path)
                                  ? 'text-blue-700'
                                  : 'text-gray-800 hover:text-blue-700'
                              }`}
                              onClick={closeMenu}
                            >
                              {dropdownItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
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
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderUpdated;
