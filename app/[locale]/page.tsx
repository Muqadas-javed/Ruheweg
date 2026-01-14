import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/HeroSection';
import ServiceOverview from '@/components/ServiceOverview';
import TrustSection from '@/components/TrustSection';
import AboutPreview from '@/components/AboutPreview';
import LocationSection from '@/components/LocationSection';
import ContactCTA from '@/components/ContactCTA';
import GuidanceSection from '@/components/GuidanceSection';
import FAQSection from '@/components/FAQSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import FloatingCTA from '@/components/FloatingCTA';
import ScrollToTop from '@/components/ScrollToTop';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServiceOverview />
      <ProcessSection />
      <TrustSection />
      <StatsSection />
      <GuidanceSection />
      <TestimonialsSection />
      <AboutPreview />
      <FAQSection />
      <LocationSection />
      <ContactCTA />
      <FloatingCTA />
      <ScrollToTop />
    </>
  );
}
