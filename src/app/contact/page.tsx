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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumbing & Heating Services",
    description: "Professional boiler installation, repair, servicing and emergency plumbing by Gas Safe registered engineers in Milton Keynes.",
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
    url: "https://www.plumblinemk.co.uk/contact",
  };

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
      <JsonLd data={serviceSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How do I get a free boiler quote?", acceptedAnswer: { "@type": "Answer", text: "Call us on 07805 844 016, send an email to enquiries@plumblinemk.co.uk, or fill in our online contact form. We provide free, no-obligation quotes for all services." } },
          { "@type": "Question", name: "Do you offer 24/7 emergency service?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer 24/7 emergency callouts for boiler breakdowns, no heating, no hot water, and other urgent plumbing issues across Milton Keynes." } },
          { "@type": "Question", name: "What areas do you cover?", acceptedAnswer: { "@type": "Answer", text: "We cover Milton Keynes and surrounding areas up to 50 miles, including Newport Pagnell, Bedford, Buckingham, Aylesbury, and Northampton." } },
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
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4">
                Struggling with a broken boiler during winter? Worried about hidden costs in boiler installation? We understand how stressful heating problems can be.
              </p>
              <p className="text-white/90 text-base max-w-2xl mx-auto font-medium">
                Plumbline MK offers free boiler quotes and 24/7 emergency services for homeowners in Milton Keynes. Transparent pricing, Gas Safe registered engineers, and a 12-month guarantee on all repairs.
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

                {/* Social Proof */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-amber-400 text-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-text-secondary text-sm italic mb-3 leading-relaxed">
                    &ldquo;Robert and Sam was amazing and friendly. They provided a quality service and I would highly recommend them to anyone looking for reliable plumbing and heating work.&rdquo;
                  </blockquote>
                  <p className="text-sm font-semibold text-primary">Callista Anowo</p>
                  <p className="text-xs text-text-muted">Milton Keynes - Google Review</p>
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

      {/* Features & Benefits */}
      <section className="py-10 bg-white border-t border-warm-grey">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-8">
              Why Choose Plumbline MK?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: ShieldCheck, title: "Gas Safe Registered", desc: "All engineers are fully Gas Safe certified (#957816), ensuring every job meets the highest safety standards." },
                { icon: Clock, title: "24/7 Emergency Service", desc: "Boiler broken at midnight? We respond around the clock so you're never left without heating or hot water." },
                { icon: Award, title: "12-Month Guarantee", desc: "Every repair we carry out is covered for 12 months, giving you peace of mind that the job is done right." },
                { icon: BadgePoundSterling, title: "Up to 12-Year Warranty", desc: "As Worcester Bosch & Vaillant accredited installers, we offer extended manufacturer warranties on new boilers." },
                { icon: CheckCircle, title: "Transparent Pricing", desc: "No hidden fees or surprises. We provide clear, upfront quotes before any work begins so you know exactly what to expect." },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-teal" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary">{feature.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
