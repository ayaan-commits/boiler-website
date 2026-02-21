"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 2s (gives video time to load)
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    // Remove from DOM after fade animation completes
    const removeTimer = setTimeout(() => setVisible(false), 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B356D] transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Flame icon with pulse animation */}
      <div className="animate-pulse">
        <Image
          src="/images/brand/icon-orange.png"
          alt=""
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      </div>

      {/* Brand name */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-white text-2xl font-bold tracking-wide font-heading">
          PLUMBLINE
        </span>
        <span className="text-accent text-2xl font-bold font-heading">MK</span>
      </div>

      {/* Loading bar */}
      <div className="mt-6 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-accent rounded-full animate-loading-bar" />
      </div>
    </div>
  );
}
