import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-beige pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="text-center mb-12">
            {/* Logo and name */}
            <div className="flex items-center justify-center mb-6">
              <Avatar className="h-16 w-16 mr-3">
                <AvatarImage src="/andrea-cates-website-B/lovable-uploads/Andrea-Logo-New_footer2.png" alt="Andrea Cates logo" />
              </Avatar>
              <span className="font-playfair text-3xl font-medium">Andrea Cates</span>
            </div>
            
            {/* Contact information */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Email */}
              <div className="flex items-center justify-center md:justify-center">
                <Mail className="w-5 h-5 mr-2 text-beach-blue flex-shrink-0" />
                <a href="mailto:andrea@andreacates.com" className="text-beach-text/80 hover:text-beach-blue transition-colors text-center">
                  andrea@andreacates.com
                </a>
              </div>
              
              {/* Phone */}
              <div className="flex items-center justify-center md:justify-center">
                <svg className="w-5 h-5 mr-2 text-beach-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+13109448493" className="text-beach-text/80 hover:text-beach-blue transition-colors text-center">
                  310-944-8493
                </a>
              </div>
              
              {/* Location */}
              <div className="flex items-center justify-center md:justify-center">
                <svg className="w-5 h-5 mr-2 text-beach-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-beach-text/80 text-center">Manhattan Beach & Redondo Beach, California</span>
              </div>
            </div>
            
            {/* Social media links */}
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/andrea_myofunctionaltherapist" 
                 className="bg-beach-blue/10 p-3 rounded-full hover:bg-beach-blue/20 transition-colors" 
                 aria-label="Instagram">
                <Instagram className="w-6 h-6 text-beach-blue" />
              </a>
              <a href="https://www.tiktok.com/@myofunctionaltherapist" 
                 className="bg-beach-blue/10 p-3 rounded-full hover:bg-beach-blue/20 transition-colors" 
                 aria-label="TikTok">
                <svg className="w-6 h-6 text-beach-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M9 1.5C9 1.5 9 1.5 9 1.5C9 1.10218 9.15804 0.720644 9.43934 0.43934C9.72064 0.158035 10.1022 0 10.5 0L13.5 0C13.8978 0 14.2794 0.158035 14.5607 0.43934C14.842 0.720644 15 1.10218 15 1.5C15 1.5 15 1.5 15 1.5V3H17.5C17.8978 3 18.2794 3.15804 18.5607 3.43934C18.842 3.72064 19 4.10218 19 4.5C19 4.89782 18.842 5.27936 18.5607 5.56066C18.2794 5.84196 17.8978 6 17.5 6H15V7.5C15 10.5 18 10.5 18 10.5V13.5C18 13.5 16.5 13.5 15 13.5C13.5 13.5 12 12 12 10.5V1.5H10.5C10.5 4.5 7.5 4.5 7.5 4.5V7.5C7.5 7.5 9 7.5 9 7.5V10.5C9 15 12 16.5 15 16.5V19.5C12 19.5 9 18 9 13.5V10.5C6 10.5 4.5 7.5 4.5 7.5C4.5 7.5 4.5 4.5 7.5 4.5C7.5 4.5 9 4.5 9 1.5Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-beach-text/70 mb-4 md:mb-0">
              &copy; {currentYear} Andrea Cates. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-beach-text/70">
              <a href="#" className="hover:text-beach-peach transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-beach-peach transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
