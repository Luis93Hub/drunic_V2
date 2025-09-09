import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Send, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Main content of the footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Logo Drunic" 
                  width={48}
                  height={48}
                  className="object-contain"
                /> 
              </div>
              <h4 className="text-2xl font-bold ml-3 text-white">
                Drunic
              </h4>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales. Diseñamos páginas web, desarrollamos software a medida y automatizamos procesos para impulsar tu negocio.
            </p>

            {/* Call to action */}
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

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#home' },
                { name: 'Servicios', href: '#services' },
                { name: 'Sobre nosotros', href: '#about' },
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

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:contact.drunic@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    contact.drunic@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Teléfono</p>
                  <a 
                    href="tel:+50557517432"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +505 5751 7432
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                  <p className="text-gray-300">
                    Nicaragua
                  </p>
                </div>
              </div>
            </div>

            {/* Social red */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4 text-white">
                Síguenos
              </h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61579682131905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/drunicservices/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-pink-600/20 hover:bg-pink-600/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-pink-400" />
                </a>
                <a 
                  href="mailto:contact.drunic@gmail.com"
                  className="w-12 h-12 bg-red-600/20 hover:bg-red-600/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <Send className="w-5 h-5 text-red-400" />
                </a>
                                <a 
                  href="https://www.linkedin.com/company/108809658"
                  className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/30 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label="Linkedin"
                >
                  <Linkedin className="w-5 h-5 text-red-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2025 <span className="text-white font-semibold">Drunic</span>. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}