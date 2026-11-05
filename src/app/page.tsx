import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ProgramCards } from "@/components/sections/ProgramCards";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HuffazSpotlight } from "@/components/sections/HuffazSpotlight";
import { Journey } from "@/components/sections/Journey";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HomeContact } from "@/components/sections/HomeContact";
import { homeReasons } from "@/content/school";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.seo.title },
  alternates: { canonical: "/" },
};

/*
 * Home answers a parent's questions, briefly, in order: who is Falah Academy (hero),
 * which programmes it offers (early years and the Huffaz Education System), what it
 * stands for (about, why choose us), the Huffaz pathway in detail, the school journey
 * (current classes and the stages planned next), and how to apply or get in touch. Detail lives on the inner
 * pages: faculty and values on /about, every stage on /academics, the Huffaz programme
 * on /huffaz-education, the admission process on /admissions.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ProgramCards />
      <AboutPreview />
      <WhyChooseUs
        className="surface-tint py-section"
        items={homeReasons}
        body="Quality education, Islamic values and close care for every child, from the first day of Playgroup to the Huffaz pathway towards Matric."
      />
      <HuffazSpotlight />
      <Journey className="py-section" />
      <AdmissionsCTA
        title={
          <>
            Begin Your Child&apos;s <span className="text-brand-gradient">Learning Journey</span> With Us
          </>
        }
        body="Discover the right educational pathway for your child at Falah Academy. Explore our early childhood programs and specialised Huffaz Education System."
        primaryLabel="Apply Now"
        secondaryLabel="Contact Admissions"
        image={{ src: "/images/admissions/falah-classroom-students.jpg", position: "center 45%" }}
        dim={0.62}
      />
      <GalleryPreview />
      <HomeContact />
    </>
  );
}
