import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Common Boiler & Heating Questions Answered",
  description: "Find answers to common boiler and heating questions. Expert advice on installation, repair, servicing, costs, and Gas Safe requirements from BoilerPro.",
  keywords: ["boiler FAQs", "boiler installation questions", "heating FAQ", "Gas Safe FAQ", "boiler cost", "boiler repair questions"],
  alternates: { canonical: "https://www.boilerpro.co.uk/faqs" },
  openGraph: {
    title: "Frequently Asked Questions | BoilerPro",
    description: "Find answers to common boiler and heating questions.",
    url: "https://www.boilerpro.co.uk/faqs",
    images: [{ url: "/images/og/faqs.jpg", width: 1200, height: 630, alt: "BoilerPro FAQs" }],
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
