"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/siteConfig";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section aria-labelledby="testimonials-heading" className="py-16 md:py-24 bg-light-grey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          {/* Prev/Next Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-light-grey transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-light-grey transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Embla Viewport */}
          <div ref={emblaRef} className="overflow-hidden" role="region" aria-label="Customer testimonials carousel">
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  role="group"
                  aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4" role="img" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-text-primary mb-4 flex-grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Customer Name & Location */}
                    <div className="border-t border-warm-grey pt-4">
                      <p className="font-semibold text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-200",
                selectedIndex === index
                  ? "bg-accent w-8"
                  : "bg-warm-grey hover:bg-text-muted"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
