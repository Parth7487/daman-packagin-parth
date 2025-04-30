
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
  width?: string | number;
  height?: string | number;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'eager',
  onClick,
  width = 'auto',
  height = 'auto'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsOpen(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <div className={`${!isLoaded ? 'bg-gray-100 animate-pulse' : ''}`} style={{width, height}}>
        <img
          src={src}
          alt={alt}
          className={`${className} cursor-pointer ${!isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          onClick={handleClick}
          loading={loading}
          fetchPriority="high"
          onLoad={handleLoad}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
        />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] p-0 bg-transparent border-none">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[90vh] object-contain" 
            loading="eager"
            fetchPriority="high"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomableImage;
