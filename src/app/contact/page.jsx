'use client';

import Image from 'next/image';
import Link from 'next/link';
import ConctactForm from '../../components/ContactForm';
import { Phone, Mail, MapPin, Facebook, Instagram, Send, Linkedin, CheckCircle, XCircle, ArrowLeft, Clock, Users, Award } from 'lucide-react';

 const ContactPage = () => {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]"></div>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-500/10 animate-pulse"
              style={{
                width: `${20 + i * 3}px`,
                height: `${20 + i * 3}px`,
                left: `${(i * 7) % 100}%`,
                top: `${(i * 11) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hablemos de tu
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                próximo proyecto
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transformamos ideas en soluciones digitales que impulsan el crecimiento de tu negocio
            </p>
          </div>

          {/* Stars Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">4+</h3>
              <p className="text-gray-300">Clientes satisfechos</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">6+</h3>
              <p className="text-gray-300">Proyectos completados</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">24h</h3>
              <p className="text-gray-300">Tiempo de respuesta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Estamos aquí
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  para ayudarte
                </span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="text-lg text-gray-200 leading-relaxed">
                  ¿Tienes una idea brillante? ¿Necesitas modernizar tu negocio? ¿Quieres automatizar procesos?
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  No importa el tamaño de tu proyecto, estamos listos para convertir tus objetivos en realidad digital.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8 mb-12">
                <div className="flex items-center space-x-6 group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Llámanos</p>
                    <a 
                      href="tel:+50557517432"
                      className="text-xl font-semibold text-white hover:text-red-300 transition-colors duration-300"
                    >
                      +505 5751 7432
                    </a>
                    <p className="text-sm text-gray-300">Lun - Vie, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Escríbenos</p>
                    <a 
                      href="mailto:contact.drunic@gmail.com"
                      className="text-xl font-semibold text-white hover:text-red-300 transition-colors duration-300"
                    >
                      contact.drunic@gmail.com
                    </a>
                    <p className="text-sm text-gray-300">Respuesta en menos de 24h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                    <p className="text-xl font-semibold text-white">Nicaragua</p>
                    <p className="text-sm text-gray-300">Servicio remoto disponible</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">Síguenos en redes</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61579682131905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600/20 hover:bg-blue-600/40 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Facebook className="w-7 h-7 text-blue-400" />
                  </a>
                  <a
                    href="https://www.instagram.com/drunicservices/"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="w-14 h-14 bg-pink-600/20 hover:bg-pink-600/40 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Instagram className="w-7 h-7 text-pink-400" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/108809658"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-600/20 hover:bg-blue-600/40 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Linkedin className="w-7 h-7 text-blue-400" />
                  </a>
                  <a 
                    href="mailto:contact.drunic@gmail.com"
                    className="w-14 h-14 bg-red-600/20 hover:bg-red-600/40 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Send className="w-7 h-7 text-red-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Cuéntanos tu proyecto</h3>
                <p className="text-gray-300">Completa el formulario y nos pondremos en contacto contigo pronto</p>
              </div>
              { /* Conctact form */}
              <ConctactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image 
                  src="/logo.png" 
                  alt="Logo Drunic" 
                  width={48}
                  height={48}
                  className="object-contain"
                /> 
                <h4 className="text-2xl font-bold ml-3 text-white">Drunic</h4>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Transformamos ideas en soluciones digitales. Diseñamos páginas web, desarrollamos software a medida y automatizamos procesos para impulsar tu negocio.
              </p>

              <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-4 mb-6">
                <h5 className="text-lg font-semibold text-white mb-2">
                  ¿Tienes un proyecto en mente?
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  Conversemos sobre cómo podemos ayudarte a crecer digitalmente
                </p>
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm">
                    Iniciar proyecto
                  </button>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                Enlaces rápidos
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Inicio', href: '/' },
                  { name: 'Servicios', href: '/#services' },
                  { name: 'Sobre nosotros', href: '/#about' },
                  { name: 'Contacto', href: '/contact' },
                  { name: 'Portafolio', href: '/portfolio' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                Contacto
              </h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-red-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:contact.drunic@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                      contact.drunic@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-red-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <a href="tel:+50557517432" className="text-gray-300 hover:text-white transition-colors">
                      +505 5751 7432
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Ubicación</p>
                    <p className="text-gray-300">Nicaragua</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61579682131905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/drunicservices/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-pink-600/20 hover:bg-pink-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/108809658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>
                <a 
                  href="mailto:contact.drunic@gmail.com"
                  className="w-10 h-10 bg-red-600/20 hover:bg-red-600/30 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <Send className="w-4 h-4 text-red-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                &copy; 2025 <span className="text-white font-semibold">Drunic</span>. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;