
import React from 'react';
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
  const whatsappNumber = "+919426877849"; // Updated WhatsApp number
  const message = "Hello, I would like to get a quote for your packaging products.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <Button 
      variant={variant}
      size={size}
      className={`flex items-center gap-2 ${className}`} 
      onClick={() => window.open(whatsappUrl, '_blank')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 1 1 0c0 .97 2 3 2 3a.5.5 0 0 0 1 0V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3" />
      </svg>
      <span>Get a Quote</span>
    </Button>
  );
};

export default GetQuoteButton;
