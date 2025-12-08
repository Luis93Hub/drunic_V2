import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';
import { NextResponse } from 'next/server';

export const proxy = createMiddleware({
  // Lista de todos los locales soportados
  locales,
  
  // Locale por defecto
  defaultLocale,
  
  // Siempre usar prefijo de locale en la URL
  localePrefix: 'always'
});

export const config = {
  // Coincide con todas las rutas excepto API routes y archivos estáticos
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(es|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};