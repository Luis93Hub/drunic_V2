import Link from "next/link";
import { Settings, Workflow, Clock, TrendingUp, CheckCircle, ArrowRight, Star, Quote, Zap } from "lucide-react";

export default function Automatizacion() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ahorra tiempo valioso",
      description: "Elimina tareas repetitivas y libera a tu equipo para actividades estratégicas"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Reduce errores humanos",
      description: "Los procesos automatizados son consistentes y precisos las 24 horas"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Mejora la productividad",
      description: "Tu empresa puede procesar más con los mismos recursos"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Escalabilidad automática",
      description: "Los sistemas crecen con tu negocio sin requerir más personal"
    }
  ];

  const automationAreas = [
    {
      title: "Gestión de clientes (CRM)",
      description: "Automatiza el seguimiento desde el primer contacto hasta la venta",
      automations: [
        "Captura automática de leads",
        "Seguimiento de correos",
        "Asignación de vendedores",
        "Recordatorios de seguimiento"
      ],
      timesSaved: "15-20 horas/semana",
      icon: "👥"
    },
    {
      title: "Facturación y cobranza",
      description: "Genera facturas y gestiona pagos sin intervención manual",
      automations: [
        "Facturación automática",
        "Recordatorios de pago",
        "Conciliación bancaria",
        "Reportes financieros"
      ],
      timesSaved: "10-15 horas/semana", 
      icon: "💰"
    },
    {
      title: "Inventario y compras",
      description: "Mantén stock óptimo con reposición automática",
      automations: [
        "Alertas de stock bajo",
        "Órdenes de compra automáticas",
        "Actualización de precios",
        "Control de vencimientos"
      ],
      timesSaved: "8-12 horas/semana",
      icon: "📦"
    },
    {
      title: "Marketing digital",
      description: "Campañas que se ejecutan solas y se optimizan automáticamente",
      automations: [
        "Email marketing secuencial",
        "Publicaciones en redes sociales",
        "Segmentación de audiencias",
        "Reportes de rendimiento"
      ],
      timesSaved: "12-18 horas/semana",
      icon: "📈"
    },
    {
      title: "Recursos humanos",
      description: "Optimiza la gestión de personal y nóminas",
      automations: [
        "Registro de asistencia",
        "Cálculo de nóminas",
        "Evaluaciones periódicas",
        "Solicitudes de vacaciones"
      ],
      timesSaved: "6-10 horas/semana",
      icon: "👤"
    },
    {
      title: "Atención al cliente",
      description: "Responde consultas y resuelve problemas 24/7",
      automations: [
        "Chatbots inteligentes",
        "Tickets automáticos",
        "Escalamiento por prioridad",
        "Encuestas de satisfacción"
      ],
      timesSaved: "20-30 horas/semana",
      icon: "🎧"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Mapeo de procesos",
      description: "Identificamos qué tareas se pueden automatizar y priorizamos por impacto",
      duration: "1 semana"
    },
    {
      step: "02",
      title: "Diseño de workflows",
      description: "Creamos los flujos automatizados optimizados para tu negocio",
      duration: "1-2 semanas"
    },
    {
      step: "03",
      title: "Implementación gradual",
      description: "Instalamos las automatizaciones por fases para minimizar disrupciones",
      duration: "2-4 semanas"
    },
    {
      step: "04",
      title: "Capacitación",
      description: "Entrenamos a tu equipo para gestionar y aprovechar las automatizaciones",
      duration: "1 semana"
    },
    {
      step: "05",
      title: "Monitoreo y optimización",
      description: "Supervisamos el rendimiento y mejoramos continuamente",
      duration: "Permanente"
    }
  ];

  const tools = [
    { name: "Zapier", use: "Conecta aplicaciones", logo: "⚡" },
    { name: "Microsoft Power Automate", use: "Workflows empresariales", logo: "🔄" },
    { name: "WhatsApp Business API", use: "Automatización de mensajes", logo: "💬" },
    { name: "Sistemas personalizados", use: "Automatizaciones específicas", logo: "⚙️" },
    { name: "APIs de integración", use: "Conecta todos tus sistemas", logo: "🔗" },
    { name: "Inteligencia artificial", use: "Decisiones automáticas", logo: "🤖" }
  ];

  const testimonials = [
    {
      name: "Patricia Morales",
      company: "Clínica Dental Sonríe",
      content: "La automatización de citas y recordatorios ha reducido las inasistencias en un 60%. Nuestros pacientes están más satisfechos y nosotros más organizados.",
      rating: 5,
      result: "60% menos inasistencias"
    },
    {
      name: "Jorge Castillo",
      company: "Supermercado La Economía",
      content: "El sistema de reposición automática mantiene nuestro inventario siempre abastecido. Ya no perdemos ventas por productos agotados.",
      rating: 5,
      result: "25% aumento en ventas"
    }
  ];

  const pricing = [
    {
      name: "Automatización Básica",
      price: "$500 - $1,500",
      description: "Ideal para pequeños negocios que inician",
      features: [
        "1-3 procesos automatizados",
        "Herramientas estándar",
        "Configuración básica",
        "1 mes de soporte"
      ],
      timeframe: "2-3 semanas"
    },
    {
      name: "Automatización Avanzada", 
      price: "$1,500 - $5,000",
      description: "Para empresas con múltiples procesos",
      features: [
        "4-8 procesos automatizados",
        "Integraciones personalizadas",
        "Dashboard de monitoreo",
        "3 meses de soporte"
      ],
      timeframe: "4-6 semanas",
      popular: true
    },
    {
      name: "Automatización Empresarial",
      price: "$5,000+",
      description: "Solución completa para grandes operaciones",
      features: [
        "Procesos ilimitados",
        "IA y machine learning",
        "Soporte 24/7",
        "6 meses de optimización"
      ],
      timeframe: "6-10 semanas"
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
                  Servicios
                </Link>
                <span className="text-red-300">/</span>
                <span className="text-white">Automatización</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Automatiza tu negocio
                <span className="block text-red-200">trabaja más inteligente</span>
              </h1>
              
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Implementamos soluciones que automatizan procesos repetitivos, 
                reducen errores y liberan tiempo valioso para que te enfoques en hacer crecer tu negocio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contacto">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Automatizar ahora
                  </button>
                </Link>
                <Link href="#areas">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                    Ver qué automatizar
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Resultados típicos</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Tiempo ahorrado</span>
                    <span className="text-yellow-400 font-bold text-xl">40-60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Reducción de errores</span>
                    <span className="text-yellow-400 font-bold text-xl">80%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">ROI típico</span>
                    <span className="text-yellow-400 font-bold text-xl">300%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Recuperación inversión</span>
                    <span className="text-yellow-400 font-bold text-xl">3-6 meses</span>
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
              ¿Por qué automatizar tu negocio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La automatización no es solo tecnología, es la clave para un crecimiento sostenible y eficiente
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
              Áreas que podemos automatizar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde ventas hasta recursos humanos, automatizamos los procesos que más tiempo te consumen
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
                    <span className="text-sm font-semibold text-gray-700">Tiempo ahorrado:</span>
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
              Cómo implementamos la automatización
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proceso gradual y sin interrupciones para tu operación diaria
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
              Herramientas que utilizamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos las mejores plataformas con desarrollos personalizados
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
              Casos de éxito
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
              Inversión en automatización
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Paquetes diseñados para diferentes niveles de automatización
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${pkg.popular ? 'border-2 border-red-500 transform scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Más popular
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
                  Solicitar cotización
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿No estás seguro qué automatizar?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Ofrecemos una consulta gratuita para identificar las mejores oportunidades de automatización en tu negocio
              </p>
              <Link href="#contacto">
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  Solicitar consulta gratuita
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
            ¿Listo para automatizar tu negocio?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Comienza a trabajar más inteligente, no más duro. Conversemos sobre cómo la automatización puede transformar tu operación
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Iniciar automatización</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            
            <a href="tel:+50557517432" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}