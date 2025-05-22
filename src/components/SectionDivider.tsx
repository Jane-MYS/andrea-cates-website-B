
import React from 'react';
import { Circle } from 'lucide-react';

const SectionDivider = () => {
  return (
    <div className="section-divider relative h-8 md:h-10 overflow-hidden">
      <div className="divider-container">
        {/* Elegant curved line */}
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1200 40" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,20 Q300,40 600,20 T1200,20" 
            fill="none"
            stroke="url(#dividerGradient)"
            strokeWidth="1.5"
            className="animate-gentle-pulse"
          />
          
          <defs>
            <linearGradient id="dividerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F9D5A7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#90AACB" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F9D5A7" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-full flex justify-center items-center transform -translate-y-1/2">
          <div className="flex items-center space-x-3 px-4 py-1 bg-white/80 rounded-full backdrop-blur-sm">
            <Circle className="w-2 h-2 text-beach-blue opacity-70" />
            <div className="w-1 h-1 rounded-full bg-beach-sand"></div>
            <Circle className="w-2 h-2 text-beach-sand opacity-70" />
          </div>
        </div>
      </div>
      
      {/* Subtle gradient background */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-beach-sand/40 to-transparent"></div>
    </div>
  );
};

export default SectionDivider;
