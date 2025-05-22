
import React from 'react';

const SectionDivider = () => {
  return (
    <div className="section-divider relative h-8 md:h-10 overflow-hidden">
      <div className="divider-wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="divider-wave wave1">
          <path fill="#90AACB" fillOpacity="0.2" d="M0,192L30,181.3C60,171,120,149,180,160C240,171,300,213,360,218.7C420,224,480,192,540,181.3C600,171,660,181,720,192C780,203,840,213,900,192C960,171,1020,117,1080,112C1140,107,1200,149,1260,160C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="divider-wave wave2">
          <path fill="#FFF8E3" fillOpacity="0.3" d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,261.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-[#F9D5A7]/30 via-[#FFF8E3]/30 to-[#F9D5A7]/30"></div>
      </div>
      
      <div className="absolute bottom-0 w-full h-[1px] bg-[#F9D5A7]/30"></div>
    </div>
  );
};

export default SectionDivider;
