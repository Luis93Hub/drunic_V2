'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function FaqButtonSection() {
  const t = useTranslations('faq');
  const params = useParams();
  const locale = params.locale || 'es';

  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          {t('faqsubtitle')}
        </p>
        <Link href={`/${locale}/faq`}>
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-700 transition-colors transition-all duration-300">
            {t('faqButton')}
          </button>
        </Link>
      </div>
    </section>
  );
}