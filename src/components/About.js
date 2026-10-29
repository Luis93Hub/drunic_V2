import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import { ArrowRight, ArrowUpRight, Globe2, Layers3, MessageSquare } from 'lucide-react';

const offerings = [
  { key: 'web', href: 'web-development', number: '01' },
  { key: 'software', href: 'custom-software', number: '02' },
  { key: 'automation', href: 'automation', number: '03' },
];
const principles = [
  { key: 'communication', icon: MessageSquare },
  { key: 'craft', icon: Layers3 },
  { key: 'reach', icon: Globe2 },
];

export default async function About() {
  const t = await getTranslations('about');
  const locale = await getLocale();

  return (
    <section id="about" aria-labelledby="about-title" className={`drunic-about scroll-mt-18 px-6 py-20 text-white sm:px-8 sm:py-28 lg:px-16`}>
      <div className="drunic-about-lines" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between gap-5 border-b border-white/15 pb-5">
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-300" aria-hidden="true" />{t('studio.eyebrow')}
          </p>
          <span className="font-mono text-xs text-zinc-400" aria-hidden="true">01 / DRUNIC</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <h2 id="about-title" className="max-w-2xl text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.12] font-medium tracking-[-0.04em]">
            {t('studio.title')}{' '}<span className="text-rose-200">{t('studio.highlight')}</span>
          </h2>
          <div className="lg:pt-2">
            <p className="text-base leading-8 text-zinc-200 sm:text-lg">{t('studio.description')}</p>
            <p className="mt-5 text-sm leading-7 text-zinc-400">{t('studio.approach')}</p>
            <Link href={`/${locale}/contact`} className="mt-7 inline-flex min-h-11 items-center gap-5 rounded-sm border-b border-rose-300/50 text-sm font-medium text-white transition-colors hover:text-rose-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {t('studio.contact')}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-xl border border-white/15 bg-black/15 md:mt-20 md:grid-cols-3">
          {offerings.map(({ key, href, number }) => (
            <Link key={key} href={`/${locale}/services/${href}`} className={`drunic-about-service group flex min-w-0 flex-col p-7 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white lg:p-9`}>
              <div className="mb-10 flex items-center justify-between text-zinc-400">
                <span className="font-mono text-xs">{number}</span>
                <ArrowUpRight size={19} className="transition-colors group-hover:text-rose-200" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{t(`studio.offerings.${key}.title`)}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-300">{t(`studio.offerings.${key}.description`)}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-rose-200">{t('studio.explore')}<ArrowRight size={14} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs tracking-[0.16em] uppercase text-zinc-400">{t('studio.methodLabel')}</p>
            <h3 className="max-w-xs text-2xl leading-snug font-medium tracking-tight">{t('studio.methodTitle')}</h3>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {principles.map(({ key, icon: Icon }) => (
              <div key={key} className="border-t border-white/15 pt-5">
                <Icon size={20} className="mb-5 text-rose-200" strokeWidth={1.5} aria-hidden="true" />
                <h4 className="text-sm font-semibold text-zinc-100">{t(`studio.principles.${key}.title`)}</h4>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{t(`studio.principles.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs leading-6 text-zinc-400 sm:flex-row lg:mt-20">
          <p>{t('studio.location')}</p>
          <p>{t('studio.languages')}</p>
        </div>
      </div>
    </section>
  );
}
