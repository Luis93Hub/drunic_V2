//i18n.ts
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Lista de idiomas soportados
export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es' as const;

export type Locale = typeof locales[number];

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? defaultLocale;

  // Validar que el locale existe
  if (!locales.includes(currentLocale as Locale)) notFound();

  return {
    locale: currentLocale,
    messages: (await import(`./messages/${currentLocale}.json`)).default
  };
});