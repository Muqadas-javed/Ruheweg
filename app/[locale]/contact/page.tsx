import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const contactPage = messages.contactPage as { title: string; subtitle: string };

  return {
    title: `${contactPage.title} | RuheWeg`,
    description: contactPage.subtitle,
  };
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageContent />;
}

function ContactPageContent() {
  const t = useTranslations('contactPage');

  return (
    <>
      {/* Hero Banner with Gradient Overlay */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop"
          alt="Soft sunlight through trees"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80"></div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <span className="inline-block px-4 py-1.5 bg-amber-600/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            {t('subtitle')}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            {t('info.description')}
          </p>
        </div>
      </section>

      {/* Emergency Banner - Sticky feel */}
      <section className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 py-5 shadow-lg relative -mt-1 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <span className="text-lg font-medium">{t('emergency')}</span>
            </div>
            <a 
              href="tel:+4912345678900" 
              className="text-2xl sm:text-3xl font-bold hover:scale-105 transition-transform inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm"
            >
              +41 79 906 36 86
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-stone-50 relative">
        {/* Decorative background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-3xl text-stone-800 mb-4">
                  {t('info.title')}
                </h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full mb-6"></div>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {t('info.description')}
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone Card */}
                <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-teal-200">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-800 mb-1 text-lg">{t('info.phone')}</h3>
                    <a href="tel:+4912345678900" className="text-xl text-teal-600 font-medium hover:text-teal-700 transition-colors">
                      +41 79 906 36 86
                    </a>
                    <p className="text-sm text-stone-500 mt-1">Available 24/7</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-amber-200">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-800 mb-1 text-lg">{t('info.email')}</h3>
                    <a href="mailto:hanspeter.berger123@gmail.com" className="text-xl text-amber-600 font-medium hover:text-amber-700 transition-colors">
                      hanspeter.berger123@gmail.com
                    </a>
                    <p className="text-sm text-stone-500 mt-1">We respond within 1 hour</p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="group flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-stone-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-stone-600 to-stone-700 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stone-800 mb-1 text-lg">{t('info.address')}</h3>
                    <p className="text-stone-600 whitespace-pre-line leading-relaxed">
                      {t('info.addressValue')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick info badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  24/7 Available
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Confidential
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Free Consultation
                </span>
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-stone-100 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full"></div>
                
                <div className="relative">
                  <h2 className="font-serif text-3xl text-stone-800 mb-2">
                    {t('form.title')}
                  </h2>
                  <p className="text-stone-500 mb-8">We&apos;ll get back to you as soon as possible.</p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-stone-800 mb-4">Find Us</h2>
              <p className="text-stone-600">Visit our office or reach out online — we&apos;re here to help.</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 h-[400px] relative bg-stone-100">
              {/* Placeholder for map - in production, replace with actual map */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-stone-600 font-medium"></p>
                  <p className="text-stone-500">Jurastrasse 1, 5507 Mellingen, Switzerland</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Jurastrasse+1,+5507+Mellingen,+Switzerland" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-stone-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-stone-400">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Trusted by 500+ Families</span>
            </div>
            <div className="w-px h-6 bg-stone-600 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Certified Professionals</span>
            </div>
            <div className="w-px h-6 bg-stone-600 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
