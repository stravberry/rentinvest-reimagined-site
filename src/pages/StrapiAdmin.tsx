
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ExternalLink, File, FileCheck, FileCode, CheckSquare } from 'lucide-react';
import { STRAPI_URL } from '@/config/strapiConfig';
import { toast } from '@/hooks/use-toast';

const StrapiAdmin = () => {
  const handleCopyEnvFile = () => {
    navigator.clipboard.writeText('VITE_STRAPI_URL=http://localhost:1337');
    toast({
      title: "Skopiowano!",
      description: "Zawartość pliku .env została skopiowana do schowka.",
    });
  };

  return (
    <Layout>
      <div className="py-12">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-8">Panel administracyjny CMS</h1>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Jak skonfigurować i korzystać z systemu CMS Strapi</h2>
            <p className="text-gray-600 mb-6">
              Strona internetowa Rent Invest jest zintegrowana z systemem zarządzania treścią (CMS) Strapi, 
              który pozwala na łatwe aktualizowanie treści bez konieczności modyfikowania kodu.
            </p>
            
            <ol className="list-decimal list-inside space-y-6 text-gray-600 mb-8">
              <li className="p-4 border rounded-lg bg-white">
                <span className="font-medium text-lg block mb-2">Zainstaluj i uruchom Strapi lokalnie</span>
                <div className="ml-4">
                  <p className="mb-2">Należy zainstalować i uruchomić Strapi lokalnie, wykonując następujące kroki:</p>
                  <pre className="bg-gray-100 p-3 rounded-md text-sm my-2 overflow-x-auto">
                    <code>
                      npx create-strapi-app@latest my-project --quickstart
                    </code>
                  </pre>
                  <p>
                    Po wykonaniu powyższego polecenia, Strapi automatycznie uruchomi się pod adresem: 
                    <code className="bg-gray-100 px-2 py-1 rounded mx-1">http://localhost:1337</code>
                  </p>
                </div>
              </li>
              
              <li className="p-4 border rounded-lg bg-white">
                <span className="font-medium text-lg block mb-2">Skonfiguruj plik .env</span>
                <div className="ml-4">
                  <p className="mb-2">Stwórz plik <code>.env</code> w głównym katalogu Twojego projektu React z następującą zawartością:</p>
                  <div className="flex items-center">
                    <pre className="bg-gray-100 p-3 rounded-md text-sm my-2 overflow-x-auto flex-grow">
                      <code>
                        VITE_STRAPI_URL=http://localhost:1337
                      </code>
                    </pre>
                    <Button variant="outline" className="ml-2" onClick={handleCopyEnvFile} title="Kopiuj do schowka">
                      <FileCode className="h-4 w-4 mr-1" /> Kopiuj
                    </Button>
                  </div>
                  <p className="mt-2 text-yellow-600">
                    <strong>Ważne:</strong> Po zmianie pliku .env, zrestartuj serwer deweloperski.
                  </p>
                </div>
              </li>
              
              <li className="p-4 border rounded-lg bg-white">
                <span className="font-medium text-lg block mb-2">Utwórz konto administratora Strapi</span>
                <div className="ml-4">
                  <p>
                    Przy pierwszym uruchomieniu Strapi zostaniesz poproszony o utworzenie konta administratora.
                    Wypełnij formularz, aby uzyskać dostęp do panelu administracyjnego.
                  </p>
                </div>
              </li>
              
              <li className="p-4 border rounded-lg bg-white">
                <span className="font-medium text-lg block mb-2">Utwórz typy zawartości w Strapi</span>
                <div className="ml-4">
                  <p className="mb-2">
                    Musisz utworzyć następujące typy zawartości (Collection Types) w Strapi:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Hero (Single Type)</li>
                    <li>Client Paths (Collection Type)</li>
                    <li>Stats (Collection Type)</li>
                    <li>Testimonials (Collection Type)</li>
                    <li>About (Single Type)</li>
                    <li>Contact (Single Type)</li>
                    <li>Location (Single Type)</li>
                  </ul>
                  <p className="mt-2">
                    Dla każdego typu zawartości zdefiniuj odpowiednie pola zgodne ze strukturami danych używanymi w aplikacji.
                  </p>
                </div>
              </li>
              
              <li className="p-4 border rounded-lg bg-white">
                <span className="font-medium text-lg block mb-2">Dodaj zawartość w panelu administracyjnym</span>
                <div className="ml-4">
                  <p>
                    Po skonfigurowaniu typów zawartości, dodaj dane za pomocą panelu administracyjnego Strapi.
                    Wprowadzone dane będą automatycznie wyświetlane na Twojej stronie.
                  </p>
                </div>
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
            <h2 className="text-2xl font-semibold">Typy zawartości do utworzenia w Strapi</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Sekcja główna (Hero) - Single Type</h3>
                <p className="mb-2">Struktury danych:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>title (Text)</li>
                  <li>subtitle (Text)</li>
                  <li>backgroundImage (Media)</li>
                  <li>features (JSON lub Component)</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Ścieżki klientów (Client Paths) - Collection Type</h3>
                <p className="mb-2">Struktury danych:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>number (Text)</li>
                  <li>title (Text)</li>
                  <li>description (Rich Text)</li>
                  <li>link (Text)</li>
                  <li>image (Media)</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Statystyki (Stats) - Collection Type</h3>
                <p className="mb-2">Struktury danych:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>number (Text)</li>
                  <li>label (Text)</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Opinie klientów (Testimonials) - Collection Type</h3>
                <p className="mb-2">Struktury danych:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>name (Text)</li>
                  <li>title (Text)</li>
                  <li>quote (Rich Text)</li>
                  <li>image (Media)</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">O nas (About) - Single Type</h3>
                <p className="mb-2">Struktury danych:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>title (Text)</li>
                  <li>content (Rich Text)</li>
                  <li>videoUrl (Text)</li>
                  <li>image (Media)</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-medium mb-2">Kontakt (Contact) - Single Type</h3>
                <p className="mb-2">Struktury danych:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>email (Email)</li>
                  <li>phone (Text)</li>
                  <li>address (Text)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StrapiAdmin;
