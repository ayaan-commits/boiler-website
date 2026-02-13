"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Star, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.6 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* === MOBILE HERO (< lg) - Full-bleed immersive design === */}
      <div className="lg:hidden relative">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-engineer.jpg"
            alt="Professional Gas Safe registered engineer"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95" />
          {/* Accent gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
        </div>

        {/* Content */}
        <div className="relative px-5 pt-8 pb-10 sm:px-8 sm:pt-12 sm:pb-14">
          {/* Trust badges row */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            {[
              { icon: ShieldCheck, text: "Gas Safe" },
              { icon: Star, text: "5-Star Rated" },
              { icon: Clock, text: "24/7" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-[2rem] sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.1] mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Your Trusted{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Plumbing &amp; Heating</span>
              <motion.span
                className="absolute inset-0 bg-accent -skew-x-2 rounded-sm z-0"
                style={{ scaleY: 1.15, scaleX: 1.06 }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1.06 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>{" "}
            Experts
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-white/80 text-[15px] sm:text-lg leading-relaxed mb-6 max-w-md"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Reliable, affordable services with transparent pricing across Milton Keynes.
          </motion.p>

          {/* Quick selling points */}
          <motion.div
            className="flex flex-col gap-1.5 mb-7"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[
              "Free quotes & upfront pricing",
              "10-year warranty on installations",
              "100+ 5-star reviews",
            ].map((point) => (
              <motion.div
                key={point}
                className="flex items-center gap-2 text-white/90 text-sm"
                variants={staggerItem}
              >
                <CheckCircle className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <span>{point}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons - stacked, full width, thumb-friendly */}
          <motion.div
            className="flex flex-col gap-3 mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg shadow-accent/30 transition-all duration-200 active:scale-[0.97]"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold text-base py-4 px-6 rounded-xl border border-white/25 transition-all duration-200 active:scale-[0.97]"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-3 gap-3"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
          >
            {[
              { value: "10+", label: "Years Exp." },
              { value: "100+", label: "Reviews" },
              { value: "5.0", label: "Google" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="text-center bg-white/10 backdrop-blur-sm rounded-lg py-3 border border-white/10"
              >
                <p className="text-white text-xl sm:text-2xl font-extrabold leading-none">{value}</p>
                <p className="text-white/60 text-[11px] sm:text-xs mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* === DESKTOP HERO (lg+) - Two column layout === */}
      <div className="hidden lg:block bg-primary relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/10 to-transparent" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-accent/[0.05] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Trust badges */}
              <motion.div
                className="flex flex-wrap gap-2 mb-6"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                {[
                  { icon: ShieldCheck, text: "Gas Safe Registered" },
                  { icon: Star, text: "5-Star Rated" },
                  { icon: Clock, text: "24/7 Available" },
                ].map(({ icon: Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10"
                  >
                    <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    {text}
                  </span>
                ))}
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="font-heading text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.1] mb-6"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
              >
                Your Trusted{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Plumbing &amp; Heating</span>
                  <motion.span
                    className="absolute inset-0 bg-accent -skew-x-2 rounded-sm z-0"
                    style={{ scaleY: 1.15, scaleX: 1.06 }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1.06 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>{" "}
                Experts in Milton Keynes
              </motion.h1>

              <motion.p
                className="text-white/75 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
              >
                Reliable, affordable plumbing and heating services with transparent pricing.
                Gas Safe registered engineers you can trust for all your boiler installation,
                repair, and servicing needs across Milton Keynes.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-row gap-3 mb-8"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold text-base h-12 px-8 rounded-lg shadow-lg shadow-accent/30 transition-all duration-200 active:scale-[0.97]"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-bold text-base h-12 px-8 rounded-lg transition-all duration-200"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <a
                  href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center bg-alert hover:bg-alert-light text-white font-bold text-base h-12 px-8 rounded-lg shadow-sm pulse-emergency transition-all duration-200"
                >
                  Emergency Callout
                </a>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                className="flex flex-wrap gap-6 text-white/60 text-sm"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={4}
              >
                <span>
                  <strong className="text-white text-xl font-bold">10+</strong> Years Exp.
                </span>
                <span>
                  <strong className="text-white text-xl font-bold">100+</strong> Reviews
                </span>
                <span>
                  <strong className="text-white text-xl font-bold">5.0</strong> Google Rating
                </span>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
            >
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="/images/hero/hero-engineer.jpg"
                  alt="Professional Gas Safe registered engineer installing a Worcester Bosch boiler in Milton Keynes"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                  sizes="450px"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />

                {/* Floating badge - Gas Safe */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-success" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Gas Safe Registered</p>
                    <p className="text-sm font-bold text-text-primary">
                      #{siteConfig.gasSafeNumber}
                    </p>
                  </div>
                </motion.div>

                {/* Floating rating */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex text-warning text-sm">
                    {"★★★★★"}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary">5.0/5</p>
                    <p className="text-xs text-text-muted">100+ Reviews</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
