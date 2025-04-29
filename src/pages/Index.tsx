
import { Link } from "react-router-dom";

const Index = () => {
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
              Daman Packaging - Rajdeep Plastic Containers (I) Pvt. Ltd.
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
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914]"><Link to="/" className="block">Home</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914]"><Link to="/about" className="block">About Us</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914]"><Link to="/certifications" className="block">Certifications</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914]"><Link to="/products" className="block">Products</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914]"><Link to="/features" className="block">Features</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914]"><Link to="/chemical-resistance" className="block">Chemical Resistance Chart</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914]"><Link to="/enquiry" className="block">Enquiry</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4 border-r border-[#8B6914]"><Link to="/careers" className="block">Careers</Link></li>
            <li className="bg-[#b8860b] text-white py-2 px-4"><Link to="/contact" className="block">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      {/* Banner Image */}
      <div className="w-full bg-gradient-to-r from-[#e6a28d] to-[#f6e6b4] overflow-hidden">
        <img 
          src="/lovable-uploads/ed702fe7-d39e-441b-9a59-33d783305e2f.png" 
          alt="Plastic Containers" 
          className="w-full"
        />
      </div>

      {/* Tagline Banner */}
      <div className="bg-[#505a6c] text-white py-2 text-center text-lg md:text-xl">
        Manufacturer of Exclusively Virgin Quality HM-HDPE Jerry Cans & Open Top Drums
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="w-full md:w-[30%] bg-[#fff8e1] p-4">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="h-4 w-4 bg-red-600 mr-2 flex items-center justify-center text-white text-xs">×</div>
              <h2 className="text-lg font-bold uppercase">PRODUCTS</h2>
            </div>

            <div className="mb-6">
              <h3 className="font-bold uppercase mb-1">NARROW MOUTH JERRYCANS</h3>
              <p className="mb-1">Product range:</p>
              <p className="mb-4">5 ltrs to 120 ltrs capacity.</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold uppercase mb-1">OPEN TOP ROUND DRUMS</h3>
              <p className="mb-1">Product range:</p>
              <p className="mb-4">10 kgs to 200 kgs capacity.</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold uppercase mb-1">NARROW MOUTH ROUND DRUMS</h3>
              <p className="mb-1">Product range:</p>
              <p>25 ltrs to 120 ltrs capacity.</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[70%] bg-white p-4">
          <h2 className="text-2xl font-bold text-[#b8392e] mb-4">Welcome to Daman Packaging - Rajdeep Plastic Containers (I) Pvt. Ltd.</h2>
          
          <p className="mb-4">
            In a span of three decades, <strong>Daman Packaging - Rajdeep Plastic Containers (I) Pvt. Ltd.</strong> has grown to become one of the leading manufacturers of plastic containers in India. Our first production line commenced in 1976.
          </p>
          
          <p className="mb-6">
            With modernization and constant upgradation of our plant with the latest technology, the company has never looked back. Our endeavour right from suggesting proper packaging and filling methods, providing packaging solutions for industrial and food grade aromatics, to selecting the right grades and stringent quality controls has made us a name to reckon with.
          </p>

          <div className="flex flex-wrap justify-between gap-2 mt-4">
            <div className="border border-gray-300">
              <img src="https://i.imgur.com/uxpBxzm.png" alt="ISO 9001:2008" className="w-full h-auto" />
            </div>
            <div className="border border-gray-300">
              <img src="https://i.imgur.com/5VTyCKD.png" alt="UN Approved" className="w-full h-auto" />
            </div>
            <div className="border border-gray-300">
              <img src="https://i.imgur.com/1Te4eqT.png" alt="High Drop Impact Resistance" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#fff8e1] p-2 text-center text-sm border-t mt-4">
        All Rights Reserved By Daman Packaging - Rajdeep Plastic Containers (I) Pvt. Ltd. | <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
      </footer>
    </div>
  );
};

export default Index;
