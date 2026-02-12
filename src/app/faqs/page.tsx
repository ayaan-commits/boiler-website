"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { faqs, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "General", "Boiler Installation", "Repairs & Servicing", "Gas Safety"];

  const filteredFaqs = selectedCategory === "All"
    ? faqs
    : faqs.filter(section => section.category === selectedCategory);

  // Generate FAQPage schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((section) =>
      section.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <>
      <JsonLd data={faqPageSchema} />
      {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                Find answers to common questions about our boiler and heating services
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer",
                    selectedCategory === category
                      ? "bg-accent text-white shadow-md"
                      : "bg-white text-text-secondary hover:bg-warm-grey hover:text-text-primary"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredFaqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {selectedCategory === "All" && (
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">
                    {section.category}
                  </h2>
                )}
                <Accordion type="single" collapsible>
                  <div className="space-y-3">
                    {section.questions.map((item, questionIndex) => {
                      const key = `${sectionIndex}-${questionIndex}`;

                      return (
                        <ScrollReveal key={key} delay={questionIndex * 0.05}>
                          <AccordionItem value={key}>
                            <AccordionTrigger>{item.q}</AccordionTrigger>
                            <AccordionContent>{item.a}</AccordionContent>
                          </AccordionItem>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-teal">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Our friendly team is here to help. Get in touch today for expert advice and free quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  Contact Us
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call: {siteConfig.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
