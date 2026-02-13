import type { Metadata, Viewport } from "next";
import { DM_Sans, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B356D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.plumblinemk.co.uk"),
  title: {
    default: "Plumbline MK | Expert Plumbing & Heating Services Milton Keynes",
    template: "%s | Plumbline MK",
  },
  description:
    "Professional boiler installation, repair & servicing by Gas Safe registered engineers in Milton Keynes. 24/7 emergency callouts. Transparent pricing. 100+ 5-star reviews.",
  keywords: [
    "plumber Milton Keynes",
    "boiler installation Milton Keynes",
    "boiler repair Milton Keynes",
    "boiler servicing",
    "gas safety certificate",
    "emergency plumber MK",
    "underfloor heating",
    "Gas Safe registered",
    "Plumbline MK",
  ],
  alternates: {
    canonical: "https://www.plumblinemk.co.uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.plumblinemk.co.uk",
    siteName: "Plumbline MK",
    title: "Plumbline MK | Expert Plumbing & Heating Services Milton Keynes",
    description:
      "Professional boiler installation, repair & servicing by Gas Safe registered engineers in Milton Keynes. 24/7 emergency callouts. Transparent pricing. 100+ 5-star reviews.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plumbline MK - Your Trusted Local Plumbing & Heating Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@plumblinemk",
    creator: "@plumblinemk",
    title: "Plumbline MK | Expert Plumbing & Heating Services Milton Keynes",
    description:
      "Professional boiler installation, repair & servicing by Gas Safe registered engineers in Milton Keynes. 24/7 emergency callouts. Transparent pricing.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingCTA />
      </body>
    </html>
  );
}
