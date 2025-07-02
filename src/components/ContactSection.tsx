import React from 'react';
import { 
  MessageCircle,
  Calendar,
  Mail,
  CalendarCheck,
  Instagram
} from 'lucide-react';

const ContactSection = () => {
  const handleCalendlyRedirect = () => {
    // Replace with Andrea's actual Calendly link
    window.open('https://calendly.com/andreacates', '_blank');
  };

  return (
    <section id="contact" className="bg-beach-sand/30 pt-8 pb-16 md:pb-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
            Schedule Your Session Today
          </h2>
          <p className="text-beach-text/90">
            I'm here to support you in creating a more balanced, fulfilling life. Choose a time that works for you, and let's begin your journey.
          </p>
        </div>

        {/* Integrated Contact and Booking Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left side: Contact Options */}
            <div className="space-y-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6">Contact Options</h3>
              
              <div className="flex items-start">
                <div className="bg-beach-blue/20 p-3 rounded-full mr-4">
                  <MessageCircle className="w-6 h-6 text-beach-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Free Consultation</h4>
                  <p className="text-sm text-beach-text/70">Schedule a 15-minute call to discuss your needs and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-beach-sand/40 p-3 rounded-full mr-4">
                  <Calendar className="w-6 h-6 text-beach-text" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Book a Session</h4>
                  <p className="text-sm text-beach-text/70">Ready to begin? Schedule your first full coaching session.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-beach-blue/20 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-beach-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Inquiry</h4>
                  <p className="text-sm text-beach-text/70">Send a message with any questions about coaching services.</p>
                  <a href="mailto:andreacates@gmail.com" className="text-beach-blue hover:underline text-sm font-medium mt-1 inline-block">
                    andreacates@gmail.com
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Follow Me</h4>
                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/andrea_myofunctionaltherapist" className="bg-beach-blue/20 p-2.5 rounded-full hover:bg-beach-blue/30 transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.tiktok.com/@myofunctionaltherapist" className="bg-beach-sand/40 p-2.5 rounded-full hover:bg-beach-sand/60 transition-colors" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M9 1.5C9 1.5 9 1.5 9 1.5C9 1.10218 9.15804 0.720644 9.43934 0.43934C9.72064 0.158035 10.1022 0 10.5 0L13.5 0C13.8978 0 14.2794 0.158035 14.5607 0.43934C14.842 0.720644 15 1.10218 15 1.5C15 1.5 15 1.5 15 1.5V3H17.5C17.8978 3 18.2794 3.15804 18.5607 3.43934C18.842 3.72064 19 4.10218 19 4.5C19 4.89782 18.842 5.27936 18.5607 5.56066C18.2794 5.84196 17.8978 6 17.5 6H15V7.5C15 10.5 18 10.5 18 10.5V13.5C18 13.5 16.5 13.5 15 13.5C13.5 13.5 12 12 12 10.5V1.5H10.5C10.5 4.5 7.5 4.5 7.5 4.5V7.5C7.5 7.5 9 7.5 9 7.5V10.5C9 15 12 16.5 15 16.5V19.5C12 19.5 9 18 9 13.5V10.5C6 10.5 4.5 7.5 4.5 7.5C4.5 7.5 4.5 4.5 7.5 4.5C7.5 4.5 9 4.5 9 1.5Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side: Ready to Book */}
            <div className="flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-10">
              <CalendarCheck className="w-16 h-16 text-beach-blue mb-6" />
              <h3 className="font-playfair text-2xl font-semibold mb-4">Ready to Book Your Session?</h3>
              <p className="text-beach-text/80 mb-8">
                Use my convenient online scheduling system to find a time that works best for you. 
                Choose from various session types including free consultations and full coaching sessions.
              </p>
              <button 
                onClick={handleCalendlyRedirect}
                className="bg-beach-blue hover:bg-beach-blue/90 text-white px-6 py-3 rounded-full text-center font-medium flex items-center justify-center transition-colors"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Schedule with Calendly
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visual wave transition */}
      <div className="visual-transition">
        {/* Wave SVG */}
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="wave wave1">
            <path fill="#90AACB" fillOpacity="0.3" d="M0,192L40,186.7C80,181,160,171,240,176C320,181,400,203,480,197.3C560,192,640,160,720,133.3C800,107,880,85,960,90.7C1040,96,1120,128,1200,138.7C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="wave wave2">
            <path fill="#F9D5A7" fillOpacity="0.4" d="M0,288L40,266.7C80,245,160,203,240,181.3C320,160,400,160,480,170.7C560,181,640,203,720,192C800,181,880,139,960,138.7C1040,139,1120,181,1200,192C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="wave wave3">
            <path fill="#FFF8E3" fillOpacity="0.5" d="M0,32L40,69.3C80,107,160,181,240,202.7C320,224,400,192,480,165.3C560,139,640,117,720,106.7C800,96,880,96,960,85.3C1040,75,1120,53,1200,64C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>

        {/* Handwritten message */}
        <div className="handwritten-message">
          <p className="font-handwriting">Begin your journey to wellness...</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
