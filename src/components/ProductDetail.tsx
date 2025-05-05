
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
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <div className="relative">
          <ZoomableImage
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full max-w-[300px] h-auto object-contain cursor-pointer"
            onClick={handleImageClick}
          />
          {detailImage && (
            <div className="absolute bottom-2 right-2">
              <button
                onClick={handleImageClick}
                className="bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-70 hover:opacity-100"
              >
                {showDetailImage ? 'Show Main' : 'Show Details'}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {specs.map((spec, index) => (
            <div key={index} className="flex">
              <span className="min-w-[180px] font-medium text-gray-600">
                {spec.label}
              </span>
              <span className="text-gray-800">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
