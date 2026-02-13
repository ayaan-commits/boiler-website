import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-teal relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Need a New Boiler?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-3">
            Get a free, no-obligation quote in under 60 seconds
          </p>

          <p className="text-sm text-white/70 mb-8">
            Installations from just <span className="text-white font-semibold">£1,995</span> with free Hive smart thermostat included
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-14 px-10 py-4 text-lg font-semibold rounded-lg bg-accent text-white hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
            >
              Get Free Quote
            </Link>

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center h-14 px-10 py-4 text-lg font-semibold rounded-lg bg-white text-primary hover:bg-cream shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Call: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
