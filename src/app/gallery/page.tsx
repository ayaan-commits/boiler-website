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
  4: "/images/gallery/gallery-4.jpg",
  5: "/images/gallery/gallery-1.jpg",
  6: "/images/gallery/gallery-2.jpg",
  7: "/images/gallery/gallery-3.jpg",
  8: "/images/gallery/gallery-4.jpg",
  9: "/images/gallery/gallery-1.jpg",
  10: "/images/gallery/gallery-2.jpg",
  11: "/images/gallery/gallery-3.jpg",
  12: "/images/gallery/gallery-4.jpg",
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
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
                Browse our portfolio of boiler installations, repairs, and heating projects
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
