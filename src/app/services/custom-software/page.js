import Link from "next/link";
import { Code, Database, Users, BarChart, CheckCircle, ArrowRight, Star, Quote, Lightbulb } from "lucide-react";

export default function SoftwareAMedida() {
  const benefits = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Diseñado para tu negocio",
      description: "Desarrollamos funcionalidades específicas que se adaptan a tus procesos únicos"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Integración completa",
      description: "Conectamos todos tus sistemas para que trabajen en perfecta sincronía"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fácil de usar",
      description: "Interfaces intuitivas que tu equipo puede dominar desde el primer día"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Reportes en tiempo real",
      description: "Toma decisiones informadas con datos actualizados al instante"
    }
  ];

  const solutions = [
    {
      title: "Sistema de Gestión de Ventas",
      description: "Controla todo el proceso desde el lead hasta la facturación",
      features: ["CRM integrado", "Seguimiento de clientes", "Automatización de cotizaciones", "Dashboard de ventas"],
      icon: "💼"
    },
    {
      title: "Control de Inventarios",
      description: "Mantén el control exacto de tu stock y movimientos",
      features: ["Alertas de stock bajo", "Códigos de barras", "Múltiples almacenes", "Reportes de rotación"],
      icon: "📦"
    },
    {
      title: "Sistema de Facturación",
      description: "Automatiza tu facturación y cumple con regulaciones fiscales",
      features: ["Facturación electrónica", "Múltiples impuestos", "Pagos recurrentes", "Integración contable"],
      icon: "📄"
    },
    {
      title: "Gestión de Proyectos",
      description: "Organiza equipos, tareas y tiempos de manera eficiente",
      features: ["Cronogramas visuales", "Asignación de tareas", "Control de tiempo", "Colaboración en equipo"],
      icon: "🎯"
    },
    {
      title: "Sistema de RRHH",
      description: "Gestiona tu talento humano de forma integral",
      features: ["Control de asistencia", "Nóminas automatizadas", "Evaluaciones", "Portal del empleado"],
      icon: "👥"
    },
    {
      title: "Plataforma de E-learning",
      description: "Capacita a tu equipo o monetiza conocimiento",
      features: ["Cursos interactivos", "Seguimiento de progreso", "Certificaciones", "Gamificación"],
      icon: "🎓"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análisis profundo",
      description: "Estudiamos tus procesos actuales y identificamos oportunidades de mejora",
      duration: "1-2 semanas"
    },
    {
      step: "02", 
      title: "Diseño de solución",
      description: "Creamos la arquitectura y flujos de trabajo personalizados",
      duration: "1-2 semanas"
    },
    {
      step: "03",
      title: "Desarrollo iterativo",
      description: "Construimos el software con entregas parciales para tu validación",
      duration: "4-12 semanas"
    },
    {
      step: "04",
      title: "Implementación",
      description: "Instalamos, configuramos y capacitamos a tu equipo",
      duration: "1-2 semanas"
    },
    {
      step: "05",
      title: "Soporte continuo",
      description: "Acompañamos el crecimiento con actualizaciones y mejoras",
      duration: "Permanente"
    }
  ];

  const technologies = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Base de datos" },
    { name: "MongoDB", category: "Base de datos" },
    { name: "AWS/DigitalOcean", category: "Hosting" }
  ];

  const testimonials = [
    {
      name: "Roberto Sánchez",
      company: "Distribuidora El Norte",
      content: "El sistema de inventarios ha revolucionado nuestro negocio. Ahora sabemos exactamente qué productos tenemos y cuáles necesitamos pedir.",
      rating: 5,
      result: "30% reducción en productos agotados"
    },
    {
      name: "Ana Patricia López",
      company: "Constructora Moderna",
      content: "El software de gestión de proyectos nos permite coordinar mejor los equipos. Los proyectos se entregan a tiempo y dentro del presupuesto.",
      rating: 5,
      result: "25% mejora en tiempos de entrega"
    }
  ];

  const pricingFactors = [
    {
      factor: "Complejidad funcional",
      description: "Número de módulos y características específicas",
      impact: "$$-$$$"
    },
    {
      factor: "Integraciones",
      description: "Conexión con sistemas existentes o servicios externos",
      impact: "$-$$"
    },
    {
      factor: "Número de usuarios",
      description: "Capacidad simultánea y roles de usuario",
      impact: "$-$$"
    },
    {
      factor: "Personalización",
      description: "Nivel de adaptación a procesos específicos",
      impact: "$$-$$$"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Link href="/#services" className="text-green-200 hover:text-white transition-colors">
                  Servicios
                </Link>
                <span className="text-green-300">/</span>
                <span className="text-white">Software a la Medida</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Software que se adapta
                <span className="block text-green-200">a tu negocio</span>
              </h1>
              
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Desarrollamos sistemas personalizados que optimizan tus procesos, 
                automatizan tareas repetitivas y hacen que tu equipo sea más productivo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contacto">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Solicitar cotización
                  </button>
                </Link>
                <Link href="#soluciones">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                    Ver soluciones
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">¿Por qué software personalizado?</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">100% adaptado a tus procesos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Escalable con tu crecimiento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Mayor productividad del equipo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">ROI comprobable</span>
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
              Ventajas del software personalizado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diferencia de las soluciones genéricas, nuestro software se diseña específicamente para tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-100 group-hover:bg-green-500 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                  <div className="text-green-600 group-hover:text-white transition-colors duration-300">
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

      {/* Solutions Section */}
      <section id="soluciones" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tipos de software que desarrollamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistemas especializados para diferentes áreas de tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
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
              Nuestro proceso de desarrollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada que garantiza resultados exitosos
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-green-600 font-semibold">
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tecnologías que utilizamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramientas modernas y confiables para crear software robusto y escalable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{tech.name}</span>
                  <span className="text-sm text-gray-500 bg-white px-2 py-1 rounded">
                    {tech.category}
                  </span>
                </div>
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
                <Quote className="w-8 h-8 text-green-500 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
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
                    <div className="text-sm font-semibold text-green-600">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo determinamos el precio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El costo depende de varios factores que analizamos en conjunto contigo
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Inversión típica
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sistema básico</span>
                    <span className="font-semibold text-green-600">$1,500 - $3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sistema intermedio</span>
                    <span className="font-semibold text-green-600">$3,000 - $7,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sistema avanzado</span>
                    <span className="font-semibold text-green-600">$7,000 - $15,000+</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Lightbulb className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-lg text-gray-700">
                  <strong>Consulta gratuita:</strong> Te ayudamos a definir el alcance y presupuesto ideal para tu proyecto
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingFactors.map((factor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {factor.factor}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {factor.description}
                </p>
                <div className="text-center">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {factor.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para optimizar tu negocio?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Conversemos sobre cómo el software personalizado puede transformar la eficiencia de tu empresa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Solicitar cotización</span>
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