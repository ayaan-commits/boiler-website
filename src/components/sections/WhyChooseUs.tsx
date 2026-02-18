"use client";

import { ShieldCheck, Clock, BadgePoundSterling, Award, Star, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Gas Safe Registered",
    description: "Every engineer is fully certified and Gas Safe registered. Your safety is our top priority.",
    color: "bg-teal",
    stat: "100%",
    statLabel: "Certified",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "Same-day service and 24/7 emergency callouts. We're there when you need us most.",
    color: "bg-accent",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: BadgePoundSterling,
    title: "Transparent Pricing",
    description: "Upfront, honest quotes with no hidden fees. You know exactly what you'll pay before we start.",
    color: "bg-primary",
    stat: "0",
    statLabel: "Hidden Fees",
  },
  {
    icon: Award,
    title: "Guaranteed Work",
    description: "12-month guarantee on all repairs. Up to 12-year warranty on new boiler installations.",
    color: "bg-success",
    stat: "12yr",
    statLabel: "Warranty",
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-choose-us-heading" className="py-16 md:py-24 bg-light-grey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-text-secondary">
              Trusted by over 100 homeowners across Milton Keynes
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="h-full">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full border border-warm-grey/30 group relative overflow-hidden flex flex-col">
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${feature.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Icon Circle */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-extrabold text-primary mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>

                {/* Stat */}
                <div className="pt-3 border-t border-warm-grey/40 mt-auto">
                  <span className="text-2xl font-heading font-extrabold text-primary">{feature.stat}</span>
                  <span className="text-xs text-text-muted block">{feature.statLabel}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
