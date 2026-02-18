import Image from "next/image";

const partners = [
  {
    name: "Worcester Bosch",
    subtitle: "Accredited Installer",
    logo: "/images/accreditations/worcester-bosch.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Vaillant",
    subtitle: "Approved Installer",
    logo: "/images/accreditations/vaillant.svg",
    width: 110,
    height: 40,
  },
  {
    name: "Gas Safe",
    subtitle: "Registered",
    logo: "/images/accreditations/gas-safe.svg",
    width: 50,
    height: 50,
  },
  {
    name: "Baxi",
    subtitle: "Approved",
    logo: "/images/accreditations/baxi.svg",
    width: 90,
    height: 36,
  },
  {
    name: "Ideal",
    subtitle: "Stockist",
    logo: "/images/accreditations/ideal.svg",
    width: 90,
    height: 36,
  },
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
              className="flex items-center justify-center px-5 py-3 rounded-lg bg-cream/60 border border-warm-grey/40 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} - ${partner.subtitle}`}
                width={partner.width}
                height={partner.height}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
