import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Journey } from "@/components/sections/Journey";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AdmissionSteps } from "@/components/sections/AdmissionSteps";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HomeContact } from "@/components/sections/HomeContact";
import { trustIndicators } from "@/content/school";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.seo.title },
  alternates: { canonical: "/" },
};

/*
 * Home answers a parent's five questions, briefly, in order: who is Falah Academy
 * (hero, about), which classes it teaches (programs), why choose it, how admissions
 * work, and how to get in touch. Detail lives on the inner pages: faculty and values
 * on /about, facilities on /facilities, activities on /student-life, news on /news-events.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Journey className="surface-tint py-section" />
      <WhyChooseUs
        className="py-section"
        items={trustIndicators}
        body="A balanced education with strong academics, sound character and close care for every child."
      />
      <AdmissionSteps className="surface-tint py-section" withActions />
      <GalleryPreview />
      <HomeContact />
    </>
  );
}
