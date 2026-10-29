import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight, Check } from 'lucide-react';

export default async function Services() {
  const t = await getTranslations('homepage');
  const locale = await getLocale();
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-18 bg-[#f5f4f1] px-6 py-20 text-zinc-900 sm:px-8 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-xs tracking-[0.16em] uppercase text-zinc-500">{t('services.label')}</p>
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:gap-20">
          <h2 id="services-title" className="text-3xl leading-tight font-medium tracking-tight sm:text-4xl">{t('services.title')}</h2>
          <p className="max-w-lg text-base leading-8 text-zinc-600">{t('services.description')}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {['web-development', 'custom-software', 'automation'].map((slug, i) => (
            <article key={slug} className="flex flex-col rounded-lg border border-zinc-300/70 bg-white/60 p-7 lg:p-8">
              <span className="mb-9 font-mono text-xs text-zinc-500">0{i + 1}</span>
              <h3 className="text-2xl font-medium tracking-tight">{t(`services.items.${i}.title`)}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">{t(`services.items.${i}.description`)}</p>
              <ul className="my-7 space-y-3">
                {[0, 1, 2].map((j) => <li key={j} className="flex items-start gap-2 text-sm text-zinc-600"><Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" />{t(`services.items.${i}.features.${j}`)}</li>)}
              </ul>
              <Link href={`/${locale}/services/${slug}`} className="inline-flex min-h-11 items-center justify-between gap-3 border-t border-zinc-200 pt-5 text-sm font-semibold hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">{t('services.explore', { service: t(`services.items.${i}.title`) })}<ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <div className="mt-20 border-t border-zinc-300 pt-10">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{t('process.title')}</h2>
          <ol className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => <li key={i} className="border-t border-zinc-300 pt-5"><span className="font-mono text-xs text-zinc-500">0{i + 1}</span><h3 className="mt-4 text-base font-semibold">{t(`process.items.${i}.title`)}</h3><p className="mt-3 text-sm leading-7 text-zinc-600">{t(`process.items.${i}.description`)}</p></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
