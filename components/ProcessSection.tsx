'use client';

import { useTranslations } from 'next-intl';

const steps = [
  { key: 'step1', number: '01' },
  { key: 'step2', number: '02' },
  { key: 'step3', number: '03' },
  { key: 'step4', number: '04' },
];

export default function ProcessSection() {
  const t = useTranslations('process');

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">
            {t('subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-4">
            {t('title')}
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="w-16 h-px bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.key} className="relative group">
                {/* Step card */}
                <div className="bg-stone-50 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-white hover:shadow-lg border border-stone-100 hover:border-teal-200">
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full border-2 border-teal-500 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-teal-500 transition-colors duration-300">
                    <span className="font-serif text-xl text-teal-600 group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-stone-800 mb-3">
                    {t(`steps.${step.key}.title`)}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {t(`steps.${step.key}.description`)}
                  </p>
                </div>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-6 h-6 text-teal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
