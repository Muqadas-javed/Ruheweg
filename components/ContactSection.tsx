'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      {/* Top banner image */}
      <div className="relative h-48 mb-16">
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop"
          alt="Soft sunlight through trees"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
            {t('title')}
          </h2>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-stone-600 max-w-xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="mt-6 w-16 h-px bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-100">
              <h3 className="font-serif text-lg text-stone-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('phone')}
              </h3>
              <a href="tel:+4912345678900" className="text-stone-600 hover:text-amber-600 transition-colors text-lg">
                +41 79 906 36 86
              </a>
              <p className="text-amber-700 text-sm mt-2 font-medium">
                {t('emergencyLine')}
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-100">
              <h3 className="font-serif text-lg text-stone-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('email')}
              </h3>
              <a href="mailto:info@wuerdevoller-abschied.de" className="text-stone-600 hover:text-amber-600 transition-colors">
                info@wuerdevoller-abschied.de
              </a>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm border border-stone-100">
              <h3 className="font-serif text-lg text-stone-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('address')}
              </h3>
              <p className="text-stone-600 whitespace-pre-line">
                {t('addressValue')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-6 rounded-sm transition-colors duration-300"
              >
                {t('form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
