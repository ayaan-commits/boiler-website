"use client";

import { stats } from "@/data/siteConfig";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function StatsCounter() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1} className="text-center">
              {/* Number */}
              <div className="mb-2">
                <AnimatedCounter
                  value={stat.number}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary"
                />
              </div>

              {/* Label */}
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
