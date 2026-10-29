import { getTranslations } from 'next-intl/server';

export default async function TechnologyStack() {
  const t = await getTranslations('homepage');
  return (
    <section aria-labelledby="technology-title" className="border-y border-white/10 bg-[#151619] px-6 py-20 text-white sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div><p className="mb-5 text-xs tracking-[0.16em] uppercase text-zinc-400">{t('technology.label')}</p><h2 id="technology-title" className="text-3xl font-medium tracking-tight">{t('technology.title')}</h2><p className="mt-5 text-sm leading-7 text-zinc-400">{t('technology.description')}</p></div>
        <div className="grid gap-6 sm:grid-cols-2">{['Drupal', 'Symfony'].map((name, i) => <div key={name} className="border-t border-white/20 pt-5"><h3 className="text-xl font-medium">{name}</h3><p className="mt-3 text-sm leading-7 text-zinc-400">{t(`technology.items.${i}`)}</p></div>)}<p className="border-t border-white/10 pt-5 font-mono text-xs leading-7 text-zinc-400 sm:col-span-2">PHP / MySQL / PostgreSQL / Redis / Docker / Git</p></div>
      </div>
    </section>
  );
}
