import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo and Text */}
          <a href="#" className="flex items-center space-x-4">
            <img 
              src="lovable-uploads/Andrea-Logo-New.jpeg" 
              alt="Andrea Cates - Myofunctional Therapist" 
              className="h-[5.625rem] md:h-30"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: 'Marcellus, serif' }}>
                Andrea Cates
              </h1>
              <p className="text-sm md:text-base text-red-500" style={{ fontFamily: 'BD Sans, sans-serif' }}>
                Myofunctional Therapist
              </p>
            </div>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="nav-link text-base font-medium text-gray-800 hover:text-beach-text cursor-pointer">About</ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="nav-link text-base font-medium text-gray-800 hover:text-beach-text cursor-pointer">Services</ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-base font-medium px-5 py-2 rounded-full text-gray-800 hover:text-beach-text transition-colors cursor-pointer"
            >
              Get in touch
            </ScrollLink>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-5 space-y-4 transition-all duration-300">
            <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="block py-2 font-medium text-gray-800 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>About</ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="block py-2 font-medium text-gray-800 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>Services</ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="block text-center py-2 rounded-full font-medium text-gray-800 hover:text-beach-text transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in touch
            </ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
