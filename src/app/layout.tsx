import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuickContactBar } from "@/components/layout/QuickContactBar";
import { siteConfig } from "@/content/site";
import { isFilled } from "@/lib/placeholder";

// headings
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

// body copy
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const { seo } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: seo.title,
    description: seo.description,
    images: [{ url: seo.ogImage, alt: "Smiling students in school uniform at their classroom desks" }],
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#071d3d",
};

// School / EducationalOrganization structured data for search engines.
// Placeholder contact details are left out until real ones are filled in.
const { contact } = siteConfig;
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["School", "EducationalOrganization"],
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  description: seo.description,
  slogan: siteConfig.tagline,
  ...(siteConfig.foundingYear && { foundingDate: String(siteConfig.foundingYear) }),
  image: `${siteConfig.baseUrl}${seo.ogImage}`,
  logo: `${siteConfig.baseUrl}/images/brand/logo-full.png`,
  address: {
    "@type": "PostalAddress",
    ...(isFilled(contact.address) && { streetAddress: contact.address }),
    ...(isFilled(contact.city) && { addressLocality: contact.city }),
    addressCountry: "PK",
  },
  ...(isFilled(contact.phone) && { telephone: contact.phone }),
  ...(isFilled(contact.email) && { email: contact.email }),
  openingHours: "Mo-Fr 08:00-15:00",
  educationalLevel: ["Montessori", "Primary", "Middle", "Secondary (Matric)", "Intermediate"],
  sameAs: Object.values(siteConfig.social).filter(Boolean),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${dmSans.variable} h-full antialiased`}
    >
      {/* bottom padding on phones keeps the footer clear of the quick-contact bar.
          suppressHydrationWarning: extensions such as Grammarly add attributes to <body> before
          React hydrates; this ignores attribute differences on <body> only, not its children */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-bg text-fg max-md:pb-[calc(3.5rem+env(safe-area-inset-bottom))]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Skip to content
        </a>
        <Header />
        {/* clip (not hidden): side-entering reveals can't widen the page, and sticky columns keep working */}
        <main id="main-content" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
        <QuickContactBar />
      </body>
    </html>
  );
}
