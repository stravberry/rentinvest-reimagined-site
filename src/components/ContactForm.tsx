
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    gdprConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "Wymagana zgoda",
        description: "Prosimy o wyrażenie zgody na przetwarzanie danych osobowych.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Wiadomość wysłana",
      description: "Dziękujemy za kontakt. Odezwiemy się wkrótce!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      gdprConsent: false,
    });
  };

  return (
    <section className="py-16" id="kontakt">
      <div className="section-container grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-gray-600 mb-8">
            Zainwestuj mądrze i zarządzaj najmem bez stresu - z Rent Invest!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko*"
                className="input-field"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Adres e-mail*"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Treść wiadomości*"
                className="input-field resize-none h-32"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                name="gdprConsent"
                id="gdprConsent"
                className="mt-1 mr-2"
                checked={formData.gdprConsent}
                onChange={handleCheckboxChange}
                required
              />
              <label htmlFor="gdprConsent" className="text-sm text-gray-600">
                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
                <a href="/polityka-prywatnosci" className="text-brand-blue hover:underline">
                  Polityką Prywatności
                </a>.
              </label>
            </div>
            <Button type="submit" className="btn-primary">
              Wyślij wiadomość
              <ArrowRight className="arrow-icon" />
            </Button>
          </form>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">ZADZWOŃ</h3>
            <p className="text-lg">+48 537 326 734</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">NAPISZ:</h3>
            <p className="text-lg">biuro@rentinvest.pl</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-2">ODWIEDŹ NAS:</h3>
            <p className="text-lg">51-114 Wrocław, ul. Obornicka 76D</p>
          </div>
          
          <div className="mt-8 h-64 bg-gray-200 relative rounded overflow-hidden">
            {/* Map placeholder */}
            <div className="absolute inset-0">
              <img 
                src="/map-office-placeholder.jpg" 
                alt="Lokalizacja biura Rent Invest" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.backgroundColor = "#e5e7eb";
                }}
              />
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="px-4 py-2 bg-white rounded-lg shadow-md flex items-center text-sm">
                Zobacz w Google Maps
                <span className="ml-2 bg-brand-blue text-white p-1 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
