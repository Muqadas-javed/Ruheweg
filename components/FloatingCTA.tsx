'use client';

import { useState, useEffect } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

export default function FloatingCTA() {
  const t = useTranslations('floatingCta');
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      {/* Expanded info box */}
      <div
        className={`absolute bottom-20 right-0 bg-white rounded-xl shadow-2xl p-4 w-72 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <p className="text-stone-800 font-semibold mb-2">{t('title')}</p>
        <p className="text-stone-600 text-sm mb-3">{t('message')}</p>
        <a
          href="tel:+4912345678900"
          className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
        >
          <PhoneIcon className="w-4 h-4" />
          +41 79 906 36 86
        </a>
      </div>

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="group bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 hover:scale-110 flex items-center gap-3"
        aria-label={t('ariaLabel')}
      >
        <PhoneIcon className="w-6 h-6 animate-pulse" />
        <span className="hidden sm:inline text-sm font-medium pr-1">24/7</span>
      </button>

      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-25 pointer-events-none"></span>
    </div>
  );
}
