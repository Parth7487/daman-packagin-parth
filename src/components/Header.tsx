
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32 sm:h-40 md:h-52 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/33086455-9827-4f07-ba92-208b1880b389.png"
                alt="Daman Packaging"
                className="h-[150px] w-[150px] object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onClick={() => setShowProductDropdown(!showProductDropdown)}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {showProductDropdown && (
                  <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link
                      to="/products#narrow-mouth-drum"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowProductDropdown(false)}
                    >
                      NARROW MOUTH DRUM
                    </Link>
                    <Link
                      to="/products#open-mouth-drum"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowProductDropdown(false)}
                    >
                      OPEN MOUTH DRUM
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/features"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Features
              </Link>
              <Link
                to="/certifications"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Certifications
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <div>
            <button
              className="w-full text-left text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setShowProductDropdown(!showProductDropdown)}
            >
              Products
            </button>
            {showProductDropdown && (
              <div className="pl-6">
                <Link
                  to="/products#narrow-mouth-drum"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setShowProductDropdown(false);
                    setIsOpen(false);
                  }}
                >
                  NARROW MOUTH DRUM
                </Link>
                <Link
                  to="/products#open-mouth-drum"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setShowProductDropdown(false);
                    setIsOpen(false);
                  }}
                >
                  OPEN MOUTH DRUM
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/features"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/certifications"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Certifications
          </Link>
          <Link
            to="/contact"
            className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
