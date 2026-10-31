'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ArrowRight, Code, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  const es = locale === 'es';
  const projects = t.raw('projects');
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);
  const filters = ['all', 'ecommerce', 'landing', 'webapp', 'mobile', 'automation'];
  const visible = category === 'all' ? projects : projects.filter(p => p.category === category);
  useEffect(() => {
    if (!selected) return;
    const previous = document.activeElement;
    const dialog = dialogRef.current;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, [selected]);
  const validUrl = url => typeof url === 'string' && /^https?:\/\//.test(url);
  return (
    <div className="portfolio-page bg-[#111214] text-white">
      <a href="#portfolio-main" className="sr-only fixed left-4 top-4 z-50 rounded bg-white p-4 text-zinc-900 focus:not-sr-only">{es ? 'Saltar al contenido' : 'Skip to content'}</a>
      <header className="border-b border-white/10 px-6 sm:px-8 lg:px-16">
        <nav aria-label={es ? 'Navegación principal' : 'Main navigation'} className="mx-auto flex min-h-20 max-w-6xl items-center justify-between gap-5">
          <Link href={`/${locale}`} className="flex min-h-11 items-center gap-3 text-sm text-zinc-300"><ArrowLeft size={17} aria-hidden="true" />{t('navigation.backHome')}</Link>
          <div className="flex items-center gap-6"><Link href={`/${es ? 'en' : 'es'}/portfolio`} lang={es ? 'en' : 'es'} className="text-sm text-zinc-300">{es ? 'EN' : 'ES'}</Link><Link href={`/${locale}`} className="text-xl font-semibold tracking-tight">Drunic<span className="text-red-500">.</span></Link></div>
        </nav>
      </header>
      <main id="portfolio-main" tabIndex={-1}>
        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-zinc-400"><span className="h-px w-8 bg-red-500" aria-hidden="true" />{es ? 'Portafolio / Proyectos seleccionados' : 'Portfolio / Selected projects'}</p>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-.045em]">{t('hero.title')} <span className="text-zinc-400">{t('hero.titleHighlight')}</span></h1>
              <div className="lg:pt-2"><p className="max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">{t('hero.description')}</p><Link href={`/${locale}/contact`} className="mt-8 inline-flex min-h-12 items-center gap-4 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold hover:bg-red-700">{t('cta.startProject')}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
            </div>
            <div className="mt-16 flex flex-wrap justify-between gap-5 border-t border-white/15 pt-6 text-xs text-zinc-400"><span>{String(projects.length).padStart(2, '0')} {t('stats.projects')}</span><span>{es ? 'Desarrollo web · Software · Automatización' : 'Web development · Software · Automation'}</span></div>
          </div>
        </section>
        <section aria-labelledby="projects-heading" className="bg-[#f5f4f1] px-6 py-16 text-zinc-900 sm:px-8 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><h2 id="projects-heading" className="text-3xl font-medium tracking-tight sm:text-4xl">{es ? 'Ideas que toman forma.' : 'Ideas taking shape.'}</h2><p aria-live="polite" aria-atomic="true" className="text-sm text-zinc-600">{visible.length} {es ? 'proyectos' : 'projects'}</p></div>
            <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label={es ? 'Filtrar proyectos' : 'Filter projects'}>{filters.map(id => <button key={id} aria-pressed={id === category} aria-controls="project-grid" onClick={() => setCategory(id)} className={`min-h-11 rounded-md border px-4 py-2 text-sm transition-colors ${id === category ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-300 text-zinc-700 hover:border-zinc-700'}`}>{t(`filters.${id}`)}</button>)}</div>
            <div id="project-grid" className="grid gap-x-8 gap-y-14 md:grid-cols-2">
              {visible.map(project => <article key={project.id} className={`group border-b border-zinc-300 pb-7 ${project.featured ? 'md:col-span-2' : ''}`}>
                <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-lg bg-zinc-200">
                  {project.featured ? <div className="flex h-full flex-col justify-between bg-[#182521] p-8 text-white sm:p-12"><span className="text-xs uppercase tracking-[.18em] text-emerald-200">{project.projectLabel} / 2026</span><div><p className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-none tracking-tight">CB Manager<span className="text-emerald-300">.</span></p><p className="mt-5 text-sm text-emerald-100/80">ERP · {es ? 'Gestión comercial y de flota' : 'Business & fleet management'}</p></div><span className="text-xs uppercase tracking-[.16em] text-emerald-100/70">Inversiones CB ↗</span></div> : project.image ? <Image src={project.image} alt={project.title} fill sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.025]" /> : <div className="flex h-full flex-col items-center justify-center gap-4 bg-[#202228] text-zinc-300"><Code size={48} strokeWidth={1} aria-hidden="true" /><span className="text-xs uppercase tracking-[.16em]">{t(`filters.${project.category}`)}</span></div>}
                </div>
                <div className="mb-4 flex items-center justify-between gap-4 text-xs uppercase tracking-wider text-zinc-600"><span>{t(`filters.${project.category}`)}</span><span>{project.year}</span></div>
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{project.title}</h3><p className="mt-4 text-sm leading-7 text-zinc-600">{project.description}</p>
                {project.accessNote && <p className="mt-4 text-xs leading-6 text-zinc-600">{project.accessNote}</p>}
                <ul aria-label={t('modalOverview.technologies')} className="mt-5 flex flex-wrap gap-2">{project.technologies.map(tech => <li key={tech} className="rounded border border-zinc-300 px-2 py-1 text-xs text-zinc-600">{tech}</li>)}</ul>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4"><button onClick={() => setSelected(project)} aria-label={`${t('cards.viewDetails')}: ${project.title}`} className="inline-flex min-h-11 items-center gap-3 text-sm font-semibold hover:text-red-700">{t('cards.viewDetails')}<ArrowUpRight size={18} aria-hidden="true" /></button>{validUrl(project.demoUrl) && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-600 hover:text-red-700">{project.visitLabel || t('cards.viewDemo')}<ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
              </article>)}
            </div>
          </div>
        </section>
        <section className="px-6 py-20 sm:px-8 sm:py-28 lg:px-16"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2"><h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{t('cta.title')} <span className="text-zinc-400">{t('cta.titleHighlight')}</span></h2><div><p className="text-base leading-8 text-zinc-400">{t('cta.subtitle')}</p><div className="mt-8 flex flex-wrap gap-6"><Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center gap-4 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold hover:bg-red-700">{t('cta.startProject')}<ArrowRight size={18} aria-hidden="true" /></Link><Link href={`/${locale}#services`} className="inline-flex min-h-12 items-center text-sm text-zinc-300 hover:text-white">{t('cta.viewServices')}</Link></div></div></div></section>
      </main>
      <footer className="border-t border-white/10 px-6 py-7 text-xs text-zinc-400"><div className="mx-auto flex max-w-6xl justify-between gap-4"><span>Drunic</span><Link href={`/${locale}/contact`}>{es ? 'Conversemos' : 'Let’s talk'} ↗</Link></div></footer>
      {selected && <dialog ref={dialogRef} aria-labelledby="project-title" onCancel={() => setSelected(null)} className="m-auto max-h-[90svh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-lg border border-zinc-300 bg-[#f5f4f1] p-6 text-zinc-900 backdrop:bg-black/80 sm:p-10">
        <div className="flex items-start justify-between gap-5"><div><p className="mb-3 text-xs uppercase tracking-wider text-zinc-600">{selected.client} · {selected.year}</p><h2 id="project-title" className="text-3xl font-medium tracking-tight">{selected.title}</h2></div><button onClick={() => setSelected(null)} aria-label={es ? 'Cerrar detalles' : 'Close details'} className="flex min-h-11 min-w-11 items-center justify-center rounded border border-zinc-300"><X size={20} /></button></div>
        <p className="mt-6 text-sm leading-7 text-zinc-600">{selected.description}</p><h3 className="mt-8 font-semibold">{t('modalOverview.features')}</h3><ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-zinc-600">{selected.features.map(feature => <li key={feature}>{feature}</li>)}</ul>{selected.technologies.length > 0 && <><h3 className="mt-8 font-semibold">{t('modalOverview.technologies')}</h3><p className="mt-3 text-sm leading-7 text-zinc-600">{selected.technologies.join(' · ')}</p></>}{selected.accessNote && <p className="mt-6 text-sm text-zinc-600">{selected.accessNote}</p>}<div className="mt-8 flex flex-wrap gap-5 border-t border-zinc-300 pt-6">{validUrl(selected.demoUrl) && <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold">{t('modalOverview.viewProject')} ↗</a>}{validUrl(selected.codeUrl) && <a href={selected.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold">{t('cards.viewCode')} ↗</a>}<Link href={`/${locale}/contact`} className="inline-flex min-h-11 items-center text-sm font-semibold text-red-700">{t('modalOverview.similarProject')} →</Link></div>
      </dialog>}
    </div>
  );
}
