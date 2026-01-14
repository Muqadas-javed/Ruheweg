'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    key: 'testimonial1',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&facepad=2',
  },
  {
    key: 'testimonial2',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&facepad=2',
  },
  {
    key: 'testimonial3',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&facepad=2',
  },
];

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-28 bg-amber-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">
            {t('subtitle')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-4">
            {t('title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-amber-200">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.key}
                  className={`transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <p className="text-stone-600 text-lg sm:text-xl leading-relaxed italic mb-8 pt-8">
                    "{t(`items.${testimonial.key}.quote`)}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-200 relative">
                      <Image
                        src={testimonial.image}
                        alt={t(`items.${testimonial.key}.name`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800">
                        {t(`items.${testimonial.key}.name`)}
                      </p>
                      <p className="text-stone-500 text-sm">
                        {t(`items.${testimonial.key}.location`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-teal-600 w-8'
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
