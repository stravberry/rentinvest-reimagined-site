
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ClientPath from '@/components/ClientPath';
import Stats from '@/components/Stats';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import LocationMap from '@/components/LocationMap';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import { STRAPI_URL } from '@/config/strapiConfig';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Check if Strapi URL is configured
  const isStrapiConfigured = STRAPI_URL !== 'http://localhost:1337';
  
  return (
    <Layout>
      {!isStrapiConfigured && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Strapi CMS nie jest jeszcze poprawnie skonfigurowany. 
                <Link to="/admin" className="font-medium underline text-yellow-700 hover:text-yellow-600 ml-1">
                  Przejdź do instrukcji konfiguracji
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
      
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Kim jesteś? Wybierz swoją ścieżkę
          </h2>
          
          <div className="space-y-12">
            <ClientPath 
              number="01"
              title="Właściciel mieszkania na wynajem"
              description="Masz nieruchomość inwestycyjną we Wrocławiu i chcesz, by przynosiła zyski bez Twojego zaangażowania? Zajmiemy się wszystkim - od znalezienia odpowiednich najemców po bieżące zarządzanie najmem."
              link="/zarzadzanie-najmem"
              imageSrc="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            />
            
            <ClientPath 
              number="02"
              title="Inwestor nieruchomości"
              description="Planujesz inwestycję w nieruchomość we Wrocławiu? Pomożemy Ci wybrać najlepszą ofertę, wykończyć mieszkanie pod wynajem i zarządzać nim w sposób maksymalizujący zwrot z inwestycji."
              link="/inwestowanie-w-nieruchomosci"
              imageSrc="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            />
            
            <ClientPath 
              number="03"
              title="Deweloper"
              description="Poszukujesz profesjonalnej firmy do zarządzania najmem Twoich inwestycji? Wspieramy deweloperów w sprzedaży i optymalnym przygotowaniu mieszkań pod wynajem."
              link="/deweloperzy"
              imageSrc="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
            />
          </div>
        </div>
      </section>
      
      <CTA />
      <AboutSection />
      <Stats />
      <Testimonials />
      <LocationMap />
      <ContactForm />
    </Layout>
  );
};

export default Index;
