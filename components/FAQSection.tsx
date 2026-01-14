'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 text-sm font-medium tracking-widest uppercase">
            {t('subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-4">
            {t('title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq}
              className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-100/50 transition-colors"
              >
                <span className="font-medium text-stone-800 pr-4">
                  {t(`questions.${faq}.question`)}
                </span>
                <svg
                  className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-stone-600 leading-relaxed">
                  {t(`questions.${faq}.answer`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
