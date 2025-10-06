// LanguageSwitcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { type Locale } from '@/i18n';

interface Language {
  code: Locale;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = (params.locale as Locale) || 'es';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Efecto para restaurar posición del scroll al cambiar idioma
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo({
        top: parseInt(savedScrollPosition),
        behavior: 'instant'
      });
      sessionStorage.removeItem('scrollPosition');
    }
  }, [currentLocale]);

  const switchLanguage = (newLocale: Locale) => {
    // Guardar la posición actual del scroll
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    
    // Obtener la ruta sin el locale actual
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '';
        
    // Construir nueva URL
    const newPath = `/${newLocale}${pathWithoutLocale}`;
        
    setIsOpen(false);
    
    // Usar replace en lugar de push para evitar historial duplicado
    router.replace(newPath);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white transition-all duration-300 transform hover:scale-105 min-w-[100px] justify-center"
        aria-label="Change language"
      >
        <span className="text-sm font-medium flex-shrink-0">{currentLanguage.flag}</span>
        <span className="hidden md:inline text-sm whitespace-nowrap">{currentLanguage.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-black/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl py-2 z-50 animate-in slide-in-from-top-2 duration-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                currentLocale === language.code ? 'bg-white/5' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{language.flag}</span>
                <span className="text-white font-medium text-sm">{language.name}</span>
              </div>
              {currentLocale === language.code && (
                <Check className="w-4 h-4 text-red-400 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}