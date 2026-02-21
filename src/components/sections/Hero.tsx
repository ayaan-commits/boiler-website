"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ShieldCheck, Star, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const YOUTUBE_VIDEO_ID = "6ZFl0wETVQ4";
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3`;

export function Hero() {
  const [loadVideo, setLoadVideo] = useState(false);

  // Load iframe after first paint so it doesn't block rendering
  useEffect(() => {
    requestAnimationFrame(() => setLoadVideo(true));
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[80svh] sm:min-h-[calc(100svh-80px)] flex items-center">
      {/* === VIDEO BACKGROUND === */}
      <div className="absolute inset-0 z-0 bg-[#0a1628]" aria-hidden="true">
        {/* YouTube iframe background */}
        {loadVideo && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Plumbline MK background video"
              allow="autoplay; encrypted-media"
              tabIndex={-1}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full border-0"
              style={{ pointerEvents: "none" }}
            />
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Extra top gradient to hide YouTube's baked-in text */}
        <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black to-transparent" />
      </div>

      {/* === CONTENT OVERLAY === */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 xl:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            {[
              { icon: ShieldCheck, text: "Gas Safe Registered", mobileText: "Gas Safe" },
              { icon: Star, text: "100+ 5-Star Reviews", mobileText: "100+ Reviews" },
              { icon: Clock, text: "24/7 Available", mobileText: "24/7" },
            ].map(({ icon: Icon, text, mobileText }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-white/15"
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" aria-hidden="true" />
                <span className="sm:hidden">{mobileText}</span>
                <span className="hidden sm:inline">{text}</span>
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-[1.7rem] xs:text-[1.85rem] sm:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-2.5 sm:mb-3"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Your Trusted{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Plumbing &amp; Heating</span>
              <motion.span
                className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-accent/40 rounded-full z-0"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>{" "}
            Experts in Milton Keynes
          </motion.h1>

          {/* Subheading - benefit driven */}
          <motion.p
            className="text-white/80 text-[13px] sm:text-[15px] lg:text-base xl:text-lg leading-relaxed mb-2 sm:mb-3 max-w-xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Gas Safe registered engineers delivering reliable, affordable plumbing and heating services with transparent pricing across Milton Keynes.
          </motion.p>

          {/* Value proposition line */}
          <motion.p
            className="text-accent font-semibold text-[13px] sm:text-sm lg:text-[15px] mb-4 sm:mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2.5}
          >
            New boilers from £1,995 &mdash; Free Hive smart thermostat included
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            {/* Primary CTA - Shimmer */}
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-light text-white font-bold text-[15px] py-3.5 sm:h-[52px] px-6 sm:px-7 rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.97] shadow-[0_8px_32px_rgba(218,97,0,0.35)] hover:shadow-[0_12px_40px_rgba(218,97,0,0.4)] hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm text-white font-bold text-[15px] py-3.5 sm:h-[52px] px-6 sm:px-7 rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 active:scale-[0.97] hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
