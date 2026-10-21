import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Stats } from "@/components/sections/Stats";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Journey } from "@/components/sections/Journey";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { StageSpotlights } from "@/components/sections/StageSpotlights";
import { Faculty } from "@/components/sections/Faculty";
import { StudentLife } from "@/components/sections/StudentLife";
import { Facilities } from "@/components/sections/Facilities";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { AdmissionSteps } from "@/components/sections/AdmissionSteps";
import { News } from "@/components/sections/News";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.seo.title },
  alternates: { canonical: "/" },
};

/*
 * Home answers a parent's questions in order: who is Falah Academy and which
 * classes does it teach (hero, trust bar, welcome, journey), why trust it (why
 * choose us, the stages, faculty, student life, facilities), and what to do next
 * (admission steps, closing call to action).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <AboutPreview />
      <Journey className="surface-tint py-section" />
      <WhyChooseUs className="py-section" />
      <StageSpotlights />
      <Faculty className="py-section" />
      <StudentLife limit={6} className="surface-tint py-section" />
      <Facilities limit={6} className="bg-bg-elevated py-section" />
      <Testimonials />
      <AdmissionSteps className="py-section" withActions />
      <GalleryPreview />
      <News preview className="surface-tint py-section" />
      <AdmissionsCTA />
    </>
  );
}
