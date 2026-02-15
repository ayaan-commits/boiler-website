"use client";

import { Star, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { testimonials } from "@/data/siteConfig";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const sourceColors = {
  google: "bg-blue-50 text-blue-700 border-blue-200",
  facebook: "bg-indigo-50 text-indigo-700 border-indigo-200",
};

const sourceLabels = {
  google: "Google Review",
  facebook: "Facebook Review",
};

export function Testimonials() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    const plugin = autoplayPlugin.current;
    if (!plugin) return;
    if (isPlaying) {
      plugin.stop();
    } else {
      plugin.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    if (!emblaApi) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    };

    const rootNode = emblaApi.rootNode();
    rootNode.addEventListener("keydown", handleKeyDown);
    return () => rootNode.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi, scrollPrev, scrollNext]);

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
        {/* Section Header with Google Rating */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary mb-4">
              What Our Customers Say
            </h2>
            {/* Rating summary badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm border border-warm-grey/50">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="font-bold text-primary">5.0</span>
              <span className="text-text-secondary text-sm">from 100+ reviews on Google & Facebook</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          {/* Prev/Next Arrows - hidden on small phones, visible from sm up */}
          <button
            onClick={scrollPrev}
            className="absolute left-1 sm:-left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 sm:bg-white shadow-lg hidden xs:flex items-center justify-center hover:bg-light-grey transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-1 sm:-right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 sm:bg-white shadow-lg hidden xs:flex items-center justify-center hover:bg-light-grey transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>

          {/* Embla Viewport */}
          <div ref={emblaRef} className="overflow-hidden" role="region" aria-label="Customer testimonials carousel" aria-roledescription="carousel" tabIndex={0}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name + index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0 flex"
                  role="group"
                  aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-warm-grey/30">
                    {/* Top row: Stars + Source badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4.5 h-4.5 fill-amber-400 text-amber-400"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className={cn(
                        "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                        sourceColors[testimonial.source]
                      )}>
                        {sourceLabels[testimonial.source]}
                      </span>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-text-primary text-sm leading-relaxed mb-5 flex-grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Customer with avatar */}
                    <div className="border-t border-warm-grey/50 pt-4 flex items-center gap-3">
                      {/* Avatar circle with initials */}
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-primary">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls: Dots + Pause */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="flex gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                  selectedIndex === index
                    ? "bg-accent w-10 h-3"
                    : "bg-warm-grey hover:bg-text-muted w-3 h-3"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={selectedIndex === index ? "true" : undefined}
              />
            ))}
          </div>
          <button
            onClick={toggleAutoplay}
            className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-light-grey transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 text-primary" />
            ) : (
              <Play className="w-3.5 h-3.5 text-primary" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
