import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Siren,
  ShieldCheck,
  BadgePoundSterling,
  Award,
  CheckCircle,
} from "lucide-react";
import { siteConfig, trustSignals } from "@/data/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Free Boiler Quotes Milton Keynes",
  description: "Get a free boiler quote from Plumbline MK. Call us for 24/7 emergency service or fill in our online form. Gas Safe registered engineers in Milton Keynes.",
  keywords: ["boiler quote Milton Keynes", "contact boiler engineer", "free boiler quote", "Gas Safe engineer contact", "emergency plumber Milton Keynes"],
  alternates: { canonical: "https://www.plumblinemk.co.uk/contact" },
  openGraph: {
    title: "Contact Plumbline MK | Free Quotes & 24/7 Emergency Service",
    description: "Get a free boiler quote or call us for emergency service. Gas Safe registered engineers.",
    url: "https://www.plumblinemk.co.uk/contact",
    images: [{ url: "/images/og/contact.jpg", width: 1200, height: 630, alt: "Contact Plumbline MK" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.plumblinemk.co.uk" },
          { "@type": "ListItem", position: 2, name: "Contact Us" },
        ],
      }} />
      {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Get in touch for a free, no-obligation quote. Our Gas Safe
                registered engineers are here to help.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* LEFT COLUMN - Contact Form (3/5 width) */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-text-secondary">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>
                <ContactForm />
                <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
                  <ShieldCheck className="w-4 h-4 text-success flex-shrink-0" aria-hidden="true" />
                  <p>Your information is secure and will never be shared with third parties. We only use it to respond to your enquiry.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT COLUMN - Contact Details (2/5 width) */}
            <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted font-medium">
                          Phone
                        </p>
                        <a
                          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                          className="text-primary font-semibold hover:underline"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted font-medium">
                          Email
                        </p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-primary font-semibold hover:underline break-all"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted font-medium">
                          Address
                        </p>
                        <p className="text-text-primary font-medium">
                          {siteConfig.address.full}
                        </p>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-text-muted font-medium mb-1">
                          Opening Hours
                        </p>
                        <div className="text-sm text-text-primary space-y-0.5">
                          <p>{siteConfig.hours.weekdays}</p>
                          <p>{siteConfig.hours.saturday}</p>
                          <p>{siteConfig.hours.sunday}</p>
                          <p className="font-semibold text-success mt-2">
                            {siteConfig.hours.emergency}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-warm-grey rounded-xl overflow-hidden shadow-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-text-muted text-sm">Map Integration</p>
                    <p className="text-text-muted text-xs">
                      (Google Maps / Mapbox)
                    </p>
                  </div>
                </div>

                {/* Emergency Callout Box */}
                <div className="bg-gradient-to-br from-alert to-alert-dark rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Siren className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">
                      Emergency Service
                    </h3>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Boiler breakdown? No heating or hot water? We're available
                    24/7 for emergency callouts.
                  </p>
                  <a
                    href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
                    className="block w-full bg-white text-alert font-bold py-3 px-4 rounded-lg text-center hover:bg-white/90 transition-colors"
                  >
                    Call Now: {siteConfig.emergencyPhone}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-white border-t border-warm-grey">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {trustSignals.map((signal, index) => {
                // Map icons to trust signals
                const icons = [
                  ShieldCheck,
                  Clock,
                  Award,
                  BadgePoundSterling,
                  CheckCircle,
                ];
                const Icon = icons[index % icons.length];

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center gap-2 w-[calc(50%-0.5rem)] xs:w-[calc(33.333%-0.75rem)] md:w-auto md:flex-1"
                  >
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-teal/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-teal" aria-hidden="true" />
                    </div>
                    <p className="text-xs xs:text-sm font-semibold text-text-primary">
                      {signal}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
