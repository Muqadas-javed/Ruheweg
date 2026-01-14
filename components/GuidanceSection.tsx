import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const guidanceCards = [
  {
    key: 'firstSteps',
    image: '/images/image2.png',
  },
  {
    key: 'planningFarewell',
    image: '/images/image3.png',
  },
  {
    key: 'griefSupport',
    image: '/images/image.png',
  },
];

export default function GuidanceSection() {
  const t = useTranslations('guidance');

  return (
    <section className="py-28 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sky-600 text-sm font-medium tracking-widest uppercase">
            {t('subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-4">
            {t('title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guidanceCards.map((card) => (
            <div 
              key={card.key} 
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={t(`cards.${card.key}.title`)}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl text-teal-700 mb-4">
                  {t(`cards.${card.key}.title`)}
                </h3>
                <Link
                  href={t(`cards.${card.key}.link`)}
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm tracking-wide px-8 py-3 rounded-full transition-colors duration-300"
                >
                  {t(`cards.${card.key}.button`)}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
