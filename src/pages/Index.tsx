
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ClientPath from '@/components/ClientPath';
import Stats from '@/components/Stats';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import LocationMap from '@/components/LocationMap';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';

const Index = () => {
  return (
    <Layout>
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
