import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ZoomableImage from "@/components/ZoomableImage";

const Product = ({
  title,
  image,
  specs,
}: {
  title: string;
  image: string;
  specs: { label: string; value: string }[];
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <ZoomableImage
          src={image}
          alt={title}
          className="w-full max-w-[300px] h-auto object-contain"
        />
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

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const narrowMouthDrums = [
    {
      title: "JERRYCAN 5",
      image: "/lovable-uploads/4684a0d9-0bed-4050-a74b-1cf29bf6dd48.png",
      specs: [
        { label: "Useable Capacity (LTR.)", value: "5" },
        { label: "Height (mm)", value: "280" },
        { label: "Length (mm)", value: "150" },
        { label: "Width (mm)", value: "180" },
        { label: "Weight Range (gms)", value: "180 / 320" },
      ],
    },
    {
      title: "JERRYCAN 10",
      image: "/lovable-uploads/42dad834-500c-410e-a875-996bfc3c7f87.png",
      specs: [
        { label: "Useable Capacity (LTR.)", value: "10" },
        { label: "Height (mm)", value: "340" },
        { label: "Length (mm)", value: "175" },
        { label: "Width (mm)", value: "275" },
        { label: "Weight Range (gms)", value: "500 / 750" },
      ],
    },
    {
      title: "JERRYCAN 30",
      image: "/lovable-uploads/77293471-1fed-4935-b804-430c89986cbb.png",
      specs: [
        { label: "Brimful Capacity (LTR.)", value: "34" },
        { label: "Useable Capacity (LTR.)", value: "30" },
        { label: "Height (mm)", value: "480" },
        { label: "Length (mm)", value: "385" },
        { label: "Width (mm)", value: "235" },
        { label: "Weight Range (kgs)", value: "1.8/2.0/--" },
      ],
    },
    {
      title: "CROSS NECK JERRYCAN 35",
      image: "/lovable-uploads/3b3f53ba-bed6-41b3-973a-eaf4f17190b5.png",
      specs: [
        { label: "Brimful Capacity (LTR.)", value: "39" },
        { label: "Useable Capacity (LTR.)", value: "35" },
        { label: "Height (mm)", value: "500" },
        { label: "Length (mm)", value: "385" },
        { label: "Width (mm)", value: "235" },
        { label: "Weight Range (kgs)", value: "1.8/2.0/--" },
      ],
    },
    {
      title: "MOUSER 20",
      image: "/lovable-uploads/4a5b6a54-d9d9-4520-bcbe-32c0388abc69.png",
      specs: [
        { label: "Useable Capacity (LTR.)", value: "20" },
        { label: "Height (mm)", value: "400" },
        { label: "Length (mm)", value: "255" },
        { label: "Width (mm)", value: "270" },
        { label: "Weight Range (kgs)", value: "1.0/1.2" },
      ],
    },
    {
      title: "MOUSER 25",
      image: "/lovable-uploads/5a590a5d-a550-4ec2-a37b-5ef994b8f6a7.png",
      specs: [
        { label: "Useable Capacity (LTR)", value: "25" },
        { label: "Height (mm)", value: "470" },
        { label: "Length (mm)", value: "285" },
        { label: "Width (mm)", value: "320" },
        { label: "Weight Range (kgs)", value: "1.2/1.5" },
      ],
    },
    {
      title: "MOUSER 30",
      image: "/lovable-uploads/c4d8aa24-7d7f-43a2-bcd9-a1e454abdf52.png",
      specs: [
        { label: "Brimful Capacity (LTR.)", value: "35" },
        { label: "Useable Capacity (LTR.)", value: "30" },
        { label: "Height (mm)", value: "445" },
        { label: "Length (mm)", value: "315" },
        { label: "Width (mm)", value: "290" },
        { label: "Weight Range (kgs)", value: "1.8/2.0/--" },
      ],
    },
    {
      title: "MOUSER 35",
      image: "/lovable-uploads/9ef2f73f-d03a-435d-aced-5fad2010e65c.png",
      specs: [
        { label: "Brimful Capacity (LTR.)", value: "37" },
        { label: "Useable Capacity (LTR.)", value: "35" },
        { label: "Height (mm)", value: "470" },
        { label: "Length (mm)", value: "330" },
        { label: "Width (mm)", value: "285" },
        { label: "Weight Range (kgs)", value: "1.6/1.8" },
      ],
    },
    {
      title: "ROCKET 50 PLAIN",
      image: "/lovable-uploads/c1bc0dba-7a2e-42e0-b3a6-fd560b1fc251.png",
      specs: [
        { label: "Brimful Capacity (LTR.)", value: "54" },
        { label: "Useable Capacity (LTR.)", value: "50" },
        { label: "Height (mm)", value: "565" },
        { label: "Length (mm)", value: "400" },
        { label: "Width (mm)", value: "335" },
        { label: "Weight Range (kgs)", value: "2.5" },
      ],
    },
    {
      title: "ROCKET 50 WITH RIBS",
      image: "/lovable-uploads/3d9430ee-427f-4ed6-a7f3-fe6a7f7cbf57.png",
      specs: [
        { label: "Brimful Capacity (LTR.)", value: "54" },
        { label: "Useable Capacity (LTR.)", value: "50" },
        { label: "Height (mm)", value: "565" },
        { label: "Length (mm)", value: "400" },
        { label: "Width (mm)", value: "335" },
        { label: "Weight Range (kgs)", value: "2.5 / 2.8" },
      ],
    },
  ];

  const openMouthDrums = [
    {
      title: "CWM 50",
      image: "/lovable-uploads/94129eeb-707e-4fc9-b77f-25c5d528c4b9.png",
      specs: [
        { label: "Height (mm)", value: "555" },
        { label: "Dia (mm)", value: "400" },
        { label: "Mouth Opening (mm)", value: "148" },
        { label: "Weight Range (kgs)", value: "2.5 / 2.8" },
      ],
    },
    {
      title: "FOT 10",
      image: "/lovable-uploads/b22718a5-a733-4cfb-8894-5078eb795b86.png",
      specs: [
        { label: "Height (mm)", value: "250" },
        { label: "Dia (mm)", value: "250" },
        { label: "Mouth Opening (mm)", value: "245" },
        { label: "Weight Range (gms)", value: "500" },
      ],
    },
    {
      title: "FOT 15",
      image: "/lovable-uploads/fca43bdf-ce21-46cf-8a35-6fc47550232e.png",
      specs: [
        { label: "Height (mm)", value: "355" },
        { label: "Dia (mm)", value: "250" },
        { label: "Mouth Opening (mm)", value: "245" },
        { label: "Weight Range (kgs)", value: "0.8/1.0" },
      ],
    },
    {
      title: "FOT 20",
      image: "/lovable-uploads/526b53c5-353c-4581-bdbf-42b6a20e9f7f.png",
      specs: [
        { label: "Height (mm)", value: "445" },
        { label: "Dia (mm)", value: "300" },
        { label: "Mouth Opening (mm)", value: "250" },
        { label: "Weight Range (kgs)", value: "1.5/1.8" },
      ],
    },
    {
      title: "FOT 35 WITH PLASTIC RING",
      image: "/lovable-uploads/298cf9d3-e0bd-4816-8437-a78318b0ac92.png",
      specs: [
        { label: "Height (mm)", value: "560" },
        { label: "Dia (mm)", value: "330" },
        { label: "Mouth Opening (mm)", value: "250" },
        { label: "Weight Range (kgs)", value: "1.8/2.0/2.5" },
      ],
    },
    {
      title: "FOT 35 WITH METAL RING",
      image: "/lovable-uploads/37d70696-4dc2-4bc1-b51d-6e75f7a72fee.png",
      specs: [
        { label: "Height (mm)", value: "560" },
        { label: "Dia (mm)", value: "330" },
        { label: "Mouth Opening (mm)", value: "250" },
        { label: "Weight Range (kgs)", value: "1.8/2.0/2.5" },
      ],
    },
    {
      title: "FOT 50",
      image: "/lovable-uploads/f90ec22a-312e-43df-aa72-3b9a5be839ff.png",
      specs: [
        { label: "Height (mm)", value: "575" },
        { label: "Dia (mm)", value: "375" },
        { label: "Mouth Opening (mm)", value: "315" },
        { label: "Weight Range (kgs)", value: "2.5 / 2.8" },
      ],
    },
    {
      title: "FOT 60",
      image: "/lovable-uploads/9711786b-141c-4347-94f8-f45eb87fff98.png",
      specs: [
        { label: "Height (mm)", value: "630" },
        { label: "Dia (mm)", value: "385" },
        { label: "Mouth Opening (mm)", value: "315" },
        { label: "Weight Range (kgs)", value: "3.0 / 3.3 / 4.2" },
      ],
    },
    {
      title: "FOT 80",
      image: "/lovable-uploads/a0e7e47f-429a-42b1-9da0-6559688d1253.png",
      specs: [
        { label: "Height (mm)", value: "725" },
        { label: "Dia (mm)", value: "410" },
        { label: "Mouth Opening (mm)", value: "315" },
        { label: "Weight Range (kgs)", value: "3.3 / 3.5" },
      ],
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

      <div id="narrow-mouth-drum" className="mb-12 pt-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">NARROW MOUTH DRUM</h2>
        <div className="space-y-8">
          {narrowMouthDrums.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              image={product.image}
              specs={product.specs}
            />
          ))}
        </div>
      </div>

      <div id="open-mouth-drum" className="mb-12 pt-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 border-b pb-2">OPEN MOUTH DRUM</h2>
        <div className="space-y-8">
          {openMouthDrums.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              image={product.image}
              specs={product.specs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
