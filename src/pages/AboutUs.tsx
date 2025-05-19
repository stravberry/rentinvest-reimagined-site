
import React from 'react';
import Layout from '@/components/Layout';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">O nas</h1>
          <p className="text-gray-600">Poznaj zespół Rent Invest i naszą historię</p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Naszą misją jest profesjonalne zarządzanie najmem</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Rent Invest to firma założona z pasji do nieruchomości i chęci dostarczania najwyższej jakości usług zarządzania najmem.
                  Od 2017 roku pomagamy właścicielom nieruchomości maksymalizować zwroty z ich inwestycji, zapewniając kompleksową obsługę.
                </p>
                <p>
                  Nasza firma powstała z inicjatywy ekspertów rynku nieruchomości z wieloletnim doświadczeniem.
                  Połączyliśmy nasze umiejętności, wiedzę i kontakty, aby stworzyć firmę, która rozumie zarówno potrzeby właścicieli, jak i najemców.
                </p>
                <p>
                  Nasze wartości to profesjonalizm, uczciwość i zaangażowanie. Wierzymy, że relacje biznesowe powinny być oparte na zaufaniu i transparentności.
                  Dlatego nasi klienci mogą liczyć na pełną informację o swoich nieruchomościach i podejmowanych przez nas działaniach.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96"></div>
          </div>
        </div>
      </section>
      
      <Stats />
      
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-center mb-12">Nasz zespół</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Imię Nazwisko</h3>
                <p className="text-gray-600">Stanowisko</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">Gotowy do współpracy?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Skontaktuj się z nami i dowiedz się, jak możemy pomóc Ci maksymalizować zyski z Twoich nieruchomości.
          </p>
          <Link to="/kontakt" className="btn-primary inline-flex">
            Skontaktuj się z nami
            <ArrowRight className="arrow-icon" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
