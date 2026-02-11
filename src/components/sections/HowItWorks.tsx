"use client";

import { Phone, FileText, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "1",
    title: "Contact Us",
    description: "Call, email, or fill in our quick quote form",
    icon: Phone,
  },
  {
    number: "2",
    title: "Get Your Quote",
    description: "We'll provide a free, no-obligation quote",
    icon: FileText,
  },
  {
    number: "3",
    title: "Job Done",
    description: "Our engineers complete the work to the highest standard",
    icon: CheckCircle,
  },
];

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-lg text-text-secondary">
              Getting your boiler sorted is easy
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="relative">
                  {/* Connecting Line (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-warm-grey -z-10">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-warm-grey rotate-45 translate-x-1/2"></div>
                    </div>
                  )}

                  {/* Step Card */}
                  <div className="text-center">
                    {/* Number Circle */}
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center relative z-10">
                        <span className="text-4xl font-heading font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <step.icon className="w-8 h-8 text-teal" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
