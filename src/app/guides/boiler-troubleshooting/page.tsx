import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Boiler Keeps Cutting Out? Common Boiler Problems Explained | Plumbline MK",
  description:
    "Is your boiler cutting out, losing pressure, or making strange noises? Plumbline MK's troubleshooting guide explains what's wrong and when to call an engineer.",
  keywords: [
    "boiler troubleshooting",
    "boiler keeps cutting out",
    "boiler losing pressure",
    "boiler error codes",
    "boiler problems Milton Keynes",
    "boiler repair Milton Keynes",
  ],
  alternates: {
    canonical: "https://www.plumblinemk.co.uk/guides/boiler-troubleshooting",
  },
  openGraph: {
    title: "Boiler Keeps Cutting Out? Common Boiler Problems Explained | Plumbline MK",
    description:
      "Is your boiler cutting out, losing pressure, or making strange noises? Plumbline MK&apos;s troubleshooting guide explains what&apos;s wrong and when to call an engineer.",
    url: "https://www.plumblinemk.co.uk/guides/boiler-troubleshooting",
    images: [
      {
        url: "/images/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "Boiler Troubleshooting Guide",
      },
    ],
  },
};

export default function BoilerTroubleshootingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Common Boiler Problems and What They Mean",
    description:
      "Troubleshooting guide for boiler cutting out, losing pressure, no hot water, strange noises, and error codes.",
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
    url: "https://www.plumblinemk.co.uk/guides/boiler-troubleshooting",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Troubleshoot Common Boiler Problems",
    description:
      "Step-by-step guide to diagnosing common boiler issues like cutting out, losing pressure, and strange noises.",
    step: [
      {
        "@type": "HowToStep",
        name: "Check if boiler is cutting out",
        text: "If your boiler keeps cutting out, first check the water pressure gauge - it should be between 1-1.5 bar. If it's low, try repressurising the system using the filling loop.",
      },
      {
        "@type": "HowToStep",
        name: "Check for pressure loss",
        text: "If your boiler is losing pressure, check for visible leaks around radiator valves and pipework. If pressure keeps dropping after repressurising, you have a leak that needs professional attention.",
      },
      {
        "@type": "HowToStep",
        name: "Diagnose strange noises",
        text: "Banging/kettling sounds indicate limescale build-up. Whistling usually means air in the system - try bleeding your radiators. Persistent noises require professional inspection.",
      },
      {
        "@type": "HowToStep",
        name: "Understand error codes",
        text: "Error codes starting with pressure (F.22, E1, F1) - try repressurising first. Ignition or sensor fault codes require a Gas Safe engineer.",
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
              name: "Boiler Troubleshooting",
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
              <span className="text-white">Boiler Troubleshooting</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Common Boiler Problems and What They Mean
            </h1>
            <p className="text-white/80 text-lg max-w-3xl">
              Before you call an engineer, it&apos;s worth checking a few things
              yourself. Here&apos;s a guide to the most common boiler problems in
              UK homes, what causes them, and when you need a professional.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose-custom">

          {/* Boiler Keeps Cutting Out */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Boiler Keeps Cutting Out
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>Symptoms:</strong> Boiler fires up then shuts off after a
              few minutes.
            </p>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Common causes:
            </h3>
            <ul className="space-y-2 mb-5">
              {[
                "Low water pressure (check gauge - should be 1-1.5 bar)",
                "Frozen condensate pipe (common in winter)",
                "Faulty thermostat or timer settings",
                "Blocked flue or air intake",
                "Faulty pump",
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
            <div className="bg-light-grey rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-primary mb-2">
                DIY fix
              </p>
              <p className="text-sm text-text-secondary">
                Check the pressure gauge and repressurise if below 1 bar. Check
                thermostat settings. In winter, check if the condensate pipe
                (usually a plastic pipe running outside) is frozen.
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-accent mb-2">
                When to call us
              </p>
              <p className="text-sm text-text-secondary">
                If pressure is fine and the boiler keeps cutting out, this is
                likely a component fault. Call a Gas Safe engineer to
                diagnose and fix the issue.
              </p>
            </div>
          </ScrollReveal>

          {/* Boiler Losing Pressure */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Boiler Losing Pressure
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>Symptoms:</strong> Pressure gauge drops below 1 bar,
              boiler shows a pressure fault.
            </p>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Common causes:
            </h3>
            <ul className="space-y-2 mb-5">
              {[
                "Small leak in the system (radiator valves, pipework, or boiler itself)",
                "Recently bled radiators",
                "Faulty pressure relief valve",
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
            <div className="bg-light-grey rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-primary mb-2">
                DIY fix
              </p>
              <p className="text-sm text-text-secondary">
                Repressurise using the filling loop (check your boiler manual
                for instructions). If the pressure drops again within a few
                days, there is a leak somewhere in the system.
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-accent mb-2">
                When to call us
              </p>
              <p className="text-sm text-text-secondary">
                If pressure keeps dropping after repressurising, you have a
                leak that needs finding and fixing. Left unattended, a leak
                will cause ongoing damage to the system.
              </p>
            </div>
          </ScrollReveal>

          {/* No Hot Water But Heating Works */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              No Hot Water But Heating Works
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong>Symptoms:</strong> Radiators heat up fine but no hot
              water from taps.
            </p>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Common causes (combi boilers):
            </h3>
            <ul className="space-y-2 mb-5">
              {[
                "Faulty diverter valve - this is the most common cause. The valve gets stuck directing heat to radiators only.",
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
            <div className="bg-light-grey rounded-xl p-5 mb-4">
              <p className="text-sm font-semibold text-primary mb-2">
                Cost to fix
              </p>
              <p className="text-sm text-text-secondary">
                &pound;150&ndash;&pound;300 for diverter valve replacement,
                including parts and labour.
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-accent mb-2">
                When to call us
              </p>
              <p className="text-sm text-text-secondary">
                This is almost always a job for an engineer. Diverter valves
                are internal components that require Gas Safe registered
                engineers to access and replace safely.
              </p>
            </div>
          </ScrollReveal>

          {/* Boiler Making Strange Noises */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Boiler Making Strange Noises
            </h2>
            <ul className="space-y-4 mb-5">
              {[
                {
                  label: "Banging / clunking",
                  detail:
                    "Often \"kettling\" caused by limescale or sludge build-up on the heat exchanger. A powerflush can resolve this.",
                },
                {
                  label: "Whistling",
                  detail:
                    "Usually air in the system - try bleeding your radiators first.",
                },
                {
                  label: "Gurgling",
                  detail:
                    "Air in the pipes or low water pressure.",
                },
                {
                  label: "Vibrating / humming",
                  detail:
                    "Could be a loose component or a failing pump.",
                },
              ].map(({ label, detail }) => (
                <li
                  key={label}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="text-accent mt-1">&#9679;</span>
                  <span>
                    <strong className="text-primary">{label}:</strong>{" "}
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-accent mb-2">
                When to call us
              </p>
              <p className="text-sm text-text-secondary">
                Persistent banging or kettling should not be ignored. Left
                untreated, sludge and limescale build-up can damage the heat
                exchanger, which is one of the most expensive boiler
                components to replace.
              </p>
            </div>
          </ScrollReveal>

          {/* Boiler Showing an Error Code */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Boiler Showing an Error Code
            </h2>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Most common Worcester Bosch error codes:
            </h3>
            <ul className="space-y-2 mb-5">
              {[
                { code: "EA 227", meaning: "Ignition fault - call an engineer" },
                { code: "E9 224", meaning: "Overheating - check pressure, call if it persists" },
                { code: "F1 / E1", meaning: "Low pressure - try repressurising first" },
                { code: "D5", meaning: "Condensate blockage - may be a frozen pipe" },
              ].map(({ code, meaning }) => (
                <li
                  key={code}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="text-accent mt-1">&#9679;</span>
                  <span>
                    <strong className="text-primary">{code}:</strong>{" "}
                    {meaning}
                  </span>
                </li>
              ))}
            </ul>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Most common Vaillant error codes:
            </h3>
            <ul className="space-y-2 mb-5">
              {[
                { code: "F.22", meaning: "Low water pressure - repressurise" },
                { code: "F.28 / F.29", meaning: "Ignition fault - call an engineer" },
                { code: "F.75", meaning: "Pressure sensor fault - call an engineer" },
              ].map(({ code, meaning }) => (
                <li
                  key={code}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="text-accent mt-1">&#9679;</span>
                  <span>
                    <strong className="text-primary">{code}:</strong>{" "}
                    {meaning}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-light-grey rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-primary mb-2">
                General rule
              </p>
              <p className="text-sm text-text-secondary">
                F or E codes related to pressure (F.22, E1, F1) - try
                repressurising first. Ignition or sensor faults - call a Gas
                Safe engineer.
              </p>
            </div>
          </ScrollReveal>

          {/* Radiators Not Heating Up Properly */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Radiators Not Heating Up Properly
            </h2>
            <ul className="space-y-4 mb-5">
              {[
                {
                  label: "Cold at the top",
                  detail:
                    "Bleed the radiator to release trapped air - this is a simple DIY job.",
                },
                {
                  label: "Cold at the bottom",
                  detail:
                    "Sludge build-up in the bottom of the radiator. A powerflush may be needed.",
                },
                {
                  label: "One radiator cold, others fine",
                  detail:
                    "Possibly a stuck valve or a system balancing issue.",
                },
                {
                  label: "All radiators cold",
                  detail:
                    "Check the boiler is on, check thermostat settings, and check system pressure.",
                },
              ].map(({ label, detail }) => (
                <li
                  key={label}
                  className="flex items-start gap-2 text-text-secondary"
                >
                  <span className="text-accent mt-1">&#9679;</span>
                  <span>
                    <strong className="text-primary">{label}:</strong>{" "}
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-accent mb-2">
                When to call us
              </p>
              <p className="text-sm text-text-secondary">
                If bleeding radiators does not help, or multiple radiators
                are cold at the bottom, contact us about a powerflush. Our
                team covers Milton Keynes and surrounding areas.
              </p>
            </div>
          </ScrollReveal>

          {/* Boiler Pilot Light Keeps Going Out */}
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Boiler Pilot Light Keeps Going Out
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              On older boilers with a standing pilot light, a pilot that
              repeatedly goes out is a sign of a fault.
            </p>
            <h3 className="font-heading text-xl font-bold text-primary mb-3">
              Common causes:
            </h3>
            <ul className="space-y-2 mb-5">
              {[
                "Faulty thermocouple (the sensor that detects the pilot flame)",
                "Draught blowing the pilot out",
                "Gas supply issue",
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
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10">
              <p className="text-sm font-semibold text-accent mb-2">
                When to call us
              </p>
              <p className="text-sm text-text-secondary">
                Do not attempt to fix gas components yourself. If your
                pilot light keeps going out, call a Gas Safe registered
                engineer. This is not a DIY repair.
              </p>
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
                Still Having Boiler Problems?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                If your boiler issue isn&apos;t resolved by the steps above,
                it&apos;s time to call a Gas Safe registered engineer.
                Plumbline MK offer same-day boiler repairs across Milton
                Keynes and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors shadow-lg w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call {siteConfig.phone}
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all w-full sm:w-auto"
                >
                  Book Online
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
