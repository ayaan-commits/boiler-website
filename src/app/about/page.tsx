import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Heart,
  TrendingUp,
  Award,
  Phone,
  CheckCircle2
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | 20+ Years Experience | Gas Safe Engineers",
  description: "Family-run boiler business with 20+ years experience in Manchester. Gas Safe registered engineers. 5,000+ installations completed. 4.9-star rating from 500+ reviews.",
  keywords: ["about BoilerPro", "Gas Safe engineers Manchester", "boiler company Manchester", "heating engineers", "trusted plumbers"],
  alternates: { canonical: "https://www.boilerpro.co.uk/about" },
  openGraph: {
    title: "About BoilerPro | 20+ Years of Heating Excellence",
    description: "Family-run boiler business with 20+ years experience. Gas Safe registered.",
    url: "https://www.boilerpro.co.uk/about",
    images: [{ url: "/images/og/about.jpg", width: 1200, height: 630, alt: "BoilerPro Team" }],
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We prioritize safety in every job. All our engineers are Gas Safe registered and follow strict safety protocols to protect you and your home.",
    color: "bg-teal",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description:
      "Your happiness is our success. We go above and beyond to ensure every customer receives exceptional service and support.",
    color: "bg-accent",
  },
  {
    icon: CheckCircle2,
    title: "Transparency",
    description:
      "No hidden fees, no surprises. We provide clear quotes upfront and keep you informed throughout every stage of the work.",
    color: "bg-primary",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description:
      "We're committed to delivering the highest quality workmanship. Our team continuously trains to stay ahead of industry standards.",
    color: "bg-success",
  },
];

const team = [
  {
    name: "John Smith",
    role: "Managing Director",
    description:
      "With 25 years in the heating industry, John leads our team with passion and expertise, ensuring every customer receives top-tier service.",
  },
  {
    name: "Sarah Johnson",
    role: "Lead Engineer",
    description:
      "Sarah is our most experienced engineer with specialist training in Worcester Bosch and Vaillant systems. Gas Safe registered for 15 years.",
  },
  {
    name: "Emma Thompson",
    role: "Office Manager",
    description:
      "Emma ensures everything runs smoothly behind the scenes, coordinating appointments and providing exceptional customer support.",
  },
];

const accreditations = [
  {
    name: "Gas Safe Register",
    number: `#${siteConfig.gasSafeNumber}`,
    description: "Official gas safety registration",
  },
  {
    name: "Worcester Bosch Accredited",
    number: "Platinum Installer",
    description: "Top-tier manufacturer accreditation",
  },
  {
    name: "Which? Trusted Trader",
    number: "Verified Member",
    description: "Endorsed by Which? consumer group",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                About Us
              </h1>
              <p className="text-white/80 text-lg md:text-xl">
                Your trusted local boiler and heating experts serving Manchester and surrounding areas
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Founded over 20 years ago, BoilerPro began as a small family-run business with a simple mission: to provide honest, reliable heating services to our local community.
                  </p>
                  <p>
                    What started in a single van has grown into a trusted team of Gas Safe registered engineers, but we've never lost sight of our core values. We still treat every home as if it were our own, and every customer as a valued neighbor.
                  </p>
                  <p>
                    Today, we're proud to have installed over 5,000 boilers and helped countless families stay warm and comfortable. Our 4.9-star rating and hundreds of 5-star reviews reflect our commitment to excellence in everything we do.
                  </p>
                  <p>
                    From emergency repairs at midnight to carefully planned installations, we bring the same level of care and professionalism to every job. Because at BoilerPro, you're not just a customer - you're part of our extended family.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about/team.jpg"
                    alt="BoilerPro team of Gas Safe registered engineers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Stats Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-warm-grey max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">20+</p>
                      <p className="text-sm text-text-secondary">Years of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
                Our Values
              </h2>
              <p className="text-text-secondary text-lg">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-full ${value.color} flex items-center justify-center flex-shrink-0`}>
                      <value.icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                        {value.title}
                      </h3>
                      {/* Description */}
                      <p className="text-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
                Meet Our Team
              </h2>
              <p className="text-text-secondary text-lg">
                The experienced professionals dedicated to keeping your home warm
              </p>
            </div>
          </ScrollReveal>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="text-center group">
                  {/* Team Member Image */}
                  <div className="mb-6 relative overflow-hidden rounded-xl">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={`/images/team/team-${index + 1}.jpg`}
                        alt={`${member.name} - ${member.role} at BoilerPro`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-accent font-medium mb-3">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
                Accreditations & Certifications
              </h2>
              <p className="text-text-secondary text-lg">
                Fully qualified and certified for your peace of mind
              </p>
            </div>
          </ScrollReveal>

          {/* Accreditations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accreditations.map((accreditation, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-warm-grey h-full">
                  {/* Badge Placeholder */}
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/10 to-teal/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-12 h-12 text-primary" aria-hidden="true" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    {accreditation.name}
                  </h3>

                  {/* Number */}
                  <p className="text-accent font-semibold mb-2">
                    {accreditation.number}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm">
                    {accreditation.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-teal">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Experience the BoilerPro difference. Get your free, no-obligation quote today.
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
    </div>
  );
}
