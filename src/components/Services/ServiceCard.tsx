import React from 'react';
import { LucideIcon } from 'lucide-react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  location: string;
};

const ServiceCard = ({ title, description, icon: Icon, image, location }: ServiceCardProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
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
);

export default ServiceCard;