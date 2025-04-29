
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#fff8e1]" style={{ 
      backgroundImage: "url('https://i.imgur.com/qV3RlM3.png')", 
      backgroundRepeat: "repeat",
      backgroundSize: "200px" 
    }}>
      {/* Header */}
      <div className="bg-[#fff8e1] pt-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-serif italic font-bold text-black">
              Daman Packaging
            </h1>
            <div className="flex items-center mt-1">
              <span className="text-sm">An</span>
              <span className="text-sm font-bold ml-1 mr-1">ISO 9001:2008 Certified</span>
              <span className="text-sm">Organisation</span>
            </div>
            <div className="text-right text-sm mt-[-20px]">
              <div>E: <a href="mailto:rpcipl@gmail.com" className="hover:underline">rpcipl@gmail.com</a> | T: +91 22 25836346 | Mumbai, INDIA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-2">
        <nav className="border-t border-b">
          <ul className="flex flex-wrap text-center">
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914] hover:bg-[#a67a0a]"><Link to="/" className="block">Home</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914] hover:bg-[#a67a0a]"><Link to="/about" className="block">About Us</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914] hover:bg-[#a67a0a]"><Link to="/certifications" className="block">Certifications</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914] hover:bg-[#a67a0a]"><Link to="/products" className="block">Products</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914] hover:bg-[#a67a0a]"><Link to="/features" className="block">Features</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914] hover:bg-[#a67a0a]"><Link to="/chemical-resistance" className="block">Chemical Resistance Chart</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914] hover:bg-[#a67a0a]"><Link to="/enquiry" className="block">Enquiry</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914] hover:bg-[#a67a0a]"><Link to="/careers" className="block">Careers</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 hover:bg-[#a67a0a]"><Link to="/contact" className="block">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 bg-white mt-4">
        <h2 className="text-2xl font-bold text-[#b8392e] mb-4">About Daman Packaging</h2>
        <p className="mb-4">
          Daman Packaging is one of the leading manufacturers of plastic containers in India, with a history spanning over three decades.
        </p>
        <p className="mb-4">
          Established in 1976, we have consistently maintained our position at the forefront of the packaging industry through continuous innovation and a commitment to quality.
        </p>
        <p className="mb-4">
          Our company is dedicated to providing high-quality packaging solutions for various industries, with a focus on plastic containers that meet international standards.
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-[#fff8e1] p-2 text-center text-sm border-t mt-4">
        All Rights Reserved By Daman Packaging | <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
      </footer>
    </div>
  );
};

export default About;
