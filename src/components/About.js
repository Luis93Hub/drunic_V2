'use client';

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Target, Users, Lightbulb, Award, ArrowRight, CheckCircle } from "lucide-react";

export default function About() {
  const t = useTranslations('about');
  const params = useParams();
  const locale = params.locale || 'es';

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t('values.value1.title'),
      description: t('values.value1.description')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('values.value2.title'),
      description: t('values.value2.description')
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t('values.value3.title'),
      description: t('values.value3.description')
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t('values.value4.title'),
      description: t('values.value4.description')
    }
  ];

  const achievements = [
    { number: "6+", 
      label: t('stats.item1.label'), 
      icon: "🚀" 
    },
    { number: "3+", 
      label: t('stats.item2.label'), 
      icon: "📅" 
    },
    { number: "100%", 
      label: t('stats.item3.label'), 
      icon: "⭐" 
    },
    { number: "24h", 
      label: t('stats.item4.label'), 
      icon: "⚡" 
    }
  ];

  const capabilities = [
    t('capabilities.item1'),
    t('capabilities.item2'),
    t('capabilities.item3'),
    t('capabilities.item4'),
    t('capabilities.item5'),
    t('capabilities.item6'),
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 text-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-red-50 via-red-25 to-red-50 border border-red-100 rounded-2xl p-8 mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600"></div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('mission.title')}
            </h3>
            <p className="text-xl text-gray-800 font-medium leading-relaxed">
              {t('mission.description')}
            </p>
          </div>
        </div>

        {/* First section - Left image, right content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <Image
                src='/images/about/about-1.png'
                width={500}
                height={500}
                alt={locale === 'es' ? "Equipo trabajando en desarrollo de software" : "Team working on software development"}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('experience.title')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('experience.description')}
              </p>
            </div>

            {/* Capabilities list */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{t('capabilities.title')}</h4>
              {capabilities.slice(0,3).map((capability, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {capability}
                  </span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>{t('buttons.viewServices')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Values section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('values.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-red-100 group-hover:bg-red-500 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <div className="text-red-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second section - Right image, left content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {t('solutions.title')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('solutions.description')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('solutions.purpose')}
              </p>
            </div>

            {/* Additional capabilities */}
            <div className="space-y-3">
              {capabilities.slice(3).map((capability, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {capability}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-first lg:order-last relative group">
            <div className="absolute -inset-4 bg-gradient-to-l from-red-500/20 to-red-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <Image
                src='/images/about/about-2.png'
                width={500}
                height={500}
                alt={locale === 'es' ? "Desarrollo de soluciones digitales" : "Digital solutions development"}
                className="w-full h-auto rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('stats.title')}
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {t('stats.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {t('cta.title')}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>{t('cta.startProject')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-300 hover:border-red-500 text-gray-700 hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>{t('cta.viewServices')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}