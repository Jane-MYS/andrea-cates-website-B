import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './services/SectionHeader';
import BenefitsCard from './services/BenefitsCard';
import HowItWorksCard from './services/HowItWorksCard';
import { Card, CardContent } from './ui/card';
import { AirVent } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-beach-sand/30 py-10 md:py-14 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          badge="My Services"
          badgeColor="peach"
          title="Myofunctional Therapy"
          subtitle="Changing habits, one insightful session at a time."
        />

        {/* Added new card explaining what myofunctional therapy is */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="card-gradient border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-beach-blue/20 text-beach-blue shrink-0">
                  <AirVent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2">What Is Myofunctional Therapy?</h3>
                  <p className="text-beach-text/90">
                    Myofunctional therapy is a specialized exercise program for the muscles of your face, mouth, tongue, and throat. It helps correct improper muscle habits, improve breathing, and support healthy swallowing, chewing, and speech. Think of it as physical therapy for your mouth and face.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <BenefitsCard />
          <HowItWorksCard />
        </div>

        {/* Packages & Pricing Section */}
        <div className="text-center mt-16">
          <Link 
            to="/packages"
            onClick={() => {
              // Force scroll to top when navigating
              setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }, 0);
            }}
            className="inline-block bg-beach-blue hover:bg-beach-blue/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            See Packages & Pricing
          </Link>
          <p className="text-beach-text/80 mt-4 max-w-2xl mx-auto text-lg">
            Every journey is unique — our programs are designed to fit your needs and budget. Learn more about session options, pricing, and what's included in each package.
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
