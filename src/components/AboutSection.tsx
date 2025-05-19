
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="section-container grid md:grid-cols-2 gap-10">
        <div className="bg-gray-200 h-96 relative">
          {/* Video placeholder with play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-brand-blue border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 text-center bg-white bg-opacity-80 py-4">
            ODTWÓRZ VIDEO
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Profesjonalne zarządzanie nieruchomościami we Wrocławiu
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Rent Invest to lider w zakresie zarządzania najmem i mieszkań inwestycyjnych we Wrocławiu.
              Od 2017 roku pomagamy właścicielom i inwestorom maksymalizować zyski z wynajmu.
            </p>
            <p>
              Działamy we Wrocławiu od 2017 roku, łącząc doświadczenie z pasją do nieruchomości.
              Specjalizujemy się w kompleksowym zarządzaniu najmem, oferowaniem pakietów inwestycyjnych
              oraz realizacji projektów deweloperskich. Każdego klienta traktujemy indywidualnie, oferując
              elastyczne rozwiązania dopasowane do jego potrzeb i oczekiwań.
            </p>
            <p>
              Stawiamy na profesjonalizm, transparentność i długofalowe relacje - bo wiemy, że sukces w nieruchomościach buduje się na
              zaufaniu. Doskonale znamy lokalny rynek i tworzymy zespół ekspertów, którzy z zaangażowaniem
              wspierają klientów na każdym etapie współpracy.
            </p>
          </div>
          
          <div className="mt-8">
            <Link 
              to="/o-nas" 
              className="inline-flex items-center text-brand-blue hover:underline"
            >
              Dowiedz się więcej
              <ArrowRight className="arrow-icon ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
