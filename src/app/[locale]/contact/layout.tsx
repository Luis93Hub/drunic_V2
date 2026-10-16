import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const title = isSpanish
    ? 'Contacto | Hablemos de tu proyecto | Drunic'
    : 'Contact | Let’s Discuss Your Project | Drunic';
  const description = isSpanish
    ? 'Cuéntanos qué necesitas y encontraremos la mejor solución digital para tu negocio. Contáctanos para comenzar tu proyecto.'
    : 'Tell us what you need and we’ll find the best digital solution for your business. Contact us to get your project started.';
  const url = `https://drunic.com/${locale}/contact`;
  const image = '/hero-background.jpg';

  return {
    title,
    description,
    keywords: isSpanish
      ? 'contacto Drunic, cotización desarrollo web, proyecto de software, soluciones digitales'
      : 'contact Drunic, web development quote, software project, digital solutions',
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { es: '/es/contact', en: '/en/contact' },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Drunic',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: isSpanish ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default function ContactLayout({ children }: Props) {
  return children;
}
