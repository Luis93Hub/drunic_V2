'use client';

import Image from 'next/image';
import Link from 'next/link';
import ConctactForm from '../../../components/ContactForm';
import Footer from '../../../components/Footer';
import { useParams } from 'next/navigation';
import { Phone, Mail, MapPin, Facebook, Instagram, Send, Linkedin, CheckCircle, XCircle, ArrowLeft, Clock, Users, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';

 const ContactPage = () => {
  const t = useTranslations('contactpage');
  const params = useParams();
  const locale = params.locale || 'es';

  return (
    <div className="min-h-screen bg-black">
      {/* Header Navigation */}
      <nav className="relative z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
              <span className="text-white group-hover:text-red-300 transition-colors">{t('navigation.backToHome')}</span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="Logo Drunic" 
                width={40}
                height={40}
                className="object-contain"
              />
              <h1 className="text-xl font-bold text-white">Drunic</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900/20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]"></div>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-500/10 animate-pulse"
              style={{
                width: `${20 + i * 3}px`,
                height: `${20 + i * 3}px`,
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t('hero.title')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Stars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">4+</h3>
              <p className="text-gray-300">{t('stats.clients')}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">6+</h3>
              <p className="text-gray-300">{t('stats.projects')}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">24h</h3>
              <p className="text-gray-300">{t('stats.responseTime')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {t('section.title')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  {t('section.titleHighlight')}
                </span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="text-lg text-gray-200 leading-relaxed">
                  {t('section.intro1')}
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  {t('section.intro2')}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8 mb-12">
                <div className="flex items-center space-x-6 group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{t('contactMethods.callUs')}</p>
                    <a 
                      href="tel:+50557517432"
                      className="text-xl font-semibold text-white hover:text-red-300 transition-colors duration-300"
                    >
                      +505 5751 7432
                    </a>
                    <p className="text-sm text-gray-300">{t('contactMethods.hours')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{t('contactMethods.emailUs')}</p>
                    <a 
                      href="mailto:contact.drunic@gmail.com"
                      className="text-xl font-semibold text-white hover:text-red-300 transition-colors duration-300"
                    >
                      contact.drunic@gmail.com
                    </a>
                    <p className="text-sm text-gray-300">{t('contactMethods.responseTime')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{t('contactMethods.location')}</p>
                    <p className="text-xl font-semibold text-white">Nicaragua</p>
                    <p className="text-sm text-gray-300">{t('contactMethods.remote')}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">{t('social.followUs')}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579682131905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600/20 hover:bg-blue-600/40 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Facebook className="w-7 h-7 text-blue-400" />
                  </a>
                  <a
                    href="https://www.instagram.com/drunicservices/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-14 h-14 bg-pink-600/20 hover:bg-pink-600/40 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Instagram className="w-7 h-7 text-pink-400" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/108809658"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600/20 hover:bg-blue-600/40 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Linkedin className="w-7 h-7 text-blue-400" />
                  </a>
                  <a 
                    href="mailto:contact.drunic@gmail.com"
                    className="w-14 h-14 bg-red-600/20 hover:bg-red-600/40 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Send className="w-7 h-7 text-red-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">{t('form.title')}</h3>
                <p className="text-gray-300">{t('form.subtitle')}</p>
              </div>
              { /* Conctact form */}
              <ConctactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;