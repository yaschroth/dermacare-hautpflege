// dermacare Kosmetikstudio Heilbronn Configuration
// Medizinische Hautpflege am Berliner Platz

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "dermacare",
    tagline: "Medizinische Hautpflege in Heilbronn",
    description: "Gezielte medizinische Hautpflege für Ihre Haut. Durch individuelle Diagnose und hochwertige Produkte von THALGO, La Mer und L'OCCITANE kann die Haut wieder regeneriert und geschützt werden.",
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
      "Als Inhaberin von dermacare widme ich mich seit über 20 Jahren der medizinischen Hautpflege. Mein Fokus liegt auf gezielten Behandlungen, die Ihre Haut nachhaltig regenerieren und schützen.",
      "In meinem Studio am Berliner Platz, direkt am Theater, biete ich Ihnen ein umfassendes Spektrum an medizinischen und kosmetischen Behandlungen. Von Microneedling über Microdermabrasion bis hin zu luxuriösen THALGO-Behandlungen.",
      "Ich arbeite ausschließlich mit hochwertigen Produkten von THALGO, La Mer und L'OCCITANE. Alle Produkte sind nicht komedogen, frei von Mineralöl und verzichten auf Tierversuche.",
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
      price: "auf Anfrage",
      image: "/beauty/microneedling.jpg",
      benefits: ["Narbenkorrektur", "Kollagenaufbau"],
    },
    {
      title: "Microdermabrasion",
      description: "Sanfte Abtragung der obersten Hautschicht für einen ebenmäßigen, strahlenden Teint. Ideal bei Pigmentflecken und feinen Linien.",
      price: "auf Anfrage",
      image: "/beauty/face.jpg",
      benefits: ["Hauterneuerung", "Ebenmäßiger Teint"],
    },
    {
      title: "Mesoporation",
      description: "Innovative Methode zur schmerzfreien Einschleusung von Wirkstoffen in tiefe Hautschichten. Ohne Nadeln, ohne Ausfallzeit.",
      price: "auf Anfrage",
      image: "/beauty/face2.jpg",
      benefits: ["Schmerzfrei", "Tiefenwirkung"],
    },
    {
      title: "THALGO Behandlungen",
      description: "Luxuriöse Meereskosmketik-Behandlungen mit hochwertigen Wirkstoffen aus dem Meer. Für intensive Pflege und Regeneration.",
      price: "auf Anfrage",
      image: "/beauty/hero%20main.webp",
      benefits: ["Meereskosmetik", "Intensive Pflege"],
    },
    {
      title: "iBeauty Behandlung",
      description: "Moderne Gesichtsbehandlung mit innovativer Technologie für sichtbare Anti-Aging Ergebnisse und strahlende Haut.",
      price: "auf Anfrage",
      image: "/beauty/behandlung%203.png",
      benefits: ["Anti-Aging", "Sofort-Effekt"],
    },
    {
      title: "Feuchtigkeitsbehandlung",
      description: "Intensive Hydration für trockene und beanspruchte Haut. Mit hochwertigen Wirkstoffen von La Mer und L'OCCITANE.",
      price: "auf Anfrage",
      image: "/beauty/kopfmassage.png",
      benefits: ["Intensive Hydration", "Premium Produkte"],
    },
    {
      title: "Akne Behandlung",
      description: "Gezielte Behandlung unreiner Haut mit medizinischer Kosmetik. Tiefenreinigung und entzündungshemmende Pflege.",
      price: "auf Anfrage",
      image: "/beauty/acne-after.png",
      benefits: ["Tiefenreinigung", "Klares Hautbild"],
    },
    {
      title: "Sugaring & Waxing",
      description: "Sanfte und effektive Haarentfernung mit natürlichen Methoden. Für glatte Haut am ganzen Körper.",
      price: "auf Anfrage",
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
        { name: "Microneedling Gesicht", price: "auf Anfrage" },
        { name: "Microneedling Gesicht + Hals", price: "auf Anfrage" },
        { name: "Microdermabrasion", price: "auf Anfrage" },
        { name: "Mesoporation Behandlung", price: "auf Anfrage" },
      ],
    },
    {
      category: "THALGO Behandlungen",
      items: [
        { name: "THALGO Basis Behandlung", price: "auf Anfrage" },
        { name: "THALGO Intensiv Behandlung", price: "auf Anfrage" },
        { name: "THALGO Luxus Behandlung", price: "auf Anfrage" },
      ],
    },
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Klassische Gesichtsbehandlung", price: "auf Anfrage" },
        { name: "Feuchtigkeitsbehandlung intensiv", price: "auf Anfrage" },
        { name: "Anti-Aging Behandlung", price: "auf Anfrage" },
        { name: "Akne Spezialbehandlung", price: "auf Anfrage" },
        { name: "iBeauty Behandlung", price: "auf Anfrage" },
      ],
    },
    {
      category: "Haarentfernung & Extras",
      items: [
        { name: "Sugaring Beine komplett", price: "auf Anfrage" },
        { name: "Sugaring Bikinizone", price: "auf Anfrage" },
        { name: "Waxing Gesicht", price: "auf Anfrage" },
        { name: "Augenbrauen zupfen & formen", price: "auf Anfrage" },
        { name: "Professionelles Make-up", price: "auf Anfrage" },
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
    headline: "Medizinische Qualität",
    description: "Ihre Hautgesundheit steht bei uns an erster Stelle. Alle Behandlungen werden unter strengsten medizinischen Standards durchgeführt.",
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
