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
    facebook: "https://www.facebook.com/p/Plumbline-MK-61576499655937/",
    instagram: "https://instagram.com/plumblinemk.co.uk",
    whatsapp: "https://wa.me/447805844016",
    google: "https://www.google.com/maps/place/Plumbline+MK/@51.8841301,-0.7718805,9z/data=!4m8!3m7!1s0x6dccf4fd0608593b:0x2832ec67ff678ecc!8m2!3d51.8841301!4d-0.7718806!9m1!1b1!16s%2Fg%2F11wqy4nvd2",
  },
  gasSafeNumber: "957816",
  domain: "plumblinemk.co.uk",
};

export const services = [
  {
    title: "Boiler Installation",
    slug: "boiler-installation",
    description: "Professional boiler installation Milton Keynes homeowners can trust. Worcester Bosch & Vaillant accredited with up to 12-year warranty on new installations.",
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

export const servicePainPoints: Record<string, string> = {
  "boiler-installation": "Are you tired of unreliable heating during winter? Concerned about the safety of your current boiler? A new, efficient boiler can transform your home comfort and slash your energy bills.",
  "boiler-repair": "Is your boiler making strange noises, losing pressure, or showing error codes? Don't let a faulty boiler leave you without heating or hot water. Our expert engineers diagnose and fix issues fast.",
  "boiler-servicing": "Worried about your boiler breaking down when you need it most? Annual servicing catches small problems before they become expensive emergencies, keeps your warranty valid, and ensures your family's safety.",
  "gas-safety-certificate": "As a landlord, staying compliant with gas safety regulations is both a legal requirement and your duty to tenants. Non-compliance can result in fines up to £6,000 or prosecution.",
  "emergency-plumbing": "Boiler broken down in the middle of the night? No heating or hot water? A burst pipe flooding your home? We understand how stressful plumbing emergencies are, which is why we're available 24/7.",
  "underfloor-heating": "Tired of cold floors in winter? Struggling with high energy bills due to inefficient heating systems? Underfloor heating provides even warmth throughout your home while reducing energy costs.",
  "boiler-cover": "Worried about unexpected repair bills? Tired of searching for a reliable engineer every time something goes wrong? Our boiler cover plans give you complete peace of mind with priority response.",
  "powerflushing": "Are your radiators cold at the bottom? Is your boiler making banging noises? These are signs of sludge build-up that's reducing your heating efficiency and increasing your energy bills.",
};

export const serviceDetails = {
  "boiler-installation": {
    whatsIncluded: [
      "Full site survey and professional recommendation",
      "Removal and disposal of old boiler",
      "Installation of new boiler by Gas Safe registered engineers",
      "Full system flush and cleaning - removes sludge and debris to ensure your new boiler operates at peak efficiency from day one",
      "Free Hive smart thermostat included - control your heating remotely from your phone for maximum comfort and energy savings",
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
      "Full diagnostic assessment - we identify the root cause of the problem quickly, saving you time and money on unnecessary parts",
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
      "Annual boiler service included in all plans - keeps your warranty valid and catches issues early",
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
      "Thermostat and smart controls - adjust heating remotely for optimal comfort and energy savings",
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
        a: "Yes, all Plumbline MK engineers are fully qualified and Gas Safe registered (you can verify on the Gas Safe Register website). We carry our Gas Safe ID cards on every job and our registration number is displayed on all documentation.",
      },
      {
        q: "What areas do you cover?",
        a: "We cover Milton Keynes and surrounding areas within a 50-mile radius, including Newport Pagnell, Buckingham, Bedford, Northampton, Luton, and Leighton Buzzard.",
      },
      {
        q: "Do you offer free quotes?",
        a: "Yes, all quotes are completely free with no obligation. Call us on 07805 844 016, WhatsApp us, or fill in our online form and we'll get back to you within 2 hours during business hours.",
      },
    ],
  },
  {
    category: "Boiler Installation",
    questions: [
      {
        q: "How much does a boiler installation cost?",
        a: "A new boiler installation in Milton Keynes typically costs between \u00A31,800 and \u00A33,500, depending on the boiler type, size, and complexity of the installation. A standard combi boiler swap (like-for-like) starts from around \u00A31,800. System or heat-only boilers, or installations requiring pipework changes, may cost more. All our quotes are fixed-price with no hidden fees. We also include a free Hive smart thermostat with every installation.",
      },
      {
        q: "What brands of boiler do you install?",
        a: "We are accredited installers for Worcester Bosch, Vaillant, Baxi, and Ideal boilers. We recommend Worcester Bosch and Vaillant as our top choices for reliability and efficiency. Being an accredited installer means we can offer extended manufacturer warranties of up to 12 years.",
      },
      {
        q: "What warranty do you offer on new boilers?",
        a: "We offer up to 12 years manufacturer warranty on new Worcester Bosch boilers and up to 10 years on Vaillant boilers when installed by our accredited engineers. We also provide a 12-month workmanship guarantee on all pipework and labour.",
      },
    ],
  },
  {
    category: "Repairs & Servicing",
    questions: [
      {
        q: "How often should I get my boiler serviced?",
        a: "Your boiler should be serviced once a year, ideally before winter. Annual servicing keeps your boiler running efficiently, maintains your warranty, and is a legal requirement for landlords. It also catches small problems before they become expensive repairs.",
      },
      {
        q: "What is included in a boiler service?",
        a: "A full boiler service includes: visual inspection of the boiler and flue, checking gas pressure and flow, cleaning the burner and heat exchanger, testing safety devices, checking for carbon monoxide leaks, inspecting seals and gaskets, and a full system performance check. You'll receive a service report at the end.",
      },
      {
        q: "How do I know if I need a new boiler?",
        a: "Signs you may need a new boiler include: it's over 15 years old, frequent breakdowns, rising energy bills, uneven heating, yellow or orange flame instead of blue, strange noises (banging, kettling, whistling), or the cost of repairs is approaching 50% of a new boiler cost. Our engineers will always give you an honest assessment.",
      },
      {
        q: "What should I do if my boiler shows an error code?",
        a: "Don't ignore error codes. Common codes like E1, F1, or EA on Worcester Bosch boilers often indicate low pressure or ignition faults. First, check your boiler pressure gauge (should be between 1-1.5 bar). If it's low, try repressurising the system. If the error persists or you're unsure, call us on 07805 844 016 - do not attempt to fix gas components yourself.",
      },
    ],
  },
  {
    category: "Gas Safety",
    questions: [
      {
        q: "Can you provide a landlord gas safety certificate?",
        a: "Yes, we provide CP12 Gas Safety Certificates for landlords across Milton Keynes and surrounding areas. Landlords are legally required to have a gas safety check carried out annually by a Gas Safe registered engineer. We offer competitive rates for single properties and portfolios.",
      },
      {
        q: "Do you handle legionella water testing?",
        a: "Yes, we can carry out legionella risk assessments and water testing as part of our landlord services. This is particularly important for properties with stored water systems.",
      },
      {
        q: "Can I book a boiler service online?",
        a: "Yes, you can request a booking through our online contact form at plumblinemk.co.uk/contact, or call us on 07805 844 016, or WhatsApp us. We aim to respond within 2 hours and can usually book within 1-3 days.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What does a Worcester accredited installer mean?",
        a: "Worcester Bosch Accredited Installer status means our engineers have completed specialist training directly with Worcester Bosch. This allows us to offer extended warranties of up to 12 years (vs the standard 2 years), priority technical support, and access to genuine Worcester Bosch parts. It's the highest level of certification for installing Worcester Bosch boilers.",
      },
      {
        q: "Why is my boiler losing pressure?",
        a: "Boiler pressure loss is usually caused by a small water leak somewhere in the system (check radiator valves and visible pipework), a recently bled radiator, or a faulty pressure relief valve. If your pressure drops below 1 bar, you can repressurise using the filling loop (check your boiler manual). If pressure keeps dropping, call us - it likely indicates a leak that needs fixing.",
      },
      {
        q: "How much does a plumber cost in Milton Keynes?",
        a: "Our call-out rate starts from \u00A365 for standard plumbing jobs. Boiler repairs typically range from \u00A380-\u00A3300 depending on the fault. We always provide a fixed quote before starting any work so there are no surprises. Emergency call-outs outside business hours may carry a higher rate.",
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
  { label: "Guides", href: "/guides" },
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
