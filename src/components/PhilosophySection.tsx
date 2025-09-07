import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="bg-beach-coral/30 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-12 text-theme-vivid-red">My Philosophy</h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Early Intervention */}
            <div className="p-6 bg-white/80 rounded-lg shadow-md transform transition-transform hover:scale-105 flex flex-col h-full">
              <div className="mb-4 text-theme-vivid-red">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-handwriting text-3xl mb-3 text-theme-vivid-red min-h-[2.5em] flex items-center justify-center text-center">Early Intervention</h3>
              <p className="text-beach-text/80 min-h-[3.5em] flex items-start">Muscles help shape the face and jaw, keep the airway open, and support the teeth positioning</p>
            </div>
            
            {/* Sleep Optimally */}
            <div className="p-6 bg-white/80 rounded-lg shadow-md transform transition-transform hover:scale-105 flex flex-col h-full">
              <div className="mb-4 text-theme-vivid-red">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="font-handwriting text-3xl mb-3 text-theme-vivid-red min-h-[2.5em] flex items-center justify-center text-center">Sleep<br />Optimally</h3>
              <p className="text-beach-text/80 min-h-[3.5em] flex items-start">Getting the tongue out of the airway will improve sleep and increase energy levels</p>
            </div>
            
            {/* Life-long Results */}
            <div className="p-6 bg-white/80 rounded-lg shadow-md transform transition-transform hover:scale-105 flex flex-col h-full">
              <div className="mb-4 text-theme-vivid-red">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-handwriting text-3xl mb-3 text-theme-vivid-red min-h-[2.5em] flex items-center justify-center text-center">Life-long Results</h3>
              <p className="text-beach-text/80 min-h-[3.5em] flex items-start">Uniquely addressing each individual's main problem to make lasting changes and prevent falling back into old habits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
