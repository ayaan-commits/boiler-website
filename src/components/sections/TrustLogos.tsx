import { ShieldCheck } from "lucide-react";

const partners = [
  { name: "Worcester Bosch", subtitle: "Accredited Installer" },
  { name: "Vaillant", subtitle: "Approved Installer" },
  { name: "Gas Safe", subtitle: "Registered" },
  { name: "Baxi", subtitle: "Approved" },
  { name: "Ideal", subtitle: "Stockist" },
];

export function TrustLogos() {
  return (
    <section className="py-10 md:py-14 bg-white border-b border-warm-grey/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-text-muted uppercase tracking-wider mb-8">
          Trusted & Accredited By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2.5 px-5 py-3 rounded-lg bg-cream/60 border border-warm-grey/40 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <ShieldCheck className="w-5 h-5 text-primary group-hover:text-accent transition-colors" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-bold text-primary text-sm leading-tight">
                  {partner.name}
                </p>
                <p className="text-[11px] text-text-muted leading-tight">
                  {partner.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
