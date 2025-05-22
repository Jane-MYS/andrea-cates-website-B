
import React from 'react';
import { Stethoscope } from 'lucide-react';

const HowItWorksCard = () => {
  return (
    <div className="card-gradient rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full text-beach-blue bg-beach-blue/20">
          <Stethoscope className="h-7 w-7" />
        </div>
        <h3 className="font-playfair text-2xl font-semibold ml-4">How It Works</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-playfair text-xl font-medium mb-2">The therapy uses simple, targeted exercises to:</h4>
          <ul className="text-beach-text/80 space-y-2 list-disc pl-5">
            <li>Strengthen the tongue and facial muscles</li>
            <li>Teach proper tongue and lip positioning</li>
            <li>Encourage nasal (not mouth) breathing</li>
            <li>Develop healthy swallowing and chewing patterns</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-playfair text-xl font-medium mb-2">Who Can Benefit?</h4>
          <p className="text-beach-text/80 mb-2">
            Myofunctional therapy can help people of all ages, especially those with:
          </p>
          <ul className="text-beach-text/80 space-y-2 list-disc pl-5">
            <li>Mouth breathing or snoring</li>
            <li>Speech difficulties</li>
            <li>Tongue thrust or thumb sucking habits</li>
            <li>Jaw pain or TMJ problems</li>
            <li>Sleep apnea or frequent snoring</li>
            <li>Orthodontic issues (like crooked teeth or bite problems)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
