"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/siteConfig";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FAQSection() {
  const allQuestions = faqs.flatMap((category) => category.questions);
  const displayQuestions = allQuestions.slice(0, 6);

  return (
    <section aria-labelledby="faq-heading" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            <div className="space-y-4">
              {displayQuestions.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.05}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>
                      <p>{faq.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </div>
          </Accordion>

          {/* View All FAQs Link */}
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors duration-200"
              >
                View All FAQs
                <ChevronDown className="w-4 h-4 -rotate-90" aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
