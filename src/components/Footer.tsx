
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#265186] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 flex justify-center md:justify-start">
              <img 
                src="/lovable-uploads/33086455-9827-4f07-ba92-208b1880b389.png" 
                alt="Daman Packaging Logo" 
                className="h-32 w-auto" // Increased from h-24 to h-32
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Daman Packaging</h3>
            <p className="mb-4 text-center md:text-left">
              Manufacturer of Exclusively Virgin Quality HM-HDPE Jerry Cans & Open Top Drums
            </p>
            <p className="text-sm">
              GSTIN: 26ADBPC8417F1ZX
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <address className="not-italic">
              <p className="mb-2">SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA</p>
              <p className="mb-2">Dadra and Nagar Haveli and Daman and Diu - 396230</p>
              <p className="mb-2">
                <a href="mailto:sales1@damanpackaging.com" className="hover:underline">
                  Email: sales1@damanpackaging.com
                </a>
              </p>
              <p>
                <a href="https://www.damanpackaging.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Website: www.damanpackaging.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Daman Packaging. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
