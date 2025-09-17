import React, { useState } from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Instagram, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
              <div className="flex items-start md:items-center justify-center md:justify-center">
                <Mail className="w-5 h-5 mr-2 text-beach-blue flex-shrink-0 mt-0.5 md:mt-0" />
                <a href="mailto:andrea@andreacates.com" className="text-beach-text/80 hover:text-beach-blue transition-colors text-center">
                  andrea@andreacates.com
                </a>
              </div>
              
              {/* Phone */}
              <div className="flex items-start md:items-center justify-center md:justify-center">
                <svg className="w-5 h-5 mr-2 text-beach-blue flex-shrink-0 mt-0.5 md:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+13108965176" className="text-beach-text/80 hover:text-beach-blue transition-colors text-center">
                  310-896-5176
                </a>
              </div>
              
              {/* Location */}
              <div className="flex items-center justify-center md:justify-center">
                <svg className="w-5 h-5 mr-2 text-beach-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-beach-text/80 text-center text-sm md:text-sm whitespace-nowrap">Manhattan Beach & Redondo Beach, California</span>
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
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-beach-peach transition-colors cursor-pointer">
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-theme-vivid-red">Privacy Policy</DialogTitle>
                    <DialogDescription>
                      Last updated: {new Date().toLocaleDateString()}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      At Andrea Cates Myofunctional Therapy, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Information We Collect</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Personal information you provide when scheduling appointments</li>
                        <li>Contact information including name, email, and phone number</li>
                        <li>Health information relevant to your myofunctional therapy treatment</li>
                        <li>Website usage data and analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How We Use Your Information</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>To provide and improve our myofunctional therapy services</li>
                        <li>To communicate with you about appointments and treatment</li>
                        <li>To send you relevant health information and updates</li>
                        <li>To comply with legal and regulatory requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Your Rights</h4>
                      <p>
                        You have the right to access, update, or delete your personal information. You may also opt out of certain communications at any time. For questions about your privacy rights, please contact us at andrea@andreacates.com.
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      This is a simplified privacy policy. For complete terms, please contact us directly.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-beach-peach transition-colors cursor-pointer">
                    Terms of Service
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-theme-vivid-red">Terms of Service</DialogTitle>
                    <DialogDescription>
                      Last updated: {new Date().toLocaleDateString()}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm text-gray-700">
                    <p>
                      Welcome to Andrea Cates Myofunctional Therapy. These Terms of Service govern your use of our website and services. By accessing our website or scheduling appointments, you agree to be bound by these terms.
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Services Provided</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Myofunctional therapy consultations and treatments</li>
                        <li>Educational resources and health information</li>
                        <li>Appointment scheduling and patient communication</li>
                        <li>Personalized treatment plans and ongoing support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Appointment Policy</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Appointments must be scheduled in advance</li>
                        <li>24-hour notice required for cancellations</li>
                        <li>Late arrivals may result in shortened session time</li>
                        <li>Payment is due at the time of service unless otherwise arranged</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h4>
                      <p>
                        Our services are provided for educational and therapeutic purposes. While we strive to provide the highest quality care, results may vary. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                      <p>
                        For questions about these terms or our services, please contact us at andrea@andreacates.com or call 310-896-5176.
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      This is a simplified terms of service. For complete terms, please contact us directly.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
