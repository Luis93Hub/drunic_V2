import React from 'react';
import Link from 'next/link';
import { Code, Database, Shield, Zap, CheckCircle, ArrowRight, Award, } from "lucide-react";

const TechnologyStack = () => {
  const mainTechnologies = [
    {
      name: "Drupal",
      description: "CMS empresarial líder mundial para sitios web complejos y escalables",
      features: [
        "Gestión de contenido avanzada",
        "Multiidioma nativo",
        "Arquitectura modular",
        "SEO optimizado",
        "Seguridad empresarial"
      ],
      useCases: ["Sitios corporativos", "Portales web", "Intranets", "Sitios multiidioma"],
      logo: "🏢",
      color: "blue",
      stats: "1M+ sitios activos"
    },
    {
      name: "Symfony",
      description: "Framework PHP robusto para aplicaciones web y APIs de alto rendimiento",
      features: [
        "Componentes reutilizables",
        "Alto rendimiento",
        "Arquitectura MVC",
        "Testing integrado",
        "Documentación completa"
      ],
      useCases: ["APIs REST", "Aplicaciones web", "Microservicios", "Backends complejos"],
      logo: "⚡",
      color: "green",
      stats: "600M+ descargas"
    }
  ];

  const complementaryTech = [
    {
      name: "PHP 8+",
      description: "Lenguaje base optimizado para desarrollo web moderno",
      logo: "🐘"
    },
    {
      name: "MySQL/PostgreSQL",
      description: "Bases de datos robustas para almacenamiento seguro",
      logo: "🗄️"
    },
    {
      name: "Redis",
      description: "Cache en memoria para máximo rendimiento",
      logo: "⚡"
    },
    {
      name: "Docker",
      description: "Contenedores para desarrollo y despliegue eficiente",
      logo: "🐳"
    },
    {
      name: "Git",
      description: "Control de versiones profesional",
      logo: "📂"
    },
    {
      name: "Apache/Nginx",
      description: "Servidores web de alta performance",
      logo: "🌐"
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Máxima seguridad",
      description: "Drupal y Symfony son reconocidos por sus robustos sistemas de seguridad, ideales para sitios empresariales"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Alto rendimiento",
      description: "Optimizaciones nativas que garantizan carga rápida incluso con gran volumen de contenido"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Escalabilidad comprobada",
      description: "Arquitectura que crece con tu negocio, desde sitios pequeños hasta plataformas empresariales"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Flexibilidad total",
      description: "Personalización completa para adaptar cada funcionalidad a tus necesidades específicas"
    }
  ];

  const projects = [
    {
      type: "Portal Corporativo",
      tech: "Drupal + Symfony",
      features: ["Multiidioma", "Gestión de usuarios", "Workflow de contenido", "Integración CRM"],
      industry: "Manufactura",
      result: "300% más engagement"
    },
    {
      type: "E-commerce Especializado", 
      tech: "Drupal Commerce",
      features: ["Catálogo complejo", "Múltiples monedas", "B2B/B2C", "Integración ERP"],
      industry: "Retail",
      result: "150% aumento en ventas"
    },
    {
      type: "Sistema de Gestión",
      tech: "Symfony + API",
      features: ["Dashboard interactivo", "Reportes avanzados", "API REST", "Integraciones"],
      industry: "Servicios",
      result: "60% menos tiempo operativo"
    }
  ];

  const experienceMetrics = [
    { number: "6+", label: "Proyectos Drupal", description: "Sitios corporativos y e-commerce" },
    { number: "8+", label: "APIs con Symfony", description: "Backends robustos y escalables" },
    { number: "100%", label: "Sitios optimizados", description: "SEO y rendimiento garantizado" },
    { number: "24/7", label: "Soporte técnico", description: "Mantenimiento continuo" }
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
              Nuestro Stack Tecnológico
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Especializados en <strong>Drupal</strong> y <strong>Symfony</strong>, las tecnologías empresariales 
            más robustas para crear sitios web, e-commerce y aplicaciones que escalan con tu negocio.
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
                  <h4 className="font-semibold text-gray-900 mb-3">Características principales:</h4>
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
                  <h4 className="font-semibold text-gray-900 mb-3">Ideal para:</h4>
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
              ¿Por qué elegimos estas tecnologías?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No es casualidad que las empresas más grandes del mundo confíen en Drupal y Symfony
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
              Tecnologías complementarias
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un ecosistema completo para desarrollo profesional
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
              Proyectos exitosos con nuestro stack
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
                 Nuestra experiencia en números
                </h3>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Resultados medibles que respaldan nuestro trabajo
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
                ¿Tu proyecto necesita tecnología empresarial?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Aprovecha la potencia de Drupal y Symfony para crear soluciones robustas, seguras y escalables
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href='/contact'>
                  <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Consultar proyecto</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                
                <Link href="#services">
                  <button className="bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                    Ver todos los servicios
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