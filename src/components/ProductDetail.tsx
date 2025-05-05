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
  return;
};
export default ProductDetail;