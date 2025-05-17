
import React from 'react';
import { Stethoscope } from 'lucide-react';

const HowItWorksCard = () => {
  return (
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
  );
};

export default HowItWorksCard;
