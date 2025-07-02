import React from 'react';
import { Heart } from 'lucide-react';
import TreatmentGoalsSection from './services/TreatmentGoalsSection';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image column - Updated with new beach image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="lovable-uploads/77db456d-9ad6-4aa3-b95f-4abc3ff8fef3.png" 
                alt="Andrea Cates at the beach" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>
          
          {/* Text column - Updated with new content */}
          <div>
            <div className="inline-block mb-5 bg-beach-blue/20 px-4 py-2 rounded-full">
              <span className="text-beach-blue font-medium">About Me</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6" style={{ color: '#967E72' }}>
              Meet Andrea: Your Myofunctional Therapist
            </h2>
            <div className="space-y-4 text-beach-text/90">
              <p>
                With over 15 years of experience as a dental hygienist, I have seen firsthand how certain oral habits can impact long-term development and overall quality of life. My passion for helping patients led me to explore the transformative benefits of myofunctional therapy. After extensive research and advanced training, I began offering myofunctional therapy services in 2021.
              </p>
              <p>
                I am committed to a collaborative approach, working closely with dentists, orthodontists, chiropractors, and speech-language pathologists. By partnering with like-minded professionals, I strive to achieve lasting, effective results for every patient.
              </p>
              <p>
                Since incorporating myofunctional therapy into my practice, I've seen remarkable improvements in my patients' health, comfort, and quality of life.
              </p>
            </div>
          </div>
        </div>
        
        {/* Added Treatment Goals Section here */}
        <div className="mt-16">
          <TreatmentGoalsSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
