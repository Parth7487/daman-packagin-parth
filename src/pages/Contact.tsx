
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#265186] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for inquiries and support
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-[#265186] mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#265186] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <address className="not-italic">
                        <p>SHED NO.2, PLOT NO. 50, GOVERNMENT INDUSTRIAL ESTATE,</p>
                        <p>MASAT, SILVASSA, Masat Industrial Area,</p>
                        <p>Dadra And Nagar Haveli,</p>
                        <p>Dadra and Nagar Haveli and Daman and Diu - 396230.</p>
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#265186] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p>
                        <a href="tel:+919426877849" className="hover:text-[#265186]">
                          MR. B.R. CHAUHAN (+91 94268 77849)
                        </a>
                      </p>
                      <p className="mt-3">
                        <a href="https://wa.me/919426877849" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#265186] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p>
                        <a href="mailto:sales1@damanpackaging.com" className="hover:text-[#265186]">
                          sales1@damanpackaging.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-semibold text-lg mb-1">Website</h3>
                    <p>
                      <a href="https://www.damanpackaging.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#265186]">
                        www.damanpackaging.com
                      </a>
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="font-semibold text-lg mb-1">GSTIN</h3>
                    <p>26ADBPC8417F1ZX</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#265186] mb-6">
                  Send us a Message
                </h2>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#265186]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#265186]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#265186]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#265186]"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-[#265186] text-white px-6 py-3 rounded-md font-medium hover:bg-[#256694] transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#265186] mb-6 text-center">
            Our Location
          </h2>
          
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.6576827942395!2d73.12043857517315!3d20.208512079497738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e8e25654c5f5%3A0xe6a1cba175979278!2sMasat%20Industrial%20Area!5e0!3m2!1sen!2sin!4v1714494495821!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
              title="Daman Packaging Location" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
