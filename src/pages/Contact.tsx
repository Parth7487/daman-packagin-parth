
import React from "react";
import ContactInfo from "../components/ContactInfo";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import Map from "../components/Map";

const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          
          <div className="mb-8">
            <ContactInfo iconSize={18} className="mb-8" />
          </div>
          
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number
              </Label>
              <Input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </Label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <Button
              type="submit"
              className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="font-bold text-gray-800 w-24">Address:</span>
                <span className="text-gray-600">SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE, MASAT, SILVASSA, Masat Industrial Area, 
                Dadra And Nagar Haveli, Dadra and Nagar Haveli and Daman and Diu - 396230</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-gray-800 w-24">Phone:</span>
                <span className="text-gray-600">+91 94268 77849</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-gray-800 w-24">Email:</span>
                <span className="text-gray-600">info@damanpackaging.com, sales1@damanpackaging.com</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-gray-800 w-24">GSTIN:</span>
                <span className="text-gray-600">26ADBPC8417F1ZX</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
