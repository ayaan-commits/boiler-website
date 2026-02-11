import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Flame } from "lucide-react";
import { siteConfig, services } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Flame className="w-7 h-7 text-accent" aria-hidden="true" />
              <span className="font-heading text-xl font-bold">
                Boiler<span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              Professional boiler installation, repair & servicing by Gas Safe
              registered engineers. Trusted by thousands of homeowners.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/65 hover:text-accent text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "/blog" },
                { label: "FAQs", href: "/faqs" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2.5 text-white/65 hover:text-accent text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 text-white/65 hover:text-accent text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/65 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.postcode}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-white/65 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.saturday}
                  <br />
                  <span className="text-accent font-medium">
                    {siteConfig.hours.emergency}
                  </span>
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <span className="inline-block bg-success text-white text-xs font-semibold px-3 py-1.5 rounded">
                Gas Safe: {siteConfig.gasSafeNumber}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/45">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} Ltd. All rights
            reserved. | Registered in England No. {siteConfig.companyNumber}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
