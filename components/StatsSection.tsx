'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { key: 'families', value: 500, suffix: '+' },
  { key: 'years', value: 15, suffix: '+' },
  { key: 'available', value: 24, suffix: '/7' },
  { key: 'satisfaction', value: 98, suffix: '%' },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="font-serif text-4xl sm:text-5xl font-light text-white">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const t = useTranslations('stats');
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-stone-800 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="text-stone-400 mt-2 text-sm sm:text-base">
                {t(`items.${stat.key}.label`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
