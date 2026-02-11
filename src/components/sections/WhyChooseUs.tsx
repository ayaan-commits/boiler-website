"use client";

import { ShieldCheck, Clock, BadgePoundSterling, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Gas Safe Registered",
    description: "All engineers certified",
    color: "bg-teal",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "Same-day service available",
    color: "bg-accent",
  },
  {
    icon: BadgePoundSterling,
    title: "Transparent Pricing",
    description: "No hidden fees, ever",
    color: "bg-primary",
  },
  {
    icon: Award,
    title: "12-Month Guarantee",
    description: "All work fully guaranteed",
    color: "bg-success",
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="py-16 md:py-24 bg-light-grey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Why Choose Us
            </h2>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                {/* Icon Circle */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
