
import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const SectionDivider = () => {
  return (
    <div className="section-divider relative py-3 md:py-4 overflow-hidden bg-gradient-to-r from-theme-burgundy to-theme-vivid-red">
      <div className="container mx-auto">
        {/* Main ribbon content */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-6">
          {/* Left side with sparkles */}
          <div className="hidden md:flex items-center">
            <Sparkles className="h-5 w-5 text-theme-gold animate-pulse mr-2" />
            <div className="h-1 w-12 bg-theme-gold/60 rounded-full"></div>
          </div>
          
          {/* Center content with message - now more prominent */}
          <div className="flex items-center justify-center">
            <p className="font-handwriting text-2xl md:text-3xl text-white text-center tracking-wide">
              Ready to transform your wellness?
            </p>
          </div>
          
          {/* Right side with sparkles */}
          <div className="hidden md:flex items-center">
            <div className="h-1 w-12 bg-theme-gold/60 rounded-full"></div>
            <Sparkles className="h-5 w-5 text-theme-gold animate-pulse ml-2" />
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
