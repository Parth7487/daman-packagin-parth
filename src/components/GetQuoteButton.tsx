
import React from 'react';
import { WhatsApp } from 'lucide-react';
import { Button } from './ui/button';

interface GetQuoteButtonProps {
  className?: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const GetQuoteButton: React.FC<GetQuoteButtonProps> = ({ 
  className = "", 
  variant = "default",
  size = "default" 
}) => {
  const whatsappNumber = "+919999999999"; // Replace with your actual WhatsApp number
  const message = "Hello, I would like to get a quote for your packaging products.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <Button 
      variant={variant}
      size={size}
      className={`flex items-center gap-2 ${className}`} 
      onClick={() => window.open(whatsappUrl, '_blank')}
    >
      <WhatsApp size={18} />
      <span>Get a Quote</span>
    </Button>
  );
};

export default GetQuoteButton;
