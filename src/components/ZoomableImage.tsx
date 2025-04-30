
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'eager', // Changed default to eager for product images
  onClick 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer`}
        onClick={handleClick}
        loading={loading}
        fetchPriority="high" // Added fetch priority for faster loading
      />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[80vw] p-0 bg-transparent border-none">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[80vh] object-contain" 
            loading="eager"
            fetchPriority="high"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomableImage;
