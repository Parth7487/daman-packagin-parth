
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/lovable-uploads/33086455-9827-4f07-ba92-208b1880b389.png"
                alt="Daman Packaging"
                className="h-16 w-auto" // Increased size from default
              />
            </Link>
            <p className="text-gray-400">
              Manufacturer of Exclusively Virgin Quality HM-HDPE Jerry Cans & Open Top Drums
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-2">
              <strong>Address:</strong> 123 Industrial Zone, City, State, Country
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Email:</strong> info@damanpackaging.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Daman Packaging. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
