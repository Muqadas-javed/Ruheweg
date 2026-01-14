'use client';

import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 bg-stone-800 text-white p-3 rounded-full shadow-lg hover:bg-stone-700 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-5 h-5" />
    </button>
  );
}
