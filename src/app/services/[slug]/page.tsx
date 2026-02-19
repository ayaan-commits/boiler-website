import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Flame,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Siren,
  Thermometer,
  Droplets,
  Check,
  Phone,
  Clock,
  Star,
  ArrowRight,
  ShieldCheck as ShieldIcon,
} from "lucide-react";
import { services, serviceDetails, servicePainPoints, faqs, testimonials, siteConfig } from "@/data/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap = {
  Flame,
  Wrench,
  ClipboardCheck,
  ShieldCheck,
  Siren,
  Thermometer,
  Droplets,
};

// Map service slugs to images
const serviceImages: Record<string, string> = {
  "boiler-installation": "/images/services/boiler-installation.jpg",
  "boiler-repair": "/images/services/boiler-repair.jpg",
  "boiler-servicing": "/images/services/boiler-servicing.jpg",
  "gas-safety-certificate": "/images/services/gas-safety.jpg",
  "emergency-plumbing": "/images/services/emergency-plumbing.jpg",
  "underfloor-heating": "/images/services/underfloor-heating.jpg",
  "boiler-cover": "/images/services/boiler-installation.jpg",
  "powerflushing": "/images/services/powerflush.jpg",
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Milton Keynes | Professional & Gas Safe`,
    description: service.description,
    keywords: [service.title.toLowerCase(), `${service.title.toLowerCase()} Milton Keynes`, "Gas Safe registered", "professional heating engineer"],
    alternates: {
      canonical: `https://www.plumblinemk.co.uk/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Plumbline MK Milton Keynes`,
      description: service.description,
      url: `https://www.plumblinemk.co.uk/services/${slug}`,
      images: [{ url: `/images/services/${slug}.jpg`, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const details = serviceDetails[slug as keyof typeof serviceDetails];
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4);
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  // Generate Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
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
    areaServed: {
      "@type": "City",
      name: "Milton Keynes",
    },
    url: `https://www.plumblinemk.co.uk/services/${slug}`,
    offers: {
      "@type": "Offer",
      description: service.shortDesc,
    },
  };

  // Map service slugs to FAQ categories for relevant FAQs
  const serviceFaqMap: Record<string, string[]> = {
    "boiler-installation": ["Boiler Installation", "General"],
    "boiler-repair": ["Repairs & Servicing", "General"],
    "boiler-servicing": ["Repairs & Servicing", "General"],
    "gas-safety-certificate": ["Gas Safety", "General"],
    "emergency-plumbing": ["General", "Repairs & Servicing"],
    "underfloor-heating": ["General", "Technical"],
    "boiler-cover": ["Repairs & Servicing", "General"],
    "powerflushing": ["Repairs & Servicing", "Technical"],
  };

  const relevantCategories = serviceFaqMap[slug] || ["General"];
  const relevantFaqs = faqs
    .filter((section) => relevantCategories.includes(section.category))
    .flatMap((section) => section.questions)
    .slice(0, 5);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: relevantFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.plumblinemk.co.uk" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.plumblinemk.co.uk/services" },
          { "@type": "ListItem", position: 3, name: service.title }
        ]
      }} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-teal py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
                <span>/</span>
                <span className="text-white">{service.title}</span>
              </nav>

              {/* Service Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-accent" />
                  )}
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
                  {service.title}
                </h1>
              </div>

              {servicePainPoints[slug] && (
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  {servicePainPoints[slug]}
                </p>
              )}
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: ShieldIcon, text: "Gas Safe Registered" },
                  { icon: Star, text: "5.0/5 Rating" },
                  { icon: Clock, text: "Fast Response" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-lg"
                  >
                    <Icon className="w-4 h-4" />
                    {text}
                  </span>
                ))}
              </div>
            </div>
            </ScrollReveal>

            {/* CTA Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Get Your Free Quote
              </h3>
              <p className="text-text-secondary mb-6">
                Ready to book? Call us now or request a free, no-obligation
                quote online.
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-4 rounded-lg text-lg font-semibold transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white px-6 py-4 rounded-lg text-lg font-semibold transition-colors w-full"
                >
                  Request Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-warm-grey">
                <p className="text-sm text-text-muted text-center">
                  24/7 Emergency Service Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-8 md:py-12 bg-light-grey">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={serviceImages[slug] || "/images/services/boiler-installation.jpg"}
              alt={`${service.title} service by Plumbline MK`}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 960px"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* What's Included Section */}
              {details && (
                <div className="mb-12">
                  <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                    What&apos;s Included
                  </h2>
                  <div className="bg-light-grey rounded-xl p-8">
                    <ul className="space-y-4">
                      {details.whatsIncluded.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.05}>
                          <li className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-text-primary leading-relaxed">
                              {item}
                            </span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Why Choose Us Section */}
              {details && (
                <div className="mb-12">
                  <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                    Why Choose Us for {service.title}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {details.whyChooseUs.map((reason, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white border border-warm-grey rounded-lg p-4"
                      >
                        <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm leading-relaxed">
                          {reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Customer Review */}
              <div className="mb-12 bg-cream rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-text-secondary italic leading-relaxed mb-3">
                  &ldquo;{testimonials[0].text}&rdquo;
                </blockquote>
                <p className="text-sm font-semibold text-primary">{testimonials[0].name}</p>
                <p className="text-xs text-text-muted">{testimonials[0].location} - 5.0/5 from 100+ reviews</p>
              </div>

              {/* CTA Banner */}
              <ScrollReveal>
              <div className="bg-gradient-to-r from-accent to-accent-dark rounded-xl p-8 text-center">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our expert team is standing by to help. Get your free quote
                  today with no obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-white text-accent hover:bg-cream px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Other Services */}
                <div className="bg-light-grey rounded-xl p-6 mb-6">
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">
                    Other Services
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((otherService) => {
                      const OtherIcon =
                        iconMap[otherService.icon as keyof typeof iconMap];
                      return (
                        <Link
                          key={otherService.slug}
                          href={`/services/${otherService.slug}`}
                          className="flex items-center gap-3 bg-white hover:bg-white/80 rounded-lg p-4 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                            {OtherIcon && (
                              <OtherIcon className="w-5 h-5 text-accent" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-primary text-sm group-hover:text-accent transition-colors truncate">
                              {otherService.title}
                            </h4>
                          </div>
                          <ArrowRight className="w-4 h-4 text-teal flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-teal hover:text-teal-dark font-medium text-sm mt-4 transition-colors"
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Emergency Contact Card */}
                <div className="bg-alert rounded-xl p-6 text-white">
                  <h3 className="font-heading text-lg font-bold mb-2">
                    Emergency Service
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Available 24/7 for urgent repairs and callouts
                  </p>
                  <a
                    href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 bg-white text-alert hover:bg-cream px-6 py-3 rounded-lg font-semibold transition-colors w-full"
                  >
                    <Phone className="w-5 h-5" />
                    Call Emergency Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
