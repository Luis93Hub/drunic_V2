'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      question: t('items.0.question'),
      answer: t('items.0.answer')
    },
    {
      question: t('items.1.question'),
      answer: t('items.1.answer')
    },
    {
      question: t('items.2.question'),
      answer: t('items.2.answer')
    },
    {
      question: t('items.3.question'),
      answer: t('items.3.answer')
    },
    {
      question: t('items.4.question'),
      answer: t('items.4.answer')
    },
    {
      question: t('items.5.question'),
      answer: t('items.5.answer')
    },
    {
      question: t('items.6.question'),
      answer: t('items.6.answer')
    },
    {
      question: t('items.7.question'),
      answer: t('items.7.answer')
    },
    {
      question: t('items.8.question'),
      answer: t('items.8.answer')
    },
  ];

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="py-20 bg-white text-black"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" itemProp="headline">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('subtitle') || ''}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <dl className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <dt>
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={openIndex === index}
                    className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <span className="text-gray-800 font-semibold" itemProp="name">
                      {item.question}
                    </span>
                    <span className={`ml-4 text-red-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                      ▼
                    </span>
                  </button>
                </dt>

                <dd
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                  className={`px-6 pb-6 transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}
                >
                  <div itemProp="text" className="text-gray-600">
                    {item.answer}

                    {index === 3 && (
                      <div className="mt-4">
                        <a
                          href="#contact"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-colors"
                        >
                          {t('contactButton')}
                        </a>

                        <a
                          href="mailto:contact.drunic@gmail.com?subject=Consulta%20sitio%20web"
                          className="inline-flex items-center px-4 py-2 ml-3 border border-gray-300 rounded-lg text-gray-700 hover:text-red-600 transition-colors"
                        >
                          {t('emailButton')}
                        </a>
                      </div>
                    )}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
