
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 bg-transparent",
        isScrolled 
          ? "py-3" 
          : "py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=80&fit=crop&crop=center" 
              alt="Andrea Cates - Wellness Coach" 
              className="h-12 md:h-16 rounded-lg"
            />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
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
            <a href="#home" className="nav-link text-base font-medium hover:text-beach-text">Home</a>
            <a href="#about" className="nav-link text-base font-medium hover:text-beach-text">About</a>
            <a href="#services" className="nav-link text-base font-medium hover:text-beach-text">Services</a>
            <a 
              href="#contact" 
              className="text-base font-medium px-5 py-2 rounded-full hover:text-beach-text transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 p-5 space-y-4 transition-all duration-300">
            <a href="#home" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a 
              href="#contact" 
              className="block text-center py-2 rounded-full font-medium hover:text-beach-text transition-colors"
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
