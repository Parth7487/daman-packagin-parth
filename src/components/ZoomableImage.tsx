
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

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
        <DialogContent className="p-0 max-w-[90vw] max-h-[90vh] bg-transparent border-none shadow-none">
          <div className="relative flex items-center justify-center">
            <img 
              src={src} 
              alt={alt} 
              className="max-h-[85vh] max-w-[85vw] object-contain" 
            />
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1 text-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomableImage;
