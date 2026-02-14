"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Star, Clock, ArrowRight, CheckCircle, Zap } from "lucide-react";
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

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* === MOBILE HERO (< lg) === */}
      <div className="lg:hidden relative min-h-[calc(100svh-120px)] flex flex-col">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-engineer.jpg"
            alt="Professional Gas Safe registered engineer"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B356D]/92 via-[#0B356D]/88 to-[#082850]/95" />
        </div>

        {/* Content */}
        <div className="relative flex-1 flex flex-col justify-center px-5 py-5 sm:px-8 sm:py-6">
          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap gap-1.5 mb-4"
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
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/15"
              >
                <Icon className="w-3 h-3 text-accent" aria-hidden="true" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-[1.7rem] xs:text-[1.85rem] sm:text-[2.25rem] font-extrabold text-white leading-[1.1] mb-2.5"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Your Trusted{" "}
            <span className="text-accent">Plumbing &amp; Heating</span>{" "}
            Experts in Milton Keynes
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-white/75 text-[13px] sm:text-[15px] leading-relaxed mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Gas Safe registered engineers delivering reliable, affordable services with transparent pricing across Milton Keynes.
          </motion.p>

          {/* Selling points - inline */}
          <motion.div
            className="flex flex-wrap gap-x-3.5 gap-y-1 mb-5"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            {[
              "Free upfront quotes",
              "10-year warranty",
              "100+ 5-star reviews",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-1.5 text-white/85 text-[12px] sm:text-[13px]"
              >
                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col gap-2.5 mb-5"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            {/* Primary CTA - Shimmer */}
            <Link
              href="/contact"
              className="group relative flex items-center justify-center gap-2.5 bg-accent text-white font-bold text-[15px] py-3.5 px-6 rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.97] shadow-[0_8px_32px_rgba(218,97,0,0.35)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm text-white font-bold text-[15px] py-3.5 px-6 rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 active:scale-[0.97] whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-2"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
          >
            {[
              { value: "10+", label: "Years Exp." },
              { value: "100+", label: "Reviews" },
              { value: "5.0", label: "Google Rating" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="text-center bg-white/[0.07] backdrop-blur-sm rounded-lg py-2.5 border border-white/10"
              >
                <p className="text-white text-lg sm:text-xl font-extrabold leading-none">{value}</p>
                <p className="text-white/50 text-[10px] sm:text-[11px] mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* === DESKTOP HERO (lg+) === */}
      <div className="hidden lg:block relative">
        {/* Background */}
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,82,118,0.4),transparent)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(218,97,0,0.06),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 xl:px-8">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center min-h-[calc(100svh-200px)] py-8">
            {/* Left Content */}
            <div>
              {/* Trust badges */}
              <motion.div
                className="flex flex-wrap gap-2 mb-5"
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
                    className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm text-white/90 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/10 hover:bg-white/[0.12] transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    {text}
                  </span>
                ))}
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="font-heading text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-4"
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

              {/* Subheading */}
              <motion.p
                className="text-white/70 text-base xl:text-lg leading-relaxed mb-6 max-w-xl"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
              >
                Gas Safe registered engineers delivering reliable, affordable plumbing and heating services with transparent pricing across Milton Keynes.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-row gap-3 mb-6"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
              >
                {/* Primary CTA with shimmer */}
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-light text-white font-bold text-[15px] h-[52px] px-7 rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(218,97,0,0.3)] hover:shadow-[0_12px_40px_rgba(218,97,0,0.4)] hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                  </span>
                </Link>

                {/* Phone CTA */}
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="group inline-flex items-center justify-center gap-2.5 bg-white/[0.08] backdrop-blur-sm border border-white/15 text-white hover:bg-white/[0.15] font-bold text-[15px] h-[52px] px-7 rounded-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                  {siteConfig.phone}
                </a>

                {/* Emergency CTA */}
                <a
                  href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 bg-alert/90 hover:bg-alert text-white font-bold text-[15px] h-[52px] px-7 rounded-xl pulse-emergency transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Zap className="w-4 h-4" aria-hidden="true" />
                  Emergency
                </a>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                className="flex items-center gap-6"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={4}
              >
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "100+", label: "5-Star Reviews" },
                  { value: "5.0", label: "Google Rating" },
                ].map(({ value, label }, index) => (
                  <div key={label} className="flex items-center gap-3">
                    {index > 0 && <div className="w-px h-8 bg-white/15" />}
                    <div className={index > 0 ? "pl-3" : ""}>
                      <p className="text-white text-xl xl:text-2xl font-extrabold leading-none">{value}</p>
                      <p className="text-white/50 text-[11px] mt-0.5">{label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Image with floating elements */}
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
            >
              <div className="relative w-full aspect-[4/5] max-w-[400px] xl:max-w-[420px] mx-auto">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />

                <Image
                  src="/images/hero/hero-engineer.jpg"
                  alt="Professional Gas Safe registered engineer installing a Worcester Bosch boiler in Milton Keynes"
                  fill
                  className="object-cover rounded-2xl shadow-2xl relative z-10"
                  priority
                  sizes="(min-width: 1280px) 420px, 400px"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 via-transparent to-transparent z-10" />

                {/* Floating badge - Gas Safe */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-3 flex items-center gap-2.5 z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-success" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted font-medium uppercase tracking-wider">Gas Safe Registered</p>
                    <p className="text-sm font-bold text-text-primary">#{siteConfig.gasSafeNumber}</p>
                  </div>
                </motion.div>

                {/* Floating rating */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-3 z-20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="flex text-warning text-xs mb-0.5">{"★★★★★"}</div>
                  <p className="text-base font-extrabold text-text-primary leading-none">5.0/5</p>
                  <p className="text-[10px] text-text-muted mt-0.5">100+ Reviews</p>
                </motion.div>

                {/* Floating accent - price */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 -left-6 bg-accent text-white rounded-lg shadow-[0_8px_24px_rgba(218,97,0,0.3)] px-3.5 py-2.5 z-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <p className="text-[9px] font-medium uppercase tracking-wider opacity-80">Installations from</p>
                  <p className="text-lg font-extrabold leading-none mt-0.5">&pound;1,995</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
