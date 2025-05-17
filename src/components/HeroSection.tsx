
import React from 'react';
import { Waves } from 'lucide-react';

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl fade-in">
          <p className="font-medium text-xl md:text-2xl text-beach-blue mb-2">
            Southbay Myofunctional Therapist
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-beach-text leading-tight mb-6">
            Discover your inner <span className="text-beach-blue">calm</span> and <span className="text-beach-peach">purpose</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-beach-text/90 max-w-lg">
            Holistic wellness coaching to help you find balance and live your most authentic, fulfilled life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="beach-button px-8 py-3 rounded-full text-center font-medium flex items-center justify-center"
            >
              <Waves className="mr-2" size={18} />
              Begin Your Journey
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-beach-peach hover:bg-beach-peach/10 transition-colors px-8 py-3 rounded-full text-center font-medium"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="white" 
            fillOpacity="1" 
            d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,106.7C840,107,960,85,1080,64C1200,43,1320,21,1380,10.7L1440,0L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
