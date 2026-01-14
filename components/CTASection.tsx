import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sky-200 text-sm font-medium tracking-widest uppercase">
            {t('subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light mt-4 mb-6">
            {t('title')}
          </h2>
          <p className="text-sky-100 text-lg mb-8 leading-relaxed">
            {t('description')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-sky-600 font-medium rounded-full hover:bg-sky-50 transition-colors shadow-lg"
          >
            {t('button')}
          </Link>
        </div>
      </div>
    </section>
  );
}
