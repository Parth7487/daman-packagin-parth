import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
const Products = () => {
  const productItems = [{
    title: "JERRYCAN 5",
    specs: [{
      label: "Useable Capacity (LTR.)",
      value: "5"
    }, {
      label: "Height (mm)",
      value: "280"
    }, {
      label: "Length (mm)",
      value: "150"
    }, {
      label: "Width (mm)",
      value: "180"
    }, {
      label: "Weight Range (gms)",
      value: "180 / 320"
    }],
    imageUrl: "/lovable-uploads/8258c0d5-32dc-46e1-9fe6-f2e2ed03574a.png"
  }, {
    title: "JERRYCAN 30",
    specs: [{
      label: "Brimful Capacity (LTR.)",
      value: "34"
    }, {
      label: "Useable Capacity (LTR.)",
      value: "30"
    }, {
      label: "Height (mm)",
      value: "480"
    }, {
      label: "Length (mm)",
      value: "385"
    }, {
      label: "Width (mm)",
      value: "235"
    }, {
      label: "Weight Range (kgs)",
      value: "1.8/2.0/--"
    }],
    imageUrl: "/lovable-uploads/427ee0a3-e181-4ace-8f72-965f5b9da7ef.png"
  }, {
    title: "CROSS NECK JERRYCAN 35",
    specs: [{
      label: "Brimful Capacity (LTR.)",
      value: "39"
    }, {
      label: "Useable Capacity (LTR.)",
      value: "35"
    }, {
      label: "Height (mm)",
      value: "500"
    }, {
      label: "Length (mm)",
      value: "385"
    }, {
      label: "Width (mm)",
      value: "235"
    }, {
      label: "Weight Range (kgs)",
      value: "1.8/2.0/--"
    }],
    imageUrl: "/lovable-uploads/1052e5a3-0896-4afe-bcb6-eb77041f06d0.png"
  }];
  const productCategories = [{
    title: "HDPE Narrow Mouth Bottle - Rectangular",
    items: [{
      capacity: "100 ml",
      neck: "28 mm",
      material: "HDPE",
      weight: "16 grams",
      dimensions: "52 x 35 x 98 mm"
    }, {
      capacity: "250 ml",
      neck: "28 mm",
      material: "HDPE",
      weight: "26 grams",
      dimensions: "60 x 43 x 130 mm"
    }, {
      capacity: "500 ml",
      neck: "28 mm",
      material: "HDPE",
      weight: "40 grams",
      dimensions: "75 x 49 x 166 mm"
    }, {
      capacity: "1000 ml",
      neck: "28 mm",
      material: "HDPE",
      weight: "65 grams",
      dimensions: "86 x 61 x 210 mm"
    }],
    imageUrl: "/lovable-uploads/0778ba5a-760d-40b1-985d-60832ff5daf5.png"
  }, {
    title: "HDPE Jerry Cans",
    items: [{
      capacity: "1 Liter",
      neck: "32 mm",
      material: "HDPE",
      weight: "60 grams",
      dimensions: "95 x 75 x 180 mm"
    }, {
      capacity: "2 Liter",
      neck: "32 mm",
      material: "HDPE",
      weight: "100 grams",
      dimensions: "120 x 90 x 210 mm"
    }, {
      capacity: "5 Liter",
      neck: "55 mm / 42 mm",
      material: "HDPE",
      weight: "190 grams",
      dimensions: "175 x 150 x 270 mm"
    }, {
      capacity: "10 Liter",
      neck: "55 mm / 42 mm",
      material: "HDPE",
      weight: "380 grams",
      dimensions: "210 x 195 x 320 mm"
    }, {
      capacity: "20 Liter",
      neck: "55 mm / 42 mm",
      material: "HDPE",
      weight: "700 grams",
      dimensions: "250 x 230 x 380 mm"
    }, {
      capacity: "25 Liter",
      neck: "55 mm / 42 mm",
      material: "HDPE",
      weight: "850 grams",
      dimensions: "270 x 250 x 450 mm"
    }, {
      capacity: "35 Liter",
      neck: "55 mm / 42 mm",
      material: "HDPE",
      weight: "1200 grams",
      dimensions: "310 x 280 x 480 mm"
    }, {
      capacity: "50 Liter",
      neck: "55 mm / 42 mm",
      material: "HDPE",
      weight: "1700 grams",
      dimensions: "360 x 310 x 510 mm"
    }],
    imageUrl: "/lovable-uploads/0778ba5a-760d-40b1-985d-60832ff5daf5.png"
  }, {
    title: "HDPE Open Top Drums",
    items: [{
      capacity: "15 Liter",
      neck: "Opening 285 mm",
      material: "HDPE",
      weight: "900 grams",
      dimensions: "300 mm dia x 330 mm height"
    }, {
      capacity: "20 Liter",
      neck: "Opening 285 mm",
      material: "HDPE",
      weight: "1100 grams",
      dimensions: "300 mm dia x 390 mm height"
    }, {
      capacity: "25 Liter",
      neck: "Opening 285 mm",
      material: "HDPE",
      weight: "1300 grams",
      dimensions: "300 mm dia x 450 mm height"
    }, {
      capacity: "30 Liter",
      neck: "Opening 285 mm",
      material: "HDPE",
      weight: "1550 grams",
      dimensions: "300 mm dia x 510 mm height"
    }, {
      capacity: "35 Liter",
      neck: "Opening 380 mm",
      material: "HDPE",
      weight: "1700 grams",
      dimensions: "400 mm dia x 350 mm height"
    }, {
      capacity: "40 Liter",
      neck: "Opening 380 mm",
      material: "HDPE",
      weight: "1850 grams",
      dimensions: "400 mm dia x 400 mm height"
    }, {
      capacity: "50 Liter",
      neck: "Opening 380 mm",
      material: "HDPE",
      weight: "2200 grams",
      dimensions: "400 mm dia x 470 mm height"
    }, {
      capacity: "60 Liter",
      neck: "Opening 380 mm",
      material: "HDPE",
      weight: "2500 grams",
      dimensions: "400 mm dia x 550 mm height"
    }],
    imageUrl: "/lovable-uploads/0778ba5a-760d-40b1-985d-60832ff5daf5.png"
  }, {
    title: "HDPE Open Mouth Drums",
    items: [{
      capacity: "30 Liter",
      neck: "Two openings 50/38 mm",
      material: "HDPE",
      weight: "1650 grams",
      dimensions: "315 mm dia x 510 mm height"
    }, {
      capacity: "50 Liter",
      neck: "Two openings 50/38 mm",
      material: "HDPE",
      weight: "2500 grams",
      dimensions: "380 mm dia x 590 mm height"
    }, {
      capacity: "100 Liter",
      neck: "Two openings 50/38 mm",
      material: "HDPE",
      weight: "4000 grams",
      dimensions: "485 mm dia x 680 mm height"
    }, {
      capacity: "125 Liter",
      neck: "Two openings 50/38 mm",
      material: "HDPE",
      weight: "4800 grams",
      dimensions: "485 mm dia x 830 mm height"
    }, {
      capacity: "150 Liter",
      neck: "Two openings 50/38 mm",
      material: "HDPE",
      weight: "5700 grams",
      dimensions: "485 mm dia x 960 mm height"
    }, {
      capacity: "200 Liter",
      neck: "Two openings 50/38 mm",
      material: "HDPE",
      weight: "7600 grams",
      dimensions: "585 mm dia x 915 mm height"
    }, {
      capacity: "235 Liter",
      neck: "Two openings 50/38 mm",
      material: "HDPE",
      weight: "8500 grams",
      dimensions: "585 mm dia x 1040 mm height"
    }],
    imageUrl: "/lovable-uploads/0778ba5a-760d-40b1-985d-60832ff5daf5.png"
  }];
  return <div className="container mx-auto px-4 py-[47px]">
      <div className="bg-cover bg-center h-48 flex items-center justify-center mb-8" style={{
      backgroundImage: 'url(/lovable-uploads/0778ba5a-760d-40b1-985d-60832ff5daf5.png)'
    }}>
        <h1 className="text-3xl font-bold text-white mb-8 text-center bg-black bg-opacity-50 p-4 rounded">Our Products</h1>
      </div>
      
      {/* Featured Products with larger images and detailed specs */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-[#265186] mb-8 text-center">Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productItems.map((product, idx) => <div key={idx} className="border rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="h-64 bg-white flex items-center justify-center p-4 border-b">
                <img src={product.imageUrl} alt={product.title} className="max-h-full max-w-full object-contain" onError={e => {
              e.currentTarget.src = "https://placehold.co/400x400/265186/FFFFFF?text=Product+Image";
            }} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#265186] mb-4">{product.title}</h3>
                <div className="space-y-2">
                  {product.specs.map((spec, specIdx) => <p key={specIdx} className="flex justify-between">
                      <span className="font-medium">{spec.label}</span>
                      <span className="text-gray-700">{spec.value}</span>
                    </p>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
      
      {/* Other Product Categories */}
      <div className="flex flex-col gap-16">
        {productCategories.map((category, idx) => <section key={idx} className="border-b border-gray-200 pb-12 last:border-b-0">
            <h2 className="text-2xl font-semibold text-[#265186] mb-6">{category.title}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1">
                <Card className="shadow-md overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="bg-gray-100 h-64 flex items-center justify-center p-4">
                      <img src={category.imageUrl} alt={category.title} className="max-h-full object-contain" onError={e => {
                    e.currentTarget.src = "https://placehold.co/300x300/265186/FFFFFF?text=Product+Image";
                  }} />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="col-span-1 lg:col-span-2">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bg-[#265186] text-white">Capacity</TableHead>
                        <TableHead className="bg-[#265186] text-white">Neck</TableHead>
                        <TableHead className="bg-[#265186] text-white">Material</TableHead>
                        <TableHead className="bg-[#265186] text-white">Weight</TableHead>
                        <TableHead className="bg-[#265186] text-white">Dimensions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.items.map((item, itemIdx) => <TableRow key={itemIdx} className={itemIdx % 2 === 0 ? "bg-gray-50" : ""}>
                          <TableCell className="font-medium">{item.capacity}</TableCell>
                          <TableCell>{item.neck}</TableCell>
                          <TableCell>{item.material}</TableCell>
                          <TableCell>{item.weight}</TableCell>
                          <TableCell>{item.dimensions}</TableCell>
                        </TableRow>)}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </section>)}
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Need Custom Packaging Solutions?</h3>
        <p className="mb-6">Contact us to discuss your specific requirements.</p>
        <Link to="/contact" className="bg-[#265186] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#256694] transition duration-300">
          Contact Us
        </Link>
      </div>
    </div>;
};
export default Products;