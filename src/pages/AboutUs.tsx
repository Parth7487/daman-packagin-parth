
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactInfo from '../components/ContactInfo';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Helmet>
        <title>About Us - Daman Packaging</title>
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-center">About Daman Packaging</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Daman Packaging is a leading manufacturer of exclusively virgin quality HM-HDPE Jerry Cans and Open Top Drums. 
              With years of experience in the packaging industry, we have established ourselves as a reliable partner for 
              businesses looking for high-quality packaging solutions.
            </p>
            <p className="mb-4">
              Our state-of-the-art manufacturing facility in Silvassa is equipped with the latest technology 
              to produce packaging products that meet international standards. We pride ourselves on our 
              commitment to quality, innovation, and customer satisfaction.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Our Mission</h2>
            <p className="mb-4">
              Our mission is to provide our clients with the highest quality packaging solutions that are 
              durable, reliable, and environmentally friendly. We are committed to using only virgin quality 
              materials to ensure the safety and integrity of our clients' products.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-8">Our Vision</h2>
            <p className="mb-4">
              We aim to be the leading provider of packaging solutions in India and beyond, known for our 
              quality, reliability, and innovation. We strive to continuously improve our products and 
              processes to meet the evolving needs of our clients.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quality - We never compromise on the quality of our products</li>
              <li>Innovation - We continuously seek to improve and innovate</li>
              <li>Reliability - Our clients can count on us to deliver on time, every time</li>
              <li>Sustainability - We are committed to environmentally friendly practices</li>
              <li>Customer Focus - We put our customers' needs first</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
