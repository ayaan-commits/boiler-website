import type { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Siren,
  Thermometer,
  Droplets,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import { services, siteConfig } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Boiler & Heating Services Milton Keynes | Installation, Repair & Servicing",
  description: "Complete boiler and heating services in Milton Keynes. Installation, repair, servicing, gas safety certificates, emergency plumbing & underfloor heating.",
  keywords: ["boiler services Milton Keynes", "heating services", "boiler installation", "boiler repair", "gas safety certificate", "underfloor heating", "emergency plumber"],
  alternates: { canonical: "https://www.plumblinemk.co.uk/services" },
  openGraph: {
    title: "Boiler & Heating Services | Plumbline MK Milton Keynes",
    description: "Complete boiler and heating services. Installation, repair, servicing & more.",
    url: "https://www.plumblinemk.co.uk/services",
    images: [{ url: "/images/og/services.jpg", width: 1200, height: 630, alt: "Plumbline MK Services" }],
  },
};

const iconMap = {
  Flame,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Siren,
  Thermometer,
  Droplets,
};

export default function ServicesPage() {
  const boilerServices = services.filter((s) => s.category === "boilers");
  const otherServices = services.filter((s) => s.category === "other");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Boiler & Heating Services",
    description: "Complete boiler and heating services in Milton Keynes including installation, repair, servicing, gas safety certificates, emergency plumbing and underfloor heating.",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.county,
        postalCode: siteConfig.address.postcode,
        addressCountry: "GB",
      },
    },
    areaServed: { "@type": "City", name: "Milton Keynes" },
    url: "https://www.plumblinemk.co.uk/services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing & Heating Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `https://www.plumblinemk.co.uk/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.plumblinemk.co.uk" },
          { "@type": "ListItem", position: 2, name: "Services" },
        ],
      }} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What boiler services do you offer in Milton Keynes?", acceptedAnswer: { "@type": "Answer", text: "We offer boiler installation, repair, servicing, gas safety certificates (CP12), emergency plumbing, underfloor heating, powerflushing and boiler cover plans. All work is carried out by Gas Safe registered engineers." } },
          { "@type": "Question", name: "Are your engineers Gas Safe registered?", acceptedAnswer: { "@type": "Answer", text: "Yes, all our engineers are fully Gas Safe registered and undergo regular training. We are also accredited installers for Worcester Bosch and Vaillant." } },
          { "@type": "Question", name: "Do you offer free quotes?", acceptedAnswer: { "@type": "Answer", text: "Yes, we provide free, no-obligation quotes for all our services with transparent, upfront pricing and no hidden costs." } },
        ],
      }} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-teal py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-4">
                Are you struggling with an unreliable boiler? Worried about high energy bills due to an inefficient heating system? You&apos;re not alone - these are the most common issues we solve for homeowners across Milton Keynes every day.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                From boiler installations to emergency plumbing, we offer a comprehensive range of heating and plumbing services with transparent pricing, no hidden costs, and a 12-month guarantee on all work.
              </p>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                  Gas Safe Registered
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                  24/7 Emergency Service
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                  12-Month Guarantee
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Boiler Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
                Boiler Services
              </h2>
              <p className="text-lg text-text-secondary">
                Expert boiler installation, repair, and maintenance services
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {boilerServices.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];

              return (
                <ScrollReveal key={service.slug} delay={index * 0.1}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group bg-white border-2 border-warm-grey hover:border-accent rounded-xl p-8 transition-all duration-300 hover:shadow-lg block"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-xl bg-cream group-hover:bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-accent" aria-hidden="true" />
                        )}
                      </div>

                      <div className="flex-1">
                        <h3 className="font-heading text-2xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-end">
                          <span className="inline-flex items-center gap-2 text-teal font-medium group-hover:gap-3 transition-all">
                            Learn More
                            <ArrowRight className="w-5 h-5" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 md:py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
                Additional Services
              </h2>
              <p className="text-lg text-text-secondary">
                Comprehensive heating and plumbing solutions for your home
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];

              return (
                <ScrollReveal key={service.slug} delay={index * 0.1}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group bg-white border-2 border-warm-grey hover:border-teal rounded-xl p-6 transition-all duration-300 hover:shadow-lg block"
                  >
                    <div className="w-14 h-14 rounded-xl bg-cream group-hover:bg-teal/10 flex items-center justify-center mb-4 transition-colors">
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-teal" aria-hidden="true" />
                      )}
                    </div>

                    <h3 className="font-heading text-xl font-semibold text-primary mb-2 group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-end">
                      <ArrowRight className="w-5 h-5 text-teal group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="text-text-secondary text-sm mb-3">Trusted by homeowners across Milton Keynes</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-amber-400 text-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-primary font-bold text-lg mb-4">5.0/5 from 100+ Reviews on Google & Facebook</p>
            <blockquote className="text-text-secondary italic max-w-xl mx-auto">
              &ldquo;Called them for an emergency boiler repair and they responded quickly. The engineer was knowledgeable and had our heating back on the same day. Great value for money.&rdquo;
              <span className="block text-primary font-semibold not-italic mt-2">- Verified Customer, Newport Pagnell</span>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-teal">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Need Help Choosing the Right Service?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Our expert team is here to help. Get in touch for a free
                consultation and no-obligation quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors shadow-lg"
                >
                  Get Free Quote
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-base font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
