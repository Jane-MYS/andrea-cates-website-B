
import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const BenefitsCard = () => {
  return (
    <div className="card-gradient rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 text-beach-blue bg-beach-blue/20">
        <Star className="h-10 w-10" />
      </div>
      <h3 className="font-playfair text-2xl font-semibold mb-4">Key Benefits</h3>
      
      <ul className="space-y-3">
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
          <span><span className="font-medium">Improved sleep:</span> Can reduce snoring and symptoms of sleep apnea for better rest</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
          <span><span className="font-medium">Clearer speech:</span> Helps with speech clarity and articulation by training the tongue and lips</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
          <span><span className="font-medium">Less jaw pain:</span> Can relieve TMJ discomfort and reduce teeth grinding</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
          <span><span className="font-medium">Dental health:</span> May help prevent dental issues like cavities and periodontal disease and improve orthodontic treatment results</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-beach-blue mr-2 mt-1 flex-shrink-0" />
          <span><span className="font-medium">Confidence:</span> Improves facial muscle tone and posture, which can enhance appearance and self-esteem</span>
        </li>
      </ul>
      
      <p className="mt-6 text-beach-text/80">
        Myofunctional therapy is safe, non-invasive, and tailored to each person's needs, making it a gentle but effective way to support oral health and overall well-being.
      </p>
    </div>
  );
};

export default BenefitsCard;
