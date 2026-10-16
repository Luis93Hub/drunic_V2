import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const title = isSpanish
    ? 'Desarrollo de software a medida | Drunic'
    : 'Custom Software Development | Drunic';
  const description = isSpanish
    ? 'Desarrollamos software personalizado que se adapta a los procesos de tu empresa y mejora la productividad.'
    : 'We build custom software tailored to your business processes and designed to improve productivity.';
  const url = `https://drunic.com/${locale}/services/custom-software`;
  const image = '/hero-background.jpg';

  return {
    title,
    description,
    keywords: isSpanish
      ? 'software a medida, desarrollo de software personalizado, sistemas empresariales, aplicaciones'
      : 'custom software, bespoke software development, business systems, applications',
    alternates: {
      canonical: `/${locale}/services/custom-software`,
      languages: {
        es: '/es/services/custom-software',
        en: '/en/services/custom-software',
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

export default function CustomSoftwareLayout({ children }: Props) {
  return children;
}
