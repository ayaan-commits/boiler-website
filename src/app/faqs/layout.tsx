import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQs | Common Boiler & Heating Questions Answered",
  description: "Find answers to common boiler and heating questions. Expert advice on installation, repair, servicing, costs, and Gas Safe requirements from Plumbline MK in Milton Keynes.",
  keywords: ["boiler FAQs", "boiler installation questions", "heating FAQ Milton Keynes", "Gas Safe FAQ", "boiler cost", "boiler repair questions"],
  alternates: { canonical: "https://www.plumblinemk.co.uk/faqs" },
  openGraph: {
    title: "Frequently Asked Questions | Plumbline MK",
    description: "Find answers to common boiler and heating questions.",
    url: "https://www.plumblinemk.co.uk/faqs",
    images: [{ url: "/images/og/faqs.jpg", width: 1200, height: 630, alt: "Plumbline MK FAQs" }],
  },
};

export default function FAQsLayout({
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
          { "@type": "ListItem", position: 2, name: "FAQs" },
        ],
      }} />
      {children}
    </>
  );
}
