
import React from "react";
import ZoomableImage from "@/components/ZoomableImage";

const Certifications = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Certifications</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">Lifetime membership of:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-gray-700">ALL INDIA PLASTIC MANUFACTURERS ASSOCIATION since 1980</li>
            <li className="text-gray-700">INDIAN INSTITUTE OF PACKAGING since 1994</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-6 text-center">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <ZoomableImage 
              src="/lovable-uploads/7f88d094-07c6-455c-b591-c2b83eca3406.png" 
              alt="Daman Packaging Certifications" 
              className="max-w-full h-auto"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="italic text-gray-600">
              Our certifications demonstrate our commitment to quality and excellence in manufacturing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
