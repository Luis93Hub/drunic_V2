import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const title = isSpanish
    ? 'Portafolio de proyectos web y software | Drunic'
    : 'Web and Software Project Portfolio | Drunic';
  const description = isSpanish
    ? 'Explora los proyectos de desarrollo web, software a medida y soluciones digitales creados por Drunic.'
    : 'Explore web development, custom software, and digital solutions created by Drunic.';
  const url = `https://drunic.com/${locale}/portfolio`;
  const image = '/hero-background.jpg';

  return {
    title,
    description,
    keywords: isSpanish
      ? 'portafolio web, proyectos de software, desarrollo web, aplicaciones, Drunic'
      : 'web portfolio, software projects, web development, applications, Drunic',
    alternates: {
      canonical: `/${locale}/portfolio`,
      languages: { es: '/es/portfolio', en: '/en/portfolio' },
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

export default function PortfolioLayout({ children }: Props) {
  return children;
}
