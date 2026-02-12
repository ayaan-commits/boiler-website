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
      {children}
    </>
  );
}
