
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialProps {
  name: string;
  title: string;
  image: string;
  quote: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "ALEKSANDRA MAJKRZAK",
    title: "Klientka indywidualna",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "Jestem bardzo zadowolona ze współpracy z Panem Maksem. Prezentacja profesjonalna, zostały wskazane mi wszystkie szczegóły oraz bezproblemowo uzyskałam odpowiedzi na wszystkie moje pytania - a same mieszkanie naprawdę piękne i funkcjonalne :). Serdecznie polecam!"
  },
  {
    name: "MARCIN NOWAK",
    title: "Inwestor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Profesjonalne podejście, szybka realizacja i pełna transparentność. Współpraca z Rent Invest to był strzał w dziesiątkę dla mojej inwestycji. Szczerze polecam każdemu inwestorowi."
  },
  {
    name: "KATARZYNA WIŚNIEWSKA",
    title: "Właścicielka mieszkania",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Dzięki Rent Invest nie muszę się martwić o zarządzanie moją nieruchomością. Wszystko jest zadbane profesjonalnie, a ja mogę skupić się na innych sprawach. Znakomita obsługa!"
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-brand-blue text-white">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Opinie naszych klientów
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto opacity-90">
          Opinie naszych klientów są dla nas najlepszym dowodem na jakość świadczonych usług. Zaufanie, profesjonalizm i
          skuteczność to wartości, które doceniają właściciele nieruchomości oraz najemcy. Przekonaj się, dlaczego warto
          nam zaufać.
        </p>

        <div className="bg-brand-lightBlue rounded-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-12 h-12 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/placeholder.svg';
              }} 
            />
            <div className="ml-4">
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm opacity-80">{testimonial.title}</p>
            </div>
          </div>
          <p className="text-lg mb-8">"{testimonial.quote}"</p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
