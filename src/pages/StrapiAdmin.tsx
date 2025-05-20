
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { STRAPI_URL } from '@/config/strapiConfig';

const StrapiAdmin = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-8">Panel administracyjny CMS</h1>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Jak korzystać z systemu CMS Strapi</h2>
            <p className="text-gray-600 mb-6">
              Strona internetowa Rent Invest jest zintegrowana z systemem zarządzania treścią (CMS) Strapi, 
              który pozwala na łatwe aktualizowanie treści bez konieczności modyfikowania kodu.
            </p>
            
            <ol className="list-decimal list-inside space-y-4 text-gray-600 mb-6">
              <li>
                <span className="font-medium">Zaloguj się do panelu administracyjnego</span> - 
                Kliknij przycisk poniżej, aby przejść do panelu administracyjnego Strapi.
              </li>
              <li>
                <span className="font-medium">Edytuj zawartość</span> - 
                Po zalogowaniu możesz edytować różne sekcje strony, takie jak: nagłówek, ścieżki klientów, 
                statystyki, opinie klientów i inne.
              </li>
              <li>
                <span className="font-medium">Zarządzaj multimediami</span> - 
                Możesz dodawać i usuwać obrazy w bibliotece mediów.
              </li>
              <li>
                <span className="font-medium">Publikuj zmiany</span> - 
                Po wprowadzeniu zmian, kliknij "Publikuj", aby zaktualizować stronę.
              </li>
            </ol>
            
            <div className="flex justify-center">
              <Button className="bg-brand-blue text-white" asChild>
                <a href={`${STRAPI_URL}/admin`} target="_blank" rel="noopener noreferrer">
                  Przejdź do panelu administracyjnego
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold">Dostępne sekcje do edycji</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Sekcja główna (Hero)</h3>
                <p>Edytuj nagłówki, napisy i obrazy w głównej sekcji strony.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Ścieżki klientów</h3>
                <p>Zarządzaj ścieżkami klientów, ich opisami i obrazami.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Statystyki</h3>
                <p>Aktualizuj liczby i etykiety w sekcji statystyk.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Opinie klientów</h3>
                <p>Dodawaj lub edytuj opinie klientów.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">O nas</h3>
                <p>Edytuj treści w sekcji "O nas" oraz informacje o zespole.</p>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Kontakt</h3>
                <p>Aktualizuj dane kontaktowe i lokalizację na mapie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StrapiAdmin;
