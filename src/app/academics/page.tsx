import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Academics } from "@/components/sections/Academics";
import { Subjects } from "@/components/sections/Subjects";
import { TeachingApproach } from "@/components/sections/TeachingApproach";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Academic programmes at Falah Academy from Montessori, Primary and Middle to Secondary (Matric) and Intermediate, with board exam preparation and a student-centred teaching approach.",
  alternates: { canonical: "/academics" },
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Academic excellence at every stage"
        intro="From Montessori to Intermediate: a structured, engaging curriculum that builds strong foundations, develops independent thinkers and prepares students for board examinations and beyond."
        image={{ src: "/images/classrooms/chalkboard-maths.jpg", position: "70% 30%" }}
      />
      <Academics />
      <Subjects />
      <TeachingApproach />
      <AdmissionsCTA />
    </>
  );
}
