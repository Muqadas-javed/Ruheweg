import { useTranslations } from 'next-intl';

export default function LocationSection() {
  const t = useTranslations('location');

  return (
    <section className="py-20 bg-teal-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <svg className="w-12 h-12 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
            {t('title')}
          </h2>
          <p className="text-teal-100 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['zurich', 'baden', 'brugg', 'aarau', 'bern', 'solothurn'].map((region) => (
              <span
                key={region}
                className="px-4 py-2 bg-teal-600/50 rounded-full text-sm font-medium"
              >
                {t(`regions.${region}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
