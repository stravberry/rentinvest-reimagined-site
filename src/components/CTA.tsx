
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 bg-brand-blue text-white">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Nie widzisz swojej roli?
        </h2>
        <p className="max-w-xl mx-auto mb-8">
          Skontaktuj się z nami – dopasujemy rozwiązanie do Twoich potrzeb!
        </p>
        <Link to="/kontakt" className="btn-primary bg-white text-brand-blue hover:bg-gray-100">
          Skontaktuj się z nami
          <ArrowRight className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
