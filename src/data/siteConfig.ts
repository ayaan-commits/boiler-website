export const siteConfig = {
  name: "BoilerPro",
  tagline: "Your Trusted Local Boiler & Heating Experts",
  phone: "0123 456 7890",
  emergencyPhone: "0123 456 7890",
  email: "info@boilerpro.co.uk",
  address: {
    street: "123 High Street",
    city: "Manchester",
    postcode: "M1 1AA",
    full: "123 High Street, Manchester, M1 1AA",
  },
  hours: {
    weekdays: "Mon - Fri: 8am - 6pm",
    saturday: "Sat: 9am - 4pm",
    sunday: "Sun: Emergency Only",
    emergency: "24/7 Emergency Callout",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    google: "https://google.com",
  },
  gasSafeNumber: "123456",
  companyNumber: "12345678",
};

export const services = [
  {
    title: "Boiler Installation",
    slug: "boiler-installation",
    description: "Expert installation of combi, system & conventional boilers from top brands like Worcester Bosch, Vaillant & Ideal.",
    shortDesc: "New boiler fitted by Gas Safe engineers",
    icon: "Flame",
    price: "From £1,800",
    category: "boilers",
  },
  {
    title: "Boiler Repair",
    slug: "boiler-repair",
    description: "Fast, reliable boiler repairs with same-day service available. We diagnose and fix all makes and models.",
    shortDesc: "Same-day repair service available",
    icon: "Wrench",
    price: "From £85",
    category: "boilers",
  },
  {
    title: "Boiler Servicing",
    slug: "boiler-servicing",
    description: "Annual boiler servicing to keep your heating running efficiently, safely, and maintain your warranty.",
    shortDesc: "Annual service & safety check",
    icon: "ClipboardCheck",
    price: "From £75",
    category: "boilers",
  },
  {
    title: "Gas Safety Certificate",
    slug: "gas-safety-certificate",
    description: "Landlord gas safety certificates (CP12). Legal requirement for all rental properties. Fast turnaround.",
    shortDesc: "CP12 certificates for landlords",
    icon: "ShieldCheck",
    price: "From £60",
    category: "boilers",
  },
  {
    title: "Emergency Plumbing",
    slug: "emergency-plumbing",
    description: "24/7 emergency plumbing service. Burst pipes, leaks, boiler breakdowns - we're here when you need us most.",
    shortDesc: "24/7 emergency response",
    icon: "Siren",
    price: "Call for quote",
    category: "other",
  },
  {
    title: "Underfloor Heating",
    slug: "underfloor-heating",
    description: "Professional underfloor heating installation for new builds and retrofits. Wet and electric systems available.",
    shortDesc: "Wet & electric systems installed",
    icon: "Thermometer",
    price: "From £1,200",
    category: "other",
  },
];

export const serviceDetails = {
  "boiler-installation": {
    whatsIncluded: [
      "Full site survey and professional recommendation",
      "Removal and disposal of old boiler",
      "Installation of new boiler by Gas Safe engineers",
      "Full system flush and cleaning",
      "New controls and thermostat (where required)",
      "Building regulations certification",
      "Manufacturer's warranty registration",
      "12-month workmanship guarantee",
      "Free annual service in first year",
    ],
    whyChooseUs: [
      "Over 20 years of boiler installation experience",
      "All engineers are Gas Safe registered and certified",
      "We only install top-quality brands with long warranties",
      "Competitive pricing with flexible finance options available",
      "Same-day or next-day installation available",
      "Full aftercare support and emergency cover",
      "No hidden costs - transparent pricing guaranteed",
      "Average 4.9/5 rating from over 500 customer reviews",
    ],
  },
  "boiler-repair": {
    whatsIncluded: [
      "Same-day emergency callout available",
      "Full diagnostic assessment",
      "Repair of all makes and models",
      "Genuine manufacturer parts used",
      "12-month guarantee on all repairs",
      "Fixed-price repairs (no surprises)",
      "Clean and tidy work area",
      "Safety checks after completion",
      "Advice on boiler efficiency and maintenance",
    ],
    whyChooseUs: [
      "24/7 emergency repair service available",
      "Expert diagnosis the first time - no repeat visits",
      "We carry a large stock of common parts on our vans",
      "Fixed pricing - you know the cost before we start",
      "Repairs completed same-day where possible",
      "Honest advice - we won't sell you a new boiler if you don't need one",
      "12-month guarantee on all parts and labour",
      "Trusted by over 5,000 customers across Manchester",
    ],
  },
  "boiler-servicing": {
    whatsIncluded: [
      "Complete boiler inspection and testing",
      "Flue gas analysis and emissions check",
      "Internal component cleaning",
      "Safety device testing",
      "Pressure and temperature checks",
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
      "Inspection of all gas appliances",
      "Flue and ventilation checks",
      "Gas tightness testing",
      "Safety device functionality tests",
      "Official CP12 certificate issued",
      "Detailed report of all findings",
      "Advice on any necessary repairs",
      "Digital certificate via email",
      "Reminder service for annual renewal",
    ],
    whyChooseUs: [
      "Fully compliant with current regulations",
      "Fast turnaround - same-day certificates available",
      "Landlord specialists with extensive experience",
      "Clear, detailed reports for your records",
      "Discounts for multiple properties",
      "Flexible scheduling to suit your tenants",
      "Digital certificates for easy management",
      "Expert advice on maintaining compliance",
    ],
  },
  "emergency-plumbing": {
    whatsIncluded: [
      "24/7 emergency response service",
      "Rapid attendance within 60-90 minutes",
      "Full diagnostic and assessment",
      "Emergency repairs and leak stopping",
      "Water isolation if required",
      "Temporary solutions for overnight issues",
      "Permanent repairs scheduled as needed",
      "Follow-up service included",
      "No callout charges for boiler customers",
    ],
    whyChooseUs: [
      "Available 24 hours a day, 365 days a year",
      "Average response time of 60 minutes",
      "Fully stocked vans for immediate repairs",
      "Experienced in all types of plumbing emergencies",
      "Minimal disruption to your property",
      "Transparent pricing even in emergencies",
      "Insurance-compliant work and documentation",
      "Trusted by homeowners and businesses alike",
    ],
  },
  "underfloor-heating": {
    whatsIncluded: [
      "Free home survey and heat loss calculation",
      "System design and layout planning",
      "Choice of wet or electric systems",
      "Professional installation by certified engineers",
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
      "Competitive pricing with finance options",
      "Full aftercare and maintenance support",
    ],
  },
};

export const trustSignals = [
  "Gas Safe Registered",
  "24/7 Emergency Service",
  "12-Month Guarantee",
  "Free No-Obligation Quotes",
  "No Hidden Fees",
];

export const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "5,000+", label: "Boilers Installed" },
  { number: "4.9", label: "Google Rating" },
  { number: "500+", label: "5-Star Reviews" },
];

export const testimonials = [
  {
    name: "Sarah M.",
    location: "Manchester",
    rating: 5,
    text: "Absolutely brilliant service. The engineer arrived on time, explained everything clearly, and had our new boiler installed within the day. Highly recommend!",
  },
  {
    name: "James T.",
    location: "London",
    rating: 5,
    text: "Emergency callout at 10pm and they were here within an hour. Professional, friendly and fixed the issue quickly. Will definitely use again.",
  },
  {
    name: "Lisa R.",
    location: "Birmingham",
    rating: 5,
    text: "Had our annual boiler service done. The engineer was thorough, professional, and left everything spotless. Great value for money.",
  },
  {
    name: "David K.",
    location: "Leeds",
    rating: 5,
    text: "Needed a new boiler urgently. They gave us a fair quote, fitted it the next day, and the whole process was stress-free. Outstanding company.",
  },
  {
    name: "Emma W.",
    location: "Sheffield",
    rating: 5,
    text: "Used them for our landlord gas safety certificate. Quick, efficient, and very reasonable price. Will be using them for all our rental properties.",
  },
];

export const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "Are your engineers Gas Safe registered?",
        a: "Yes, all our engineers are fully Gas Safe registered and undergo regular training to stay up-to-date with the latest regulations and best practices.",
      },
      {
        q: "What areas do you cover?",
        a: "We cover Manchester and the surrounding areas including Bolton, Wigan, Oldham, Salford, Stockport, and Bury. Contact us to check if we cover your area.",
      },
      {
        q: "Do you offer free quotes?",
        a: "Yes, we provide free, no-obligation quotes for all our services. You can request a quote online, by phone, or we can arrange a home visit.",
      },
    ],
  },
  {
    category: "Boiler Installation",
    questions: [
      {
        q: "How long does a boiler installation take?",
        a: "A standard like-for-like boiler replacement typically takes 1 day. More complex installations, such as moving the boiler location or converting from a conventional to a combi system, may take 2-3 days.",
      },
      {
        q: "What brands of boiler do you install?",
        a: "We install boilers from leading manufacturers including Worcester Bosch, Vaillant, Ideal, and Baxi. We'll recommend the best option for your home and budget.",
      },
      {
        q: "Do you offer finance on new boilers?",
        a: "Yes, we offer flexible finance options including 0% APR plans. This allows you to spread the cost of your new boiler into manageable monthly payments.",
      },
    ],
  },
  {
    category: "Repairs & Servicing",
    questions: [
      {
        q: "How often should I service my boiler?",
        a: "We recommend having your boiler serviced annually. Regular servicing ensures your boiler runs efficiently, helps prevent breakdowns, and maintains your manufacturer's warranty.",
      },
      {
        q: "My boiler has broken down. How quickly can you attend?",
        a: "We offer same-day emergency repairs where possible. For urgent breakdowns, call our emergency line and we'll get an engineer to you as quickly as possible.",
      },
    ],
  },
  {
    category: "Gas Safety",
    questions: [
      {
        q: "What is a CP12 gas safety certificate?",
        a: "A CP12 is a landlord gas safety certificate. It's a legal requirement for all landlords to have gas appliances in rental properties checked annually by a Gas Safe registered engineer.",
      },
      {
        q: "How much does a gas safety certificate cost?",
        a: "Our gas safety certificates start from £60. We also offer discounts for multiple properties. Contact us for a quote.",
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
        ],
      },
      {
        group: "Other Services",
        items: [
          { label: "Emergency Plumbing", href: "/services/emergency-plumbing" },
          { label: "Underfloor Heating", href: "/services/underfloor-heating" },
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
