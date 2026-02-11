"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-teal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Need a New Boiler?
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Get a free, no-obligation quote in under 60 seconds
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Get Free Quote Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Get Free Quote
              </Link>

              {/* Call Button */}
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
  );
}
