import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Clock, DollarSign, Heart, Target, Zap, Star, Sparkles, ArrowRight } from 'lucide-react';

const PackagesPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Immediate scroll
    scrollToTop();
    
    // Also scroll after a small delay to ensure it works
    setTimeout(scrollToTop, 100);
  }, []);

  const handleEmailRedirect = () => {
    window.location.href = 'mailto:andrea@andreacates.com';
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#faf3f3' }}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#ff495c' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#ff495c' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#ff495c' }}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full opacity-10" style={{ backgroundColor: '#ff495c' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        
        {/* Headline Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 mr-3" style={{ color: '#ff495c' }} />
            <span className="text-lg font-medium px-4 py-2 rounded-full" style={{ backgroundColor: '#ff495c', color: 'white' }}>
              Transform Your Life Today
            </span>
            <Sparkles className="w-8 h-8 ml-3" style={{ color: '#ff495c' }} />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: '#000000' }}>
            Affordable, Personalized<br />
            <span style={{ color: '#ff495c' }}>Myofunctional Therapy</span>
          </h1>
          <div className="flex items-center justify-center mb-8">
            <Star className="w-6 h-6 mr-2" style={{ color: '#ff495c' }} />
            <p className="text-2xl md:text-3xl font-medium" style={{ color: '#ff495c' }}>
              See results in as little as 2–3 months
            </p>
            <Star className="w-6 h-6 ml-2" style={{ color: '#ff495c' }} />
          </div>
        </div>

        {/* What's Included Section */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl shadow-2xl p-8 md:p-12 border-2" style={{ borderColor: '#ff495c' }}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 mr-3" style={{ color: '#ff495c' }} />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: '#000000' }}>
                  What's Included in Your Journey
                </h2>
                <Sparkles className="w-8 h-8 ml-3" style={{ color: '#ff495c' }} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-3 group-hover:bg-red-200 transition-colors">
                    <Check className="w-6 h-6" style={{ color: '#ff495c' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>
                      Tailored Exercises
                    </h3>
                    <p className="text-base" style={{ color: '#000000' }}>
                      Customized exercises designed specifically for your needs
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-3 group-hover:bg-red-200 transition-colors">
                    <Check className="w-6 h-6" style={{ color: '#ff495c' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>
                      Breathing Training
                    </h3>
                    <p className="text-base" style={{ color: '#000000' }}>
                      Learn proper breathing techniques for better health
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-3 group-hover:bg-red-200 transition-colors">
                    <Check className="w-6 h-6" style={{ color: '#ff495c' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>
                      Swallowing & Chewing
                    </h3>
                    <p className="text-base" style={{ color: '#000000' }}>
                      Practice proper swallowing and chewing patterns
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-3 group-hover:bg-red-200 transition-colors">
                    <Check className="w-6 h-6" style={{ color: '#ff495c' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>
                      Posture Correction
                    </h3>
                    <p className="text-base" style={{ color: '#000000' }}>
                      Improve sleep and swallowing posture
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group md:col-span-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-3 group-hover:bg-red-200 transition-colors">
                    <Check className="w-6 h-6" style={{ color: '#ff495c' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>
                      Habit Elimination
                    </h3>
                    <p className="text-base" style={{ color: '#000000' }}>
                      Break harmful habits like thumb-sucking and incorrect tongue placement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Results Section */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl shadow-2xl p-8 md:p-12 border-2" style={{ borderColor: '#ff495c' }}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-6">
                <Zap className="w-10 h-10 mr-3" style={{ color: '#ff495c' }} />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold" style={{ color: '#000000' }}>
                  Quick Results Timeline
                </h2>
                <Zap className="w-10 h-10 ml-3" style={{ color: '#ff495c' }} />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <Clock className="w-10 h-10" style={{ color: '#ff495c' }} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                  2–3 Months
                </h3>
                <p className="text-lg font-medium" style={{ color: '#000000' }}>
                  Noticeable improvements
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <Target className="w-10 h-10" style={{ color: '#ff495c' }} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                  4–6 Months
                </h3>
                <p className="text-lg font-medium" style={{ color: '#000000' }}>
                  Significant results
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                    <Heart className="w-10 h-10" style={{ color: '#ff495c' }} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>
                  Ongoing
                </h3>
                <p className="text-lg font-medium" style={{ color: '#000000' }}>
                  Frequency tapers as you progress
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Transparency Section */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl shadow-2xl p-8 md:p-12 text-center border-2" style={{ borderColor: '#ff495c' }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-full p-3 shadow-lg border-2" style={{ borderColor: '#ff495c' }}>
                <DollarSign className="w-8 h-8" style={{ color: '#ff495c' }} />
              </div>
            </div>
            <div className="pt-6">
              <h2 className="font-playfair text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                <span className="text-4xl md:text-6xl" style={{ color: '#ff495c' }}>$2,600</span> – <span className="text-4xl md:text-6xl" style={{ color: '#ff495c' }}>$3,000</span>
              </h2>
              <p className="text-xl mb-8 font-medium" style={{ color: '#000000' }}>
                Full Program Packages
              </p>
              <div className="bg-red-50 rounded-2xl p-6 mb-8">
                <p className="text-lg font-semibold mb-4" style={{ color: '#000000' }}>
                  Includes 10–18 sessions (6–12 months)
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5" style={{ color: '#ff495c' }} />
                    <span className="text-lg font-medium" style={{ color: '#000000' }}>
                      Free 15-minute consultation
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Check className="w-5 h-5" style={{ color: '#ff495c' }} />
                    <span className="text-lg font-medium" style={{ color: '#000000' }}>
                      Family & upfront payment discounts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative">
          <div className="rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden" style={{ backgroundColor: '#faf3f3' }}>
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: '#ff495c' }}></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: '#ff495c' }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 mr-3" style={{ color: '#ff495c' }} />
                <h2 className="font-playfair text-3xl md:text-5xl font-bold" style={{ color: '#000000' }}>
                  Ready to Transform Your Life?
                </h2>
                <Heart className="w-8 h-8 ml-3" style={{ color: '#ff495c' }} />
              </div>
              <p className="text-xl mb-8" style={{ color: '#000000' }}>
                Start your journey to better health and confidence today
              </p>
              <button
                onClick={handleEmailRedirect}
                className="inline-flex items-center justify-center px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
                style={{ backgroundColor: '#ff495c', color: 'white' }}
              >
                <span>Book Your Free Consultation</span>
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-6 flex items-center justify-center space-x-2 text-lg" style={{ color: '#000000' }}>
                <Star className="w-5 h-5" style={{ color: '#ff495c' }} />
                <span>No commitment required</span>
                <Star className="w-5 h-5" style={{ color: '#ff495c' }} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PackagesPage;