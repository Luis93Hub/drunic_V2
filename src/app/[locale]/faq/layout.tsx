import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const title = isSpanish
    ? 'Preguntas frecuentes | Drunic'
    : 'Frequently Asked Questions | Drunic';
  const description = isSpanish
    ? 'Encuentra respuestas a preguntas comunes sobre los servicios y procesos de Drunic.'
    : 'Find answers to common questions about Drunic services and processes.';
  const url = `https://drunic.com/${locale}/faq`;
  const image = '/hero-background.jpg';

  return {
    title,
    description,
    keywords: isSpanish
      ? 'preguntas frecuentes, desarrollo web, software a medida, Drupal, Symfony'
      : 'frequently asked questions, web development, custom software, Drupal, Symfony',
    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        es: '/es/faq',
        en: '/en/faq',
      },
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

export default function FAQLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}