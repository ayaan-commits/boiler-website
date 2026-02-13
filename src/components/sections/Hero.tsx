"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck, Star, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-teal/30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={0}
            >
              {[
                { icon: ShieldCheck, text: "Gas Safe Registered" },
                { icon: Star, text: "5-Star Rated" },
                { icon: Clock, text: "24/7 Available" },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={1}
            >
              Your Trusted{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Plumbing & Heating</span>
                <span className="absolute inset-0 bg-accent -skew-x-2 rounded-sm z-0 scale-x-105 scale-y-110" />
              </span>{" "}
              Experts in Milton Keynes
            </motion.h1>

            <motion.p
              className="text-white/75 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={2}
            >
              Reliable, affordable plumbing and heating services with transparent pricing.
              Gas Safe registered engineers you can trust for all your boiler installation,
              repair, and servicing needs across Milton Keynes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={3}
            >
              <Button asChild size="lg" variant="default" className="shadow-lg shadow-accent/25">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="emergency">
                <a href={`tel:${siteConfig.emergencyPhone.replace(/\s/g, "")}`}>
                  Emergency Callout
                </a>
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex flex-wrap gap-6 text-white/60 text-sm"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              custom={4}
            >
              <span>
                <strong className="text-white text-lg">10+</strong> Years Exp.
              </span>
              <span>
                <strong className="text-white text-lg">100+</strong> Reviews
              </span>
              <span>
                <strong className="text-white text-lg">5.0</strong> Google Rating
              </span>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/5] max-w-md mx-auto">
              {/* Hero image */}
              <Image
                src="/images/hero/hero-engineer.jpg"
                alt="Professional Gas Safe registered engineer installing a Worcester Bosch boiler in Milton Keynes"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 lg:p-4 flex items-center gap-3 hidden sm:flex"
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
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 lg:p-4 flex items-center gap-3 hidden sm:flex"
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
    </section>
  );
}
