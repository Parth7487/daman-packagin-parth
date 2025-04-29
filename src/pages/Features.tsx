
import React from "react";
import { 
  Battery, 
  Layers, 
  ShieldCheck, 
  Flame, 
  Salad, 
  PencilRuler, 
  Snowflake, 
  Gauge, 
  Palette 
} from "lucide-react";

const Features = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Battery className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">Strength</h2>
          </div>
          <p className="text-gray-700">
            Superior quality virgin HM-HDPE (High Molecular - High Density Polyethylene) material used by us, gives the container strength and longer life.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Layers className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">Stackability</h2>
          </div>
          <p className="text-gray-700">
            Our containers are suitable for stacking upto 2.5 mtrs. height as per UN/ISO standard without getting distorted.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <ShieldCheck className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">No Leakage</h2>
          </div>
          <p className="text-gray-700">
            Containers are 100% leak-proof.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Flame className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">Hot Pouring</h2>
          </div>
          <p className="text-gray-700">
            No deshaping / softening of the containers is observed even after filling hot water upto 60° C.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Salad className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">Food Product Compatibility</h2>
          </div>
          <p className="text-gray-700">
            The use of HM-HDPE, food grade material along with compatible master batches makes it suitable for edible products. It is without odour pick-up and there is no migration of plastic into the product.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <PencilRuler className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">Marking</h2>
          </div>
          <p className="text-gray-700">
            Screen printing/ stenceling / labelling can be done on the smooth-finish surface of the container.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Snowflake className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">Freezing</h2>
          </div>
          <p className="text-gray-700">
            Neither buckling or rupture nor leakage is observed after the containers are filled with anti-freezing solution and exposed to minus 18° C temperature.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Gauge className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">Pressure</h2>
          </div>
          <p className="text-gray-700">
            Our containers are strong enough to withstand 2.5 kg/cm² pressure.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Palette className="h-6 w-6 text-[#265186] mr-3" />
            <h2 className="text-xl font-semibold">Colour</h2>
          </div>
          <p className="text-gray-700">
            Jerrycans are normally manufactured in natural white/blue as standard colours. Drums are manufactured in blue colour. On request, the product can be manufactured in any other colour for bulk users.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Tests Conducted</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="flex items-center">
              <span className="text-[#265186] mr-2">→</span>
              <span className="font-medium">Drop Test</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="flex items-center">
              <span className="text-[#265186] mr-2">→</span>
              <span className="font-medium">Leakage Test</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="flex items-center">
              <span className="text-[#265186] mr-2">→</span>
              <span className="font-medium">Hydraulic Test</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="flex items-center">
              <span className="text-[#265186] mr-2">→</span>
              <span className="font-medium">Tare Weight</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="flex items-center">
              <span className="text-[#265186] mr-2">→</span>
              <span className="font-medium">Wall Thickness Test</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="flex items-center">
              <span className="text-[#265186] mr-2">→</span>
              <span className="font-medium">Visual Checks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
