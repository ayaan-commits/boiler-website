"use client";

import Link from "next/link";
import {
  Flame,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Siren,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap = {
  Flame,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Siren,
  Thermometer,
};

export function ServicesGrid() {
  return (
    <section aria-labelledby="services-heading" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-text-secondary">
              From boiler installations to emergency plumbing, we've got you covered
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <ScrollReveal key={service.slug} delay={index * 0.08}>
                <div className="bg-white border border-warm-grey rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group">
                  {/* Icon Area */}
                  <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-accent" aria-hidden="true" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-text-secondary text-sm mb-4 min-h-[40px]">
                    {service.shortDesc}
                  </p>

                  {/* Price Indicator */}
                  <p className="text-accent font-semibold mb-4">
                    {service.price}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-teal font-medium hover:text-teal-dark transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
