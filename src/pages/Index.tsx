
import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#265186] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Daman Packaging
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Manufacturer of Exclusively Virgin Quality HM-HDPE Jerry Cans & Open Top Drums
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#265186] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#265186] mb-4">
              Welcome to Daman Packaging
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Certified with ISO 9001: 2015, we are a packaging solution provider
              company incorporated in October 2020, serving diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#265186]">
              <h3 className="text-xl font-bold mb-3 text-[#265186]">
                Quality Assurance
              </h3>
              <p>
                We adhere to stringent quality control measures, ensuring our packaging
                products meet the highest industry standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#265186]">
              <h3 className="text-xl font-bold mb-3 text-[#265186]">
                Innovative Solutions
              </h3>
              <p>
                Our team develops innovative packaging solutions tailored to meet the
                specific requirements of various industries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-[#265186]">
              <h3 className="text-xl font-bold mb-3 text-[#265186]">
                Customer Satisfaction
              </h3>
              <p>
                We prioritize customer satisfaction, delivering reliable products and
                exceptional service to build lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#265186] mb-12 text-center">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Pharmaceutical", "Chemical", "Speciality Chemical", "Cosmetics", 
              "Perfumes", "Adhesives", "Lubricants", "Others"].map((industry) => (
              <div key={industry} className="bg-white p-4 rounded-lg shadow">
                <p className="font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#256694] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Discuss Your Packaging Requirements?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our packaging solutions can benefit your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#265186] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-[#265186] transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
