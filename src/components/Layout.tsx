
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <div className="bg-gray-100 py-2 text-center">
        <Link 
          to="/admin" 
          className="text-sm text-gray-500 hover:text-brand-blue"
        >
          Panel administracyjny CMS
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
