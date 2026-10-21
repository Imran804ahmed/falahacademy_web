import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Facilities } from "@/components/sections/Facilities";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Facilities at Falah Academy: classrooms, computer and science labs, library, sports and play areas, Montessori learning area and a secure campus.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="A campus designed for learning"
        intro="Safe, modern and well-equipped spaces that support every part of a student's day, from the classroom and the lab to the library and the playing field."
        image={{ src: "/images/facilities/computer-lab.jpg", position: "center 45%" }}
      />
      <Facilities />
      <AdmissionsCTA />
    </>
  );
}
