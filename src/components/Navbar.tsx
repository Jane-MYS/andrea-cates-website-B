import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm relative">
      {/* Desktop Layout - Full Width (1024px+) */}
      <div className="hidden lg:block">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo and Text */}
            <a href="#" className="flex items-center space-x-4">
              <img 
                src="/andrea-cates-website-B/lovable-uploads/Andrea-Logo-New.jpeg" 
                alt="Andrea Cates - Myofunctional Therapist" 
                className="h-20"
              />
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Marcellus, serif' }}>
                  Andrea Cates
                </h1>
                <p className="text-base text-red-500" style={{ fontFamily: 'BD Sans, sans-serif' }}>
                  Myofunctional Therapist
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="nav-link text-base font-medium text-gray-800 hover:text-red-500 cursor-pointer transition-colors">About</ScrollLink>
              <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="nav-link text-base font-medium text-gray-800 hover:text-red-500 cursor-pointer transition-colors">Services</ScrollLink>
              <Link to="/packages" className="nav-link text-base font-medium text-gray-800 hover:text-red-500 cursor-pointer transition-colors">Pricing</Link>
              <ScrollLink 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="text-base font-medium px-6 py-3 rounded-full text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
              >
                Get in touch
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked (768px and below) */}
      <div className="lg:hidden">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Logo and Text */}
            <a href="#" className="flex items-center space-x-2">
              <img 
                src="/andrea-cates-website-B/lovable-uploads/Andrea-Logo-New.jpeg" 
                alt="Andrea Cates - Myofunctional Therapist" 
                className="h-12"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Marcellus, serif' }}>
                  Andrea Cates
                </h1>
                <p className="text-xs text-red-500" style={{ fontFamily: 'BD Sans, sans-serif' }}>
                  Myofunctional Therapist
                </p>
              </div>
            </a>

            {/* Mobile menu button */}
            <button
              className="text-gray-800 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              <ScrollLink 
                to="about" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                className="block py-3 text-lg font-medium text-gray-800 hover:text-red-500 cursor-pointer transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </ScrollLink>
              <ScrollLink 
                to="services" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                className="block py-3 text-lg font-medium text-gray-800 hover:text-red-500 cursor-pointer transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </ScrollLink>
              <Link 
                to="/packages" 
                className="block py-3 text-lg font-medium text-gray-800 hover:text-red-500 cursor-pointer transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <ScrollLink 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-80}
                className="block text-center py-3 rounded-full text-lg font-medium text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
