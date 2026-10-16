import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const title = isSpanish
    ? 'Diseño y desarrollo web profesional | Drunic'
    : 'Professional Web Design and Development | Drunic';
  const description = isSpanish
    ? 'Creamos páginas web modernas, rápidas y optimizadas que conectan con tu audiencia y generan resultados para tu negocio.'
    : 'We create modern, fast, and optimized websites that connect with your audience and generate results for your business.';
  const url = `https://drunic.com/${locale}/services/web-development`;
  const image = '/hero-background.jpg';

  return {
    title,
    description,
    keywords: isSpanish
      ? 'desarrollo web, diseño web, páginas web, sitios optimizados, desarrollo Drupal'
      : 'web development, web design, websites, optimized sites, Drupal development',
    alternates: {
      canonical: `/${locale}/services/web-development`,
      languages: {
        es: '/es/services/web-development',
        en: '/en/services/web-development',
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

export default function WebDevelopmentLayout({ children }: Props) {
  return children;
}
