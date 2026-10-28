// LanguageSwitcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Check, Globe } from 'lucide-react';
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
        className="flex min-h-10 items-center justify-center gap-2 rounded-md px-2.5 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
        aria-label={currentLocale === 'es' ? 'Cambiar idioma' : 'Change language'}
        aria-expanded={isOpen}
        aria-controls="language-options"
      >
        <Globe size={16} aria-hidden="true" />
        <span className="text-xs font-medium uppercase">{currentLocale}</span>
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
        <div id="language-options" className="absolute top-full right-0 mt-2 w-40 rounded-md border border-white/15 bg-[#18191c] py-1 shadow-xl z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                currentLocale === language.code ? 'bg-white/5' : ''
              }`}
            >
              <div className="flex items-center space-x-3">

                <span className="text-white font-medium text-sm">{language.name}</span>
              </div>
              {currentLocale === language.code && (
                <Check className="w-4 h-4 text-zinc-300 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
