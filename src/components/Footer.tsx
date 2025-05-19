
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="bg-white border-t">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
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
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Zarządzanie najmem</h4>
              <ul className="space-y-2">
                <li><Link to="/zarzadzanie-najmem" className="text-gray-600 hover:text-brand-blue">Dla właścicieli</Link></li>
                <li><Link to="/zarzadzanie-najmem/pakiety" className="text-gray-600 hover:text-brand-blue">Pakiety usług</Link></li>
                <li><Link to="/zarzadzanie-najmem/proces" className="text-gray-600 hover:text-brand-blue">Jak pracujemy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Mieszkania inwestycyjne</h4>
              <ul className="space-y-2">
                <li><Link to="/inwestowanie-w-nieruchomosci" className="text-gray-600 hover:text-brand-blue">Dla inwestorów</Link></li>
                <li><Link to="/inwestowanie-w-nieruchomosci/oferty" className="text-gray-600 hover:text-brand-blue">Aktualne oferty</Link></li>
                <li><Link to="/inwestowanie-w-nieruchomosci/wroclaw" className="text-gray-600 hover:text-brand-blue">Wrocław - lokalizacje</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Inwestuj z nami</h4>
              <ul className="space-y-2">
                <li><Link to="/o-nas" className="text-gray-600 hover:text-brand-blue">O nas</Link></li>
                <li><Link to="/kontakt" className="text-gray-600 hover:text-brand-blue">Kontakt</Link></li>
                <li><Link to="/blog" className="text-gray-600 hover:text-brand-blue">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 py-4">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2025 Rent Invest - Real Estate Investments</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/polityka-prywatnosci" className="hover:text-brand-blue">Polityka prywatności</Link>
              <Link to="/ustawienia-cookies" className="hover:text-brand-blue">Ustawienia cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
