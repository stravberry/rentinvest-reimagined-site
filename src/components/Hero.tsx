
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section relative w-full h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3")',
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      <div className="relative h-full flex items-center">
        <div className="section-container text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Profesjonalne Zarządzanie Najmem i Inwestycje w Nieruchomości
            </h1>
            <h2 className="text-3xl md:text-4xl mb-12">we Wrocławiu</h2>
            <div className="bg-white bg-opacity-90 text-black p-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <span className="text-brand-blue mr-2">✓</span>
                <p>Kompleksowa obsługa właścicieli mieszkań inwestycyjnych</p>
              </div>
              <div className="flex items-start">
                <span className="text-brand-blue mr-2">✓</span>
                <p>Skuteczne zarządzanie wynajmem krótkoterminowym i długoterminowym</p>
              </div>
              <div className="flex items-start">
                <span className="text-brand-blue mr-2">✓</span>
                <p>Bezpieczne inwestowanie w nieruchomości we Wrocławiu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
