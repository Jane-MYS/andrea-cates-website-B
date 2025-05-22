
import React from 'react';
import { CalendarCheck, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionDivider = () => {
  return (
    <div className="section-divider relative py-3 md:py-4 overflow-hidden bg-gradient-to-r from-beach-blue to-beach-sand/90">
      <div className="container mx-auto">
        {/* Main ribbon content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-6">
          {/* Left side with sparkles */}
          <div className="hidden md:flex items-center">
            <Sparkles className="h-5 w-5 text-white animate-pulse mr-2" />
            <div className="h-1 w-12 bg-white/60 rounded-full"></div>
          </div>
          
          {/* Center content with CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-6">
            <p className="font-handwriting text-xl md:text-2xl text-white text-center md:text-left">
              Ready to transform your wellness?
            </p>
            <a 
              href="#contact"
              className="cta-button group flex items-center space-x-2 px-5 py-2 bg-white rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <span className="text-beach-blue font-medium">Book Now</span>
              <span className="p-1 rounded-full bg-beach-blue/20 group-hover:bg-beach-blue/30 transition-colors">
                <CalendarCheck className="w-4 h-4 text-beach-blue" />
              </span>
            </a>
          </div>
          
          {/* Right side with sparkles */}
          <div className="hidden md:flex items-center">
            <div className="h-1 w-12 bg-white/60 rounded-full"></div>
            <Sparkles className="h-5 w-5 text-white animate-pulse ml-2" />
          </div>
        </div>
        
        {/* Directional indicator */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <ChevronDown className="w-5 h-5 text-white animate-bounce opacity-80" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particle particle1"></div>
        <div className="floating-particle particle2"></div>
        <div className="floating-particle particle3"></div>
        <div className="floating-particle particle4"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
