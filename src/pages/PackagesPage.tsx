import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, DollarSign, Heart, Target, Zap, Star, Sparkles, ArrowRight } from 'lucide-react';

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
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 bg-theme-vivid-red"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10 bg-theme-accent-beige"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full opacity-10 bg-theme-accent-beige"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full opacity-10 bg-theme-vivid-red"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        
        {/* Headline Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 mr-3 text-theme-vivid-red" />
            <span className="text-lg font-medium px-4 py-2 rounded-full bg-theme-vivid-red text-white">
              Transform Your Life Today
            </span>
            <Sparkles className="w-8 h-8 ml-3 text-theme-vivid-red" />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold mb-6 leading-tight text-theme-vivid-red" style={{ color: '#FF495C' }}>
            Affordable, Personalized<br />
            <span className="text-theme-vivid-red" style={{ color: '#FF495C' }}>Myofunctional Therapy</span>
          </h1>
          <div className="flex items-center justify-center mb-8">
            <Star className="w-6 h-6 mr-2 text-theme-vivid-red" />
            <p className="text-2xl md:text-3xl font-medium text-theme-vivid-red">
              See results in as little as 2–3 months
            </p>
            <Star className="w-6 h-6 ml-2 text-theme-vivid-red" />
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
              <Sparkles className="w-8 h-8 mr-3 text-theme-vivid-red" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-theme-black">
                What's Included in Your Journey
              </h2>
              <Sparkles className="w-8 h-8 ml-3 text-theme-vivid-red" />
            </div>
            <p className="text-xl text-theme-gray max-w-3xl mx-auto">
              A comprehensive approach to transforming your breathing, sleep, and overall well-being
            </p>
          </div>

          {/* Flowing Content Sections */}
          <div className="relative z-10 space-y-24">
            
            {/* Section 1: Sleep Optimization */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-theme-vivid-red to-theme-rose rounded-2xl flex items-center justify-center mr-6">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-theme-black">Sleep Optimization</h3>
                  </div>
                  <p className="text-lg text-theme-gray mb-8 leading-relaxed">
                    Transform your sleep quality through proper breathing techniques and posture correction. 
                    Experience deeper, more restorative sleep that energizes your entire day.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-vivid-red rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Improved airway positioning</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-vivid-red rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Reduced snoring and sleep apnea</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-vivid-red rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Enhanced sleep quality</span>
                    </div>
                  </div>
                </div>
                
                {/* Sleep Optimization Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-theme-vivid-red/20 to-theme-rose/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img 
                        src="/andrea-cates-personal-website/Sleeping1-1.png" 
                        alt="Peaceful sleep and relaxation" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Breathing Training */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Breathing Training Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-l from-theme-sage-green/20 to-theme-gold/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <img 
                      src="/andrea-cates-personal-website/breathing-1-1.webp" 
                      alt="Breathing exercises and techniques" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-theme-sage-green to-theme-gold rounded-2xl flex items-center justify-center mr-6">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-theme-black">Breathing Training</h3>
                  </div>
                  <p className="text-lg text-theme-gray mb-8 leading-relaxed">
                    Master proper breathing techniques that support your overall health and well-being. 
                    Transform your daily life through conscious, effective breathing.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-sage-green rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Diaphragmatic breathing</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-sage-green rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Nasal breathing techniques</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Calming Techniques */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-theme-rose to-theme-vivid-red rounded-2xl flex items-center justify-center mr-6">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-theme-black">Calming Techniques</h3>
                  </div>
                  <p className="text-lg text-theme-gray mb-8 leading-relaxed">
                    Learn relaxation methods that reduce stress and promote healing throughout your journey. 
                    Discover the power of mindful calm in your daily life.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-rose rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Stress reduction methods</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-rose rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Mindfulness practices</span>
                    </div>
                  </div>
                </div>
                
                {/* Calming Techniques Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-theme-rose/20 to-theme-vivid-red/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img 
                        src="/andrea-cates-personal-website/zen-1.png" 
                        alt="Calming and relaxation techniques" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Advanced Breathing */}
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Advanced Breathing Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-l from-theme-burgundy/20 to-theme-vivid-red/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <img 
                      src="/andrea-cates-personal-website/breathing1-2.png" 
                      alt="Advanced breathing techniques" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-theme-burgundy to-theme-vivid-red rounded-2xl flex items-center justify-center mr-6">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-theme-black">Advanced Breathing</h3>
                  </div>
                  <p className="text-lg text-theme-gray mb-8 leading-relaxed">
                    Master advanced breathing techniques that enhance your therapy results and improve your daily life. 
                    Take your practice to the next level.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-burgundy rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Respiratory muscle strengthening</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-burgundy rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Airway optimization techniques</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-theme-burgundy rounded-full mr-4 group-hover:scale-125 transition-transform"></div>
                      <span className="text-theme-gray group-hover:text-theme-black transition-colors">Habit elimination strategies</span>
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
              <Zap className="w-8 h-8 mr-3 text-theme-vivid-red" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-theme-black">
                Your Journey Timeline
              </h2>
              <Zap className="w-8 h-8 ml-3 text-theme-vivid-red" />
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
    </div>
  );
};

export default PackagesPage;