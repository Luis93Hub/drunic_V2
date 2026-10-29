import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const services = [
  { key: 'web', href: 'web-development', number: '01' },
  { key: 'software', href: 'custom-software', number: '02' },
  { key: 'automation', href: 'automation', number: '03' },
];

export default async function Hero() {
  const t = await getTranslations('hero');
  const locale = await getLocale();

  return (
    <section id="inicio" className="flex min-h-svh flex-col bg-[#111214] px-6 pt-28 pb-6 text-white sm:px-8 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-6">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-zinc-400">
              <span className="h-px w-8 bg-red-500" aria-hidden="true" />
              {t('eyebrow')}
            </p>
            <h1 className="max-w-xl text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.08] font-semibold tracking-[-0.045em]">
              {t('title')} <span className="text-zinc-400">{t('titleHighlight')}</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">{t('description')}</p>
            <div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-center gap-4 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">
                {t('startProject')} <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href={`/${locale}/portfolio`} className="inline-flex min-h-12 items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                {t('viewPortfolio')} <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="border-t border-white/20">
            <p className="py-5 text-xs tracking-[0.16em] uppercase text-zinc-500">{t('servicesLabel')}</p>
            {services.map(({ key, href, number }) => (
              <Link key={key} href={`/${locale}/services/${href}`} className="group flex items-start gap-5 border-b border-white/10 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400">
                <span className="pt-1 font-mono text-xs text-zinc-500">{number}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-medium tracking-tight transition-colors group-hover:text-red-400 sm:text-2xl">{t(`offerings.${key}.title`)}</h2>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-400">{t(`offerings.${key}.description`)}</p>
                </div>
                <ArrowUpRight className="mt-1 shrink-0 text-zinc-500 transition-colors group-hover:text-red-400" size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row">
          <span>{t('footerNote')}</span>
          <a href="#services" className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white">{t('learnMore')} <ArrowRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
