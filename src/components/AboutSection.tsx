
import React from 'react';
import { Heart } from 'lucide-react';
import TreatmentGoalsSection from './services/TreatmentGoalsSection';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image column - Updated with new beach image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/77db456d-9ad6-4aa3-b95f-4abc3ff8fef3.png" 
                alt="Andrea Cates at the beach" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-beach-peach p-4 rounded-xl shadow-lg">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          
          {/* Text column */}
          <div>
            <div className="inline-block mb-5 bg-beach-blue/20 px-4 py-2 rounded-full">
              <span className="text-beach-blue font-medium">About Me</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
              Helping you find peace and purpose in a busy world
            </h2>
            <div className="space-y-4 text-beach-text/90">
              <p>
                I'm Andrea, a certified wellness coach with over a decade of experience helping clients discover their path to holistic well-being. I believe true wellness encompasses mind, body, and spirit.
              </p>
              <p>
                My approach combines evidence-based practices with intuitive guidance, creating personalized wellness journeys that honor your unique needs and goals. Whether you're seeking stress management, improved relationships, career fulfillment, or simply a greater sense of peace, I'm here to support you.
              </p>
              <p>
                My journey began after my own struggle with burnout led me to discover the transformative power of mindfulness and intentional living. Today, I'm passionate about helping others find their own balance and joy.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-beach-peach/20 p-4 rounded-lg">
                <h4 className="font-playfair font-semibold text-xl mb-2">Certifications</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Certified Wellness Coach</li>
                  <li>• Mindfulness Practitioner</li>
                  <li>• Holistic Nutrition</li>
                </ul>
              </div>
              <div className="bg-beach-blue/20 p-4 rounded-lg">
                <h4 className="font-playfair font-semibold text-xl mb-2">Philosophy</h4>
                <p className="text-sm">
                  I believe in meeting you where you are and creating sustainable practices that integrate seamlessly into your life.
                </p>
              </div>
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
