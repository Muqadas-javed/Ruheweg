import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const servicesPage = messages.servicesPage as { title: string; subtitle: string };

  return {
    title: `${servicesPage.title} | RuheWeg`,
    description: servicesPage.subtitle,
  };
}

const services = [
  {
    key: 'nonConfessional',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032&auto=format&fit=crop',
  },
  {
    key: 'ceremony',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1974&auto=format&fit=crop',
  },
  {
    key: 'venueOrganization',
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2071&auto=format&fit=crop',
  },
  {
    key: 'personalRitual',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=2070&auto=format&fit=crop',
  },
  {
    key: 'urnService',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1974&auto=format&fit=crop',
  },
];

function ServiceCard({ 
  service, 
  index, 
  t 
}: { 
  service: typeof services[0]; 
  index: number;
  t: (key: string) => string;
}) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
          <Image
            src={service.image}
            alt={t(`services.${service.key}.title`)}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
          <div className="absolute top-6 left-6">
            <span className="text-5xl font-serif text-white/90 font-light">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-stone-800">
          {t(`services.${service.key}.title`)}
        </h3>
        <p className="text-stone-600 leading-relaxed">
          {t(`services.${service.key}.description`)}
        </p>
      </div>
    </div>
  );
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicesPageContent />;
}

function ServicesPageContent() {
  const t = useTranslations('servicesPage');

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sky-600 text-sm font-medium tracking-widest uppercase">
            {t('subtitle')}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-stone-800 mt-4 max-w-4xl mx-auto leading-tight">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {services.map((service, index) => (
              <ServiceCard key={service.key} service={service} index={index} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-light mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-sky-100 max-w-2xl mx-auto mb-8">
            {t('cta.description')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-sky-600 font-medium rounded-full hover:bg-sky-50 transition-colors shadow-lg"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </>
  );
}
