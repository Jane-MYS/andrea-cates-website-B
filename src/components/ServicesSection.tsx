import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './services/SectionHeader';
import BenefitsCard from './services/BenefitsCard';
import HowItWorksCard from './services/HowItWorksCard';
import { Card, CardContent } from './ui/card';
import { AirVent } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-beach-sand/30">
      {/* Desktop Layout - Full Width (1024px+) */}
      <div className="hidden lg:block">
        <div className="w-full py-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
              badge="My Services"
              badgeColor="sage-green"
              title="Myofunctional Therapy"
              subtitle="Changing habits, one insightful session at a time."
            />

            {/* What Is Myofunctional Therapy Card */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="card-gradient border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-beach-blue/20 text-beach-blue shrink-0">
                      <AirVent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-3xl font-semibold mb-4 text-theme-vivid-red">What Is Myofunctional Therapy?</h3>
                      <p className="text-beach-text/90 text-lg leading-relaxed">
                        Myofunctional therapy is a specialized exercise program for the muscles of your face, mouth, tongue, and throat. It helps correct improper muscle habits, improve breathing, and support healthy swallowing, chewing, and speech. Think of it as physical therapy for your mouth and face.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <BenefitsCard />
              <HowItWorksCard />
            </div>

            {/* Packages & Pricing Section */}
            <div className="text-center mt-20">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  document.documentElement.scrollTop = 0;
                  document.body.scrollTop = 0;
                  window.location.hash = '#/packages';
                }}
                className="inline-block bg-theme-vivid-red hover:bg-red-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                See Packages & Pricing
              </button>
              <p className="text-beach-text/80 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                Every journey is unique — our programs are designed to fit your needs and budget. Learn more about session options, pricing, and what's included in each package.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked (768px and below) */}
      <div className="lg:hidden">
        <div className="py-12 px-4">
          <SectionHeader 
            badge="My Services"
            badgeColor="sage-green"
            title="Myofunctional Therapy"
            subtitle="Changing habits, one insightful session at a time."
          />

          {/* What Is Myofunctional Therapy Card */}
          <div className="max-w-sm mx-auto mb-8">
            <Card className="card-gradient border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-beach-blue/20 text-beach-blue">
                    <AirVent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3 text-theme-vivid-red">What Is Myofunctional Therapy?</h3>
                    <p className="text-beach-text/90 text-sm leading-relaxed">
                      Myofunctional therapy is a specialized exercise program for the muscles of your face, mouth, tongue, and throat. It helps correct improper muscle habits, improve breathing, and support healthy swallowing, chewing, and speech. Think of it as physical therapy for your mouth and face.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <BenefitsCard />
            <HowItWorksCard />
          </div>

          {/* Packages & Pricing Section */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                window.location.hash = '#/packages';
              }}
              className="inline-block bg-theme-vivid-red hover:bg-red-600 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              See Packages & Pricing
            </button>
            <p className="text-beach-text/80 mt-4 max-w-sm mx-auto text-sm leading-relaxed">
              Every journey is unique — our programs are designed to fit your needs and budget. Learn more about session options, pricing, and what's included in each package.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
