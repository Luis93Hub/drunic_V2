'use client';

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { ArrowRight, Play, Star, Users, Award, ChevronDown } from "lucide-react";

export default function Hero() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params.locale || 'es';

  // Function for smooth scrolling
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offsetTop = servicesSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex flex-col px-4 md:px-8 lg:px-16 pt-20"
    >
      {/* Main container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center text-white gap-8 lg:gap-16 flex-1 py-8 md:py-12">
        
        {/* Text content */}
        <div className="flex flex-col gap-8 text-center lg:text-left lg:flex-1">
          
          {/* Top badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white/90 w-fit mx-auto lg:mx-0">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{t('badge')}</span>
            </div>
          </div>

          {/* Main title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block">{t('title')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                {t('titleHighlight')}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300">
              {t('subtitle')}
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            {t.rich('description', {
              web: <span key={'web'} className="text-red-400 font-semibold">{t('web')}</span>,
              apps: <span key={'apps'} className="text-red-400 font-semibold">{t('apps')}</span>,
              solutions: <span key={'solutions'} className="text-red-400 font-semibold">{t('solutions')}</span>
            })}
          </p>

          {/* Quick Statistics */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-center lg:text-left">
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <Users className="w-5 h-5 text-red-400" />
              <span className="text-sm text-gray-300">4+ {t('satisfiedClients')}</span>
            </div>
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <Award className="w-5 h-5 text-red-400" />
            <span className="text-sm text-gray-300">98% {t('successRate')}</span>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Link href={`/${locale}/contact`}>
              <button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]">
                <span>{t('startProject')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <Link href="/portfolio">
              <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white px-4 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{t('viewPortfolio')}</span>
              </button>
            </Link>
          </div>

          {/* Trust indicator */}
          <div className="flex items-center space-x-4 text-sm text-gray-400 justify-center lg:justify-start mt-6">
            <span>{t('trustUs')}</span>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-white font-medium">+3 {t('companies')}</span>
            </div>
          </div>
        </div>

        {/* Image with effects */}
        <div className="flex-shrink-0 w-full max-w-sm lg:max-w-lg xl:max-w-xl relative">
          <div className="relative group">
            {/* Multiple glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-full blur-3xl transform scale-75 group-hover:scale-90 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-red-400/20 to-red-500/20 rounded-full blur-2xl transform scale-90 animate-pulse"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-red-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 -right-8 w-4 h-4 bg-red-600/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Main image */}
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <Image 
                src='/images/hero-image.png' 
                alt={locale === 'es' ? "Desarrollo web y tecnología digital" : "Web development and digital technology"}
                width={500}
                height={500}
                priority={true}
                className="w-full h-auto drop-shadow-2xl filter group-hover:drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-500"
              />
            </div>

            {/* floating badge */}
            <div className="absolute -top-8 -right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 animate-float">
              <div className="flex items-center space-x-2 text-white text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>{t('online')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Service Cards */}
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pb-12 md:pb-16">
          
          {/* Card 1 */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center group-hover:from-red-500/40 group-hover:to-red-600/40 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/images/cms_drupal.svg"
                  alt={locale === 'es' ? "Desarrollo web" : "Web development"}
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl text-white font-semibold mb-1">{t('services.web.title')}</h3>
                <p className="text-sm text-gray-400">{t('services.web.description')}</p>
              </div>
              <div className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-all duration-300 group-hover:translate-x-2 transform">
                <ArrowRight className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center group-hover:from-red-500/40 group-hover:to-red-600/40 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/images/computer_devices_mobile_phone_icon.svg"
                  alt={locale === 'es' ? "Aplicaciones móviles" : "Web development"}
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl text-white font-semibold mb-1">{t('services.mobile.title')}</h3>
                <p className="text-sm text-gray-400">{t('services.mobile.description')}</p>
              </div>
              <div className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-all duration-300 group-hover:translate-x-2 transform">
                <ArrowRight className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center group-hover:from-red-500/40 group-hover:to-red-600/40 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/images/computer_technology.svg"
                  alt={locale === 'es' ? "Software personalizado" : "Custom software"}
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl text-white font-semibold mb-1">{t('services.software.title')}</h3>
                <p className="text-sm text-gray-400">{t('services.software.description')}</p>
              </div>
              <div className="w-6 h-6 text-gray-400 group-hover:text-red-400 transition-all duration-300 group-hover:translate-x-2 transform">
                <ArrowRight className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8">
        <button
          onClick={handleScrollToServices}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">{t('learnMore')}</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}