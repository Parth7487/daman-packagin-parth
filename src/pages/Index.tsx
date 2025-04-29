
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Banner Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center w-full"
        style={{ 
          backgroundImage: `url('/lovable-uploads/0778ba5a-760d-40b1-985d-60832ff5daf5.png')`,
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to Daman Packaging
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Manufacturer of Exclusively Virgin Quality HM-HDPE Jerry Cans & Open Top Drums
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button size="lg" className="bg-[#265186] hover:bg-[#256694]">
                View Our Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-blue-600 text-black hover:bg-blue-700 hover:text-black">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <img 
              src="/lovable-uploads/7f88d094-07c6-455c-b591-c2b83eca3406.png" 
              alt="Certifications" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#265186] mb-12">Why Choose Daman Packaging?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#265186] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
              <p className="text-gray-600">
                ISO 9001:2015 certified manufacturer committed to delivering high-quality packaging products.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#265186] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Diverse Range</h3>
              <p className="text-gray-600">
                Comprehensive selection of HDPE bottles, jerry cans, and drums to meet various industry needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#265186] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Trust</h3>
              <p className="text-gray-600">
                Earned the trust of numerous customers across India with our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#265186] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your packaging requirements and get a customized quote.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="bg-black text-white border-black hover:bg-gray-800 hover:text-white">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
