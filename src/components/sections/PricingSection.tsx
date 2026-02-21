"use client";

import { Check, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

const pricingTiers = [
  {
    name: "Standard Combi Swap",
    description: "Like-for-like replacement, same location",
    price: "From \u00A31,650",
    includes: [
      "New combi boiler, filter and flue",
      "Shock arrestor & scale reducer",
      "Professional installation",
      "Full system flush",
      "Free Hive smart thermostat",
      "Building regs & Gas Safe certification",
      "12-month labour guarantee",
    ],
  },
  {
    name: "System or Heat-Only Boiler",
    description: "Generally for larger homes or existing cylinder setups",
    price: "From \u00A32,000",
    popular: true,
    includes: [
      "New boiler, filter and flue",
      "Everything in Standard Combi Swap",
      "Cylinder work if required",
    ],
  },
  {
    name: "Full Combi Conversion",
    description: "New position or existing boiler location",
    price: "From \u00A32,800",
    includes: [
      "Everything in Standard Combi Swap",
      "Pipework rerouting",
      "Extended labour coverage",
      "Brick up of old flue if required",
      "Remove & dispose of existing tanks, boiler and cylinder",
    ],
  },
];

const pricingFaqs = [
  {
    q: "Does the price include VAT?",
    a: "Yes, all our prices are fully inclusive of VAT. No surprises on your invoice.",
  },
  {
    q: "Can I get finance on a new boiler?",
    a: "We can discuss payment options during your free quote. Many customers spread the cost - ask us about available options when you call.",
  },
  {
    q: "Is it cheaper to repair or replace my boiler?",
    a: "As a rule of thumb, if your boiler is over 10 years old and the repair costs more than \u00A3300, a new boiler is usually better value long-term. A new A-rated boiler can cut your heating bills by up to 30%. We'll always give you an honest recommendation.",
  },
];

export function PricingSection() {
  return (
    <div className="mb-12">
      <ScrollReveal>
        <h2 className="font-heading text-3xl font-bold text-primary mb-3">
          How Much Does a New Boiler Installation Cost in Milton Keynes?
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8">
          We believe in transparent pricing. Here&apos;s a realistic breakdown of
          what a new boiler installation costs in Milton Keynes in 2026, so you
          know exactly what to expect before you call.
        </p>
      </ScrollReveal>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {pricingTiers.map((tier, index) => (
          <ScrollReveal key={tier.name} delay={index * 0.1}>
            <div
              className={`relative rounded-xl border p-6 h-full flex flex-col ${
                tier.popular
                  ? "border-accent bg-accent/5 shadow-lg"
                  : "border-warm-grey bg-white"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-primary mb-1">
                {tier.name}
              </h3>
              <p className="text-text-muted text-sm mb-4">{tier.description}</p>
              <p className="font-heading text-3xl font-extrabold text-accent mb-5">
                {tier.price}
              </p>
              <ul className="space-y-2.5 flex-1">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="mt-5 flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Get a Quote
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-text-muted leading-relaxed mb-8">
        All prices are fixed-price quotes - no hidden fees. Final cost depends on
        boiler brand, property size, and installation complexity. Call us for a
        free no-obligation quote tailored to your home.
      </p>

      {/* Pricing FAQs */}
      <Accordion type="single" collapsible>
        <div className="space-y-3">
          {pricingFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`pricing-${index}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
    </div>
  );
}
