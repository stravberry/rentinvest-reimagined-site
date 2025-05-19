
import React from 'react';

interface StatProps {
  number: string;
  label: string;
}

const StatBox: React.FC<StatProps> = ({ number, label }) => {
  return (
    <div className="border-r border-gray-200 last:border-r-0 p-8 flex flex-col items-center">
      <h3 className="text-5xl font-bold text-brand-blue mb-2">{number}</h3>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Nasze liczby mówią same za siebie
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Zarządzamy wieloma nieruchomościami, współpracujemy z setkami zadowolonych klientów i pomagamy osiągać
          stabilne zyski z inwestycji. Nasze doświadczenie i skuteczność to gwarancja Twojego sukcesu.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 mb-10">
          <StatBox number="200+" label="Zadowolonych najemców" />
          <StatBox number="120+" label="mieszkań inwestycyjnych przygotowanych pod wynajem" />
          <StatBox number="< 5 lat" label="wieloletnie doświadczenie w obsłudze najmu długoterminowego" />
        </div>
        
        <div className="text-center">
          <button className="btn-primary">
            Skontaktuj się z nami
            <ArrowRight className="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
