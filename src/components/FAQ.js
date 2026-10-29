import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight, Plus } from 'lucide-react';

const categories = ['planning', 'software', 'web', 'delivery'];

export default async function FAQSection() {
  const t = await getTranslations('faq.guide');
  const locale = await getLocale();
  return (
    <section id="faq" aria-label={t('contents')} className="bg-[#f5f4f1] px-6 py-14 text-zinc-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.6fr] lg:gap-20">
        <aside className="min-w-0">
          <div className="lg:sticky lg:top-28">
            <nav aria-label={t('contents')}>
              <p className="mb-5 text-xs font-semibold tracking-[0.14em] uppercase text-zinc-600">{t('contents')}</p>
              <ul className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                {categories.map((key, i) => (
                  <li key={key}>
                    <a href={`#faq-${key}`} className="flex min-h-12 items-center gap-3 rounded-md border border-zinc-300/80 px-3 py-3 text-sm leading-6 transition-colors hover:border-zinc-500 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900">
                      <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>{t(`categories.${key}.title`)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 border-t border-zinc-300 pt-6">
              <p className="text-base font-semibold">{t('helpTitle')}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{t('helpDescription')}</p>
              <a href="#contact" className="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline decoration-zinc-400 underline-offset-4 hover:text-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900">{t('helpLink')}<ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </aside>
        <div className="min-w-0 space-y-14 sm:space-y-20">
          {categories.map((key, i) => (
            <section key={key} id={`faq-${key}`} aria-labelledby={`faq-${key}-title`}>
              <div className="mb-6">
                <p className="mb-3 font-mono text-xs text-zinc-600">0{i + 1}</p>
                <h2 id={`faq-${key}-title`} className="text-2xl font-medium tracking-tight sm:text-3xl">{t(`categories.${key}.title`)}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{t(`categories.${key}.description`)}</p>
              </div>
              <div className="border-t border-zinc-300">
                {[0, 1, 2, 3].map((j) => (
                  <details key={j} className="group border-b border-zinc-300 open:bg-white/60">
                    <summary className="cursor-pointer list-none rounded-sm px-3 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 [&::-webkit-details-marker]:hidden">
                      <h3 className="flex items-start justify-between gap-5 text-base leading-7 font-medium"><span>{t(`categories.${key}.items.${j}.question`)}</span><Plus size={18} className="mt-1 shrink-0 text-zinc-600 transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true" /></h3>
                    </summary>
                    <div className="px-3 pb-6">
                      <p className="max-w-2xl text-sm leading-8 text-zinc-600">{t(`categories.${key}.items.${j}.answer`)}</p>
                      {j === 0 && <Link href={`/${locale}/services/${key === 'web' ? 'web-development' : 'custom-software'}`} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline decoration-zinc-400 underline-offset-4 hover:text-red-800">{t(`categories.${key}.serviceLink`)}<ArrowUpRight size={15} aria-hidden="true" /></Link>}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
