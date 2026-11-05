import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProgramCards } from "@/components/sections/ProgramCards";
import { Academics } from "@/components/sections/Academics";
import { Subjects } from "@/components/sections/Subjects";
import { Services } from "@/components/sections/Services";
import { TeachingApproach } from "@/components/sections/TeachingApproach";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Programmes at Falah Academy Karachi: Playgroup, Nursery, Kindergarten and the Huffaz Education System, plus tuition, O/A Level coaching and entry test prep.",
  alternates: { canonical: "/academics" },
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Academic excellence at every stage"
        intro="Playgroup, Nursery and Kindergarten, plus a dedicated academic pathway for Huffaz: a structured, engaging curriculum that builds strong foundations, with higher classes planned for the years ahead."
        image={{ src: "/images/classrooms/classroom-students-hijab.jpg", position: "60% 40%" }}
      />
      <ProgramCards id="featured-programs" variant="academics" className="py-section" />
      <Academics className="pb-section" />
      <Subjects />
      <Services />
      <TeachingApproach />
      <AdmissionsCTA />
    </>
  );
}
