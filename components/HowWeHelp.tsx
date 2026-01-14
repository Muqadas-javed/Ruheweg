import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HowWeHelp() {
  const t = useTranslations('howWeHelp');

  const steps = ['simple', 'personal', 'support'];

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 text-sm font-medium tracking-widest uppercase">
            {t('subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032&auto=format&fit=crop"
              alt="Supportive community"
              fill
              className="object-cover"
            />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    <span className="text-sky-600 font-semibold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <span className="text-sky-600 text-xs font-medium tracking-widest uppercase">
                    {t(`steps.${step}.label`)}
                  </span>
                  <h3 className="font-serif text-xl text-stone-800 mt-1 mb-2">
                    {t(`steps.${step}.title`)}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {t(`steps.${step}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
