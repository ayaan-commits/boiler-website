"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 lg:hidden flex flex-col items-end gap-2 transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      {/* Expanded buttons */}
      <div
        className={cn(
          "flex flex-col gap-2 transition-all duration-200",
          expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2 bg-primary text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg hover:bg-primary-light transition-colors text-sm font-semibold"
          aria-label="Call us"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg hover:bg-[#20BD5A] transition-colors text-sm font-semibold"
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300",
          expanded
            ? "bg-text-primary text-white rotate-0"
            : "bg-accent text-white pulse-emergency"
        )}
        aria-label={expanded ? "Close contact options" : "Contact us"}
        aria-expanded={expanded}
      >
        {expanded ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Phone className="w-6 h-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
