
import React from 'react';
import { Wind, Activity, CircleOff, CloudFog } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TreatmentGoalsSection = () => {
  return (
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
  );
};

export default TreatmentGoalsSection;
