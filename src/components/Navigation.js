'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Nosotros' },
    { href: '#services', label: 'Servicios' },
    { href: '#contact', label: 'Contacto' },
    { href: '/portfolio', label: 'Portafolio', external: true }
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61579682131905",
      icon: Facebook,
      label: "Facebook",
      color: "hover:text-blue-400"
    },
    {
      href: "https://www.instagram.com/drunicservices/",
      icon: Instagram,
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      href: "https://www.linkedin.com/company/108809658",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400"
    }
  ];

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section === 'home' ? 'inicio' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll
  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href === '#home' ? 'inicio' : href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        const offsetTop = element.offsetTop - 80; // Ajuste por altura del navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 z-50">
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md group-hover:bg-red-500/30 transition-all duration-300"></div>
                <Image
                  src="/logo.png"
                  alt="Drunic Logo"
                  width={48}
                  height={48}
                  className="relative z-10 w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                Drunic
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-white font-medium transition-all duration-300 hover:text-red-300 group ${
                        activeSection === item.href.substring(1) ? 'text-red-400' : ''
                      }`}
                    >
                      <span className="flex items-center space-x-1">
                        <span>{item.label}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </span>
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={`relative px-4 py-2 text-white font-medium transition-all duration-300 hover:text-red-300 group ${
                        activeSection === item.href.substring(1) ? 'text-red-400' : ''
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-red-500 transform transition-transform duration-300 ${
                        activeSection === item.href.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Social Icons & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ml-4">
                Contactar
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-md border-t border-white/10 rounded-b-2xl mt-2 py-6">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <Link
                      href={item.href}
                      onClick={handleMenuClick}
                      className="flex items-center justify-between w-full py-3 px-4 text-white hover:text-red-300 hover:bg-white/10 rounded-lg transition-all duration-300 group"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ExternalLink className="w-4 h-4 opacity-60" />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href);
                        handleMenuClick();
                      }}
                      className={`block w-full py-3 px-4 text-white hover:text-red-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium ${
                        activeSection === item.href.substring(1) ? 'text-red-400 bg-white/10' : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-white/10 mx-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white ${social.color} transition-all duration-300 transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="px-4 mt-6">
              <Link href="/contact">
                <button 
                  onClick={handleMenuClick}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                  Contactar ahora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}