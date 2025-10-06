// next-intl.config.ts
import { getRequestConfig } from 'next-intl/server';

const defaultLocale = 'es';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? defaultLocale;
  

  return {
    locale: currentLocale,
    messages: (await import(`./src/messages/${currentLocale}.json`)).default
  }
});
