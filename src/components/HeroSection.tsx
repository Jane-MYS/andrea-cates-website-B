import React from 'react';
import { Waves } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="relative h-[80vh] flex items-center pt-20 pb-16 overflow-hidden bg-theme-light-red">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('./photo-coverphoto-2-2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-theme-light-red/90 via-theme-beige/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl fade-in">
          <p className="font-medium text-xl md:text-2xl text-theme-gray mb-2">
            South Bay Orofacial Myofunctional Therapy
          </p>
          <h1 className="font-bd-sans text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-10 text-theme-vivid-red">
            <div className="flex flex-col">
              <div className="whitespace-nowrap">Change your Habits</div>
              <div className="ml-16 md:ml-32 mt-4 whitespace-nowrap">Change your Life</div>
            </div>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-theme-gray max-w-lg">
            Treating the root cause of dysfunction to reclaim your face growth, sleep, and confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-theme-vivid-red text-white px-10 py-4 rounded-full font-semibold shadow-lg flex items-center gap-3 text-lg transition-all duration-200 hover:bg-theme-rose hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-theme-rose/60"
            >
              <Waves className="" size={24} />
              Begin Your Journey
            </a>
            <a 
              href="#services" 
              onClick={scrollToServices}
              className="bg-theme-rose/30 text-theme-vivid-red px-10 py-4 rounded-full font-semibold shadow flex items-center gap-2 text-lg transition-all duration-200 hover:bg-theme-rose/60 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-theme-rose/60"
            >
              <span>Explore Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#F5E2C8" 
            fillOpacity="1" 
            d="M0,32L60,37.3C120,43,240,53,360,69.3C480,85,600,107,720,106.7C840,107,960,85,1080,64C1200,43,1320,21,1380,10.7L1440,0L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
