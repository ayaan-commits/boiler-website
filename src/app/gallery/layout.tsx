import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Project Gallery | Our Boiler & Heating Work",
  description: "Browse our portfolio of boiler installations, repairs, and heating projects in Milton Keynes. See examples of our professional workmanship.",
  keywords: ["boiler installation gallery", "heating project photos", "boiler work examples Milton Keynes"],
  alternates: { canonical: "https://www.plumblinemk.co.uk/gallery" },
  openGraph: {
    title: "Project Gallery | Plumbline MK",
    description: "Browse our portfolio of boiler installations and heating projects.",
    url: "https://www.plumblinemk.co.uk/gallery",
    images: [{ url: "/images/og/gallery.jpg", width: 1200, height: 630, alt: "Plumbline MK Project Gallery" }],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.plumblinemk.co.uk" },
          { "@type": "ListItem", position: 2, name: "Gallery" },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Boiler & Heating Installation",
        description: "Professional boiler installations, repairs and heating projects by Gas Safe registered engineers in Milton Keynes. Browse our portfolio of completed work.",
        provider: {
          "@type": "LocalBusiness",
          name: "Plumbline MK",
          telephone: "07805 844 016",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Milton Keynes",
            addressRegion: "Buckinghamshire",
            postalCode: "MK8 0PA",
            addressCountry: "GB",
          },
        },
        areaServed: { "@type": "City", name: "Milton Keynes" },
        url: "https://www.plumblinemk.co.uk/gallery",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Can I see examples of your boiler installations?", acceptedAnswer: { "@type": "Answer", text: "Yes, our gallery showcases completed boiler installations, repairs and heating projects across Milton Keynes. Browse our portfolio to see the quality of our workmanship." } },
          { "@type": "Question", name: "What types of boilers do you install?", acceptedAnswer: { "@type": "Answer", text: "We install Worcester Bosch, Vaillant, Ideal and other leading brands. As accredited installers, we can offer extended warranties of up to 12 years on selected models." } },
        ],
      }} />
      {children}
    </>
  );
}
