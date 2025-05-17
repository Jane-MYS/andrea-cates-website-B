
import React from 'react';
import SectionHeader from './services/SectionHeader';
import BenefitsCard from './services/BenefitsCard';
import HowItWorksCard from './services/HowItWorksCard';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-beach-sand/30 section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          badge="My Services"
          badgeColor="peach"
          title="Myofunctional Therapy"
          subtitle="Changing habits, one insightful session at a time."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <BenefitsCard />
          <HowItWorksCard />
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="beach-button px-8 py-3 rounded-full text-center font-medium inline-flex items-center"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
