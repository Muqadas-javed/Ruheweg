import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function JourneySection() {
  const t = useTranslations('journey');

  return (
    <section className="py-20 bg-amber-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/50 to-stone-200/50 rounded-full blur-sm"></div>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/images/RuheWeg.jpeg"
                    alt="Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <span className="text-amber-700 text-sm font-medium tracking-widest uppercase">
                {t('subtitle')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-6">
                {t('title')}
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                {t('description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
