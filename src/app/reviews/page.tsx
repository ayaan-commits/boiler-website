import { Star, ShieldCheck, ExternalLink } from "lucide-react";
import { testimonials, siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Customer Reviews | 5.0 Rating | 100+ Reviews",
  description: "Read 100+ verified customer reviews for Plumbline MK. 5.0-star rating on Google. See why Milton Keynes homeowners trust us for boiler installation, repair & servicing.",
  keywords: ["Plumbline MK reviews", "boiler installation reviews Milton Keynes", "heating engineer reviews", "Gas Safe plumber reviews"],
  alternates: { canonical: "https://www.plumblinemk.co.uk/reviews" },
  openGraph: {
    title: "Customer Reviews | Plumbline MK - 5.0★ from 100+ Reviews",
    description: "Read verified customer reviews. 5.0-star rating on Google.",
    url: "https://www.plumblinemk.co.uk/reviews",
    images: [{ url: "/images/og/reviews.jpg", width: 1200, height: 630, alt: "Plumbline MK Customer Reviews" }],
  },
};

// Extended testimonials with additional reviews
const allReviews = [
  ...testimonials.map((t) => ({ ...t, service: "Boiler Installation" })),
  {
    name: "Michael B.",
    location: "Milton Keynes",
    rating: 5,
    text: "Fantastic service from start to finish. The team was professional, punctual, and cleaned up after themselves. Our new Worcester Bosch boiler is working perfectly.",
    service: "Boiler Installation",
  },
  {
    name: "Rachel P.",
    location: "Newport Pagnell",
    rating: 5,
    text: "Called them out for an emergency repair on Sunday evening. Engineer arrived within 90 minutes and had us back up and running. Lifesaver!",
    service: "Emergency Repair",
  },
  {
    name: "Tom H.",
    location: "Bedford",
    rating: 5,
    text: "Great experience getting our annual service done. Very thorough inspection and the engineer explained everything in detail. Will definitely use again.",
    service: "Boiler Servicing",
  },
  {
    name: "Sophie L.",
    location: "Buckingham",
    rating: 5,
    text: "Needed CP12 certificates for three rental properties. They coordinated all visits efficiently and provided all documentation promptly. Excellent service for landlords.",
    service: "Gas Safety Certificate",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.plumblinemk.co.uk" },
          { "@type": "ListItem", position: 2, name: "Customer Reviews" },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Plumbline MK",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: String(allReviews.length),
          bestRating: "5",
          worstRating: "1"
        },
        review: allReviews.map((review) => ({
          "@type": "Review",
          author: { "@type": "Person", name: review.name },
          reviewRating: { "@type": "Rating", ratingValue: String(review.rating), bestRating: "5" },
          reviewBody: review.text,
        })),
      }} />
      {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Customer Reviews
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                See why hundreds of Milton Keynes homeowners trust us with their boiler and heating needs
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12 bg-white border-b border-warm-grey">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Average Rating */}
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-2" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <AnimatedCounter value="5.0" className="text-4xl font-bold text-primary mb-1" />
              <p className="text-text-secondary">Average Rating</p>
            </div>

            {/* Total Reviews */}
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-teal" aria-hidden="true" />
              </div>
              <AnimatedCounter value="100+" className="text-4xl font-bold text-primary mb-1" />
              <p className="text-text-secondary">Happy Customers</p>
            </div>

            {/* Google Badge */}
            <div className="text-center">
              <div className="flex justify-center items-center gap-2 mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="font-bold text-xl text-text-primary">Google</span>
              </div>
              <p className="text-4xl font-bold text-primary mb-1">5.0★</p>
              <p className="text-text-secondary">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 md:py-16 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, index) => (
              <ScrollReveal key={index} delay={index * 0.06}>
                <article
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover:border-accent/30 border border-transparent transition-all duration-300"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4" role="img" aria-label="5 out of 5 stars">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-text-primary mb-4 leading-relaxed min-h-[100px]">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  {/* Service Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">
                      {review.service}
                    </span>
                  </div>

                  {/* Customer Name & Location */}
                  <div className="border-t border-warm-grey pt-4">
                    <p className="font-semibold text-primary">
                      {review.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {review.location}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-teal">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Had a Great Experience?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                We would love to hear from you! Leave us a review and help others find quality heating services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={siteConfig.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg w-full sm:w-auto"
                >
                  <Star className="w-5 h-5" aria-hidden="true" />
                  Leave a Google Review
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-200 w-full sm:w-auto"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
