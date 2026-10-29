import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechnologyStack from '@/components/TechnologyStack';
import Services from '@/components/Services';
import FaqButtonSection from '@/components/FaqButtonSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const es = locale === 'es';
  const title = es ? 'Desarrollo web y software a medida en Nicaragua | Drunic' : 'Web Development & Custom Software in Nicaragua | Drunic';
  const description = es
    ? 'Diseño web, software a medida y automatización de procesos desde Nicaragua para empresas locales e internacionales. Conoce Drunic y conversemos de tu proyecto.'
    : 'Web design, custom software and business process automation from Nicaragua for local and international companies. Explore Drunic and discuss your project.';
  return {
    title,
    description,
    openGraph: {
      title, description, url: `https://drunic.com/${locale}`, siteName: 'Drunic',
      locale: es ? 'es_ES' : 'en_US', type: 'website',
      images: [{ url: '/hero-background.jpg', width: 1200, height: 630, alt: 'Drunic' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/hero-background.jpg'] },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const organization = {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: 'Drunic', url: 'https://drunic.com', logo: 'https://drunic.com/logo.png',
    email: 'contact.drunic@gmail.com', telephone: '+50557517432',
    address: { '@type': 'PostalAddress', addressCountry: 'NI' },
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: 'contact.drunic@gmail.com', availableLanguage: ['Spanish', 'English'] },
    sameAs: ['https://www.facebook.com/profile.php?id=61579682131905', 'https://www.instagram.com/drunicservices/', 'https://www.linkedin.com/company/108809658'],
  };
  return (
    <>
      <a href="#main-content" className="sr-only fixed top-3 left-3 z-[100] rounded-md bg-white px-5 py-3 text-zinc-900 focus:not-sr-only">{locale === 'es' ? 'Saltar al contenido' : 'Skip to content'}</a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <TechnologyStack />
        <FaqButtonSection />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\u003c') }} />
    </>
  );
}
