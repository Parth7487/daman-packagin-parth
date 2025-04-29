
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import GetQuoteButton from '../components/GetQuoteButton';

const ContactUs: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <Helmet>
        <title>Contact Us - Daman Packaging</title>
      </Helmet>

      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="font-medium">Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">Email</label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="font-medium">Phone Number</label>
              <Input id="phone" type="tel" placeholder="Your phone number" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="font-medium">Subject</label>
              <Input id="subject" placeholder="Message subject" required />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="font-medium">Message</label>
              <Textarea id="message" placeholder="Your message" rows={5} required />
            </div>
            
            <div className="flex space-x-4">
              <Button type="submit">Send Message</Button>
              <GetQuoteButton variant="outline" />
            </div>
          </form>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <ContactInfo />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Location</h2>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
