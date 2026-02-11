import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, Calendar, User, ChevronRight, ArrowLeft } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { siteConfig } from "@/data/siteConfig";
import { JsonLd } from "@/components/seo/JsonLd";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category.toLowerCase(), "boiler advice", "heating tips", post.title.toLowerCase().split(' ').slice(0, 3).join(' ')],
    alternates: {
      canonical: `https://www.boilerpro.co.uk/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.boilerpro.co.uk/blog/${resolvedParams.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `/images/blog/${resolvedParams.slug}.jpg`, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: "https://www.boilerpro.co.uk/logo.png",
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.boilerpro.co.uk/blog/${post.slug}`,
    },
    image: "https://www.boilerpro.co.uk/og-image.jpg",
    articleSection: post.category,
    wordCount: post.content ? post.content.split(/\s+/).length : 0,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.boilerpro.co.uk" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.boilerpro.co.uk/blog" },
          { "@type": "ListItem", position: 3, name: post.title }
        ]
      }} />
      {/* Breadcrumb */}
      <section className="bg-light-grey border-b border-warm-grey">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link
              href="/"
              className="hover:text-primary transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/blog"
              className="hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-primary">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Back Link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium mb-6 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-8 pb-8 border-b border-warm-grey">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl mb-8">
                <Image
                  src="/images/blog/blog-boiler-guide.jpg"
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-heading prose-headings:text-text-primary
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-text-secondary prose-p:mb-4 prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:text-accent
                  prose-strong:text-text-primary prose-strong:font-semibold
                  prose-ul:my-4 prose-ul:text-text-secondary
                  prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content || "" }}
              />

              {/* CTA Box */}
              <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-xl">
                <h3 className="font-heading text-2xl font-bold text-text-primary mb-3">
                  Need Professional Advice?
                </h3>
                <p className="text-text-secondary mb-6">
                  Our Gas Safe registered engineers are ready to help with all
                  your heating needs. Get a free, no-obligation quote today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-8 space-y-8">
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-warm-grey">
                    <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                      Related Posts
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.slug}
                          href={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-teal/10 rounded-lg flex items-center justify-center">
                              <span className="text-xl">📝</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-1">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-text-muted">
                                {relatedPost.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm mt-4 transition-colors"
                    >
                      View All Posts
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}

                {/* Quick Contact CTA */}
                <div className="bg-primary p-6 rounded-xl text-white">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    24/7 Emergency Service
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Boiler broken down? We're here to help, day or night.
                  </p>
                  <a
                    href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
                    className="block w-full text-center bg-accent hover:bg-accent-dark text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call Emergency Line
                  </a>
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-warm-grey">
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Guides", "Maintenance", "Legal", "Tips"].map(
                      (category) => (
                        <Link
                          key={category}
                          href="/blog"
                          className="inline-block px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 hover:bg-primary hover:text-white rounded-full transition-colors"
                        >
                          {category}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
