
import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const BenefitsCard = () => {
  return (
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
  );
};

export default BenefitsCard;
