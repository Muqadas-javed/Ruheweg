import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tContact = useTranslations('contact');
  const tHeader = useTranslations('header');

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-4">
              RuheWeg
            </h3>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              {t('tagline')}
            </p>
            <p className="text-sm text-stone-400 whitespace-pre-line">
              {tContact('addressValue')}
            </p>
            {/* 24/7 Badge */}
            <div className="mt-4 inline-flex items-center gap-2 bg-teal-600/20 text-teal-400 px-3 py-1.5 rounded-full text-sm">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              {t('available247')}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('servicesTitle')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-amber-500 transition-colors">
                  {t('services.burial')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-500 transition-colors">
                  {t('services.cremation')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-500 transition-colors">
                  {t('services.planning')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-500 transition-colors">
                  {t('services.memorial')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">
                  {tHeader('home')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-500 transition-colors">
                  {tHeader('services')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-500 transition-colors">
                  {tHeader('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-500 transition-colors">
                  {tHeader('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">{tContact('title')}</h4>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-stone-500">{tContact('phone')}:</span><br />
                <a href="tel:+4912345678900" className="hover:text-amber-500 transition-colors text-lg font-medium text-white">
                  +49 123 456 789 00
                </a>
              </p>
              <p>
                <span className="text-stone-500">{tContact('email')}:</span><br />
                <a href="mailto:info@ruheweg.de" className="hover:text-amber-500 transition-colors">
                  info@ruheweg.de
                </a>
              </p>
              <p className="text-amber-500 font-medium mt-4">
                {tContact('emergencyLine')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">
              {t('copyright')}
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-amber-500 transition-colors">
                {t('privacy')}
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                {t('imprint')}
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                {t('terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
