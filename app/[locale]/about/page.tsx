import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import FeaturesSection from '@/components/FeaturesSection';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const aboutPage = messages.aboutPage as { title: string; description: string };

  return {
    title: `${aboutPage.title} | RuheWeg`,
    description: aboutPage.description,
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageContent />;
}

function AboutPageContent() {
  const t = useTranslations('aboutPage');

  const values = [
    {
      key: 'compassion',
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
    },
    {
      key: 'dignity',
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      key: 'trust',
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      key: 'professionalism',
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop"
          alt="Peaceful meadow with wildflowers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/70"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            {t('heroLabel')}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <span className="text-teal-600 text-sm font-medium tracking-widest uppercase">
                  {t('intro.subtitle')}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-6">
                  {t('intro.title')}
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  {t('intro.description1')}
                </p>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {t('intro.description2')}
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">{t('intro.available')}</p>
                    <p className="text-lg font-semibold text-stone-800">+41 79 906 36 86</p>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="order-1 lg:order-2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1970&auto=format&fit=crop"
                        alt="Peaceful memorial flowers"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop"
                        alt="Sunlight through trees"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=2070&auto=format&fit=crop"
                        alt="Peaceful candles"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop"
                        alt="Serene sunrise"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-amber-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/50 to-stone-200/50 rounded-full blur-sm"></div>
                  <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/images/RuheWeg.jpeg"
                      alt="Portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-amber-700 text-sm font-medium tracking-widest uppercase">
                  {t('journey.subtitle')}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-6">
                  {t('journey.title')}
                </h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-6">
                  {t('journey.description')}
                </p>
                <p className="text-stone-600 leading-relaxed mb-8">
                  {t('journey.description2')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                    <span className="text-amber-700 font-semibold">{t('journey.cert1')}</span>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                    <span className="text-amber-700 font-semibold">{t('journey.cert2')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 text-sm font-medium tracking-widest uppercase">
              {t('values.subtitle')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-800 mt-2 mb-4">
              {t('values.title')}
            </h2>
            <div className="w-16 h-px bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.key} className="text-center group p-6 rounded-2xl hover:bg-stone-50 transition-colors duration-300">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-stone-100 flex items-center justify-center mx-auto mb-4 group-hover:from-amber-200 group-hover:to-stone-200 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-stone-800 font-semibold text-lg mb-2">
                  {t(`values.${value.key}`)}
                </h3>
                <p className="text-stone-600 text-sm">
                  {t(`values.${value.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section className="py-4 bg-stone-100">
        <div className="flex overflow-hidden">
          <div className="flex gap-4 animate-none">
            {[
              'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=600&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop',
            ].map((src, idx) => (
              <div key={idx} className="relative w-64 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt="" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white mb-8">
              {t('mission.title')}
            </h2>
            <p className="text-2xl text-stone-300 leading-relaxed italic mb-8">
              "{t('mission.quote')}"
            </p>
            <div className="w-24 h-px bg-amber-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-teal-100 text-lg mb-8">
              {t('cta.description')}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-stone-100 text-teal-700 font-semibold px-10 py-4 rounded-full transition-colors duration-300 shadow-lg"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
