'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('languageSwitch');

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-1 bg-stone-800 rounded-full p-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
            locale === loc
              ? 'bg-amber-700 text-white shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-700'
          }`}
          aria-label={`Switch to ${loc === 'de' ? 'German' : 'English'}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
