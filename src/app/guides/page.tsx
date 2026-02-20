import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench, Thermometer, Search, AlertTriangle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Boiler & Heating Guides | Expert Advice | Plumbline MK",
  description:
    "Free expert guides on boiler servicing, repairs, underfloor heating, and choosing a plumber in Milton Keynes. Written by Gas Safe registered engineers.",
  keywords: [
    "boiler guides",
    "heating advice",
    "plumbing guides Milton Keynes",
    "boiler troubleshooting",
    "underfloor heating guide",
  ],
  alternates: { canonical: "https://www.plumblinemk.co.uk/guides" },
  openGraph: {
    title: "Boiler & Heating Guides | Plumbline MK",
    description:
      "Free expert guides on boiler servicing, repairs, underfloor heating, and choosing a plumber.",
    url: "https://www.plumblinemk.co.uk/guides",
    images: [
      {
        url: "/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "Plumbline MK Guides",
      },
    ],
  },
};

const guides = [
  {
    title: "Boiler Service vs Repair: What\u2019s the Difference?",
    description:
      "Not sure if you need a service or a repair? We explain what each involves, the costs, and how to know which one you need.",
    href: "/guides/boiler-service-vs-repair",
    icon: Wrench,
  },
  {
    title: "Common Boiler Problems and What They Mean",
    description:
      "Boiler cutting out, losing pressure, or making strange noises? Our troubleshooting guide explains what\u2019s wrong and when to call an engineer.",
    href: "/guides/boiler-troubleshooting",
    icon: AlertTriangle,
  },
  {
    title: "Is Underfloor Heating Worth the Investment?",
    description:
      "An honest breakdown of underfloor heating costs, types, pros and cons, and whether it\u2019s worth it for UK homeowners in 2026.",
    href: "/guides/is-underfloor-heating-worth-it",
    icon: Thermometer,
  },
  {
    title: "How to Choose a Plumber in Milton Keynes",
    description:
      "A straightforward checklist of what to look for when hiring a plumber or heating engineer, plus red flags to avoid.",
    href: "/guides/how-to-choose-a-plumber",
    icon: Search,
  },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Boiler & Heating Guides",
          description: metadata.description as string,
          url: "https://www.plumblinemk.co.uk/guides",
        }}
      />

      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Boiler &amp; Heating Guides
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                Free expert advice from our Gas Safe registered engineers.
                Everything you need to know about boilers, heating, and
                plumbing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 md:py-16 bg-light-grey">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <ScrollReveal key={guide.href} delay={index * 0.1}>
                <Link
                  href={guide.href}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg border border-warm-grey p-6 flex flex-col h-full transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <guide.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                    Read Guide
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
