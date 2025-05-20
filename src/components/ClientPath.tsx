
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getStrapiMediaUrl } from '@/services/strapiService';

interface ClientPathProps {
  number: string;
  title: string;
  description: string;
  link: string;
  imageSrc: string;
}

const ClientPath: React.FC<ClientPathProps> = ({ number, title, description, link, imageSrc }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="md:py-12 flex flex-col justify-center space-y-6">
        <span className="text-gray-400 text-lg">{number}</span>
        <h3 className="text-4xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div>
          <Link 
            to={link}
            className="inline-flex items-center text-brand-blue hover:underline"
          >
            Dowiedz się więcej
            <ArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
      <div 
        className="h-80 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    </div>
  );
};

export default ClientPath;
