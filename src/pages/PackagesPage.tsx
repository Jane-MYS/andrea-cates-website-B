import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, DollarSign, Heart, Target, Zap, Star, Sparkles, ArrowRight, ArrowLeft, Home } from 'lucide-react';
import Footer from '@/components/Footer';

const PackagesPage = () => {
  useLayoutEffect(() => {
    // Scroll to top immediately before browser paints
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    // Additional scroll attempts after component mounts
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Also try scrolling the main container if it exists
      const mainContainer = document.querySelector('main') || document.querySelector('#root');
      if (mainContainer) {
        mainContainer.scrollTop = 0;
      }
    };
    
    // Multiple delayed scrolls to ensure it works
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 200);
    setTimeout(scrollToTop, 500);
  }, []);

  const handleEmailRedirect = () => {
    window.location.href = 'mailto:andrea@andreacates.com';
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-theme-light-red" style={{ scrollBehavior: 'auto', backgroundColor: '#FAF3F3' }}>
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-100 shadow-sm relative z-20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Name */}
            <Link to="/" className="flex items-center space-x-4">
              <img 
                src="/andrea-cates-website-B/lovable-uploads/Andrea-Logo-New.jpeg" 
                alt="Andrea Cates - Myofunctional Therapist" 
                className="h-12"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Marcellus, serif' }}>
                  Andrea Cates
                </h1>
                <p className="text-sm text-red-500" style={{ fontFamily: 'BD Sans, sans-serif' }}>
                  Myofunctional Therapist
                </p>
              </div>
            </Link>

            {/* Back to Home Button */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-theme-vivid-red text-white hover:bg-red-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 bg-theme-vivid-red"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10 bg-theme-accent-beige"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full opacity-10 bg-theme-accent-beige"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full opacity-10 bg-theme-vivid-red"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        
        {/* Hero Section - Split Layout */}
        <div className="relative mb-20 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Marcellus, serif' }}>
                Andrea Cates
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-red-500 mb-8" style={{ fontFamily: 'BD Sans, sans-serif' }}>
                Myofunctional therapy in South Bay
              </h2>
              <p className="text-xl md:text-2xl font-medium text-theme-vivid-red mb-8 leading-relaxed">
                Easy, manageable and customize for every single individual
              </p>
              
              {/* Call-to-Action Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleEmailRedirect}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-theme-vivid-red text-white hover:bg-red-600"
                >
                  <span>Book Your Free Consultation</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center justify-center lg:justify-start text-lg text-theme-gray">
                  <span>No commitment required</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Hero Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-theme-vivid-red/20 to-theme-rose/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/andrea-cates-website-B/lovable-uploads/Packagepage-image-hero.jpg" 
                  alt="Andrea Cates Myofunctional Therapy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section - Smooth Dynamic Layout */}
        <div className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-theme-light-red/30 via-theme-beige/20 to-theme-warm-brown/10"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-theme-sage-green/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-theme-gold/10 rounded-full blur-xl"></div>
          
          {/* Header */}
          <div className="relative z-10 text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-theme-black">
                Myofunctional Therapy Is Broken Down In Three Phases
              </h2>
            </div>
            <p className="text-xl text-theme-gray max-w-3xl mx-auto">
              A structured approach to building lasting habits and skills for optimal health
            </p>
          </div>

          {/* Three Phases Content */}
          <div className="relative z-10 space-y-16">
            
            {/* Phase I: Intensive Phase */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-theme-vivid-red to-theme-rose rounded-2xl flex items-center justify-center mr-6">
                      <span className="text-white font-bold text-xl">I</span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-theme-black">Intensive Phase I</h3>
                      <p className="text-lg text-theme-vivid-red font-semibold">(Meet every 2 weeks)</p>
                    </div>
                  </div>
                  <p className="text-lg text-theme-gray mb-8 leading-relaxed">
                    The purpose is to gain muscle control and coordination, nasal breathing, proper tongue and lip resting posture, proper body posture, swallowing mechanics and habit elimination. These are the "tools" you will need in your toolbox to practice good habits for a lifetime.
                  </p>
                </div>
                
                {/* Phase I Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-theme-vivid-red/20 to-theme-rose/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img 
                        src="/andrea-cates-website-B/lovable-uploads/Picture1.jpg" 
                        alt="Intensive Phase I - Building Foundation" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase II: Habituation Phase */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Phase II Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-l from-theme-sage-green/20 to-theme-gold/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img 
                        src="/andrea-cates-website-B/lovable-uploads/Picture2.jpg" 
                        alt="Habituation Phase II - Building Habits" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-theme-sage-green to-theme-gold rounded-2xl flex items-center justify-center mr-6">
                      <span className="text-white font-bold text-xl">II</span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-theme-black">Habituation Phase II</h3>
                      <p className="text-lg text-theme-sage-green font-semibold">(Meet every 2-3 weeks)</p>
                    </div>
                  </div>
                  <p className="text-lg text-theme-gray mb-8 leading-relaxed">
                    Advance the habits learned in Phase I and begin to apply them consistently to properly and effectively chew, drink and swallow as well as maintaining the proper tongue and lip resting postures, proper breathing and proper body posture for longer time periods.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase III: Retention Phase */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-theme-rose to-theme-vivid-red rounded-2xl flex items-center justify-center mr-6">
                      <span className="text-white font-bold text-xl">III</span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-theme-black">Retention Phase III</h3>
                      <p className="text-lg text-theme-rose font-semibold">(Meet every 4-5 weeks)</p>
                    </div>
                  </div>
                  <p className="text-lg text-theme-gray mb-8 leading-relaxed">
                    Continued habituation of skills learned in Phases I & II and integration of these habits and skills into your lifestyle.
                  </p>
                </div>
                
                {/* Phase III Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-theme-rose/20 to-theme-vivid-red/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img 
                        src="/andrea-cates-website-B/lovable-uploads/Picture3.jpg" 
                        alt="Retention Phase III - Lifestyle Integration" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Results Timeline - Dynamic Flow Design */}
        <div className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-theme-beige/40 via-theme-light-red/20 to-theme-warm-brown/30"></div>
          <div className="absolute top-10 right-20 w-24 h-24 bg-theme-gold/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-theme-sage-green/20 rounded-full blur-2xl"></div>
          
          {/* Header */}
          <div className="relative z-10 text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-theme-black">
                Your Journey Timeline
              </h2>
            </div>
            <p className="text-xl text-theme-gray max-w-3xl mx-auto">
              See the progression of your transformation with clear milestones and expected outcomes
            </p>
          </div>

          {/* Timeline Flow */}
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-theme-vivid-red via-theme-rose to-theme-sage-green hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              
              {/* Month 2-3 */}
              <div className="relative flex items-center">
                <div className="w-full lg:w-1/2 lg:pr-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-theme-vivid-red shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-theme-vivid-red rounded-full flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-theme-black">2–3 Months</h3>
                        <p className="text-theme-vivid-red font-semibold">Initial Progress</p>
                      </div>
                    </div>
                    <p className="text-lg text-theme-gray leading-relaxed">
                      Begin to notice improvements in breathing patterns, reduced snoring, and better sleep quality. 
                      Your body starts adapting to the new techniques.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-theme-vivid-red/10 text-theme-vivid-red rounded-full text-sm font-medium">Better Sleep</span>
                      <span className="px-3 py-1 bg-theme-vivid-red/10 text-theme-vivid-red rounded-full text-sm font-medium">Reduced Snoring</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-theme-vivid-red rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                
                <div className="w-full lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Month 4-6 */}
              <div className="relative flex items-center">
                <div className="w-full lg:w-1/2 lg:pr-12"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-theme-rose rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-theme-rose shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-theme-rose rounded-full flex items-center justify-center mr-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-theme-black">4–6 Months</h3>
                        <p className="text-theme-rose font-semibold">Significant Results</p>
                      </div>
                    </div>
                    <p className="text-lg text-theme-gray leading-relaxed">
                      Experience major improvements in airway function, enhanced breathing efficiency, and substantial 
                      reduction in sleep-related issues. Your confidence grows as techniques become natural.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-theme-rose/10 text-theme-rose rounded-full text-sm font-medium">Improved Airway</span>
                      <span className="px-3 py-1 bg-theme-rose/10 text-theme-rose rounded-full text-sm font-medium">Better Breathing</span>
                      <span className="px-3 py-1 bg-theme-rose/10 text-theme-rose rounded-full text-sm font-medium">Enhanced Energy</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ongoing */}
              <div className="relative flex items-center">
                <div className="w-full lg:w-1/2 lg:pr-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-theme-sage-green shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-theme-sage-green rounded-full flex items-center justify-center mr-4">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-theme-black">Ongoing</h3>
                        <p className="text-theme-sage-green font-semibold">Lifelong Benefits</p>
                      </div>
                    </div>
                    <p className="text-lg text-theme-gray leading-relaxed">
                      Maintain your progress with reduced session frequency. The techniques become second nature, 
                      providing lasting improvements in your overall health and well-being.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-theme-sage-green/10 text-theme-sage-green rounded-full text-sm font-medium">Sustained Results</span>
                      <span className="px-3 py-1 bg-theme-sage-green/10 text-theme-sage-green rounded-full text-sm font-medium">Natural Habits</span>
                      <span className="px-3 py-1 bg-theme-sage-green/10 text-theme-sage-green rounded-full text-sm font-medium">Long-term Health</span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-theme-sage-green rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                
                <div className="w-full lg:w-1/2 lg:pl-12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Transparency Section */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-br from-white to-theme-light-red rounded-3xl shadow-2xl p-8 md:p-12 text-center border-2 border-theme-accent-beige">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-full p-3 shadow-lg border-2 border-theme-accent-beige">
                <DollarSign className="w-8 h-8 text-theme-vivid-red" />
              </div>
            </div>
            <div className="pt-6">
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4 text-theme-black">
                <span className="text-4xl md:text-6xl text-theme-vivid-red">$2,600</span> – <span className="text-4xl md:text-6xl text-theme-vivid-red">$3,000</span>
              </h2>
              <p className="text-xl mb-8 font-medium text-theme-black">
                Full Program Packages
              </p>
              <div className="bg-theme-light-red rounded-2xl p-6 mb-8">
                <p className="text-lg font-semibold mb-4 text-theme-black">
                  Includes 10–18 sessions (6–12 months)
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5 text-theme-vivid-red" />
                    <span className="text-lg font-medium text-theme-black">
                      Free 15-minute consultation
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5 text-theme-vivid-red" />
                    <span className="text-lg font-medium text-theme-black">
                      Family & upfront payment discounts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer-Style Call to Action */}
        <div className="relative bg-theme-beige py-20 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-theme-sage-green/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-theme-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-theme-rose/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-theme-vivid-red/10 rounded-full blur-xl"></div>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="text-center mb-6">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-theme-black leading-tight whitespace-nowrap">
                Ready to Transform Your Life?
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-theme-gray mb-8 leading-relaxed max-w-3xl mx-auto">
              Start your journey to better health, improved sleep, and renewed confidence. 
              Take the first step towards a life-changing transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleEmailRedirect}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl group bg-theme-vivid-red text-white hover:bg-theme-rose"
              >
                <span>Book Your Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center space-x-2 text-lg text-theme-gray">
                <Star className="w-5 h-5 text-theme-vivid-red" />
                <span>No commitment required</span>
                <Star className="w-5 h-5 text-theme-vivid-red" />
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PackagesPage;