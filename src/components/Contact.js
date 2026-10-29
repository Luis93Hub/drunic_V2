import ContactForm from '@/components/ContactForm';
import { getTranslations } from 'next-intl/server';
import { Mail, Phone } from 'lucide-react';

export default async function Contact() {
  const t = await getTranslations('homepage');
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-18 border-t border-white/10 bg-[#17171c] px-6 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div><p className="mb-5 text-xs tracking-[0.16em] uppercase text-zinc-400">{t('contact.label')}</p><h2 id="contact-title" className="max-w-md text-3xl leading-tight font-medium tracking-tight sm:text-4xl">{t('contact.title')}</h2><p className="mt-6 max-w-md text-base leading-8 text-zinc-400">{t('contact.description')}</p><address className="mt-9 space-y-4 text-sm not-italic"><a href="mailto:contact.drunic@gmail.com" className="flex min-h-11 items-center gap-3 break-all text-zinc-300 hover:text-white"><Mail size={17} className="shrink-0" aria-hidden="true" />contact.drunic@gmail.com</a><a href="tel:+50557517432" className="flex min-h-11 items-center gap-3 text-zinc-300 hover:text-white"><Phone size={17} aria-hidden="true" />+505 5751 7432</a></address><p className="mt-8 text-xs leading-6 text-zinc-500">{t('contact.note')}</p></div>
        <div className="min-w-0"><ContactForm /></div>
      </div>
    </section>
  );
}
