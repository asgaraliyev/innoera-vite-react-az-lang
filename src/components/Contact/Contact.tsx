import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizimlə Əlaqə</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ağıllı ev həllərimiz haqqında suallarınız var? Biz sizə kömək etməyə hazırıq.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              icon={Phone}
              title="Telefon"
              content="+994 50 123 45 67"
            />
            <ContactInfo
              icon={Mail}
              title="E-poçt"
              content="elaqe@smartsecure.az"
            />
            <ContactInfo
              icon={MapPin}
              title="Ünvan"
              content="Bakı şəh., Nərimanov r., Ağa Nemətulla küç. 123"
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;