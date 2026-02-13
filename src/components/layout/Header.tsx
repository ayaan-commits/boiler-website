"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { siteConfig, navLinks, trustSignals } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marquee";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleDropdownEnter = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 300);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Cleanup dropdown timer
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Top Emergency Bar */}
      <div className="bg-alert text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 md:py-2.5 flex justify-between items-center gap-2">
          {/* Full text - desktop only */}
          <span className="font-bold text-sm hidden md:inline tracking-wide uppercase whitespace-nowrap">
            <span className="animate-pulse inline-block mr-1.5">🔴</span>
            24/7 Emergency Service — Need Help Now?
          </span>
          {/* Short text - mobile & tablet */}
          <span className="font-bold text-xs md:hidden tracking-wide uppercase whitespace-nowrap">
            <span className="animate-pulse inline-block mr-1">🔴</span>
            24/7 Emergency
          </span>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 md:gap-2 bg-white text-alert font-bold text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-full hover:bg-white/90 transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
            <span className="hidden sm:inline">Call: {siteConfig.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>

      {/* Main Navigation - sticky to viewport */}
      <nav
        className="bg-primary sticky top-0 z-50 shadow-lg"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-18 lg:h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/brand/logo-white.png"
                alt="Plumbline MK"
                width={220}
                height={56}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.children && handleDropdownEnter()}
                  onMouseLeave={() => link.children && handleDropdownLeave()}
                  onFocus={() => link.children && setServicesOpen(true)}
                  onBlur={(e) => {
                    if (link.children && !e.currentTarget.contains(e.relatedTarget as Node)) {
                      setServicesOpen(false);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (link.children && e.key === 'Escape') {
                      setServicesOpen(false);
                      (e.currentTarget.querySelector('button') as HTMLElement)?.focus();
                    }
                  }}
                >
                  {link.children ? (
                    <button
                      className="flex items-center gap-1 text-white/90 hover:text-white text-[15px] font-semibold transition-colors py-2"
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      aria-controls="services-dropdown"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-white text-[15px] font-semibold transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Mega Dropdown */}
                  {link.children && (
                    <div
                      id="services-dropdown"
                      className={cn(
                        "absolute top-full left-0 w-[480px] bg-white rounded-b-xl shadow-xl border border-warm-grey/50 transition-all duration-200 z-50",
                        servicesOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible pointer-events-none"
                      )}
                      role="menu"
                    >
                      <div className="p-6 grid grid-cols-2 gap-6">
                        {link.children.map((group) => (
                          <div key={group.group}>
                            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                              {group.group}
                            </h3>
                            <ul className="space-y-2" role="group" aria-label={group.group}>
                              {group.items.map((item) => (
                                <li key={item.href} role="none">
                                  <Link
                                    href={item.href}
                                    className="text-sm text-text-primary hover:text-accent font-medium transition-colors block py-1"
                                    onClick={() => setServicesOpen(false)}
                                    role="menuitem"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 text-white/90 hover:text-white text-[15px] font-semibold"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg text-[15px] font-bold transition-colors shadow-lg shadow-accent/25"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden bg-primary-dark border-t border-white/10 overflow-hidden transition-all duration-300",
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!mobileOpen}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between text-white/85 hover:text-white py-3 text-sm font-medium"
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-200",
                        servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="pl-4 pb-2 space-y-1">
                        {link.children.map((group) => (
                          <div key={group.group}>
                            <p className="text-xs text-white/50 uppercase tracking-wider py-2">
                              {group.group}
                            </p>
                            {group.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block text-white/75 hover:text-white py-2 text-sm"
                                onClick={closeMobile}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-white/85 hover:text-white py-3 text-sm font-medium"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 bg-teal text-white py-3 rounded-lg text-sm font-semibold"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call: {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-accent text-white py-3 rounded-lg text-sm font-semibold"
                onClick={closeMobile}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Trust Bar - Infinite Marquee */}
      <div className="bg-cream border-b border-warm-grey py-2.5 overflow-hidden trust-bar-fade">
        <Marquee speed="slow" pauseOnHover className="[--gap:2.5rem]">
          {trustSignals.map((signal) => (
            <span
              key={signal}
              className="flex items-center gap-1.5 text-primary text-sm font-medium whitespace-nowrap"
            >
              <span className="text-success font-bold" aria-hidden="true">&#10003;</span>
              {signal}
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}
