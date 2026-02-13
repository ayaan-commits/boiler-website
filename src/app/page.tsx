import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustLogos } from "@/components/sections/TrustLogos";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/siteConfig";

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials),
  { ssr: true }
);

const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection").then((mod) => mod.FAQSection),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Expert Plumbing & Heating Services Milton Keynes | Plumbline MK",
  description: "Professional boiler installation, repair & servicing by Gas Safe registered engineers in Milton Keynes. 24/7 emergency callouts. Transparent pricing. 100+ 5-star reviews.",
  keywords: ["boiler installation Milton Keynes", "boiler repair Milton Keynes", "Gas Safe engineer", "emergency boiler repair", "Worcester Bosch installer", "boiler servicing", "plumber Milton Keynes"],
  alternates: {
    canonical: "https://www.plumblinemk.co.uk",
  },
  openGraph: {
    title: "Expert Plumbing & Heating Services Milton Keynes | Plumbline MK",
    description: "Professional boiler installation, repair & servicing by Gas Safe registered engineers. 24/7 emergency callouts. Transparent pricing.",
    url: "https://www.plumblinemk.co.uk",
    images: [{ url: "/images/og/homepage.jpg", width: 1200, height: 630, alt: "Plumbline MK - Expert Plumbing & Heating Services Milton Keynes" }],
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PlumbingService", "HeatingContractor"],
    "@id": "https://www.plumblinemk.co.uk/#organization",
    name: siteConfig.name,
    description: siteConfig.tagline,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: "https://www.plumblinemk.co.uk",
    logo: "https://www.plumblinemk.co.uk/logo.png",
    image: "https://www.plumblinemk.co.uk/og-image.jpg",
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.county,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.0406",
      longitude: "-0.7594",
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address.full)}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Milton Keynes" },
      { "@type": "City", name: "Bedford" },
      { "@type": "City", name: "Newport Pagnell" },
      { "@type": "City", name: "Buckingham" },
      { "@type": "City", name: "Aylesbury" },
      { "@type": "City", name: "Northampton" },
    ],
    knowsAbout: [
      "Boiler Installation",
      "Boiler Repair",
      "Boiler Servicing",
      "Gas Safety Certificates",
      "Emergency Plumbing",
      "Underfloor Heating",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "100",
      bestRating: "5",
      worstRating: "1",
    },
    founder: {
      "@type": "Person",
      name: "Robert",
      jobTitle: "Founder & Gas Safe Engineer",
    },
    numberOfEmployees: { "@type": "QuantitativeValue", value: "2" },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.whatsapp,
    ],
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
      <TrustLogos />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <StatsCounter />
      <Testimonials />
      <CTABanner />
      <FAQSection />
    </>
  );
}
