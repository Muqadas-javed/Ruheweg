'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-sm text-stone-100 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with candle/dove icon */}
          <Link href="/" className="flex items-center space-x-3">
            {/* Symbolic icon - candle representing eternal light */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C11.5 2 11 2.19 10.59 2.59C9.81 3.37 9.81 4.64 10.59 5.42C11.37 6.2 12.64 6.2 13.42 5.42C14.2 4.64 14.2 3.37 13.42 2.59C13 2.19 12.5 2 12 2ZM11 8V10H13V8H11ZM9 11V21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V11H9Z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold tracking-wide text-stone-100">
                RuheWeg
              </span>
              <span className="text-xs text-stone-400 tracking-widest uppercase">
                Path of Peace
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              {t('services')}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              {t('about')}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              {t('contact')}
            </Link>
            <LanguageSwitcher />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-stone-700 pt-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('services')}
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
