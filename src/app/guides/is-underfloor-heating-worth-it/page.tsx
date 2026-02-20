import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Is Underfloor Heating Worth It in the UK? Honest Guide | Plumbline MK",
  description:
    "Thinking about underfloor heating? Plumbline MK breaks down the costs, benefits, and whether it's worth the investment for UK homeowners in 2026.",
  keywords: [
    "underfloor heating worth it",
    "underfloor heating cost UK",
    "wet underfloor heating Milton Keynes",
    "electric underfloor heating",
    "underfloor heating installation",
    "UFH vs radiators",
  ],
  alternates: {
    canonical: "https://www.plumblinemk.co.uk/guides/is-underfloor-heating-worth-it",
  },
  openGraph: {
    title: "Is Underfloor Heating Worth It in the UK? Honest Guide | Plumbline MK",
    description:
      "Thinking about underfloor heating? Plumbline MK breaks down the costs, benefits, and whether it's worth the investment for UK homeowners in 2026.",
    url: "https://www.plumblinemk.co.uk/guides/is-underfloor-heating-worth-it",
    images: [
      {
        url: "/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "Is Underfloor Heating Worth It Guide",
      },
    ],
  },
};

export default function IsUnderfloorHeatingWorthItPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is Underfloor Heating Worth the Investment?",
    description:
      "Honest breakdown of underfloor heating costs, benefits, and whether it's worth installing in UK homes.",
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
      "Underfloor heating can be worth the investment depending on your situation. For new builds it's almost always worth it. For retrofits, it depends on your budget and how long you plan to stay.",
    url: "https://www.plumblinemk.co.uk/guides/is-underfloor-heating-worth-it",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Decide If Underfloor Heating Is Right for You",
    step: [
      {
        "@type": "HowToStep",
        name: "Consider your property type",
        text: "Underfloor heating works best in new builds or major renovations. Retrofitting existing homes can be disruptive and expensive.",
      },
      {
        "@type": "HowToStep",
        name: "Check your floor type",
        text: "Tile, stone, and polished concrete conduct heat best. Carpet is less efficient. Hardwood needs careful temperature control.",
      },
      {
        "@type": "HowToStep",
        name: "Calculate long-term savings",
        text: "Wet systems are more expensive upfront but cheaper to run long-term, especially with a heat pump. Electric systems are cheaper to install but more expensive to run.",
      },
      {
        "@type": "HowToStep",
        name: "Get a professional survey",
        text: "Contact a qualified installer like Plumbline MK for a free site survey to assess feasibility and get an accurate quote.",
      },
    ],
  };

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
              name: "Underfloor Heating Guide",
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
              <Link href="/guides" className="hover:text-white transition-colors">
                Guides
              </Link>
              <span>/</span>
              <span className="text-white">Underfloor Heating Guide</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Is Underfloor Heating Worth the Investment?
            </h1>
            <p className="text-white/80 text-lg max-w-3xl">
              Underfloor heating is increasingly popular in UK homes, but is it
              actually worth the cost? As installers of both wet and electric
              underfloor heating systems in Milton Keynes, here&apos;s our
              honest assessment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose-custom">

          {/* Types of Underfloor Heating */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Types of Underfloor Heating
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              There are two main types of underfloor heating available for UK
              homes. Understanding the difference is the first step to deciding
              which is right for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-light-grey rounded-xl p-5">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Wet (Hydronic)
                </h3>
                <ul className="space-y-2">
                  {[
                    "Water pipes under floor connected to boiler",
                    "More expensive to install (\u00A350-\u00A3100 per m\u00B2)",
                    "Much cheaper to run long-term",
                    "Best for new builds or major renovations",
                    "Works brilliantly with heat pumps",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-text-secondary text-sm"
                    >
                      <span className="text-success mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  Electric
                </h3>
                <ul className="space-y-2">
                  {[
                    "Electric heating mats/cables under floor",
                    "Cheaper to install (\u00A320-\u00A350 per m\u00B2)",
                    "More expensive to run day-to-day",
                    "Ideal for single rooms (bathrooms, kitchens)",
                    "Easier to retrofit",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-text-secondary text-sm"
                    >
                      <span className="text-success mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Installation Costs */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              How Much Does Underfloor Heating Cost to Install?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Installation costs vary widely depending on the system type, room
              size, and whether you&apos;re building from scratch or retrofitting
              into an existing property.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left font-semibold rounded-tl-lg">
                      System Type
                    </th>
                    <th className="p-3 text-left font-semibold rounded-tr-lg">
                      Typical Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Wet system (whole house, new build)",
                      "\u00A35,000\u2013\u00A315,000+",
                    ],
                    [
                      "Wet system (single room retrofit)",
                      "\u00A31,500\u2013\u00A34,000",
                    ],
                    ["Electric system (bathroom)", "\u00A3300\u2013\u00A3800"],
                    [
                      "Electric system (kitchen)",
                      "\u00A3500\u2013\u00A31,500",
                    ],
                  ].map(([type, cost], i) => (
                    <tr
                      key={type}
                      className={i % 2 === 0 ? "bg-light-grey" : "bg-white"}
                    >
                      <td className="p-3 text-text-secondary">{type}</td>
                      <td className="p-3 font-semibold text-primary">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Running Costs */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Is It Cheaper to Run Than Radiators?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-light-grey rounded-xl p-5">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  Wet UFH
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Yes - runs at lower temperatures (35-45&deg;C vs 70-80&deg;C
                  for radiators), so uses less energy. Particularly efficient
                  with a modern condensing boiler or heat pump.
                </p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <h3 className="font-heading text-lg font-bold text-primary mb-2">
                  Electric UFH
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Usually more expensive to run than a gas central heating
                  system, but often used in rooms where you want targeted warmth
                  - particularly bathrooms, where the comfort factor outweighs
                  the running cost.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Pros */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Pros of Underfloor Heating
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Even heat distribution - no cold spots",
                "Frees up wall space (no radiators)",
                "Works well with all floor types (tile, stone, wood, carpet)",
                "More energy efficient when paired with a heat pump",
                "Low maintenance once installed",
                "Increases property value",
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

          {/* Cons */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Cons of Underfloor Heating
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Higher upfront installation cost",
                "Slower to heat up than radiators (30-60 mins vs 10-15 mins)",
                "Retrofitting can be disruptive and expensive",
                "Not ideal if you need instant heat",
                "Floor build-up height can be an issue in some properties",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="text-alert mt-1">&#10007;</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Verdict */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Is Underfloor Heating Worth It? Our Verdict
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              The honest answer is: it depends on your circumstances. Here are
              three common scenarios with our clear verdict.
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-light-grey rounded-xl p-5">
                <h3 className="font-heading text-base font-bold text-primary mb-1">
                  New builds or major renovations
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold text-success">
                    Yes, almost always worth it.
                  </span>{" "}
                  When the floor is already up and the system can be planned
                  into the build from the start, the cost-benefit is
                  compelling - particularly when combined with a heat pump or
                  efficient condensing boiler.
                </p>
              </div>
              <div className="bg-light-grey rounded-xl p-5">
                <h3 className="font-heading text-base font-bold text-primary mb-1">
                  Single room retrofits (bathroom or kitchen)
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold text-success">
                    Often yes, especially electric systems.
                  </span>{" "}
                  The installation cost is manageable, the comfort improvement
                  is immediate, and disruption is limited to one room. A tiled
                  bathroom with electric UFH is a very popular and practical
                  upgrade.
                </p>
              </div>
              <div className="bg-light-grey rounded-xl p-5">
                <h3 className="font-heading text-base font-bold text-primary mb-1">
                  Whole-house retrofit in an existing home
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-semibold text-warning">
                    Depends on budget and how long you plan to stay.
                  </span>{" "}
                  Lifting floors throughout an occupied home is disruptive and
                  expensive. If you&apos;re planning a full renovation and
                  intend to stay long-term, it can pay off. If you&apos;re
                  looking for a quick improvement, consider doing it room by
                  room.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Floor Compatibility */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              What Floors Work With Underfloor Heating?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Not all floor finishes are equal when it comes to underfloor
              heating. Thermal conductivity is key - the better the floor
              conducts heat, the more efficient your system will be.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left font-semibold rounded-tl-lg">
                      Floor Type
                    </th>
                    <th className="p-3 text-left font-semibold rounded-tr-lg">
                      Compatibility
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Tile, stone, and polished concrete",
                      "Best - conducts heat brilliantly",
                    ],
                    [
                      "Engineered wood and luxury vinyl tile (LVT)",
                      "Good",
                    ],
                    [
                      "Carpet",
                      "Works but less efficient - use low tog rating (max 1.5 tog)",
                    ],
                    [
                      "Solid hardwood",
                      "Check first - can warp, needs careful temperature control",
                    ],
                  ].map(([floor, rating], i) => (
                    <tr
                      key={floor}
                      className={i % 2 === 0 ? "bg-light-grey" : "bg-white"}
                    >
                      <td className="p-3 font-semibold text-primary">{floor}</td>
                      <td className="p-3 text-text-secondary">{rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-teal">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Interested in Underfloor Heating in Milton Keynes?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Plumbline MK install both wet and electric underfloor heating
                systems across Milton Keynes and surrounding areas. Get a free
                site survey and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg w-full sm:w-auto"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/services/underfloor-heating"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all w-full sm:w-auto"
                >
                  Learn More
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
