import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Boiler Service vs Repair: What's the Difference? | Plumbline MK",
  description:
    "Not sure whether you need a boiler service or repair? Plumbline MK explains the difference, what each includes, and how to know which one you need.",
  keywords: [
    "boiler service vs repair",
    "boiler service Milton Keynes",
    "boiler repair Milton Keynes",
    "annual boiler service",
    "boiler breakdown",
  ],
  alternates: {
    canonical: "https://www.plumblinemk.co.uk/guides/boiler-service-vs-repair",
  },
  openGraph: {
    title: "Boiler Service vs Repair: What's the Difference? | Plumbline MK",
    description:
      "Not sure whether you need a boiler service or repair? We explain the difference and how to know which one you need.",
    url: "https://www.plumblinemk.co.uk/guides/boiler-service-vs-repair",
    images: [
      {
        url: "/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "Boiler Service vs Repair Guide",
      },
    ],
  },
};

export default function BoilerServiceVsRepairPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "What's the Difference Between a Boiler Service and a Boiler Repair?",
    description:
      "Learn the key differences between boiler servicing and boiler repairs, what each includes, and how to know which one you need.",
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
    articleBody:
      "A boiler service is a planned, preventative check carried out by a Gas Safe registered engineer. A boiler repair is reactive work carried out when something has gone wrong.",
    mainEntity: {
      "@type": "Question",
      name: "What's the difference between a boiler service and a boiler repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A boiler service is preventative maintenance done annually when your boiler is working fine. A boiler repair is reactive work done when something has broken or stopped working.",
      },
    },
    url: "https://www.plumblinemk.co.uk/guides/boiler-service-vs-repair",
  };

  return (
    <>
      <JsonLd data={articleSchema} />
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
              name: "Boiler Service vs Repair",
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
              <span className="text-white">Guides</span>
              <span>/</span>
              <span className="text-white">Boiler Service vs Repair</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              What&apos;s the Difference Between a Boiler Service and a Boiler
              Repair?
            </h1>
            <p className="text-white/80 text-lg max-w-3xl">
              Many homeowners confuse boiler servicing with boiler repairs -
              they&apos;re quite different. Understanding the difference can save
              you money and keep your boiler running safely.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose-custom">
          {/* What Is a Boiler Service? */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              What Is a Boiler Service?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              A boiler service is a planned, preventative check carried out by a
              Gas Safe registered engineer. Think of it like an MOT for your
              boiler. It&apos;s done when your boiler is working fine, to keep it
              that way.
            </p>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              What a boiler service includes:
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "Visual inspection of the boiler, flue, and pipework",
                "Checking gas pressure and flow rate",
                "Cleaning the burner and heat exchanger",
                "Testing all safety devices and controls",
                "Checking for carbon monoxide leaks",
                "Inspecting seals, gaskets, and electrical connections",
                "Full performance test",
                "Written service report",
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
            <div className="grid grid-cols-3 gap-4 bg-light-grey rounded-xl p-5 mb-8">
              <div>
                <p className="text-xs text-text-muted font-medium mb-1">
                  How often
                </p>
                <p className="text-sm font-semibold text-primary">
                  Once a year, ideally before winter
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted font-medium mb-1">
                  Cost
                </p>
                <p className="text-sm font-semibold text-primary">
                  &pound;60-&pound;100
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted font-medium mb-1">
                  Time taken
                </p>
                <p className="text-sm font-semibold text-primary">
                  45-60 minutes
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* What Is a Boiler Repair? */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              What Is a Boiler Repair?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              A boiler repair is reactive work carried out when something has
              gone wrong. Your boiler may have stopped working, is making unusual
              noises, losing pressure, or showing an error code.
            </p>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Common boiler repairs include:
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                "Replacing a faulty diverter valve",
                "Fixing a broken pump or fan",
                "Replacing a printed circuit board (PCB)",
                "Repairing a heat exchanger leak",
                "Fixing ignition or pilot light faults",
                "Resolving pressure or thermostat issues",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="text-accent mt-1">&#9679;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4 bg-light-grey rounded-xl p-5 mb-8">
              <div>
                <p className="text-xs text-text-muted font-medium mb-1">
                  Cost
                </p>
                <p className="text-sm font-semibold text-primary">
                  &pound;80-&pound;350 depending on fault and parts
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted font-medium mb-1">
                  Time taken
                </p>
                <p className="text-sm font-semibold text-primary">
                  1-3 hours depending on complexity
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Comparison Table */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Key Differences at a Glance
            </h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left rounded-tl-lg" />
                    <th className="p-3 text-left font-semibold">
                      Boiler Service
                    </th>
                    <th className="p-3 text-left font-semibold rounded-tr-lg">
                      Boiler Repair
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["When", "Planned, annually", "When something breaks"],
                    ["Purpose", "Prevention", "Fix a problem"],
                    ["Boiler working?", "Yes", "No or poorly"],
                    [
                      "Typical cost",
                      "\u00A360-\u00A3100",
                      "\u00A380-\u00A3350",
                    ],
                    ["Time", "45-60 mins", "1-3 hours"],
                  ].map(([label, service, repair], i) => (
                    <tr
                      key={label}
                      className={i % 2 === 0 ? "bg-light-grey" : "bg-white"}
                    >
                      <td className="p-3 font-semibold text-primary">
                        {label}
                      </td>
                      <td className="p-3 text-text-secondary">{service}</td>
                      <td className="p-3 text-text-secondary">{repair}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Do I Need a Service or Repair? */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Do I Need a Service or a Repair?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Simple rule: If your boiler is working but hasn&apos;t been checked
              in over a year, book a service. If your boiler has stopped working,
              is making strange noises, losing pressure, or showing error codes,
              you need a repair.
            </p>
          </ScrollReveal>

          {/* Can a Service Prevent Repairs? */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Can a Service Prevent Repairs?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Yes - and this is the main reason annual servicing is worth it. Our
              engineers regularly catch worn parts, minor leaks, and pressure
              issues during services before they cause a breakdown. An
              &pound;80 service can prevent a &pound;300 repair.
            </p>
          </ScrollReveal>

          {/* What If My Boiler Needs Both? */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              What If My Boiler Needs Both?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Sometimes during a service, our engineers find a fault that needs
              fixing. In that case, we&apos;ll explain what we&apos;ve found,
              give you a fixed quote for the repair, and only proceed with your
              approval. No surprise charges.
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
                Need a Boiler Service or Repair in Milton Keynes?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Plumbline MK are Gas Safe registered engineers covering Milton
                Keynes and surrounding areas. Same-day repairs available. Annual
                services from &pound;80.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/services/boiler-servicing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg w-full sm:w-auto"
                >
                  Book a Service
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/boiler-repair"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all w-full sm:w-auto"
                >
                  Book a Repair
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
