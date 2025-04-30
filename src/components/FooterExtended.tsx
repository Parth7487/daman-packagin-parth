
import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import GetQuoteButton from './GetQuoteButton';
import { Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FooterExtended: React.FC = () => {
  // Function to open Google Maps with directions to the location
  const openGoogleMapsDirections = () => {
    // Using Silvassa location coordinates
    const address = "Daman Packaging, SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Daman Packaging</h3>
            <p className="mb-4">
              Manufacturer of Exclusively Virgin Quality HM-HDPE Jerry Cans & Open Top Drums
            </p>
            <p className="text-sm mb-4">
              GSTIN: 26ADBPC8417F1ZX
            </p>
            <div className="flex flex-col gap-2">
              <GetQuoteButton className="mt-2" />
              <Link to="/downloads/brochure.pdf" target="_blank" download>
                <Button variant="outline" size="sm" className="flex items-center text-black">
                  <Download size={16} className="mr-2" /> Download Brochure
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link to="/certifications" className="hover:text-blue-400 transition-colors">Certifications</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-start mb-2">
              <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
              <button 
                onClick={openGoogleMapsDirections} 
                className="text-blue-300 hover:text-blue-200 hover:underline text-left"
              >
                SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA
              </button>
            </div>
            <ContactInfo iconSize={16} showTitle={false} className="text-sm" />
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Daman Packaging. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Designed and developed by <a href="https://www.devdesignify.agency" target="_blank" rel="noopener noreferrer" className="hover:underline">www.devdesignify.agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterExtended;
