'use client';

import Link from "next/link";
import { Settings, Workflow, Clock, TrendingUp, CheckCircle, ArrowRight, Star, Quote, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Automatizacion() {
  const t = useTranslations('automationService');
  const params = useParams();
  const locale = params.locale || 'es';
  const automationAreas = t.raw('automationAreas');
  const process = t.raw('processAreas');
  const tools = t.raw('toolsAreas');
  const testimonials = t.raw('testimonialsPeople');
  const pricing = t.raw('pricingAutomation');
  
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('benefits.items.item1.title'),
      description: t('benefits.items.item1.description')
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('benefits.items.item2.title'),
      description: t('benefits.items.item2.description')
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: t('benefits.items.item3.title'),
      description: t('benefits.items.item3.description')
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: t('benefits.items.item4.title'),
      description: t('benefits.items.item4.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Link href="/#services" className="text-red-200 hover:text-white transition-colors">
                  {t('navigation.backHome')}
                </Link>
                <span className="text-red-300">/</span>
                <span className="text-white">{t('navigation.current_page')}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('title')}
                <span className="block text-red-200">{t('titleHighlight')}</span>
              </h1>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                {t('description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contacto">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {t('ctaAutomate')}
                  </button>
                </Link>
                <Link href="#areas">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                    {(t('ctaSeeAreas'))}
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{t('results.title')}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{t('results.stats.timeSaved.label')}</span>
                    <span className="text-yellow-400 font-bold text-xl">{t('results.stats.timeSaved.value')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{t('results.stats.errorReduction.label')}</span>
                    <span className="text-yellow-400 font-bold text-xl">{t('results.stats.errorReduction.value')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{t('results.stats.roi.label')}</span>
                    <span className="text-yellow-400 font-bold text-xl">{t('results.stats.roi.value')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{t('results.stats.investmentRecovery.label')}</span>
                    <span className="text-yellow-400 font-bold text-xl">{t('results.stats.investmentRecovery.value')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-red-100 group-hover:bg-red-500 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <div className="text-red-600 group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Areas Section */}
      <section id="areas" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('areas.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('areas.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">{t('timesSaved')}</span>
                    <span className="text-sm font-bold text-red-600">{area.timesSaved}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {area.automations.map((automation, automationIndex) => (
                    <li key={automationIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{automation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('process.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('process.description')}
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-red-600 font-semibold">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('tools.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('tools.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 text-center">
                <div className="text-4xl mb-4">{tool.logo}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                <p className="text-sm text-gray-600">{tool.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md relative">
                <Quote className="w-8 h-8 text-red-500 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-red-600">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('pricing.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${pkg.popular ? 'border-2 border-red-500 transform scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {t('pricing.popular')}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 mb-2">
                    {pkg.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    Tiempo: {pkg.timeframe}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {t('pricing.cta')}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('pricing.consultationTitle')}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {t('pricing.consultationDescription')}
              </p>
              <Link href="#contacto">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  {t('pricing.consultationButton')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/contact`}>
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>{t('cta.automateButton')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            
            <a href="tel:+50557517432" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              {t('cta.callButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}