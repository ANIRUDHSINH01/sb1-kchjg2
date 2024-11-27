import React from 'react';
import { Trophy } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Trophy className="h-16 w-16 text-orange-500 mx-auto mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ultimate Gaming Tournament Platform
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the most competitive BGMI and Free Fire tournaments. Compete with the best players and win exciting prizes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-600 transition-colors">
            Join Tournament
          </button>
          <button className="bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-md text-lg font-medium hover:bg-orange-500 hover:text-white transition-all">
            Watch Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;