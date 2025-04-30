
import React, { useState } from 'react';
import ZoomableImage from './ZoomableImage';
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductDetailProps {
  title: string;
  mainImage: ProductImage;
  detailImage?: ProductImage;
  specs: { label: string; value: string }[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  mainImage,
  detailImage,
  specs
}) => {
  const [showDetailImage, setShowDetailImage] = useState(false);
  
  const handleImageClick = () => {
    if (detailImage) {
      setShowDetailImage(!showDetailImage);
    }
  };

  const currentImage = showDetailImage && detailImage ? detailImage : mainImage;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <ZoomableImage
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full max-w-[300px] h-auto object-contain cursor-pointer"
          onClick={handleImageClick}
          loading="eager" // Added eager loading for product images
        />
        {detailImage && (
          <div className="mt-2 text-center text-sm text-gray-500">
            {showDetailImage ? "Click to see standard view" : "Click for detailed view"}
          </div>
        )}
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {specs.map((spec, index) => (
            <div key={index} className="flex">
              <span className="min-w-[180px] font-medium text-gray-600">
                {spec.label}
              </span>
              <span className="text-gray-800">{spec.value}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <Link to="/downloads/brochure.pdf" target="_blank" download>
            <Button variant="outline" size="sm" className="bg-[#265186] text-white hover:bg-[#1d3c69]">
              <Download size={16} className="mr-2" /> Download Product Brochure
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
