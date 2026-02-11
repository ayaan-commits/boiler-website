"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "20+", "5,000+", "4.9", "98%", "500+"
  className?: string;
}

function parseValue(value: string): { num: number; prefix: string; suffix: string; decimals: number } {
  // Extract prefix (e.g. "£"), number, and suffix (e.g. "+", "%")
  const match = value.match(/^([^\d]*)([\d,]+\.?\d*)(.*)/);
  if (!match) return { num: 0, prefix: "", suffix: value, decimals: 0 };

  const prefix = match[1];
  const numStr = match[2].replace(/,/g, "");
  const suffix = match[3];
  const num = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  return { num, prefix, suffix, decimals };
}

function formatNumber(n: number, decimals: number, originalValue: string): string {
  // Preserve comma formatting if original had commas
  const hasCommas = originalValue.includes(",");
  const formatted = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();

  if (hasCommas) {
    const parts = formatted.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  return formatted;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { num, prefix, suffix, decimals } = parseValue(value);
  const [displayValue, setDisplayValue] = useState("0");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(num);
    }
  }, [isInView, motionValue, num]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(formatNumber(latest, decimals, value));
    });
    return unsubscribe;
  }, [springValue, decimals, value]);

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) {
    return <span className={className}>{value}</span>;
  }

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {isInView ? displayValue : "0"}
      {suffix}
    </motion.span>
  );
}
