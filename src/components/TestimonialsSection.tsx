
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Working Professional",
    quote: "Working with Andrea has transformed my approach to stress and work-life balance. I've found a sense of calm I didn't think was possible in my busy life.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  },
  {
    name: "Michael Chen",
    title: "Entrepreneur",
    quote: "Andrea helped me navigate a major career transition with mindfulness and purpose. Her holistic approach addressed exactly what I needed at that point in my life.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  },
  {
    name: "Emma Rodriguez",
    title: "Parent & Educator",
    quote: "The mindfulness techniques Andrea taught me have been invaluable for managing both my classroom and my home. I'm more present and patient than ever before.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-5 bg-beach-blue/20 px-4 py-2 rounded-full">
            <span className="text-beach-blue font-medium">Client Stories</span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
            Transformations & Testimonials
          </h2>
          <p className="text-beach-text/90">
            Hear from clients who have experienced positive change through our work together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card rounded-2xl shadow-md p-8 relative">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-beach-text/90 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-beach-text/70">{testimonial.title}</p>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 bg-white rounded-full p-2 shadow-md">
                <svg className="w-6 h-6 text-beach-peach" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
