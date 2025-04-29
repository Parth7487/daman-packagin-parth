
import React from 'react';
import { MapPin, Phone, Mail, WhatsApp } from 'lucide-react';

interface ContactInfoProps {
  className?: string;
  iconSize?: number;
  showTitle?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className = "", iconSize = 20, showTitle = true }) => {
  const whatsappNumber = "+919999999999"; // Replace with your actual WhatsApp number
  
  return (
    <div className={`space-y-4 ${className}`}>
      {showTitle && <h3 className="text-lg font-bold mb-2">Contact Information</h3>}
      
      <div className="flex items-start gap-3">
        <MapPin size={iconSize} className="text-blue-700 flex-shrink-0 mt-1" />
        <span>
          SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA, Masat Industrial Area, 
          Dadra And Nagar Haveli, Dadra and Nagar Haveli and Daman and Diu - 396230.
        </span>
      </div>
      
      <div className="flex items-center gap-3">
        <Phone size={iconSize} className="text-blue-700 flex-shrink-0" />
        <a href="tel:+919999999999" className="hover:underline">+91 9999 999 999</a>
      </div>
      
      <div className="flex items-center gap-3">
        <Mail size={iconSize} className="text-blue-700 flex-shrink-0" />
        <a href="mailto:info@damanpackaging.com" className="hover:underline">info@damanpackaging.com</a>
      </div>
      
      <div className="flex items-center gap-3">
        <WhatsApp size={iconSize} className="text-green-600 flex-shrink-0" />
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
