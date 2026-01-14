import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('about');

  const values = ['compassion', 'dignity', 'trust', 'professionalism'];

  return (
    <section id="about" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative h-80 lg:h-[450px] rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1974&auto=format&fit=crop"
                alt="Peaceful garden path"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mb-4">
                {t('title')}
              </h2>
              <div className="w-16 h-px bg-amber-600 mb-6"></div>
              <p className="text-stone-600 text-lg leading-relaxed">
                {t('description')}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm">
            <h3 className="font-serif text-xl text-stone-800 text-center mb-8">
              {t('values.title')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3">
                    <div className="w-3 h-3 rounded-full bg-amber-600"></div>
                  </div>
                  <span className="text-stone-700 font-medium text-sm">
                    {t(`values.${value}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Full-width banner image */}
      <div className="relative h-64 mt-20">
        <Image
          src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=2070&auto=format&fit=crop"
          alt="Peaceful candles"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40"></div>
      </div>
    </section>
  );
}
