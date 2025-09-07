import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TreatmentGoalsSection = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-block mb-5 bg-theme-sage-green/20 px-4 py-2 rounded-full">
          <span className="text-theme-sage-green font-medium">Treatment Objectives</span>
        </div>
        <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-theme-vivid-red">
          Goals of Myofunctional Therapy
        </h2>
        <p className="text-theme-gray">
          Tackles the root cause of your breathing struggles with these 4 treatment goals:
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-theme-sage-green/20 mb-4">
            <AccordionTrigger className="hover:no-underline py-4 group">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-theme-sage-green/20 text-theme-sage-green shrink-0 transition-all duration-300 group-hover:bg-theme-sage-green group-hover:text-white">
                  <img src="/andrea-cates-website-B/lovable-uploads/weather.png" alt="Nasal Breathing" className="h-7 w-7 object-contain" />
                </div>
                <div className="text-left">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-theme-vivid-red">Nasal Breathing</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-20">
              <p className="text-theme-gray text-lg leading-relaxed pb-4">
                Daytime nasal breathing helps transform the night time breathing to get longer deep restorative sleep
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-theme-sage-green/20 mb-4">
            <AccordionTrigger className="hover:no-underline py-4 group">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#e8f8ff] text-[#62b5e5] shrink-0 transition-all duration-300 group-hover:bg-[#62b5e5] group-hover:text-white">
                  <img src="/andrea-cates-website-B/lovable-uploads/lips (1).png" alt="Lips" className="h-7 w-7 object-contain" />
                </div>
                <div className="text-left">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-theme-vivid-red">Proper Lip Seal</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-20">
              <p className="text-beach-text/80 text-lg leading-relaxed pb-4">
                Lip seal encourage nasal breathing and lowers the risk of gum disease and cavities
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-theme-sage-green/20 mb-4">
            <AccordionTrigger className="hover:no-underline py-4 group">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#f0f8eb] text-[#7ab55a] shrink-0 transition-all duration-300 group-hover:bg-[#7ab55a] group-hover:text-white">
                  <img src="/andrea-cates-website-B/lovable-uploads/tongue.png" alt="Tongue Posture" className="h-7 w-7 object-contain" />
                </div>
                <div className="text-left">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-theme-vivid-red">Tongue Posture</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-20">
              <p className="text-beach-text/80 text-lg leading-relaxed pb-4">
                Provides the right support for the jaw joints, palate width and opens up the airway
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b border-theme-sage-green/20">
            <AccordionTrigger className="hover:no-underline py-4 group">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#ffe5e5] text-beach-peach shrink-0 transition-all duration-300 group-hover:bg-beach-peach group-hover:text-white">
                  <img src="/andrea-cates-website-B/lovable-uploads/swallowing-pattern.png" alt="Swallowing Pattern" className="h-7 w-7 object-contain" />
                </div>
                <div className="text-left">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-theme-vivid-red">Swallowing Pattern</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-20">
              <p className="text-beach-text/80 text-lg leading-relaxed pb-4">
                Proper swallowing keeps the tongue from pushing against teeth and improves digestion
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default TreatmentGoalsSection;
