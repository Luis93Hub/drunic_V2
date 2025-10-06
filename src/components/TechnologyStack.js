'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Code, Database, Shield, Zap, CheckCircle, ArrowRight, Award, } from "lucide-react";

const TechnologyStack = () => {
  const t = useTranslations('technology');
  const params = useParams();
  const locale = params.locale || 'es';

  const mainTechnologies = [
    {
      name: t('mainTech.Tech1.name'),
      description: t('mainTech.Tech1.description'),
      features: [
        t('mainTech.Tech1.features.feature1'),
        t('mainTech.Tech1.features.feature2'),
        t('mainTech.Tech1.features.feature3'),
        t('mainTech.Tech1.features.feature4'),
        t('mainTech.Tech1.features.feature5'),
      ],
      useCases: [
        t('mainTech.Tech1.useCases.useCase1'),
        t('mainTech.Tech1.useCases.useCase2'),
        t('mainTech.Tech1.useCases.useCase3'),
        t('mainTech.Tech1.useCases.useCase4'),
      ],
      logo: "🏢",
      color: "blue",
      stats: t('mainTech.Tech1.stats')
    },
    {
      name: t('mainTech.Tech2.name'),
      description: t('mainTech.Tech2.description'),
      features: [
        t('mainTech.Tech2.features.feature1'),
        t('mainTech.Tech2.features.feature2'),
        t('mainTech.Tech2.features.feature3'),
        t('mainTech.Tech2.features.feature4'),
        t('mainTech.Tech2.features.feature5'),

      ],
      useCases: [
        t('mainTech.Tech2.useCases.useCase1'),
        t('mainTech.Tech2.useCases.useCase2'),
        t('mainTech.Tech2.useCases.useCase3'),
        t('mainTech.Tech2.useCases.useCase4'),
      ],
      logo: "⚡",
      color: "green",
      stats: t('mainTech.Tech2.stats')
    }
  ];

  const complementaryTech = [
    {
      name: "PHP 8+",
      description: t('complementary.tech1'),
      logo: "🐘"
    },
    {
      name: "MySQL/PostgreSQL",
      description: t('complementary.tech2'),
      logo: "🗄️"
    },
    {
      name: "Redis",
      description: t('complementary.tech3'),
      logo: "⚡"
    },
    {
      name: "Docker",
      description: t('complementary.tech4'),
      logo: "🐳"
    },
    {
      name: "Git",
      description: t('complementary.tech5'),
      logo: "📂"
    },
    {
      name: "Apache/Nginx",
      description: t('complementary.tech6'),
      logo: "🌐"
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('advantages.items.item1.title'),
      description: t('advantages.items.item1.description')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('advantages.items.item2.title'),
      description: t('advantages.items.item2.description')
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: t('advantages.items.item3.title'),
      description: t('advantages.items.item3.description')
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t('advantages.items.item4.title'),
      description: t('advantages.items.item4.description')
    }
  ];

  const projects = [
    {
      type: t('projects.project1.type'),
      tech: "Drupal + Symfony",
      features: [
        t('projects.project1.features.feature1'), 
        t('projects.project1.features.feature2'), 
        t('projects.project1.features.feature3'), 
        t('projects.project1.features.feature4')
      ],
      industry: t('projects.project1.industry'),
      result: t('projects.project1.result')
    },
    {
      type: t('projects.project2.type'), 
      tech: "Drupal Commerce",
      features: [
        t('projects.project2.features.feature1'),
        t('projects.project2.features.feature2'), 
        t('projects.project2.features.feature3'), 
        t('projects.project2.features.feature4'),
      ],
      industry: t('projects.project2.industry'),
      result: t('projects.project2.result')
    },
    {
      type: t('projects.project3.type'),
      tech: "Symfony + API",
      features: [
        t('projects.project3.features.feature1'),
        t('projects.project3.features.feature2'),
        t('projects.project3.features.feature3'),
        t('projects.project3.features.feature4'),
        
      ],
      industry: t('projects.project3.industry'),
      result: t('projects.project3.result')
    }
  ];

  const experienceMetrics = [
    { number: "6+", label: t('experience.items.item1.label'), description: t('experience.items.item1.description') },
    { number: "8+", label: t('experience.items.item2.label'), description: t('experience.items.item2.description') },
    { number: "100%", label: t('experience.items.item3.label'), description: t('experience.items.item3.description') },
    { number: "24/7", label: t('experience.items.item4.label'), description: t('experience.items.item4.description') }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t('title')}
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.rich('subtitle', {
              drupal: <strong key={'drupal'}>{t('drupal')}</strong>,
              symfony: <strong key={'symfony'}>{t('symfony')}</strong>
            })}
          </p>
        </div>

        {/* Main Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {mainTechnologies.map((tech, index) => (
            <div key={index} className="group">
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                tech.color === 'blue' ? 'border-blue-100 hover:border-blue-200' : 'border-green-100 hover:border-green-200'
              } relative overflow-hidden`}>
                
                {/* Background pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${
                  tech.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                } opacity-5 rounded-full blur-2xl`}></div>
                
                {/* Header */}
                <div className="relative mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`text-4xl`}>{tech.logo}</div>
                    <div>
                      <h3 className={`text-3xl font-bold ${
                        tech.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                      }`}>
                        {tech.name}
                      </h3>
                      <div className={`text-sm font-semibold ${
                        tech.color === 'blue' ? 'text-blue-500' : 'text-green-500'
                      }`}>
                        {tech.stats}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('subtitleMainTech')}</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className={`w-4 h-4 ${
                          tech.color === 'blue' ? 'text-blue-500' : 'text-green-500'
                        } flex-shrink-0`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{t('case')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className={`px-3 py-1 ${
                        tech.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'
                      } rounded-full text-sm font-medium`}>
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('advantages.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('advantages.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-500 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {advantage.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complementary Technologies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('complementary.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('complementary.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complementaryTech.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{tech.logo}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{tech.name}</h4>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('projects.title')}
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.type}</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium">
                      {project.tech}
                    </span>
                    <span className="text-gray-500 text-sm">{project.industry}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-green-500" />
                    <span className="font-semibold text-green-600 text-sm">{project.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Award className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                 {t('experience.title')}
                </h3>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('experience.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {experienceMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>{metric.number}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</h4>
                  <p className='text-gray-600 text-sm'>{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('cta.title')}
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {t('cta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/contact`}>
                  <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>{t('cta.consultProject')}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                
                <Link href="#services">
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                    {t('cta.viewAllServices')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;