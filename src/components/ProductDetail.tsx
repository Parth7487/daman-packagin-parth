
import React, { useState } from 'react';
import ZoomableImage from './ZoomableImage';
import { MapPin } from "lucide-react";
import { Link } from 'react-router-dom';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductDetailProps {
  title: string;
  mainImage: ProductImage;
  detailImage?: ProductImage;
  specs: {
    label: string;
    value: string;
  }[];
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {detailImage ? (
              <div onClick={handleImageClick} className="cursor-pointer">
                <ZoomableImage 
                  src={currentImage.src} 
                  alt={currentImage.alt} 
                  className="w-full h-auto rounded-md" 
                />
                <p className="text-sm text-gray-500 mt-2">
                  {showDetailImage ? "Click to view product" : "Click to view specifications"}
                </p>
              </div>
            ) : (
              <ZoomableImage 
                src={mainImage.src} 
                alt={mainImage.alt} 
                className="w-full h-auto rounded-md" 
              />
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Specifications</h3>
            <div className="space-y-2">
              {specs.map((spec, index) => (
                <div key={index} className="flex border-b border-gray-200 pb-2">
                  <span className="font-medium w-1/2">{spec.label}:</span>
                  <span className="w-1/2">{spec.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <span>Contact for Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
