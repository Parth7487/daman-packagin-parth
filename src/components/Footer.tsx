import { Link } from "react-router-dom";
import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  // Function to open Google Maps with directions to the location
  const openGoogleMapsDirections = () => {
    // Using Silvassa location coordinates
    const address = "Daman Packaging, SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };
  
  const handleBrochureDownload = () => {
    // Create a direct link to the brochure PDF
    const brochureLink = '/brochure.pdf';
    // Open the PDF in a new tab
    window.open(brochureLink, '_blank');
  };
  
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/lovable-uploads/33086455-9827-4f07-ba92-208b1880b389.png"
                alt="Daman Packaging"
                className="h-36 w-auto"
                loading="eager"
              />
            </Link>
            <p className="text-gray-600">
              Manufacturer of Exclusively Virgin Quality HM-HDPE Jerry Cans & Open Top Drums
            </p>
            <div className="mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center text-black"
                onClick={handleBrochureDownload}
              >
                <Download size={16} className="mr-2" /> Download Brochure
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 
              <button 
                onClick={openGoogleMapsDirections} 
                className="ml-2 text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
              >
                <span>123 Industrial Zone, City, State, Country</span>
                <MapPin size={16} className="ml-1" />
              </button>
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> info@damanpackaging.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Daman Packaging. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed and developed by <a href="https://www.devdesignify.agency" target="_blank" rel="noopener noreferrer" className="hover:underline">www.devdesignify.agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
