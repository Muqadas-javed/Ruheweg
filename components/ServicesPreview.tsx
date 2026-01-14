import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const previewServices = [
  {
    key: 'nonConfessional',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032&auto=format&fit=crop',
  },
  {
    key: 'ceremony',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1974&auto=format&fit=crop',
  },
  {
    key: 'personalRitual',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function ServicesPreview() {
  const t = useTranslations('servicesPage');
  const tHome = useTranslations('home');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 text-sm font-medium tracking-widest uppercase">
            {t('subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-4">
            {t('title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {previewServices.map((service, index) => (
            <div key={service.key} className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mb-4">
                <Image
                  src={service.image}
                  alt={t(`services.${service.key}.title`)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-3xl font-serif text-white/80 block mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-medium text-white">
                    {t(`services.${service.key}.title`)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-stone-800 text-white font-medium rounded-full hover:bg-stone-700 transition-colors"
          >
            {tHome('viewAllServices')}
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
