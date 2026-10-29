'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = useTranslations('navigation');
  const params = useParams();
  const locale = params.locale || 'es';

  const menuItems = [
    { href: '#inicio', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#services', label: t('services') },
    { href: `/${locale}/portfolio`, label: t('portfolio'), external: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const current = ['home', 'about', 'services', 'contact'].find((section) => {
        const element = document.getElementById(section === 'home' ? 'inicio' : section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (current) setActiveSection(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => setIsMenuOpen(false);
  const handleSmoothScroll = (event, href) => {
    const element = document.getElementById(href === '#home' ? 'inicio' : href.slice(1));
    if (element) {
      event.preventDefault();
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 72, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const renderLinks = (mobile = false) => menuItems.map((item) => {
    const active = !item.external && activeSection === (item.href === '#inicio' ? 'home' : item.href.slice(1));
    const className = `flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active ? 'bg-white/[0.06] text-white' : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white'} ${mobile ? 'w-full py-3' : ''}`;
    return (
      <li key={item.href}>
        {item.external ? (
          <Link href={item.href} onClick={handleMenuClick} className={className}>
            {item.label}<ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        ) : (
          <a href={item.href} onClick={(event) => handleSmoothScroll(event, item.href)} className={className} aria-current={active ? 'location' : undefined}>
            {item.label}
          </a>
        )}
      </li>
    );
  });

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111214]/95 backdrop-blur-md ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8 xl:px-0">
        <div className="flex h-18 items-center justify-between gap-6">
          <a href="#inicio" onClick={(event) => handleSmoothScroll(event, '#home')} className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" aria-label={locale === 'es' ? 'Drunic · Inicio' : 'Drunic · Home'}>
            <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="text-xl font-semibold tracking-tight text-white">Drunic<span className="text-zinc-400">.</span></span>
          </a>
          <nav className="hidden flex-1 lg:block" aria-label={locale === 'es' ? 'Navegación principal' : 'Main navigation'}>
            <ul className="flex items-center gap-1">{renderLinks()}</ul>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link href={`/${locale}/contact`} className="hidden min-h-10 items-center gap-3 rounded-md border border-zinc-300 bg-zinc-100 px-4 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:inline-flex">
              {t('contact')}<ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={locale === 'es' ? (isMenuOpen ? 'Cerrar menú' : 'Abrir menú') : (isMenuOpen ? 'Close menu' : 'Open menu')} className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-zinc-300 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-white lg:hidden">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav id="mobile-navigation" className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-white/10 py-4 lg:hidden" aria-label={locale === 'es' ? 'Navegación móvil' : 'Mobile navigation'} onKeyDown={(event) => { if (event.key === 'Escape') setIsMenuOpen(false); }}>
            <ul className="space-y-1">{renderLinks(true)}</ul>
            <Link href={`/${locale}/contact`} onClick={handleMenuClick} className="mt-4 flex min-h-11 items-center justify-between rounded-md bg-zinc-100 px-4 text-sm font-semibold text-zinc-900 hover:bg-white">
              {t('contact')}<ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
