import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function ContactCTA() {
  const t = useTranslations('contactCta');

  return (
    <section className="py-24 bg-stone-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-light mb-4">
                {t('title')}
              </h2>
              <p className="text-stone-300 text-lg mb-6">
                {t('description')}
              </p>
              <div className="flex items-center gap-3 text-amber-400 font-medium">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('available')}
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+4912345678900"
                className="flex items-center gap-4 bg-stone-700/50 hover:bg-stone-700 p-4 rounded-xl transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-stone-400 text-sm">{t('phone.label')}</p>
                  <p className="text-white text-xl font-semibold">+49 123 456 789 00</p>
                </div>
              </a>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-500 p-4 rounded-xl transition-colors text-white font-medium text-lg"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                {t('button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
