import React from 'react';
import { 
  Star,
  CheckCircle2,
  Stethoscope,
  Wind,
  Activity,
  CircleOff,
  CloudFog
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

        {/* New Interactive Goals Section */}
        <div className="mt-16 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block mb-5 bg-beach-blue/20 px-4 py-2 rounded-full">
              <span className="text-beach-blue font-medium">Treatment Objectives</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
              Goals of Myofunctional Therapy
            </h2>
            <p className="text-beach-text/90">
              Address the root causes of your breathing struggles through four key treatment goals:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-beach-blue/20 mb-4">
                <AccordionTrigger className="hover:no-underline py-4 group">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#e5f1ff] text-beach-blue shrink-0 transition-all duration-300 group-hover:bg-beach-blue group-hover:text-white">
                      <Wind className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-playfair text-xl md:text-2xl font-semibold">Nasal Breathing</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20">
                  <p className="text-beach-text/80 text-lg leading-relaxed pb-4">
                    Daytime nasal breathing supports healthier nighttime breathing and improves oxygen intake. Through targeted exercises, you'll develop proper nasal breathing habits that help optimize oxygen levels, reduce snoring, and improve sleep quality.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-beach-blue/20 mb-4">
                <AccordionTrigger className="hover:no-underline py-4 group">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#ffe5e5] text-beach-peach shrink-0 transition-all duration-300 group-hover:bg-beach-peach group-hover:text-white">
                      <Activity className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-playfair text-xl md:text-2xl font-semibold">Proper Swallowing</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20">
                  <p className="text-beach-text/80 text-lg leading-relaxed pb-4">
                    A correct swallowing pattern keeps the tongue from pressing against the teeth or obstructing the airway. We'll work together to establish proper tongue posture during swallowing, which can prevent dental issues and improve breathing patterns.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-beach-blue/20 mb-4">
                <AccordionTrigger className="hover:no-underline py-4 group">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#e8f8ff] text-[#62b5e5] shrink-0 transition-all duration-300 group-hover:bg-[#62b5e5] group-hover:text-white">
                      <CircleOff className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-playfair text-xl md:text-2xl font-semibold">Lip Seal</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20">
                  <p className="text-beach-text/80 text-lg leading-relaxed pb-4">
                    Strengthening the mouth muscles helps maintain a proper lip seal, encouraging nasal breathing and reducing mouth breathing. Our customized exercises will help you develop stronger lip muscles for better resting position and breathing habits.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-beach-blue/20">
                <AccordionTrigger className="hover:no-underline py-4 group">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#f0f8eb] text-[#7ab55a] shrink-0 transition-all duration-300 group-hover:bg-[#7ab55a] group-hover:text-white">
                      <CloudFog className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-playfair text-xl md:text-2xl font-semibold">Tongue Posture</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-20">
                  <p className="text-beach-text/80 text-lg leading-relaxed pb-4">
                    Improved tongue strength and coordination train the tongue to rest on the roof of the mouth, supporting proper oral and airway function. With consistent practice, you'll develop the muscle memory needed for optimal tongue positioning throughout the day and night.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
