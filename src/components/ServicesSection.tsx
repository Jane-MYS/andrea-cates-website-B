
import React from 'react';
import { 
  Star,
  Clock, 
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-beach-sand/30 section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-5 bg-beach-peach/20 px-4 py-2 rounded-full">
            <span className="text-beach-peach font-medium">My Services</span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
            Myofunctional Therapy
          </h2>
          <p className="text-beach-text/90 italic">
            Changing habits, one insightful session at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="card-gradient rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 text-beach-blue bg-beach-blue/20">
              <Star className="h-10 w-10" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-4">Benefits of Myofunctional Therapy</h3>
            <p className="text-beach-text/80 mb-6">Myofunctional therapy offers a variety of health and wellness improvements, including:</p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
                <span>Better quality sleep</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
                <span>Relief from headaches and jaw pain at the source</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
                <span>Increased energy levels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
                <span>Enhanced effectiveness of CPAP machines and orthodontic oral appliances</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
                <span>Elimination of common oral habits such as:</span>
                <ul className="ml-7 mt-2 space-y-2">
                  <li>• Nail biting</li>
                  <li>• Finger sucking</li>
                  <li>• Chewing or sucking on objects</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="card-gradient rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 text-beach-peach bg-beach-peach/20">
              <Stethoscope className="h-10 w-10" />
            </div>
            <h3 className="font-playfair text-2xl font-semibold mb-4">How It Works</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-playfair text-xl font-medium mb-2">Initial Evaluation</h4>
                <p className="text-beach-text/80">
                  Schedule a 60–90 minute virtual or in-person consultation to receive a personalized treatment plan tailored to your wellness goals.
                </p>
              </div>
              
              <div>
                <h4 className="font-playfair text-xl font-medium mb-2">Daily Practice</h4>
                <p className="text-beach-text/80">
                  Perform custom-designed exercises at home for just 5 minutes, twice a day to improve your breathing, sleep, and overall health.
                </p>
              </div>
              
              <div>
                <h4 className="font-playfair text-xl font-medium mb-2">Ongoing Care</h4>
                <p className="text-beach-text/80">
                  Most treatment plans consist of 12 sessions, though the number may vary based on your individual needs.
                </p>
              </div>
            </div>
          </div>
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
