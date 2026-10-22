/**
 * Central school configuration: name, contact details, navigation and SEO defaults.
 *
 * Values in [square brackets] or marked TODO are placeholders. Replace them
 * before launch; every page, the footer, metadata and structured data read from here.
 */

export const siteConfig = {
  name: "Falah Academy",
  shortName: "Falah",
  tagline: "Learning Today. Leading Tomorrow.",
  domain: "falahacademy.example", // TODO: replace with the live production domain
  baseUrl: "https://falahacademy.example", // TODO: used for metadataBase, sitemap, OG tags
  foundingYear: null as number | null, // TODO: e.g. 2015; used in structured data once set

  seo: {
    title: "Falah Academy | Montessori to Intermediate School in Karachi",
    description:
      "Falah Academy is a school in Karachi offering education from Montessori to Intermediate: strong academics, Matric and Intermediate board exam preparation, character building and a safe, caring campus.",
    ogImage: "/images/hero/students-classroom.jpg",
    keywords: [
      "Falah Academy",
      "school in Karachi",
      "Montessori in Karachi",
      "school in Pakistan",
      "Montessori education",
      "primary school",
      "secondary school",
      "Matric",
      "Intermediate college",
      "quality education",
      "school admissions",
    ],
  },

  description:
    "Quality education from Montessori to Intermediate, built on strong academics, good character and a supportive learning environment.",

  // ---- Contact details -------------------------------------------------
  contact: {
    address: "20/1, Moinabad, Alfalah Society, Malir Halt",
    city: "Karachi",
    country: "Pakistan",
    phone: "+92 319 0818093",
    phoneHref: "tel:+923190818093", // Call buttons are hidden while empty
    whatsappHref: "https://wa.me/923190818093", // WhatsApp buttons are hidden while empty
    email: "[Add Email Address]", // TODO
    emailHref: "", // TODO: e.g. "mailto:info@your-domain"; link is hidden while empty
    hours: { days: "Monday – Friday", time: "8:00 AM – 3:00 PM" },
    // Google Maps embed URL (Share → Embed a map → copy the src). Placeholder panel shows while empty.
    mapEmbedUrl: "https://maps.google.com/maps?q=24.8766369,67.1770754&z=17&output=embed",
    mapLinkUrl: "https://maps.app.goo.gl/DLHxt1Jz4Wa182nWA", // powers "Get Directions" buttons
  },

  // Icons always show; while a URL is empty its icon is shown but not linked.
  social: {
    facebook: "", // TODO
    instagram: "", // TODO
    youtube: "", // TODO
    linkedin: "", // TODO
  },

  // ---- Contact form delivery ---------------------------------------------
  // The site is a static export with no server, so the contact form either:
  // 1) POSTs to a static-form provider (Formspree, Getform, Basin…) when
  //    `contactFormEndpoint` is set, or
  // 2) opens a pre-filled email to `contact.email` in the visitor's mail app.
  contactFormEndpoint: "", // TODO optional

  // header navigation (kept short so it fits on one line)
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Student Life", href: "/student-life" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  // every page: mobile menu, sitemap
  pages: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Student Life", href: "/student-life" },
    { label: "Facilities", href: "/facilities" },
    { label: "Gallery", href: "/gallery" },
    { label: "News & Events", href: "/news-events" },
    { label: "Contact Us", href: "/contact" },
  ],

  footer: {
    explore: [
      { label: "About Us", href: "/about" },
      { label: "Student Life", href: "/student-life" },
      { label: "Facilities", href: "/facilities" },
      { label: "Gallery", href: "/gallery" },
      { label: "News & Events", href: "/news-events" },
    ],
    admissions: [
      { label: "Admission Process", href: "/admissions#process" },
      { label: "Required Documents", href: "/admissions#requirements" },
      { label: "Apply Online", href: "/admissions#apply" },
      { label: "FAQs", href: "/contact#faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },

  applyHref: "/admissions#apply",
} as const;

export type SiteConfig = typeof siteConfig;
