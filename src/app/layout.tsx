import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A3A5C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.boilerpro.co.uk"),
  title: {
    default: "BoilerPro | Expert Boiler Installation & Repair Services",
    template: "%s | BoilerPro",
  },
  description:
    "Professional boiler installation, repair & servicing by Gas Safe registered engineers. 24/7 emergency callouts. Free quotes. Serving Manchester & surrounding areas.",
  keywords: [
    "boiler installation",
    "boiler repair",
    "boiler servicing",
    "gas safety certificate",
    "emergency plumber",
    "underfloor heating",
    "Gas Safe registered",
  ],
  alternates: {
    canonical: "https://www.boilerpro.co.uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.boilerpro.co.uk",
    siteName: "BoilerPro",
    title: "BoilerPro | Expert Boiler Installation & Repair Services",
    description:
      "Professional boiler installation, repair & servicing by Gas Safe registered engineers. 24/7 emergency callouts. Free quotes. Serving Manchester & surrounding areas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BoilerPro - Your Trusted Local Boiler & Heating Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoilerPro | Expert Boiler Installation & Repair Services",
    description:
      "Professional boiler installation, repair & servicing by Gas Safe registered engineers. 24/7 emergency callouts. Free quotes. Serving Manchester & surrounding areas.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
