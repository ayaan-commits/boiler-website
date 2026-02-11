import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Expert Boiler Installation & Repair Manchester | BoilerPro",
  description: "Professional boiler installation, repair & servicing by Gas Safe registered engineers in Manchester. 24/7 emergency callouts. Free quotes. 500+ 5-star reviews.",
  keywords: ["boiler installation Manchester", "boiler repair Manchester", "Gas Safe engineer", "emergency boiler repair", "Worcester Bosch installer", "boiler servicing"],
  alternates: {
    canonical: "https://www.boilerpro.co.uk",
  },
  openGraph: {
    title: "Expert Boiler Installation & Repair Manchester | BoilerPro",
    description: "Professional boiler installation, repair & servicing by Gas Safe registered engineers. 24/7 emergency callouts. Free quotes.",
    url: "https://www.boilerpro.co.uk",
    images: [{ url: "/images/og/homepage.jpg", width: 1200, height: 630, alt: "BoilerPro - Expert Boiler Services Manchester" }],
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PlumbingService"],
    name: siteConfig.name,
    description: siteConfig.tagline,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.4808",
      longitude: "-2.2426",
    },
    url: "https://www.boilerpro.co.uk",
    priceRange: "££",
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00",
    ],
    areaServed: {
      "@type": "City",
      name: "Manchester",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    foundingDate: "2004",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "25" },
    image: "https://www.boilerpro.co.uk/og-image.jpg",
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
    ],
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
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
