import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "How to Choose a Plumber in Milton Keynes | What to Look For",
  description:
    "Not sure how to find a reliable plumber? Here's exactly what to check before hiring a plumber or heating engineer in Milton Keynes.",
  keywords: [
    "how to choose a plumber",
    "find a reliable plumber Milton Keynes",
    "Gas Safe registered plumber",
    "plumber checklist Milton Keynes",
    "heating engineer Milton Keynes",
  ],
  alternates: {
    canonical:
      "https://www.plumblinemk.co.uk/guides/how-to-choose-a-plumber",
  },
  openGraph: {
    title: "How to Choose a Plumber in Milton Keynes | What to Look For",
    description:
      "Not sure how to find a reliable plumber? Here's exactly what to check before hiring a plumber or heating engineer in Milton Keynes.",
    url: "https://www.plumblinemk.co.uk/guides/how-to-choose-a-plumber",
    images: [
      {
        url: "/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose a Plumber Guide - Plumbline MK",
      },
    ],
  },
};

export default function HowToChooseAPlumberPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Choose a Plumber or Heating Engineer in Milton Keynes",
    description:
      "Checklist of what to look for when hiring a plumber: Gas Safe registration, reviews, insurance, guarantees, and red flags to avoid.",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    datePublished: "2026-02-20",
    dateModified: "2026-02-20",
    url: "https://www.plumblinemk.co.uk/guides/how-to-choose-a-plumber",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Choose a Reliable Plumber",
    step: [
      {
        "@type": "HowToStep",
        name: "Check Gas Safe registration",
        text: "If any work involves gas, your engineer must be Gas Safe registered. Verify on gassaferegister.co.uk. Ask to see their Gas Safe ID card.",
      },
      {
        "@type": "HowToStep",
        name: "Look for manufacturer accreditations",
        text: "For boiler work, look for Worcester Bosch or Vaillant accredited installers. These offer extended warranties up to 12 years.",
      },
      {
        "@type": "HowToStep",
        name: "Check recent reviews",
        text: "Read reviews from the last 3-6 months on Google, Facebook, Checkatrade, and Trustpilot. Look for mentions of punctuality, communication, and quality.",
      },
      {
        "@type": "HowToStep",
        name: "Get a fixed-price quote",
        text: "Always get a written, fixed-price quote before work starts. Avoid hourly rates without a clear scope of work.",
      },
      {
        "@type": "HowToStep",
        name: "Verify insurance and guarantees",
        text: "Confirm they carry public liability insurance and offer at least 12-month workmanship guarantee on labour.",
      },
    ],
  };

  const redFlags = [
    "Asks for large cash payment upfront",
    "Can&apos;t show Gas Safe registration",
    "No fixed-price quote",
    "Pressure to make a quick decision",
    "No reviews or very few reviews",
    "No physical address or company details",
  ];

  const whyChooseUs = [
    "Gas Safe registered engineers (verify us at gassaferegister.co.uk)",
    "Worcester Bosch &amp; Vaillant accredited installers",
    "Fixed-price quotes - no hidden fees",
    "12-month workmanship guarantee",
    "100+ 5-star reviews on Google and Facebook",
    "Local to Milton Keynes - fast response times",
    "24/7 emergency cover",
  ];

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.plumblinemk.co.uk",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Guides",
              item: "https://www.plumblinemk.co.uk/guides",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "How to Choose a Plumber",
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/guides"
                className="hover:text-white transition-colors"
              >
                Guides
              </Link>
              <span>/</span>
              <span className="text-white">How to Choose a Plumber</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              What to Look For When Choosing a Plumber or Heating Engineer
            </h1>
            <p className="text-white/80 text-lg max-w-3xl">
              Finding a reliable plumber can feel like a minefield. Here&apos;s
              a straightforward checklist of what to look for - and what to
              avoid.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose-custom">

          {/* 1. Gas Safe Registration */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              1. Check Gas Safe Registration (Non-Negotiable)
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If any work involves gas - boiler installation, repair, servicing,
              or gas pipes - your engineer must be Gas Safe registered by law.
              This is not optional.
            </p>
            <div className="bg-light-grey rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-primary mb-1">
                How to check:
              </p>
              <p className="text-text-secondary text-sm">
                Ask for their Gas Safe ID card, or verify on the official Gas
                Safe Register at{" "}
                <a
                  href="https://www.gassaferegister.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-accent transition-colors"
                >
                  gassaferegister.co.uk
                </a>
                .
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8 flex items-start gap-3">
              <AlertTriangle
                className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold text-red-700 mb-1">
                  Warning signs:
                </p>
                <p className="text-red-700 text-sm">
                  Any engineer who says Gas Safe registration &ldquo;isn&apos;t
                  necessary&rdquo; or can&apos;t show you their card. Walk away.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Manufacturer Accreditations */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              2. Look for Manufacturer Accreditations
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              For boiler work specifically, look for manufacturer-accredited
              installers. Worcester Bosch Accredited Installers and Vaillant
              Advanced Installers have completed specialist training and can
              offer extended warranties - up to 12 years vs the standard 2
              years.
            </p>
          </ScrollReveal>

          {/* 3. Check Reviews */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              3. Check Reviews - But Be Specific
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Don&apos;t just look at star ratings. Read recent reviews (last
              3-6 months) and look for:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Mentions of punctuality and communication",
                "Whether they cleaned up after themselves",
                "How they handled problems or complications",
                "Specific mention of the type of work you need",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="text-success mt-1">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-light-grey rounded-xl p-5 mb-8">
              <p className="text-sm font-semibold text-primary mb-1">Check:</p>
              <p className="text-text-secondary text-sm">
                Google Reviews, Facebook, Checkatrade, and Trustpilot.
              </p>
            </div>
          </ScrollReveal>

          {/* 4. Fixed-Price Quote */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              4. Get a Fixed-Price Quote
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Always get a written, fixed-price quote before work starts. Avoid
              any tradesperson who will only quote by the hour without a clear
              scope of work.
            </p>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
              <p className="text-sm font-semibold text-primary mb-1">
                What to ask:
              </p>
              <p className="text-text-secondary text-sm">
                &ldquo;Is this a fixed price or an estimate?&rdquo; and
                &ldquo;Are there any circumstances where the price could
                change?&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* 5. Insurance */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              5. Check They&apos;re Insured
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Any reputable plumber or heating engineer should carry public
              liability insurance.
            </p>
            <div className="bg-light-grey rounded-xl p-5 mb-8">
              <p className="text-sm font-semibold text-primary mb-1">
                What to ask:
              </p>
              <p className="text-text-secondary text-sm">
                &ldquo;Do you carry public liability insurance?&rdquo; A
                professional will have no problem confirming this.
              </p>
            </div>
          </ScrollReveal>

          {/* 6. Guarantees */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              6. Ask About Guarantees
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Good tradespeople stand behind their work. Look for:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Workmanship guarantee (minimum 12 months on labour)",
                "Manufacturer warranty on parts and boilers",
                "Clear process for what happens if something goes wrong after the job",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="text-success mt-1">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* 7. Local Knowledge */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              7. Local Knowledge Matters
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              A local plumber who knows the Milton Keynes area will understand
              local water hardness (MK has hard water, which affects boiler
              maintenance), typical property types, and can respond quickly in
              an emergency.
            </p>
          </ScrollReveal>

          {/* Red Flags */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              Red Flags to Watch Out For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {redFlags.map((flag) => (
                <div
                  key={flag}
                  className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4"
                >
                  <AlertTriangle
                    className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <p
                    className="text-red-700 text-sm font-medium"
                    dangerouslySetInnerHTML={{ __html: flag }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Why Choose Plumbline MK */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              Why Homeowners Choose Plumbline MK
            </h2>
            <ul className="space-y-3 mb-8">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 text-success mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span
                    className="text-text-secondary"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Internal Link */}
          <ScrollReveal>
            <p className="text-text-secondary leading-relaxed">
              Not sure if you need a service or repair? Read our guide on the{" "}
              <Link
                href="/guides/boiler-service-vs-repair"
                className="text-primary underline hover:text-accent transition-colors font-medium"
              >
                difference between a boiler service and repair
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-teal">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Book a Reliable Plumber in Milton Keynes?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Call {siteConfig.name} for a free, no-obligation quote. Gas Safe
                registered, 5-star rated, and trusted by 100+ Milton Keynes
                homeowners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg w-full sm:w-auto"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
