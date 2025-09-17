import React from 'react';
import { 
  MessageCircle,
  Calendar,
  Mail,
  CalendarCheck,
  Instagram
} from 'lucide-react';

const ContactSection = () => {
  const handleEmailRedirect = () => {
    window.location.href = 'mailto:andrea@andreacates.com';
  };

  return (
    <section id="contact" className="bg-beach-sand/30 pt-8 pb-8 md:pb-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4 text-theme-vivid-red">
            Schedule Your Session Today
          </h2>
          <p className="text-beach-text/90">
            I'm here to support you in creating a more balanced, fulfilling life. Choose a time that works for you, and let's begin your journey.
          </p>
        </div>

        {/* Centered Grid Layout */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Booking Section */}
            <div className="text-center mb-6">
              <CalendarCheck className="w-20 h-20 text-beach-blue mx-auto mb-6" />
              <h3 className="font-playfair text-3xl font-semibold mb-4 text-theme-vivid-red">Ready to Book Your Session?</h3>
              <button 
                onClick={handleEmailRedirect}
                className="bg-theme-vivid-red hover:bg-theme-vivid-red/90 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center transition-colors mx-auto"
              >
                <Calendar className="mr-3 w-6 h-6" />
                Schedule with Me Now
              </button>
            </div>

            {/* Contact Options Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Free Consultation Card */}
              <div className="border-2 border-theme-card-pink rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="border-2 border-theme-card-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-theme-vivid-red" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Free Consultation</h4>
                <p className="text-sm text-theme-gray">Schedule a 15-minute call to discuss your needs and goals.</p>
              </div>

              {/* Email Inquiry Card */}
              <div className="border-2 border-theme-card-pink rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="border-2 border-theme-card-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-theme-vivid-red" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Email Inquiry</h4>
                <p className="text-sm text-theme-gray mb-4">Send a message with any questions about myofunctional therapy services.</p>
                <a href="mailto:andrea@andreacates.com" className="text-theme-vivid-red hover:text-theme-vivid-red/80 font-medium text-sm transition-colors">
                  andrea@andreacates.com
                </a>
              </div>

              {/* Follow Me Card */}
              <div className="border-2 border-theme-card-pink rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="border-2 border-theme-card-pink p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-theme-vivid-red" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Follow Me</h4>
                <p className="text-sm text-theme-gray mb-4">Stay connected for tips and updates.</p>
                <div className="flex justify-center space-x-3">
                  <a href="https://www.instagram.com/andrea_myofunctionaltherapist" className="border-2 border-theme-card-pink p-2 rounded-full hover:bg-theme-card-pink/20 transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-theme-vivid-red" />
                  </a>
                  <a href="https://www.tiktok.com/@myofunctionaltherapist" className="border-2 border-theme-card-pink p-2 rounded-full hover:bg-theme-card-pink/20 transition-colors" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 text-theme-vivid-red" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactSection;
