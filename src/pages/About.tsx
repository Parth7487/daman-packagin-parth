
import React from "react";

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#265186] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn more about Daman Packaging and our commitment to quality
          </p>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#265186] mb-6">
              Company Profile & Overview
            </h2>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Daman Packaging (Certified with ISO 9001: 2015) is a packaging solution 
                provider company incorporated on 17th October 2020. This is a private company 
                located in Silvassa Union territory of Daman & Diu, Dadra & Nagar Haveli. 
              </p>
              
              <p className="mb-4">
                Company is engaged in manufacturing of a variety of innovative packaging products
                to diverse industries like Pharma, Chemicals, Speciality Chemical,
                cosmetics, Perfumes, Adhesive, Lubricants and more.
              </p>
              
              <p className="mb-8">
                We have awarded with ISO 9000-2015 Certification in the year 2022 and with a 
                short span of time, we have gained the trust of numerous customers around the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#265186] mb-6">
              Our Commitment to Quality
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-[#265186]">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-gray-700">
                  Our quality management system meets international standards, ensuring 
                  consistent product quality and customer satisfaction.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-[#265186]">
                  Manufacturing Excellence
                </h3>
                <p className="text-gray-700">
                  We utilize state-of-the-art technology and follow stringent quality control 
                  procedures throughout the production process.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#265186]">
                  Customer-Centric Approach
                </h3>
                <p className="text-gray-700">
                  We listen to our customers' requirements and develop tailored packaging 
                  solutions to meet their specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#265186] mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To become a leading provider of innovative and sustainable packaging 
                  solutions, recognized for quality, reliability, and customer service 
                  excellence across India.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-[#265186] mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To deliver high-quality packaging products that meet or exceed our 
                  customers' expectations while maintaining ethical business practices 
                  and environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
