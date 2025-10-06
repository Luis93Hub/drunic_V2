'use client';

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Send, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Footer() {
  const t = useTranslations('footer');
  const params = useParams();
  const locale = params.locale || 'es';

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Main content of the footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Logo Drunic" 
                  width={48}
                  height={48}
                  className="object-contain"
                /> 
              </div>
              <h4 className="text-2xl font-bold ml-3 text-white">
                Drunic
              </h4>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('company.description')}
            </p>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4 mb-6">
              <h5 className="text-lg font-semibold text-white mb-2">
                {t('cta.title')}
              </h5>
              <p className="text-gray-300 text-sm mb-3">
                {t('cta.description')}
              </p>
              <Link href="/contact">
                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm">
                  {t('cta.button')}
                </button>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              {[
                { name: t('home'), href: '#home' },
                { name: t('services'), href: '#services' },
                { name: t('about'), href: '#about' },
                { name: t('contact'), href: '/contact' },
                { name: t('portfolio'), href: '/portfolio' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t('contact')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:contact.drunic@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    contact.drunic@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t('phone')}</p>
                  <a 
                    href="tel:+50557517432"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +505 5751 7432
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t('location')}</p>
                  <p className="text-gray-300">
                    Nicaragua
                  </p>
                </div>
              </div>
            </div>

            {/* Social red */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4 text-white">
                {t('followUs')}
              </h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61579682131905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/drunicservices/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-pink-600/20 hover:bg-pink-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                </a>
                <a 
                  href="mailto:contact.drunic@gmail.com"
                  className="w-10 h-10 bg-red-600/20 hover:bg-red-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <Send className="w-4 h-4 text-red-400" />
                </a>
                                <a 
                  href="https://www.linkedin.com/company/108809658"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 <span className="text-white font-semibold">Drunic</span>. {t('copyright')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}