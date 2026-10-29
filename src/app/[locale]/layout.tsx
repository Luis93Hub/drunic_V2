import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import type { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'es' 
    ? 'Drunic - Desarrollo Web y Software a Medida' 
    : 'Drunic - Web Development and Custom Software';
    
  const description = locale === 'es'
    ? 'Creamos páginas web, aplicaciones y soluciones digitales que transforman ideas en resultados medibles. Especializados en Drupal y Symfony.'
    : 'We create websites, applications and digital solutions that transform ideas into measurable results. Specialized in Drupal and Symfony.';

  return {
    title,
    description,
    keywords: locale === 'es' 
      ? 'desarrollo web, software a medida, Drupal, Symfony, páginas web, aplicaciones móviles, automatización'
      : 'web development, custom software, Drupal, Symfony, websites, mobile applications, automation',
    authors: [{ name: 'Drunic' }],
    creator: 'Drunic',
    publisher: 'Drunic',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://drunic.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'es': '/es',
        'en': '/en',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://drunic.com/${locale}`,
      siteName: 'Drunic',
      images: [
        {
          url: '/hero-background.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/hero-background.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params; 

  // Validar que el locale existe
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Obtener mensajes para el locale actual
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  // Server-only sections read their own messages without sending them to the browser.
  const clientNamespaces = ['navigation', 'footer', 'contact', 'faq', 'contactpage', 'portfolio', 'webDevelopment', 'customSoftware', 'automationService'];
  const clientMessages = Object.fromEntries(clientNamespaces.map((namespace) => [namespace, messages[namespace]]));

  return (

        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          {children}
        </NextIntlClientProvider>
  );
}