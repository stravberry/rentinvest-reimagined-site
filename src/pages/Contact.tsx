
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="section-container">
          <h1 className="text-4xl font-bold mb-4">Skontaktuj się z nami</h1>
          <p className="text-gray-600">Jesteśmy dostępni, aby odpowiedzieć na wszystkie Twoje pytania</p>
        </div>
      </div>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
