
import React from 'react';
import { 
  Smile, 
  Heart, 
  Star, 
  Sunset 
} from 'lucide-react';

const servicesData = [
  {
    icon: <Smile className="h-10 w-10" />,
    title: "Wellness Coaching",
    description: "Personalized coaching sessions focused on your holistic wellness goals, from stress reduction to life balance.",
    color: "beach-blue",
    link: "#contact"
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Mind-Body Connection",
    description: "Learn practices that strengthen the connection between your mental and physical health for overall wellbeing.",
    color: "beach-peach",
    link: "#contact"
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: "Life Transitions",
    description: "Support and guidance through major life changes, helping you find clarity, purpose, and direction.",
    color: "beach-blue",
    link: "#contact"
  },
  {
    icon: <Sunset className="h-10 w-10" />,
    title: "Mindful Living",
    description: "Develop mindfulness practices that help you live more fully in the present moment and reduce anxiety.",
    color: "beach-peach",
    link: "#contact"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-beach-sand/30 section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-5 bg-beach-peach/20 px-4 py-2 rounded-full">
            <span className="text-beach-peach font-medium">My Services</span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
            How I Can Support Your Journey
          </h2>
          <p className="text-beach-text/90">
            I offer a range of services designed to support different aspects of your wellbeing journey.
            Each approach is tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="card-gradient rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 text-${service.color} bg-${service.color}/20`}>
                {service.icon}
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-beach-text/80 mb-6">{service.description}</p>
              <a 
                href={service.link} 
                className="inline-flex items-center font-medium text-beach-text hover:text-beach-peach transition-colors"
              >
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-playfair text-2xl font-semibold mb-4">Not sure which service is right for you?</h3>
          <p className="text-beach-text/90 mb-8 max-w-2xl mx-auto">
            Schedule a complimentary 20-minute consultation to discuss your needs and discover how we can work together on your wellness journey.
          </p>
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
