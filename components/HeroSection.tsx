import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image - funeral ceremony setting */}
      <div className="absolute inset-0">
        <Image
          src="/images/image1.png"
          alt="Dignified funeral ceremony - professional funeral services in Germany"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main H1 - Empathetic, service-focused */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide mb-8 text-stone-100 max-w-4xl mx-auto leading-tight">
          {t('title')}
        </h1>
        
        <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto mb-6 leading-relaxed font-light">
          {t('subtitle')}
        </p>

        <p className="text-stone-300 max-w-xl mx-auto mb-12 text-base">
          {t('reassurance')}
        </p>
        
        {/* Primary CTA - Phone call prominent */}
        <div className="mt-12">
          <a
            href="tel:+4912345678900"
            className="inline-flex items-center gap-4 px-10 py-5 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-lg group"
          >
            <span className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <span className="flex flex-col items-start">
              <span className="text-teal-100 text-sm">{t('callNow')}</span>
              <span className="font-semibold">+49 123 456 789 00</span>
            </span>
          </a>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-50 to-transparent"></div>
    </section>
  );
}
