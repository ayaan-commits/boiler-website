import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | Our Boiler & Heating Work",
  description: "Browse our portfolio of boiler installations, repairs, and heating projects in Manchester. See examples of our professional workmanship.",
  keywords: ["boiler installation gallery", "heating project photos", "boiler work examples Manchester"],
  alternates: { canonical: "https://www.boilerpro.co.uk/gallery" },
  openGraph: {
    title: "Project Gallery | BoilerPro",
    description: "Browse our portfolio of boiler installations and heating projects.",
    url: "https://www.boilerpro.co.uk/gallery",
    images: [{ url: "/images/og/gallery.jpg", width: 1200, height: 630, alt: "BoilerPro Project Gallery" }],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
