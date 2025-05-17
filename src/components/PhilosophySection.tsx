
import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="bg-beach-coral/30 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-12 text-beach-text">My Philosophy</h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Breath Well */}
            <div className="p-6 bg-white/80 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="mb-4 text-beach-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-handwriting text-3xl mb-3 text-beach-text">Breath Well</h3>
              <p className="text-beach-text/80">Proper breathing is the foundation of health, influencing everything from sleep to emotional wellbeing.</p>
            </div>
            
            {/* Sleep Deep */}
            <div className="p-6 bg-white/80 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="mb-4 text-beach-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="font-handwriting text-3xl mb-3 text-beach-text">Sleep Deep</h3>
              <p className="text-beach-text/80">Quality sleep restores the body and mind, preparing you for the challenges and joys of each new day.</p>
            </div>
            
            {/* Live Fully */}
            <div className="p-6 bg-white/80 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <div className="mb-4 text-beach-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-handwriting text-3xl mb-3 text-beach-text">Live Fully</h3>
              <p className="text-beach-text/80">When breathing and sleeping are in harmony, you're free to embrace life's possibilities with energy and joy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
