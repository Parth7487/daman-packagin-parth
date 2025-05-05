
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ContactInfo from '../components/ContactInfo';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import GetQuoteButton from '../components/GetQuoteButton';
import { toast } from '../components/ui/sonner';
import { supabase } from '../integrations/supabase/client';
import { MapPin } from "lucide-react";
import Map from '../components/Map';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error, data } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw new Error(error.message);
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="font-medium">Phone Number</label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Your phone number" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="font-medium">Subject</label>
              <Input 
                id="subject" 
                placeholder="Message subject" 
                required 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="font-medium">Message</label>
              <Textarea 
                id="message" 
                placeholder="Your message" 
                rows={5} 
                required 
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <div className="flex space-x-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <GetQuoteButton variant="outline" />
            </div>
          </form>
          
          <div className="mt-8">
            <ContactInfo />
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
