"use client";

import { useState } from "react";
import Image from "next/image";
import { Wrench, Flame, Thermometer, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

// Gallery items with placeholder data
const galleryItems = [
  {
    id: 1,
    title: "Worcester Bosch Install",
    category: "Boiler Installation",
    icon: Flame,
    description: "Combi boiler installation in 3-bed home",
  },
  {
    id: 2,
    title: "Vaillant EcoTec Pro",
    category: "Boiler Installation",
    icon: Flame,
    description: "Energy-efficient system upgrade",
  },
  {
    id: 3,
    title: "Emergency Repair",
    category: "Repairs",
    icon: Wrench,
    description: "Boiler breakdown fix - same day",
  },
  {
    id: 4,
    title: "Underfloor Heating System",
    category: "Underfloor Heating",
    icon: Thermometer,
    description: "Wet underfloor heating - new build",
  },
  {
    id: 5,
    title: "Ideal Logic Combi",
    category: "Boiler Installation",
    icon: Flame,
    description: "Compact boiler for apartment",
  },
  {
    id: 6,
    title: "Radiator Repair",
    category: "Repairs",
    icon: Wrench,
    description: "Valve replacement and bleeding",
  },
  {
    id: 7,
    title: "Baxi 800 Series",
    category: "Boiler Installation",
    icon: Flame,
    description: "High-efficiency combi boiler",
  },
  {
    id: 8,
    title: "Radiator Balancing",
    category: "Repairs",
    icon: Wrench,
    description: "System balancing for even heat distribution",
  },
  {
    id: 9,
    title: "Underfloor Heating Control",
    category: "Underfloor Heating",
    icon: Thermometer,
    description: "Smart thermostat installation",
  },
  {
    id: 10,
    title: "Worcester Greenstar",
    category: "Boiler Installation",
    icon: Flame,
    description: "Premium boiler with 10-year warranty",
  },
  {
    id: 11,
    title: "Leak Detection & Fix",
    category: "Repairs",
    icon: Wrench,
    description: "Pressure loss investigation",
  },
  {
    id: 12,
    title: "Electric Underfloor Kit",
    category: "Underfloor Heating",
    icon: Thermometer,
    description: "Bathroom underfloor heating",
  },
];

// Map gallery item IDs to images
const galleryImages: Record<number, string> = {
  1: "/images/gallery/gallery-1.jpg",
  2: "/images/gallery/gallery-2.jpg",
  3: "/images/gallery/gallery-3.jpg",
  4: "/images/services/underfloor-heating.jpg",
  5: "/images/gallery/gallery-1.jpg",
  6: "/images/gallery/gallery-2.jpg",
  7: "/images/gallery/gallery-3.jpg",
  8: "/images/gallery/gallery-4.jpg",
  9: "/images/services/underfloor-heating.jpg",
  10: "/images/gallery/gallery-2.jpg",
  11: "/images/gallery/gallery-3.jpg",
  12: "/images/services/underfloor-heating.jpg",
};

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filters = ["All", "Boiler Installation", "Repairs", "Underfloor Heating"];

  const filteredItems = selectedFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Our Work
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-4">
                Dealing with an unreliable boiler, cold spots in your home, or high energy bills? See how we&apos;ve solved these exact problems for homeowners across Milton Keynes.
              </p>
              <p className="text-white/90 text-base max-w-3xl mx-auto font-medium">
                Plumbline MK delivers professional boiler installations and heating repairs with quality workmanship and customer satisfaction guaranteed. Browse our portfolio of completed projects below.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter Tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={cn(
                    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer",
                    selectedFilter === filter
                      ? "bg-accent text-white shadow-md"
                      : "bg-white text-text-secondary hover:bg-warm-grey hover:text-text-primary"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <article
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                    >
                      {/* Gallery Image */}
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={galleryImages[item.id] || "/images/gallery/gallery-1.jpg"}
                          alt={`${item.title} - ${item.description} by Plumbline MK in Milton Keynes`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        {/* Category Tag */}
                        <div className="mb-3">
                          <span
                            className={cn(
                              "inline-block px-3 py-1 text-xs font-medium rounded-full",
                              item.category === "Boiler Installation" && "bg-accent/10 text-accent",
                              item.category === "Repairs" && "bg-teal/10 text-teal",
                              item.category === "Underfloor Heating" && "bg-warning/10 text-warning"
                            )}
                          >
                            {item.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-text-secondary text-sm">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-text-secondary text-sm mb-3">Trusted by homeowners across Milton Keynes</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-amber-400 text-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-primary font-bold text-lg">5.0/5 from 100+ Reviews</p>
              <blockquote className="text-text-secondary text-sm italic mt-3 max-w-xl mx-auto">
                &ldquo;I couldn&apos;t be more impressed with the service from Plumbline MK. Professional, polite, and did an excellent job all around!&rdquo;
                <span className="block text-primary font-semibold not-italic mt-1">- Kyle Mawby, Milton Keynes</span>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-8">
              What Sets Our Work Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-lg font-bold text-primary mb-1">Gas Safe Certified</p>
                <p className="text-sm text-text-secondary">Every installation is carried out by Gas Safe registered engineers following strict safety protocols.</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary mb-1">Energy Efficient</p>
                <p className="text-sm text-text-secondary">We install A-rated boilers that can reduce your energy bills by up to 30-40% compared to older models.</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary mb-1">Warranty Protected</p>
                <p className="text-sm text-text-secondary">Up to 12-year manufacturer warranty on new installations, plus a 12-month guarantee on all repair work.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-teal">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Get a free, no-obligation quote for your boiler or heating project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg w-full sm:w-auto"
                >
                  Get Free Quote
                </Link>
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
    </>
  );
}
