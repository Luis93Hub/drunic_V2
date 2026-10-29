import FAQSection from '@/components/FAQ';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('faq.guide');
  const breadcrumbs = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('home'), item: `https://drunic.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: t('breadcrumb'), item: `https://drunic.com/${locale}/faq` },
    ],
  };
  return (
    <>
      <a href="#faq-main" className="sr-only fixed top-3 left-3 z-[100] rounded-md bg-white px-5 py-3 text-zinc-900 focus:not-sr-only">{t('skip')}</a>
      <Navigation />
      <main id="faq-main" tabIndex={-1}>
        <section className="relative overflow-hidden bg-[#111214] px-6 pt-28 pb-14 text-white sm:px-8 sm:pt-36 sm:pb-20 lg:px-16" style={{ backgroundImage: 'radial-gradient(ellipse at 95% 0%, rgba(107, 54, 80, .25), transparent 65%)' }}>
          <div className="mx-auto max-w-6xl">
            <nav aria-label={t('breadcrumbLabel')} className="mb-10 text-xs text-zinc-400">
              <ol className="flex flex-wrap items-center gap-3"><li><Link href={`/${locale}`} className="inline-flex min-h-9 items-center hover:text-white">{t('home')}</Link></li><li aria-hidden="true">/</li><li aria-current="page">{t('breadcrumb')}</li></ol>
            </nav>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <div><p className="mb-5 text-xs tracking-[0.16em] uppercase text-rose-200">{t('eyebrow')}</p><h1 className="max-w-2xl text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.12] font-medium tracking-[-0.035em]">{t('title')}</h1></div>
              <div className="lg:pt-10"><p className="max-w-lg text-base leading-8 text-zinc-300">{t('description')}</p><div className="mt-7 flex flex-wrap items-center gap-5"><a href="#faq" className="inline-flex min-h-11 items-center gap-3 rounded-md bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{t('browse')}<ArrowRight size={16} aria-hidden="true" /></a><a href="#contact" className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-300 hover:text-white">{t('talk')}<ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
            </div>
            <p className="mt-10 border-t border-white/15 pt-5 text-xs leading-6 text-zinc-400">{t('reach')}</p>
          </div>
        </section>
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, '\\u003c') }} />
    </>
  );
}
