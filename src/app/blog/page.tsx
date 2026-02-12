import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Boiler Advice & Guides | Expert Tips from Gas Safe Engineers",
  description: "Expert boiler advice and heating guides from Gas Safe registered engineers. Installation tips, energy efficiency, maintenance advice and more.",
  keywords: ["boiler advice", "heating guides", "boiler maintenance tips", "energy efficiency", "boiler installation guide"],
  alternates: { canonical: "https://www.plumblinemk.co.uk/blog" },
  openGraph: {
    title: "Boiler Advice & Guides | Plumbline MK Blog",
    description: "Expert boiler advice and heating guides from Gas Safe engineers.",
    url: "https://www.plumblinemk.co.uk/blog",
    images: [{ url: "/images/og/blog.jpg", width: 1200, height: 630, alt: "Plumbline MK Blog" }],
  },
};

export default function BlogPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Boiler Advice & Guides",
    description: "Expert boiler advice and heating guides from Gas Safe registered engineers.",
    url: "https://www.plumblinemk.co.uk/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.plumblinemk.co.uk/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.plumblinemk.co.uk" },
          { "@type": "ListItem", position: 2, name: "Blog" },
        ],
      }} />
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Blog & Guides
              </h1>
              <p className="text-white/75 text-lg lg:text-xl max-w-2xl mx-auto">
                Expert advice, helpful tips, and the latest news on boilers,
                heating systems, and home energy efficiency.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <article
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  {/* Blog Post Image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-text-secondary mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Need Expert Advice?
            </h2>
            <p className="text-white/75 text-lg mb-8">
              Our Gas Safe registered engineers are here to help with any
              questions about your heating system.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
