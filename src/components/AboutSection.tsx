import React from 'react';
import { Heart } from 'lucide-react';
import TreatmentGoalsSection from './services/TreatmentGoalsSection';

const AboutSection = () => {
  return (
    <section id="about" className="bg-theme-beige">
      {/* Desktop Layout - Full Width (1024px+) */}
      <div className="hidden lg:block">
        <div className="w-full py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image column */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/andrea-cates-website-B/lovable-uploads/Andrea-personal-photo.jpeg" 
                    alt="Andrea Cates" 
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
              </div>
              
              {/* Text column */}
              <div>
                <div className="inline-block mb-5 bg-theme-sage-green/20 px-4 py-2 rounded-full">
                  <span className="text-theme-sage-green font-medium">About Me</span>
                </div>
                <h2 className="font-playfair text-4xl font-semibold mb-6 text-theme-vivid-red">
                  Meet Andrea: Your Myofunctional Therapist
                </h2>
                <div className="space-y-4 text-theme-gray text-lg leading-relaxed">
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
                
                {/* Professional Affiliations Badge - Desktop */}
                <div className="mt-6 flex justify-center">
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-theme-sage-green/20">
                    <div className="flex items-center gap-6">
                      <img 
                        src="/andrea-cates-website-B/lovable-uploads/affiliation-logo-1.png" 
                        alt="Professional Affiliation 1" 
                        className="h-12 opacity-80 hover:opacity-100 transition-all duration-300" 
                        onError={(e) => {
                          console.log('Image 1 failed to load:', e.target.src);
                          e.target.src = '/andrea-cates-website-B/lovable-uploads/Andrea-Logo-New.jpeg';
                        }}
                        onLoad={() => console.log('Image 1 loaded successfully')}
                      />
                      <div className="w-px h-8 bg-theme-sage-green/30"></div>
                      <img 
                        src="/andrea-cates-website-B/lovable-uploads/affiliation-logo-2.png" 
                        alt="Professional Affiliation 2" 
                        className="h-8 opacity-80 hover:opacity-100 transition-all duration-300" 
                        onError={(e) => {
                          console.log('Image 2 failed to load:', e.target.src);
                          e.target.src = '/andrea-cates-website-B/lovable-uploads/Andrea-Logo-New.jpeg';
                        }}
                        onLoad={() => console.log('Image 2 loaded successfully')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Treatment Goals Section */}
            <div className="mt-20">
              <TreatmentGoalsSection />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked (768px and below) */}
      <div className="lg:hidden">
        <div className="py-12 px-4">
          <div className="max-w-sm mx-auto">
            {/* Image */}
            <div className="relative mb-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/andrea-cates-website-B/lovable-uploads/Andrea-personal-photo.jpeg" 
                  alt="Andrea Cates" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
            </div>
            
            {/* Text */}
            <div className="text-center">
              <div className="inline-block mb-4 bg-theme-sage-green/20 px-4 py-2 rounded-full">
                <span className="text-theme-sage-green font-medium text-sm">About Me</span>
              </div>
              <h2 className="font-playfair text-2xl font-semibold mb-6 text-theme-vivid-red">
                Meet Andrea: Your Myofunctional Therapist
              </h2>
              <div className="space-y-4 text-theme-gray text-base leading-relaxed">
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
              
              {/* Professional Affiliations Badge - Mobile */}
              <div className="mt-4 flex justify-center">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-theme-sage-green/20">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/andrea-cates-website-B/lovable-uploads/affiliation-logo-1.png" 
                      alt="Professional Affiliation 1" 
                      className="h-8 opacity-80 hover:opacity-100 transition-all duration-300" 
                      onError={(e) => {
                        console.log('Mobile Image 1 failed to load:', e.target.src);
                        e.target.src = '/andrea-cates-website-B/lovable-uploads/Andrea-Logo-New.jpeg';
                      }}
                      onLoad={() => console.log('Mobile Image 1 loaded successfully')}
                    />
                    <div className="w-px h-6 bg-theme-sage-green/30"></div>
                    <img 
                      src="/andrea-cates-website-B/lovable-uploads/affiliation-logo-2.png" 
                      alt="Professional Affiliation 2" 
                      className="h-6 opacity-80 hover:opacity-100 transition-all duration-300" 
                      onError={(e) => {
                        console.log('Mobile Image 2 failed to load:', e.target.src);
                        e.target.src = '/andrea-cates-website-B/lovable-uploads/Andrea-Logo-New.jpeg';
                      }}
                      onLoad={() => console.log('Mobile Image 2 loaded successfully')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Treatment Goals Section */}
          <div className="mt-12">
            <TreatmentGoalsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
