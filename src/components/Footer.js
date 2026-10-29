'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579682131905', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/drunicservices/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/108809658', icon: Linkedin },
];

const linkStyle = 'rounded-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export default function Footer() {
  const t = useTranslations('footer');
  const { locale = 'es' } = useParams();
  const links = [
    { label: t('home'), href: `/${locale}/#inicio` },
    { label: t('services'), href: `/${locale}/#services` },
    { label: t('about'), href: `/${locale}/#about` },
    { label: t('portfolio'), href: `/${locale}/portfolio` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#111214] px-6 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 py-10 sm:py-12 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{t('cta.title')}</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-400">{t('cta.description')}</p>
          </div>
          <Link href={`/${locale}/contact`} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-5 rounded-md border border-zinc-300 bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            {t('cta.button')}<ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" aria-label={locale === 'es' ? 'Drunic · Inicio' : 'Drunic · Home'}>
              <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-xl font-semibold tracking-tight">Drunic<span className="text-zinc-500">.</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">{t('company.description')}</p>
          </div>

          <nav aria-label={t('quickLinks')}>
            <h2 className="mb-5 text-sm font-semibold text-zinc-200">{t('quickLinks')}</h2>
            <ul className="space-y-1">
              {links.map(({ label, href }) => (
                <li key={href}><Link href={href} className={`inline-flex min-h-9 items-center text-sm ${linkStyle}`}>{label}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 text-sm font-semibold text-zinc-200">{t('contact')}</h2>
            <address className="space-y-4 text-sm not-italic">
              <a href="mailto:contact.drunic@gmail.com" className={`inline-flex min-h-9 items-center gap-2 break-all ${linkStyle}`}><Mail size={16} className="shrink-0" aria-hidden="true" />contact.drunic@gmail.com</a>
              <div>
                <p className="mb-1 text-xs text-zinc-500">{t('phone')}</p>
                <a href="tel:+50557517432" className={`inline-flex min-h-9 items-center ${linkStyle}`}>+505 5751 7432</a>
              </div>
              <div>
                <p className="mb-2 text-xs text-zinc-500">{t('location')}</p>
                <p className="text-zinc-400">Nicaragua</p>
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="text-xs leading-6 text-zinc-500">&copy; {new Date().getFullYear()} Drunic. {t('copyright')}</p>
          <div className="flex items-center gap-2">
            <span className="mr-2 text-xs text-zinc-500">{t('followUs')}</span>
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
