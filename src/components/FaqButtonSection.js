import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';

export default async function FaqButtonSection() {
  const t = await getTranslations('homepage');
  const locale = await getLocale();
  return (
    <section aria-labelledby="faq-title" className="bg-[#f5f4f1] px-6 pb-20 text-zinc-900 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-zinc-300 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div><p className="mb-5 text-xs tracking-[0.16em] uppercase text-zinc-500">{t('faq.label')}</p><h2 id="faq-title" className="text-3xl font-medium tracking-tight">{t('faq.title')}</h2><Link href={`/${locale}/faq`} className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold underline decoration-zinc-400 underline-offset-4 hover:text-red-700">{t('faq.more')}<ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        <div>{[0, 1, 2].map((i) => <details key={i} className="group border-b border-zinc-300 py-5 first:border-t"><summary className="cursor-pointer text-base font-medium leading-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">{t(`faq.items.${i}.question`)}</summary><p className="mt-4 text-sm leading-7 text-zinc-600">{t(`faq.items.${i}.answer`)}</p></details>)}</div>
      </div>
    </section>
  );
}
