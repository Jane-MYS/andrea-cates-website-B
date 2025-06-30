
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100 shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/5fa18f9b-06b1-41a2-9df1-212b92e54ab4.png" 
              alt="Andrea Cates - Myofunctional Therapist" 
              className="h-12 md:h-16"
            />
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
            <a href="#home" className="nav-link text-base font-medium text-gray-800 hover:text-beach-text">Home</a>
            <a href="#about" className="nav-link text-base font-medium text-gray-800 hover:text-beach-text">About</a>
            <a href="#services" className="nav-link text-base font-medium text-gray-800 hover:text-beach-text">Services</a>
            <a 
              href="#contact" 
              className="text-base font-medium px-5 py-2 rounded-full text-gray-800 hover:text-beach-text transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-5 space-y-4 transition-all duration-300">
            <a href="#home" className="block py-2 font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-2 font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="block py-2 font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a 
              href="#contact" 
              className="block text-center py-2 rounded-full font-medium text-gray-800 hover:text-beach-text transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
