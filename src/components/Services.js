import React from 'react';
import Link from 'next/link';
import { Globe, Code, Settings, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Diseño y desarrollo web",
      shortTitle: "Web-Development",
      description: "Creamos páginas web modernas, rápidas y optimizadas que conectan con tu audiencia y generan resultados reales para tu negocio",
      features: [
        "Diseño responsive y moderno",
        "Optimización para buscadores (SEO)",
        "Velocidad de carga optimizada",
        "Panel de administración intuitivo"
      ],
      icon: <Globe className="w-8 h-8 text-white" />,
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600"
    },
    {
      title: "Software a la medida",
      shortTitle: "Custom software",
      description: "Desarrollamos sistemas personalizados que se adaptan perfectamente a los procesos únicos de tu empresa, mejorando la productividad",
      features: [
        "Sistemas de gestión empresarial",
        "Control de inventarios",
        "Facturación automatizada",
        "Reportes y análisis en tiempo real"
      ],
      icon: <Code className="w-8 h-8 text-white" />,
      gradient: "from-green-500 to-green-600",
      hoverGradient: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600"
    },
    {
      title: "Automatización y tecnología",
      shortTitle: "automation",
      description: "Implementamos soluciones tecnológicas que automatizan procesos repetitivos, ahorrando tiempo y reduciendo errores operativos",
      features: [
        "Automatización de procesos",
        "Integración de sistemas",
        "Workflows inteligentes",
        "Monitoreo y alertas automáticas"
      ],
      icon: <Settings className="w-8 h-8 text-white" />,
      gradient: "from-red-500 to-red-600",
      hoverGradient: "from-red-600 to-red-700",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-600"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Análisis",
      description: "Entendemos tus necesidades y objetivos específicos"
    },
    {
      number: "02",
      title: "Propuesta",
      description: "Diseñamos una solución personalizada para tu caso"
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Construimos tu solución con las mejores tecnologías"
    },
    {
      number: "04",
      title: "Entrega",
      description: "Implementamos y capacitamos a tu equipo"
    }
  ];

  return (
    <section id='services' className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideas en soluciones digitales que impulsan el crecimiento de tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* Main Card */}
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border ${service.borderColor} group-hover:border-opacity-50 h-full flex flex-col relative overflow-hidden`}>
                
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-2xl`}></div>
                </div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 mx-auto`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:${service.textColor} transition-colors duration-300`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-left space-x-3 group/feature">
                        <CheckCircle className={`w-4 h-4 ${service.textColor} flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200`} />
                        <span className="text-gray-700 text-sm group-hover/feature:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link href={`/services/${service.shortTitle.toLowerCase().replace(/\s+/g, '-')}`}>
                    <button className={`w-full bg-gradient-to-r ${service.gradient} hover:bg-gradient-to-r hover:${service.hoverGradient} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2`}>
                      <span>Más información</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
              </div>

              {/* Decorative border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro proceso de trabajo
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un enfoque estructurado que garantiza resultados exitosos en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200">
                        <div className="h-full bg-gradient-to-r from-red-500 to-red-600 w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                      </div>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para impulsar tu negocio?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Conversemos sobre cómo nuestros servicios pueden transformar la manera en que operas y vendes
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='/contact'>
                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Iniciar proyecto</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              
              <a
                href="tel:+50557517432"
                className="bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;