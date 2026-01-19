import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as { title: string; description: string; keywords: string };

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'RuheWeg' }],
    robots: 'index, follow',
    alternates: {
      canonical: `https://ruheweg.de/${locale}`,
      languages: {
        'de': 'https://ruheweg.de/de',
        'en': 'https://ruheweg.de/en',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      siteName: 'RuheWeg',
      url: `https://ruheweg.de/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FuneralHome",
              "name": "RuheWeg",
              "description": "Professional and compassionate funeral services in Switzerland",
              "url": "https://ruheweg.de",
              "telephone": "+49-123-456-789-00",
              "email": "hanspeter.berger123@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Musterstadt",
                "postalCode": "12345",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.520008",
                "longitude": "13.404954"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$$",
              "sameAs": [],
              "serviceArea": {
                "@type": "Country",
                "name": "Switzerland"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Funeral Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Burial Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cremation Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Funeral Planning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Memorial Services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-stone-50 text-stone-800`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
