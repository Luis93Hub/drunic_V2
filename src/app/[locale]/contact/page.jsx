import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowLeft, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default async function ContactPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contactpage');
  const es = locale === 'es';
  const methods = [
    { icon: Phone, label: t('contactMethods.callUs'), value: '+505 5751 7432', href: 'tel:+50557517432', note: t('contactMethods.hours') },
    { icon: Mail, label: t('contactMethods.emailUs'), value: 'contact.drunic@gmail.com', href: 'mailto:contact.drunic@gmail.com', note: t('contactMethods.responseTime') },
    { icon: MapPin, label: t('contactMethods.location'), value: 'Nicaragua', note: t('contactMethods.remote') },
  ];
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: es ? 'Contacto | Drunic' : 'Contact | Drunic', url: `https://drunic.com/${locale}/contact`, inLanguage: locale, mainEntity: { '@type': 'Organization', name: 'Drunic', url: 'https://drunic.com', email: 'contact.drunic@gmail.com', telephone: '+50557517432' } };
  return (
    <div className="contact-page bg-[#111214] text-white">
      <a href="#contact-main" className="sr-only fixed left-4 top-4 z-50 rounded bg-white px-5 py-3 text-zinc-900 focus:not-sr-only">{es ? 'Saltar al contenido' : 'Skip to content'}</a>
      <header className="border-b border-white/10 px-6 sm:px-8 lg:px-16">
        <nav aria-label={es ? 'Navegación principal' : 'Main navigation'} className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-5">
          <Link href={`/${locale}`} className="inline-flex min-h-11 items-center gap-3 text-sm text-zinc-300 hover:text-white"><ArrowLeft size={17} aria-hidden="true" />{t('navigation.backToHome')}</Link>
          <div className="flex items-center gap-6"><Link href={`/${es ? 'en' : 'es'}/contact`} lang={es ? 'en' : 'es'} className="inline-flex min-h-11 items-center text-sm text-zinc-300">{es ? 'EN' : 'ES'}</Link><Link href={`/${locale}`} className="text-xl font-semibold tracking-tight">Drunic<span className="text-red-500">.</span></Link></div>
        </nav>
      </header>
      <main id="contact-main" tabIndex={-1}>
        <section aria-labelledby="contact-title" className="px-6 py-20 sm:px-8 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-zinc-400"><span className="h-px w-8 bg-red-500" aria-hidden="true" />{es ? 'Contacto / Empecemos una conversación' : 'Contact / Let’s start a conversation'}</p>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20"><h1 id="contact-title" className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-.045em]">{t('hero.title')} <span className="text-zinc-400">{t('hero.titleHighlight')}</span></h1><p className="max-w-lg text-base leading-8 text-zinc-400 sm:text-lg lg:pt-2">{t('hero.subtitle')}</p></div>
            <div className="mt-14 flex flex-wrap justify-between gap-5 border-t border-white/15 pt-6 text-xs text-zinc-400"><span>{es ? 'Desarrollo web · Software · Automatización' : 'Web development · Software · Automation'}</span><span>{t('contactMethods.remote')}</span></div>
          </div>
        </section>
        <section aria-labelledby="contact-form-title" className="bg-[#f5f4f1] px-6 py-16 text-zinc-900 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div><p className="mb-5 text-xs uppercase tracking-[.16em] text-zinc-600">{es ? 'Trabajemos juntos' : 'Let’s work together'}</p><h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{t('section.title')} {t('section.titleHighlight')}</h2><p className="mt-6 text-sm leading-7 text-zinc-600">{t('section.intro1')}</p>
              <div className="mt-9 border-t border-zinc-300">{methods.map(({ icon: Icon, label, value, href, note }) => <div key={label} className="flex gap-4 border-b border-zinc-300 py-6"><Icon size={20} className="mt-1 shrink-0 text-zinc-500" aria-hidden="true" /><div className="min-w-0"><p className="text-xs text-zinc-600">{label}</p>{href ? <a href={href} className="mt-2 inline-flex min-h-11 items-center break-all text-base font-medium hover:text-red-700">{value}</a> : <p className="mt-2 text-base font-medium">{value}</p>}<p className="mt-1 text-xs leading-6 text-zinc-600">{note}</p></div></div>)}</div>
              <Link href={`/${locale}/portfolio`} className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-semibold hover:text-red-700">{es ? 'Conoce nuestro trabajo' : 'Explore our work'}<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#1b1d21] p-6 text-white sm:p-9"><h2 id="contact-form-title" className="text-2xl font-medium tracking-tight sm:text-3xl">{t('form.title')}</h2><p className="mt-4 text-sm leading-7 text-zinc-400">{t('form.subtitle')}</p><p className="mb-7 mt-3 text-xs text-zinc-400">{es ? 'Los campos con * son obligatorios.' : 'Fields marked * are required.'}</p><ContactForm /></div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </div>
  );
}
