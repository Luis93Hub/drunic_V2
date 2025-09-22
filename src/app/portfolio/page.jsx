'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code, Palette, Smartphone, Globe, Zap, Users, ArrowRight, Star, Calendar, Tag, X } from 'lucide-react';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      category: "ecommerce",
      description: "Plataforma de comercio electrónico con sistema de pagos integrado y gestión de inventario en tiempo real.",
      image: "/images/portfolio/e-commerce.png",
      technologies: ["React", "Next.js", "Stripe", "MongoDB"],
      client: "Food Store",
      year: "2024",
      duration: "3 meses",
      features: ["Carrito de compras", "Pagos seguros", "Panel de administración", "Responsive design"],
      demoUrl: "https://foodshop-demo-seven.vercel.app/",
      codeUrl: "https://github.com/Luis93Hub/foodshop-demo"
    },
    {
      id: 2,
      title: "Landing Page",
      category: "landing",
      description: "Sitio web corporativo con animaciones fluidas y optimización SEO para máxima visibilidad online.",
      image: "/images/portfolio/landing-page.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      client: "Tech Solutions",
      year: "2024",
      duration: "1 mes",
      features: ["Animaciones suaves", "SEO optimizado", "Carga rápida", "Formulario de contacto"],
      demoUrl: "https://nicaraguan-restaurant-demo.vercel.app/",
      codeUrl: "https://github.com/Luis93Hub/Nicaraguan-Restaurant---Demo"
    },
    {
      id: 3,
      title: "Aplicación Web SaaS",
      category: "webapp",
      description: "Sistema de gestión empresarial con dashboard interactivo y reportes en tiempo real.",
      image: "/images/portfolio/web-aplication.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      client: "Business Corp",
      year: "2024",
      duration: "4 meses",
      features: ["Dashboard interactivo", "Reportes avanzados", "Multi-usuario", "API REST"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "App Móvil Delivery",
      category: "mobile",
      description: "Aplicación móvil para servicio de delivery con tracking en tiempo real y notificaciones push.",
      image: "/images/portfolio/mobile-app.png",
      technologies: ["React Native", "Firebase", "Google Maps", "Stripe"],
      client: "Food Delivery",
      year: "2024",
      duration: "5 meses",
      features: ["Tracking GPS", "Notificaciones", "Pagos integrados", "Chat en vivo"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Sistema de Automatización",
      category: "automation",
      description: "Plataforma de automatización de procesos empresariales con integración de APIs externas.",
      image: "/images/portfolio/automation.png",
      technologies: ["Python", "Django", "Celery", "Redis"],
      client: "Manufacturing Co",
      year: "2023",
      duration: "6 meses",
      features: ["Automatización de tareas", "Integraciones API", "Reportes automáticos", "Alertas inteligentes"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Plataforma Educativa",
      category: "webapp",
      description: "Sistema de aprendizaje online con videoconferencias, evaluaciones y seguimiento de progreso.",
      image: "/images/portfolio/education-platform.png",
      technologies: ["Vue.js", "Laravel", "WebRTC", "MySQL"],
      client: "EduTech",
      year: "2023",
      duration: "4 meses",
      features: ["Clases virtuales", "Evaluaciones online", "Progreso del estudiante", "Certificaciones"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos los proyectos', icon: Globe },
    { id: 'ecommerce', name: 'E-commerce', icon: Zap },
    { id: 'landing', name: 'Landing Pages', icon: Palette },
    { id: 'webapp', name: 'Aplicaciones Web', icon: Code },
    { id: 'mobile', name: 'Apps Móviles', icon: Smartphone },
    { id: 'automation', name: 'Automatización', icon: Users }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
    // Function to handle the click on view demo
  const handleViewDemo = (e, demoUrl) => {
    e.stopPropagation();
    if (demoUrl && demoUrl !== '#') {
      window.open(demoUrl, '_blank');
    } else {
      alert('Demo no disponible para este proyecto');
    }
  };

  // Function to handle the click on view code
  const handleViewCode = (e, codeUrl) => {
    e.stopPropagation();
    if (codeUrl && codeUrl !== '#') {
      window.open(codeUrl, '_blank');
    }else {
      alert('Código no disponible para este proyecto')
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header Navigation */}
      <nav className="relative z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
              <span className="text-white group-hover:text-red-300 transition-colors">Volver al inicio</span>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05),transparent_50%)]"></div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-500/5 animate-pulse"
              style={{
                width: `${30 + i * 4}px`,
                height: `${30 + i * 4}px`,
                left: `${(i * 8) % 100}%`,
                top: `${(i * 12) % 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Nuestros
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                Proyectos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada proyecto cuenta una historia de innovación, creatividad y resultados excepcionales
            </p>
          </div>

          {/* Stars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                6+
              </div>
              <p className="text-gray-300 text-lg">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                98%
              </div>
              <p className="text-gray-300 text-lg">Satisfacción del Cliente</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                24h
              </div>
              <p className="text-gray-300 text-lg">Tiempo de Respuesta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-gradient-to-b from-red-900/10 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="w-full h-48 bg-gradient-to-br from-red-900/20 to-gray-900 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover z-0 opacity-30"
                        />
                        <Code className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">Vista previa del proyecto</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className='flex flex-col sm:flex-row gap-3 px-4'>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project)}}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                      >
                        <span className='text-sm font-medium'>Ver detalles</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleViewDemo(e, project.demoUrl)}
                        className='bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105'
                      >
                        <ExternalLink className='w-4 h-4' />
                        <span className='text-sm font-medium'>Demo</span>
                      </button>

                      <button
                        onClick={(e) => handleViewCode(e, project.codeUrl)}
                        className='bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105'
                      >
                        <Code className='w-4 h-4' />
                        <span>Código</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-medium rounded-full">
                      {project.year}
                    </span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.client}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para el siguiente
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              gran proyecto?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Únete a nuestros clientes satisfechos y dale vida a tu visión digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Iniciar mi proyecto
              </button>
            </Link>
            <Link href="/#services">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Ver servicios
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-300">{selectedProject.client} • {selectedProject.year}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <X className='w-6 h-6' />
                </button>
              </div>

              {/* Project Image */}
              <div className="w-full h-64 bg-gradient-to-br from-red-900/20 to-gray-800 rounded-xl mb-8 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Code className='w-16 h-16 mx-auto mb-4' />
                  <p>Imagen del proyecto</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Descripción</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>
                  <h3 className="text-xl font-semibold text-white mb-4">Características principales</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Tecnologías utilizadas</h3>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-700">
                      <span className="text-gray-300">Cliente:</span>
                      <span className="text-white font-medium">{selectedProject.client}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-700">
                      <span className="text-gray-300">Duración:</span>
                      <span className="text-white font-medium">{selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-700">
                      <span className="text-gray-300">Año:</span>
                      <span className="text-white font-medium">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8 pt-8 border-t border-gray-700">
                <button className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                  <ExternalLink className="w-5 h-5" />
                  <span>Ver proyecto</span>
                </button>
                <Link href="/contact" className="flex-1">
                  <button className="w-full bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300">
                    Proyecto similar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;