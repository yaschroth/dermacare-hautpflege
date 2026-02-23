// dermacare Kosmetikstudio Heilbronn Configuration
// Medizinische Hautpflege am Berliner Platz

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "dermacare",
    tagline: "Medizinische Hautpflege in Heilbronn",
    description: "Durch gezielte medizinische Hautpflege wie Microneedling, Microdermabrasion, Mesoporation und hochwertige kosmetische Pflegebehandlung kann die Haut wieder regeneriert und geschützt werden.",
    foundingYear: 2005,
    yearsExperience: 20,
    satisfiedClients: "3.000+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "07131 8730611",
    phoneLink: "tel:+4971318730611",
    email: "info@dermacare-hautpflege.de",
    whatsapp: "+49 7131 8730611",
    whatsappLink: "https://wa.me/4971318730611",
    address: {
      street: "Berliner Platz 4",
      city: "Heilbronn",
      district: "am Theater",
      zip: "74072",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sBerliner%20Platz%204%2C%2074072%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Berliner+Platz+4,+74072+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo, Mi, Do, Fr 10-13 & 14-18:30",
    saturday: "Di & Sa 10-13 Uhr",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung auch außerhalb der Öffnungszeiten",
    display: "Mo-Fr 10:00-18:30",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 5.0,
    count: "5+",
    googleReviewLink: "https://g.page/dermacare-heilbronn/review",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Silke",
    fullName: "Silke Staudinger",
    image: "/beauty/frau.jpg",
    bio: [
      "Unsere Behandlungen werden nach einer eingehenden Diagnose genau auf Ihren Hauttyp abgestimmt. So kann die Haut wieder regeneriert und geschützt werden.",
      "Für die Pflege Ihrer Haut verwenden wir ausschließlich hochwertige Produkte, wie zum Beispiel THALGO, La Mer oder L'OCCITANE.",
      "Unsere Produktlinien mit hochwirksamen Peelings, Pflanzenstoffen und Masken sind nicht komedogen, ohne Mineralöl, irritierende Farb- oder Duftstoffe. Die Produkte verzichten auf Tierversuche.",
    ],
    certifications: [
      { label: "Medizinische Kosmetik", icon: "shield" },
      { label: "20+ Jahre Erfahrung", icon: "star" },
      { label: "THALGO Spezialistin", icon: "award" },
      { label: "Individuelle Beratung", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Anna-Chiara F.",
      rating: 5,
      text: "Alles Top! Sehr kompetente Beratung und angenehme Atmosphäre. Ich komme immer wieder gerne.",
      service: "Gesichtsbehandlung",
      date: "vor 2 Wochen",
    },
    {
      name: "Martina S.",
      rating: 5,
      text: "Sehr gute Beratung bzgl. der Narbenbehandlung mithilfe von Microneedling. Die Behandlungen waren angenehm und sehr erfolgreich!",
      service: "Microneedling",
      date: "vor 1 Monat",
    },
    {
      name: "Claudia K.",
      rating: 5,
      text: "Die THALGO Behandlung war ein absolutes Highlight. Meine Haut fühlt sich seitdem wie neu an. Sehr empfehlenswert!",
      service: "THALGO Behandlung",
      date: "vor 3 Wochen",
    },
    {
      name: "Petra H.",
      rating: 5,
      text: "Frau Staudinger nimmt sich wirklich Zeit für eine individuelle Beratung. Die Produkte sind hochwertig und die Ergebnisse sprechen für sich.",
      service: "Medizinische Hautpflege",
      date: "vor 1 Woche",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Microneedling",
      description: "Medizinische Hautbehandlung zur Narbenkorrektur und Hautverjüngung. Stimuliert die natürliche Kollagenproduktion für ein strafferes Hautbild.",
      price: "ab 110 €",
      image: "/beauty/microneedling.jpg",
      benefits: ["Narbenkorrektur", "Kollagenaufbau"],
    },
    {
      title: "Microdermabrasion",
      description: "Kontrollierte mechanische Abtragung der oberen Hautschichten ohne chemische Wirkstoffe. Für einen ebenmäßigen, strahlenden Teint.",
      price: "ab 59 €",
      image: "/beauty/face.jpg",
      benefits: ["Hauterneuerung", "Ebenmäßiger Teint"],
    },
    {
      title: "Mesoporation",
      description: "Innovative Methode nach Dr. Dr. Stein Tveten zur schmerzfreien Einschleusung von Wirkstoffen in tiefe Hautschichten. Ca. 90 Minuten.",
      price: "ab 85 €",
      image: "/beauty/face2.jpg",
      benefits: ["Schmerzfrei", "Tiefenwirkung"],
    },
    {
      title: "THALGO Behandlungen",
      description: "Luxuriöse Meereskosmetik-Behandlungen mit hochwertigen Wirkstoffen aus dem Meer. Anti-Age, Hyposensine oder Source Marine.",
      price: "ab 59 €",
      image: "/beauty/hero%20main.webp",
      benefits: ["Meereskosmetik", "90 Minuten"],
    },
    {
      title: "iBeauty Behandlung",
      description: "Moderne Gesichtsbehandlung mit drei fortschrittlichen Technologien für sichtbare Anti-Aging Ergebnisse und strahlende Haut.",
      price: "ab 59 €",
      image: "/beauty/behandlung%203.png",
      benefits: ["Anti-Aging", "Sofort-Effekt"],
    },
    {
      title: "Feuchtigkeitsbehandlung",
      description: "60-minütige Behandlung mit Hautdiagnose, Enzym-Peeling, Massage und Hydro-Algenmaske. Mit La Mer Produkten.",
      price: "59 €",
      image: "/beauty/kopfmassage.png",
      benefits: ["60 Minuten", "La Mer Produkte"],
    },
    {
      title: "Unreine Haut",
      description: "45-minütige Spezialbehandlung mit La mer MED PURE SKIN. Hautdiagnose, Reinigung, Peeling, Maske und Abschlusspflege.",
      price: "50 €",
      image: "/beauty/acne-after.png",
      benefits: ["45 Minuten", "Pure Skin Factor"],
    },
    {
      title: "Sugaring & Waxing",
      description: "Sanfte Haarentfernung mit EpilaDerm® Zuckerpaste oder Warmwachs. Für glatte Haut am ganzen Körper.",
      price: "ab 8 €",
      image: "/beauty/behandlung%202.webp",
      benefits: ["Sanft zur Haut", "Langanhaltend"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Medizinische Behandlungen",
      items: [
        { name: "Microneedling Gesicht", price: "110 €" },
        { name: "Microneedling Gesicht + Hals", price: "130 €" },
        { name: "Microneedling Gesicht + Hals + Décolleté", price: "160 €" },
        { name: "Microdermabrasion (40 Min.)", price: "59 €" },
        { name: "Microdermabrasion 4er Kur", price: "225 €" },
        { name: "Mesoporation (90 Min.)", price: "85 €" },
        { name: "Mesoporation 5er Kur", price: "390 €" },
      ],
    },
    {
      category: "THALGO Behandlungen",
      items: [
        { name: "Anti-Age mit maritimem Silizium (90 Min.)", price: "69 €" },
        { name: "Hyposensine Cold Marine Mask (90 Min.)", price: "59 €" },
        { name: "Source Marine Feuchtigkeit (90 Min.)", price: "65 €" },
        { name: "Meersalz-Körperpeeling & Massage (45 Min.)", price: "45 €" },
        { name: "Frigi-Thalgo (40 Min.)", price: "39 €" },
      ],
    },
    {
      category: "iBeauty Behandlungen",
      items: [
        { name: "Jugendliches Aussehen (75 Min.)", price: "85 €" },
        { name: "Anti-Falten Behandlung (75 Min.)", price: "95 €" },
        { name: "Klärende Behandlung (45 Min.)", price: "59 €" },
        { name: "Feuchtigkeitsspendend (75 Min.)", price: "75 €" },
      ],
    },
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Feuchtigkeitsbehandlung (60 Min.)", price: "59 €" },
        { name: "Behandlung unreine Haut (45 Min.)", price: "50 €" },
        { name: "M-CEUTIC Renovation Radicale", price: "85 €" },
      ],
    },
    {
      category: "Sugaring (EpilaDerm®)",
      items: [
        { name: "Oberlippe / Kinn", price: "8 €" },
        { name: "Achseln / Unterarme", price: "15 €" },
        { name: "Arme komplett", price: "20 €" },
        { name: "Unterschenkel inkl. Knie", price: "30 €" },
        { name: "Beine komplett", price: "40 €" },
        { name: "Brazilian", price: "30 €" },
      ],
    },
    {
      category: "Waxing & Extras",
      items: [
        { name: "Waxing Oberlippe", price: "8 €" },
        { name: "Waxing Beine komplett", price: "38 €" },
        { name: "Brazilian Waxing", price: "25 €" },
        { name: "Wimpern / Augenbrauen färben", price: "8 €" },
        { name: "Maniküre mit Lack", price: "20 €" },
        { name: "Pediküre mit Lack", price: "25 €" },
        { name: "Ganzkörper-Öl-Massage (45 Min.)", price: "40 €" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "Medizinische Hautpflege bei dermacare in Heilbronn",
    hygiene: "/beauty/contact.png",
    gallery: [
      { url: "/beauty/face.jpg", category: "Behandlung" },
      { url: "/beauty/face2.jpg", category: "Behandlung" },
      { url: "/beauty/microneedling.jpg", category: "Behandlung" },
      { url: "/beauty/behandlung%202.webp", category: "Behandlung" },
      { url: "/beauty/behandlung%203.png", category: "Behandlung" },
      { url: "/beauty/hero%20main.webp", category: "Behandlung" },
      { url: "/beauty/wimpern.png", category: "Augen" },
      { url: "/beauty/wimpern%20(2).webp", category: "Augen" },
      { url: "/beauty/eyebrow-after.png", category: "Augen" },
      { url: "/beauty/kopfmassage.png", category: "Wellness" },
      { url: "/beauty/klangschale.jpg", category: "Wellness" },
      { url: "/beauty/maniküre%20neu.png", category: "Pflege" },
      { url: "/beauty/maniküre%203.png", category: "Pflege" },
      { url: "/beauty/pedicure.webp", category: "Pflege" },
      { url: "/beauty/acne-after.png", category: "Ergebnisse" },
      { url: "/beauty/contact.png", category: "Studio" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Medical teal/turquoise
  // ============================================
  colors: {
    primary: "#5BA4A4", // Medical teal
    primaryRgb: "91, 164, 164",
    dark: "#1A2F2F",
    light: "#F5FAFA",
    lightAlt: "#E8F4F4",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Qualität & Philosophie",
    description: "Unsere Produktlinien mit hochwirksamen Peelings, Pflanzenstoffen und Masken sind nicht komedogen, ohne Mineralöl, irritierende Farb- oder Duftstoffe. Die Produkte verzichten auf Tierversuche.",
    features: [
      {
        icon: "shield",
        title: "Medizinische Kosmetik",
        description: "Spezialisiert auf gezielte medizinische Hautpflege und Regeneration.",
      },
      {
        icon: "check",
        title: "Premium Marken",
        description: "Ausschließlich hochwertige Produkte von THALGO, La Mer und L'OCCITANE.",
      },
      {
        icon: "award",
        title: "Ohne Tierversuche",
        description: "Alle Produkte sind nicht komedogen, ohne Mineralöl und tierversuchsfrei.",
      },
      {
        icon: "star",
        title: "20+ Jahre Erfahrung",
        description: "Langjährige Expertise in medizinischer und klassischer Kosmetik.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.svg",
    alt: "dermacare Kosmetikstudio Heilbronn Logo",
  },
};

export type Config = typeof config;
