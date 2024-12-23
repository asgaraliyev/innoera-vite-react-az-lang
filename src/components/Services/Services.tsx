import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Xidmətlərimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Həyatınızı asanlaşdırmaq, daha təhlükəsiz və rahat etmək üçün
            ən müasir ağıllı ev həlləri təqdim edirik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;