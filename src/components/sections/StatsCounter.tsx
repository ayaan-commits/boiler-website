"use client";

import { NumberTicker } from "@/components/ui/NumberTicker";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", delay: 0 },
  { value: 100, suffix: "+", label: "5-Star Reviews", delay: 0.1 },
  { value: 5.0, suffix: "", label: "Google Rating", decimals: 1, delay: 0.2 },
  { value: 50, suffix: "mi", label: "Coverage Radius", delay: 0.3 },
];

export function StatsCounter() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={stat.delay} className="text-center">
              <div className="mb-2">
                <NumberTicker
                  value={stat.value}
                  suffix={stat.suffix}
                  decimalPlaces={stat.decimals ?? 0}
                  delay={0.3 + stat.delay}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary"
                />
              </div>
              <p className="text-sm md:text-base text-text-secondary">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
