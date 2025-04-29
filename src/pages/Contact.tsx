import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Phone Number"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="font-bold text-gray-800 w-24">Address:</span>
                <span className="text-gray-600">123 Industrial Zone, City, State, Country</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-gray-800 w-24">Phone:</span>
                <span className="text-gray-600">+123 456 7890</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-gray-800 w-24">Email:</span>
                <span className="text-gray-600">info@damanpackaging.com</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-gray-800 w-24">Hours:</span>
                <span className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">Map will be displayed here</span>
              {/* You can integrate an actual map here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
