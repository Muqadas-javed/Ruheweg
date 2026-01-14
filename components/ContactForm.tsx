'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
  const t = useTranslations('contactPage.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
          {t('name')}
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
            {t('phone')}
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
          {t('message')}
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300"
      >
        {t('submit')}
      </button>
    </form>
  );
}
