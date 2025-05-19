
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Rent Invest Logo" 
              className="h-8"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            <div className="ml-2 flex flex-col">
              <span className="text-brand-blue font-bold text-xl">RENT INVEST</span>
              <span className="text-gray-500 text-xs">REAL ESTATE INVESTMENTS</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex space-x-8">
            <Link to="/zarzadzanie-najmem" className="text-gray-700 hover:text-brand-blue">
              Zarządzanie najmem
            </Link>
            <Link to="/inwestowanie-w-nieruchomosci" className="text-gray-700 hover:text-brand-blue">
              Inwestowanie w nieruchomości
            </Link>
            <Link to="/obsluga-najmu" className="text-gray-700 hover:text-brand-blue">
              Obsługa najmu
            </Link>
            <Link to="/o-nas" className="text-gray-700 hover:text-brand-blue">
              O nas
            </Link>
          </div>
          
          <Button className="btn-primary hidden sm:flex" asChild>
            <Link to="/kontakt">
              Skontaktuj się z nami
              <ArrowRight className="arrow-icon" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
