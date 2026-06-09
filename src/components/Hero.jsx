import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ isDark }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1596562282585-fca4db1b6e51?w=1200&h=900&fit=crop')`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover the Beauty of
          <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Kigali
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
          Experience the vibrant culture, stunning landscapes, and warm hospitality of Rwanda's magnificent capital.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('destinations')}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore Now
          </button>
          <button
            onClick={() => scrollToSection('hotels')}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
          >
            Find Hotels
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;
