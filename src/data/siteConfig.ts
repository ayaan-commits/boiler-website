export const siteConfig = {
  name: "Plumbline MK",
  tagline: "Your Trusted Local Plumbing & Heating Experts in Milton Keynes",
  phone: "07805 844 016",
  landline: "01908 229 560",
  emergencyPhone: "07805 844 016",
  email: "enquiries@plumblinemk.co.uk",
  whatsapp: "https://wa.me/447805844016",
  address: {
    city: "Milton Keynes",
    county: "Buckinghamshire",
    postcode: "MK8 0PA",
    full: "Milton Keynes, Buckinghamshire, MK8 0PA",
  },
  hours: {
    weekdays: "Mon - Fri: Available",
    saturday: "Sat: Available",
    sunday: "Sun: Emergency Only",
    emergency: "24/7 Emergency Callout",
  },
  social: {
    facebook: "https://facebook.com/plumblinemk.co.uk",
    instagram: "https://instagram.com/plumblinemk.co.uk",
    whatsapp: "https://wa.me/447805844016",
    google: "https://google.com", // TODO: Replace with actual Google Business Profile URL (e.g. https://g.page/plumblinemk)
  },
  gasSafeNumber: "957816",
  domain: "plumblinemk.co.uk",
};

export const services = [
  {
    title: "Boiler Installation",
    slug: "boiler-installation",
    description: "Professional combi boiler installation Milton Keynes homeowners can trust. Worcester Bosch & Vaillant accredited with up to 12-year warranty on new installations.",
    shortDesc: "Worcester Bosch & Vaillant accredited installers",
    icon: "Flame",
    category: "boilers",
  },
  {
    title: "Boiler Repair",
    slug: "boiler-repair",
    description: "Fast, reliable boiler repairs across Milton Keynes with same-day emergency service. We diagnose and fix all makes and models with a 12-month guarantee.",
    shortDesc: "Same-day emergency repairs available",
    icon: "Wrench",
    category: "boilers",
  },
  {
    title: "Boiler Servicing",
    slug: "boiler-servicing",
    description: "Routine gas boiler servicing Milton Keynes customers trust. Annual servicing keeps your heating running safely and efficiently, maintaining your warranty.",
    shortDesc: "Annual service & safety check",
    icon: "ClipboardCheck",
    category: "boilers",
  },
  {
    title: "Gas Safety Certificate",
    slug: "gas-safety-certificate",
    description: "Landlord gas safety certificates (CP12) in Milton Keynes. Fast appointments, digital certificates, and annual renewal reminders for your rental properties.",
    shortDesc: "CP12 certificates for landlords",
    icon: "ShieldCheck",
    category: "boilers",
  },
  {
    title: "Emergency Plumbing",
    slug: "emergency-plumbing",
    description: "24/7 emergency plumbing service across Milton Keynes. Burst pipes, leaks, boiler breakdowns - we're here when you need us most with fast response times.",
    shortDesc: "24/7 emergency response across MK",
    icon: "Siren",
    category: "other",
  },
  {
    title: "Underfloor Heating",
    slug: "underfloor-heating",
    description: "Professional underfloor heating installation in Milton Keynes for new builds and retrofits. Wet and electric systems available with expert installation.",
    shortDesc: "Wet & electric systems installed",
    icon: "Thermometer",
    category: "other",
  },
  {
    title: "Boiler Cover Plans",
    slug: "boiler-cover",
    description: "Affordable monthly boiler cover plans for complete peace of mind. Choose from three tiers covering annual servicing, repairs, and full system protection.",
    shortDesc: "Comprehensive cover for peace of mind",
    icon: "ShieldCheck",
    category: "boilers",
  },
  {
    title: "Powerflushing",
    slug: "powerflushing",
    description: "Professional powerflushing service in Milton Keynes to restore your central heating efficiency. We remove sludge, rust, and debris from your system for better performance and lower energy bills.",
    shortDesc: "Restore heating efficiency & reduce bills",
    icon: "Droplets",
    category: "other",
  },
];

export const serviceDetails = {
  "boiler-installation": {
    whatsIncluded: [
      "Full site survey and professional recommendation",
      "Removal and disposal of old boiler",
      "Installation of new boiler by Gas Safe registered engineers",
      "Full system flush and cleaning",
      "Free Hive smart thermostat included",
      "Building regulations certification",
      "Up to 12-year manufacturer's warranty on new boiler",
      "12-month workmanship guarantee on pipework",
      "Aftercare support and emergency cover",
    ],
    whyChooseUs: [
      "Over 10 years of boiler installation experience",
      "All engineers are Gas Safe registered and certified",
      "Worcester Bosch & Vaillant accredited installers",
      "Free Hive smart thermostat with every installation",
      "Up to 12-year warranty on new boiler installations",
      "Transparent pricing with no hidden costs",
      "100+ 5-star reviews on Google and Facebook",
      "Covering Milton Keynes and up to 50 miles",
    ],
  },
  "boiler-repair": {
    whatsIncluded: [
      "Same-day emergency callout available",
      "Full diagnostic assessment",
      "Repair of all makes and models",
      "Genuine manufacturer parts used where possible",
      "12-month guarantee on all repairs",
      "Upfront transparent pricing",
      "Clean and tidy work area",
      "Safety checks after completion",
      "Expert advice on boiler efficiency and maintenance",
    ],
    whyChooseUs: [
      "24/7 emergency repair service available",
      "Expert diagnosis first time - rapid problem-solving",
      "We carry common parts on our vans for faster fixes",
      "Transparent pricing - you know the cost upfront",
      "Same-day repairs completed where possible",
      "Honest advice - we won't sell you a new boiler if you don't need one",
      "12-month guarantee on all parts and labour",
      "Trusted by homeowners across Milton Keynes",
    ],
  },
  "boiler-servicing": {
    whatsIncluded: [
      "Complete boiler inspection and testing",
      "Flue gas analysis and emissions check",
      "Internal component cleaning",
      "Safety device testing",
      "Gas pressure and temperature checks",
      "Gas tightness test",
      "Full service report and certificate",
      "Minor adjustments and optimisation",
      "Expert advice on efficiency improvements",
    ],
    whyChooseUs: [
      "Thorough servicing following manufacturer guidelines",
      "Helps maintain your boiler warranty",
      "Reduces the risk of costly breakdowns",
      "Improves efficiency and lowers energy bills",
      "Early detection of potential issues",
      "Same-day service appointments available",
      "Reminder service for next year's maintenance",
      "Discounts available for multiple properties",
    ],
  },
  "gas-safety-certificate": {
    whatsIncluded: [
      "Testing all gas appliances for safe operation",
      "Checking gas pipework for leaks or defects",
      "Ventilation and flue assessments",
      "Boiler performance evaluation",
      "Safety device functionality tests",
      "Official CP12 certificate issued",
      "Detailed digital certificate for easy storage",
      "Annual renewal reminder service",
      "Emergency repair service if issues found during inspection",
    ],
    whyChooseUs: [
      "Fully compliant with current regulations",
      "Fast appointment availability for renewals and new tenancies",
      "Gas Safe registered engineers",
      "Transparent pricing with no complications",
      "Digital certificates for easy sharing with tenants and agents",
      "Professional reporting without complications",
      "Discounts for multiple properties",
      "Expert advice on maintaining compliance",
    ],
  },
  "emergency-plumbing": {
    whatsIncluded: [
      "24/7 emergency response service",
      "Fast attendance across Milton Keynes",
      "Full diagnostic and assessment",
      "Emergency repairs and leak stopping",
      "Water isolation if required",
      "Temporary solutions for overnight issues",
      "Permanent repairs scheduled as needed",
      "Follow-up service included",
      "Insurance-compliant documentation",
    ],
    whyChooseUs: [
      "Available 24 hours a day, 365 days a year",
      "Fast response times across Milton Keynes and surrounding areas",
      "Fully stocked vans for immediate repairs",
      "Experienced in all types of plumbing emergencies",
      "Minimal disruption to your property",
      "Transparent pricing even in emergencies",
      "Trusted by homeowners and landlords alike",
      "100+ 5-star reviews from satisfied customers",
    ],
  },
  "boiler-cover": {
    whatsIncluded: [
      "Annual boiler service included in all plans",
      "No call-out charges for covered repairs",
      "24/7 emergency helpline access",
      "Priority response for covered customers",
      "Parts and labour included (Gold & Platinum)",
      "Full central heating system cover (Platinum)",
      "No excess fees on claims",
      "Monthly or annual payment options",
      "Cancel anytime with 30 days notice",
    ],
    whyChooseUs: [
      "Affordable monthly plans to suit every budget",
      "Covers annual servicing so your warranty stays valid",
      "No hidden costs - everything included in your plan",
      "Priority booking for covered customers",
      "Gas Safe registered engineers for every visit",
      "Parts and labour included - no surprise bills",
      "Trusted by homeowners across Milton Keynes",
      "Easy setup with flexible payment options",
    ],
  },
  "underfloor-heating": {
    whatsIncluded: [
      "Free home survey and heat loss calculation",
      "System design and layout planning",
      "Choice of wet or electric systems",
      "Professional installation by qualified engineers",
      "Insulation boards and levelling compound",
      "Thermostat and smart controls",
      "System testing and commissioning",
      "Full operating instructions",
      "Manufacturer's warranty registration",
    ],
    whyChooseUs: [
      "Specialists in both new builds and retrofits",
      "Energy-efficient systems that reduce running costs",
      "Even heat distribution with no cold spots",
      "Compatible with all floor finishes",
      "Smart control integration available",
      "Professional installation with minimal disruption",
      "Competitive pricing",
      "Full aftercare and maintenance support",
    ],
  },
  "powerflushing": {
    whatsIncluded: [
      "Full central heating system assessment",
      "Connection of powerflushing machine to your system",
      "High-velocity flush of all radiators and pipework",
      "Removal of sludge, rust, and limescale deposits",
      "Chemical treatment to break down stubborn blockages",
      "System inhibitor added to prevent future corrosion",
      "Magnetic filter check and cleaning",
      "Radiator balancing after flush",
      "Post-flush system test and performance check",
    ],
    whyChooseUs: [
      "Experienced engineers using professional-grade equipment",
      "Noticeable improvement in heating performance",
      "Can reduce energy bills by improving boiler efficiency",
      "Extends the lifespan of your boiler and radiators",
      "Eliminates cold spots on radiators",
      "Reduces boiler noise caused by sludge build-up",
      "Transparent pricing with no hidden costs",
      "Trusted by homeowners across Milton Keynes",
    ],
  },
};

export const trustSignals = [
  "Gas Safe Registered",
  "24/7 Emergency Service",
  "12-Month Guarantee",
  "Up to 12-Year Boiler Warranty",
  "Transparent Pricing",
];

export const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "100+", label: "5-Star Reviews" },
  { number: "5.0", label: "Google Rating" },
  { number: "50mi", label: "Coverage Radius" },
];

export const testimonials = [
  {
    name: "Callista Anowo",
    location: "Milton Keynes",
    rating: 5,
    text: "Robert and Sam was amazing and friendly. They provided a quality service and I would highly recommend them to anyone looking for reliable plumbing and heating work.",
    source: "google" as const,
    initials: "CA",
  },
  {
    name: "Kyle Mawby",
    location: "Milton Keynes",
    rating: 5,
    text: "I couldn't be more impressed with the service from Plumbline MK. Professional, polite, and did an excellent job all around! Will definitely use them again.",
    source: "google" as const,
    initials: "KM",
  },
  {
    name: "Verified Customer",
    location: "Newport Pagnell",
    rating: 5,
    text: "Called them for an emergency boiler repair and they responded quickly. The engineer was knowledgeable and had our heating back on the same day. Great value for money.",
    source: "google" as const,
    initials: "NP",
  },
  {
    name: "Verified Customer",
    location: "Bedford",
    rating: 5,
    text: "Had a new Worcester Bosch boiler installed with a free Hive thermostat. The whole process was smooth and stress-free. 12-year warranty gives great peace of mind.",
    source: "facebook" as const,
    initials: "BD",
  },
  {
    name: "Verified Customer",
    location: "Buckingham",
    rating: 5,
    text: "Used Plumbline MK for our landlord gas safety certificates across multiple properties. Fast, efficient, and very reasonably priced. Highly recommended for landlords.",
    source: "facebook" as const,
    initials: "BK",
  },
];

export const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "Are your engineers Gas Safe registered?",
        a: "Yes, all our engineers at Plumbline MK are fully qualified and Gas Safe registered. We undergo regular training to stay up-to-date with the latest regulations and best practices.",
      },
      {
        q: "What areas do you cover?",
        a: "We cover Milton Keynes and surrounding areas up to 50 miles away, including Newport Pagnell, Bedford, Buckingham, Aylesbury, Northampton, Bedfordshire, and Hertfordshire. Contact us to check if we cover your area.",
      },
      {
        q: "Do you offer free quotes?",
        a: "Yes, we provide free, no-obligation quotes for all our services. You can request a quote online, by phone, via WhatsApp, or we can arrange a home visit.",
      },
    ],
  },
  {
    category: "Boiler Installation",
    questions: [
      {
        q: "How much does a boiler installation cost?",
        a: "Every installation is different, so we provide a free, no-obligation quote tailored to your home. Contact us and we'll give you an upfront price with no hidden costs.",
      },
      {
        q: "What brands of boiler do you install?",
        a: "As accredited installers for Worcester Bosch and Vaillant, we can offer extended warranties of up to 12 years on selected models, giving you complete peace of mind and long-term protection. We also supply and install a wide range of other leading boiler brands, ensuring you receive the best solution for your home — whether you're replacing an old system or installing a brand-new one.",
      },
      {
        q: "What warranty do you offer on new boilers?",
        a: "As accredited installers for Worcester Bosch and Vaillant, we can offer extended warranties of up to 12 years on selected models, giving you complete peace of mind and long-term protection. We also provide a 12-month guarantee on all pipework and labour carried out by Plumbline MK.",
      },
    ],
  },
  {
    category: "Repairs & Servicing",
    questions: [
      {
        q: "How often should I get my boiler serviced?",
        a: "We recommend getting your boiler serviced once a year. Annual servicing helps identify issues early, maintain efficiency, and keeps your manufacturer's warranty valid.",
      },
      {
        q: "What is included in a boiler service?",
        a: "A typical boiler service includes safety checks, cleaning of internal components, checking for leaks or corrosion, and testing gas pressure and flue. You'll receive a full service report.",
      },
      {
        q: "How do I know if I need a new boiler?",
        a: "Signs include frequent breakdowns, rising energy bills, strange noises, or if your boiler is over 10-15 years old. We offer honest advice and won't sell you a new boiler if you don't need one.",
      },
      {
        q: "What should I do if my boiler shows an error code?",
        a: "Try resetting the boiler using the instructions in your manual. If the issue persists, contact us and we can diagnose the problem - often the same day.",
      },
    ],
  },
  {
    category: "Gas Safety",
    questions: [
      {
        q: "Can you provide a landlord gas safety certificate?",
        a: "Yes! As your trusted local plumbers in Milton Keynes we can definitely provide landlord gas safety certificates (CP12). We offer fast appointments and digital certificates.",
      },
      {
        q: "Do you handle legionella water testing?",
        a: "Yes, whether you need an emergency boiler repair or legionella water testing, we are happy to help. Contact us for pricing and availability.",
      },
      {
        q: "Can I book a boiler service online?",
        a: "Absolutely! You can book your boiler service directly through our website or by calling us on 07805 844 016.",
      },
    ],
  },
];

export const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        group: "Boilers",
        items: [
          { label: "Boiler Installation", href: "/services/boiler-installation" },
          { label: "Boiler Repair", href: "/services/boiler-repair" },
          { label: "Boiler Servicing", href: "/services/boiler-servicing" },
          { label: "Gas Safety Certificate", href: "/services/gas-safety-certificate" },
          { label: "Boiler Cover Plans", href: "/services/boiler-cover" },
        ],
      },
      {
        group: "Other Services",
        items: [
          { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
          { label: "Underfloor Heating", href: "/services/underfloor-heating" },
          { label: "Powerflushing", href: "/services/powerflushing" },
        ],
      },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
];

export const areasServed = [
  "Milton Keynes",
  "Newport Pagnell",
  "Bedford",
  "Buckingham",
  "Aylesbury",
  "Northampton",
  "Bedfordshire",
  "Hertfordshire",
];
