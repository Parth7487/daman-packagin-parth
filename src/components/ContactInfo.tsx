
import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
  iconSize?: number;
  showTitle?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className = "", iconSize = 20, showTitle = true }) => {
  const whatsappNumber = "+919426877849";
  
  const openGoogleMapsDirections = () => {
    const address = "Daman Packaging, SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };
  
  return (
    <div className={`space-y-4 ${className}`}>
      {showTitle && <h3 className="text-lg font-bold mb-2">Contact Information</h3>}
      
      <div className="flex items-start gap-3">
        <MapPin size={iconSize} className="text-blue-700 flex-shrink-0 mt-1" />
        <button 
          onClick={openGoogleMapsDirections}
          className="text-left hover:underline"
        >
          SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA, Masat Industrial Area, 
          Dadra And Nagar Haveli, Dadra and Nagar Haveli and Daman and Diu - 396230.
        </button>
      </div>
      
      <div className="flex items-center gap-3">
        <Phone size={iconSize} className="text-blue-700 flex-shrink-0" />
        <a href="tel:+919426877849" className="hover:underline">+91 94268 77849</a>
      </div>
      
      <div className="flex items-center gap-3">
        <Mail size={iconSize} className="text-blue-700 flex-shrink-0" />
        <div>
          <a href="mailto:sales1@damanpackaging.com" className="hover:underline">sales1@damanpackaging.com</a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Globe size={iconSize} className="text-blue-700 flex-shrink-0" />
        <a href="https://www.damanpackaging.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          www.damanpackaging.com
        </a>
      </div>
      
      <div className="flex items-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-600 flex-shrink-0 mt-1"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 1 1 0c0 .97 2 3 2 3a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3" />
        </svg>
        <div>
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Chat on WhatsApp
          </a>
          <p className="text-sm mt-1 text-gray-600">GSTIN: 26ADBPC8417F1ZX</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
