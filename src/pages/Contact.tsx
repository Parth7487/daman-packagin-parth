import React from "react";
const Contact = () => {
  return <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number
              </label>
              <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Phone Number" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
            </div>
            
            <button type="submit" className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
        
        
      </div>
    </div>;
};
export default Contact;