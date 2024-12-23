import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-blue-100 p-3 rounded-lg">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

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

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Ad
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-poçt
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mesaj
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Mesaj Göndər
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact