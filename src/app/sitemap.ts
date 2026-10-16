import type { MetadataRoute } from 'next';
import { locales } from '@/i18n';

const siteUrl = 'https://drunic.com';

const routes = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  {
    path: '/services/web-development',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/services/custom-software',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/services/automation',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => {
      const localizedPath = `/${locale}${path}`;

      return {
        url: new URL(localizedPath, siteUrl).toString(),
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((alternateLocale) => [
              alternateLocale,
              new URL(`/${alternateLocale}${path}`, siteUrl).toString(),
            ]),
          ),
        },
      };
    }),
  );
}
