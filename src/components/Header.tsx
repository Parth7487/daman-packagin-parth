
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#265186] text-white">
      {/* Top bar with contact details */}
      <div className="bg-[#256694] py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:sales1@damanpackaging.com" className="hover:underline">
                sales1@damanpackaging.com
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <a href="tel:+919426877849" className="hover:underline">
              MR. B.R. CHAUHAN (+91 94268 77849)
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0 flex items-center">
            <Link to="/" className="hover:text-gray-200 flex items-center">
              <img 
                src="/lovable-uploads/33086455-9827-4f07-ba92-208b1880b389.png" 
                alt="Daman Packaging Logo" 
                className="h-10 w-auto mr-2"
              />
              <span>Daman Packaging</span>
            </Link>
          </div>
          
          <nav>
            <ul className="flex flex-wrap justify-center space-x-1 md:space-x-8">
              <li className="py-2">
                <Link to="/" className="px-3 py-2 hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link to="/products" className="px-3 py-2 hover:text-gray-200">
                  Products
                </Link>
              </li>
              <li className="py-2">
                <Link to="/about" className="px-3 py-2 hover:text-gray-200">
                  About Us
                </Link>
              </li>
              <li className="py-2">
                <Link to="/contact" className="px-3 py-2 hover:text-gray-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
