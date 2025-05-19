
import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Gdzie działamy?
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Najlepsze lokalizacje we Wrocławiu
        </h3>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600">
          Dzięki strategicznym lokalizacjom mieszkań, oferujemy inwestycje o wysokim potencjale wynajmu.
          Nasze nieruchomości znajdują się w pobliżu kluczowych punktów biznesowych i akademickich.
        </p>
        
        <div className="w-full h-96 bg-gray-200 relative rounded-lg overflow-hidden">
          {/* Map placeholder - in a real implementation you would use an actual map component */}
          <div className="absolute inset-0 opacity-50">
            <img 
              src="/map-placeholder.jpg" 
              alt="Mapa lokalizacji Rent Invest we Wrocławiu" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.backgroundColor = "#e5e7eb";
              }}
            />
          </div>
          
          {/* Map markers */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white">
              R
            </div>
          </div>
          <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white">
              R
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
