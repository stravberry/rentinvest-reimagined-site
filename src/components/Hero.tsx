
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchHero, StrapiHero, getStrapiMediaUrl } from '@/services/strapiService';

const Hero = () => {
  const { data: heroData, isLoading, error } = useQuery({
    queryKey: ['hero'],
    queryFn: fetchHero,
  });

  // Fallback data in case the API call fails or while loading
  const fallbackHero = {
    title: "Profesjonalne Zarządzanie Najmem i Inwestycje w Nieruchomości",
    subtitle: "we Wrocławiu",
    backgroundImage: { data: { attributes: { url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" }}},
    features: [
      { id: 1, text: "Kompleksowa obsługa właścicieli mieszkań inwestycyjnych" },
      { id: 2, text: "Skuteczne zarządzanie wynajmem krótkoterminowym i długoterminowym" },
      { id: 3, text: "Bezpieczne inwestowanie w nieruchomości we Wrocławiu" }
    ]
  };

  // Use fallback data if loading or error
  const hero = heroData || fallbackHero;
  
  // Get background image URL
  const backgroundImage = getStrapiMediaUrl(hero.backgroundImage?.data?.attributes?.url);

  return (
    <div className="hero-section relative w-full h-[80vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url("${backgroundImage}")`,
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      <div className="relative h-full flex items-center">
        <div className="section-container text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {hero.title}
            </h1>
            <h2 className="text-3xl md:text-4xl mb-12">{hero.subtitle}</h2>
            <div className="bg-white bg-opacity-90 text-black p-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {hero.features?.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <span className="text-brand-blue mr-2">✓</span>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
