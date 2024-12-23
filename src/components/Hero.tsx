import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=2000)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ağıllı texnologiyalar ilə daha yaxşı ev
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Ən müasir ağıllı ev həllərimizlə gələcək yaşayışı təcrübə edin.
            Təhlükəsizlik, rahatlıq və rahatlıq bir toxunuşla.
          </p>
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors">
            Virtual tur edin
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero