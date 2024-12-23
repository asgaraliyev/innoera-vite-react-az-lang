import React from 'react';
import { Lock, Camera, Thermometer } from 'lucide-react';

const services = [
  {
    title: 'Ağıllı Kilid',
    description: 'Evinizi hər yerdən idarə edə biləcəyiniz təkmilləşdirilmiş rəqəmsal kilid ilə qoruyun.',
    icon: Lock,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=500',
    location: 'Bakı',
  },
  {
    title: 'Müşahidə Sistemləri',
    description: 'HD kameralar və ağıllı hərəkət detektoru ilə 24/7 monitorinq.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=500',
    location: 'Sumqayıt',
  },
  {
    title: 'Ağıllı Termostatlar',
    description: 'Ev temperaturunuzu optimallaşdırın və enerji xərclərini avtomatik azaldın.',
    icon: Thermometer,
    image: 'https://images.unsplash.com/photo-1585435421671-0c16764628ce?auto=format&fit=crop&w=500',
    location: 'Gəncə',
  },
];

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
          {services.map(({ title, description, icon: Icon, image, location }) => (
            <div
              key={title}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm">{location}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services