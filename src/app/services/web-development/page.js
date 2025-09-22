import Link from "next/link";
import { Globe, Smartphone, Search, Zap, CheckCircle, ArrowRight, Star, Quote } from "lucide-react";

export default function DesarrolloWeb() {
  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Diseño Responsive",
      description: "Tu sitio web se verá perfecto en cualquier dispositivo: móviles, tablets y computadoras"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimizado",
      description: "Configuramos tu sitio para que aparezca en las primeras posiciones de Google"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Carga Ultrarrápida",
      description: "Optimizamos el rendimiento para que tus visitantes no esperen y no se vayan"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Panel de Administración",
      description: "Gestiona tu contenido fácilmente sin necesidad de conocimientos técnicos"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consulta inicial",
      description: "Entendemos tu negocio, objetivos y audiencia objetivo",
      details: ["Análisis de competencia", "Definición de objetivos", "Estrategia de contenido"]
    },
    {
      step: "02",
      title: "Diseño y prototipo",
      description: "Creamos el diseño visual y la estructura de tu sitio",
      details: ["Wireframes y mockups", "Selección de colores y tipografía", "Experiencia de usuario (UX)"]
    },
    {
      step: "03",
      title: "Desarrollo",
      description: "Construimos tu sitio web con las mejores tecnologías",
      details: ["Desarrollo frontend y backend", "Integración de funcionalidades", "Optimización de rendimiento"]
    },
    {
      step: "04",
      title: "Lanzamiento y soporte",
      description: "Publicamos tu sitio y te acompañamos en el proceso",
      details: ["Configuración de hosting", "Capacitación", "Soporte continuo"]
    }
  ];

  const packages = [
    {
      name: "Sitio Básico",
      price: "Desde $299",
      description: "Perfect para pequeños negocios y emprendedores",
      features: [
        "Hasta 5 páginas",
        "Diseño responsive",
        "Formulario de contacto",
        "SEO básico",
        "1 mes de soporte"
      ],
      popular: false
    },
    {
      name: "Sitio Profesional",
      price: "Desde $599",
      description: "Ideal para empresas en crecimiento",
      features: [
        "Hasta 10 páginas",
        "Panel de administración",
        "Blog integrado",
        "SEO avanzado",
        "Integración con redes sociales",
        "3 meses de soporte"
      ],
      popular: true
    },
    {
      name: "E-commerce",
      price: "Desde $999",
      description: "Para vender productos online",
      features: [
        "Tienda online completa",
        "Sistema de pagos",
        "Gestión de inventario",
        "Panel de ventas",
        "Integración con WhatsApp",
        "6 meses de soporte"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Boutique Elena",
      content: "Nuestro sitio web ha aumentado las ventas en un 40%. Los clientes ahora pueden ver nuestros productos y hacer pedidos online.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      company: "Ferretería Central",
      content: "El panel de administración es muy fácil de usar. Puedo actualizar precios y productos sin ayuda técnica.",
      rating: 5
    }
  ];

  const faq = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: "Un sitio básico toma de 2-3 semanas, uno profesional de 4-6 semanas, y un e-commerce de 6-8 semanas."
    },
    {
      question: "¿Incluye el hosting y dominio?",
      answer: "Te ayudamos a configurar el hosting y dominio, pero los costos anuales van por separado (aproximadamente $100-150/año)."
    },
    {
      question: "¿Puedo actualizar el contenido yo mismo?",
      answer: "Sí, incluimos un panel de administración fácil de usar y te capacitamos para que manejes tu sitio independientemente."
    },
    {
      question: "¿Qué pasa si necesito cambios después?",
      answer: "Incluimos soporte durante el período especificado. Después, ofrecemos planes de mantenimiento mensual o cambios puntuales."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Link href="/#services" className="text-blue-200 hover:text-white transition-colors">
                  Servicios
                </Link>
                <span className="text-blue-300">/</span>
                <span className="text-white">Desarrollo Web</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Desarrollo Web que
                <span className="block text-blue-200">Genera Resultados</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Creamos sitios web modernos, rápidos y optimizados que conectan con tu audiencia 
                y convierten visitantes en clientes reales.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contacto">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Iniciar proyecto
                  </button>
                </Link>
                <Link href="#paquetes">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                    Ver precios
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Diseño responsive garantizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Optimizado para buscadores (SEO)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Carga rápida y segura</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Soporte técnico incluido</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos para tu sitio web?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos diseño atractivo con funcionalidad técnica para crear sitios que realmente funcionan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-500 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestro proceso de desarrollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque estructurado que garantiza resultados de calidad en tiempo y forma
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-2xl">{step.step}</span>
                      </div>
                      <p className="text-blue-600 font-semibold">{step.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paquetes" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes y precios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planes diseñados para diferentes necesidades y presupuestos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative ${pkg.popular ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Más popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Elegir plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                  <div className="flex space-x-1 ml-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para crear tu sitio web?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Conversemos sobre tu proyecto y descubre cómo podemos ayudarte a tener presencia digital exitosa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Iniciar proyecto</span>
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