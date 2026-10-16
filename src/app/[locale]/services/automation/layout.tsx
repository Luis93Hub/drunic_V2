import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const title = isSpanish
    ? 'Automatización de procesos empresariales | Drunic'
    : 'Business Process Automation | Drunic';
  const description = isSpanish
    ? 'Automatiza procesos repetitivos para ahorrar tiempo, reducir errores operativos y mejorar la eficiencia de tu empresa.'
    : 'Automate repetitive processes to save time, reduce operational errors, and improve your business efficiency.';
  const url = `https://drunic.com/${locale}/services/automation`;
  const image = '/hero-background.jpg';

  return {
    title,
    description,
    keywords: isSpanish
      ? 'automatización de procesos, automatización empresarial, eficiencia operativa, soluciones tecnológicas'
      : 'process automation, business automation, operational efficiency, technology solutions',
    alternates: {
      canonical: `/${locale}/services/automation`,
      languages: {
        es: '/es/services/automation',
        en: '/en/services/automation',
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

export default function AutomationLayout({ children }: Props) {
  return children;
}
