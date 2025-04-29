
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={() => setIsOpen(true)} 
      />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img 
              src={src} 
              alt={alt} 
              className="max-h-[90vh] max-w-[90vw] object-contain" 
            />
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ZoomableImage;
