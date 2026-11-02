import { getService } from '@/lib/service-content';
import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const service = getService('automation', locale);
  const title = service.seoTitle;
  const description = service.description;
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
        'x-default': '/en/services/automation',
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

export default function AutomationLayout({ children }: Props) {
  return children;
}
