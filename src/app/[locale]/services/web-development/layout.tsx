import { getService } from '@/lib/service-content';
import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const service = getService('web-development', locale);
  const title = service.seoTitle;
  const description = service.description;
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
        'x-default': '/en/services/web-development',
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
      locale: isSpanish ? 'es_NI' : 'en_US',
      alternateLocale: isSpanish ? 'en_US' : 'es_NI',
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
