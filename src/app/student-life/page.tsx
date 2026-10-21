import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { StudentLife } from "@/components/sections/StudentLife";
import { Activities } from "@/components/sections/Activities";
import { Testimonials } from "@/components/sections/Testimonials";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "Cricket and sports, debates, science exhibitions, Independence Day and Eid celebrations, art and Islamic activities: student life at Falah Academy.",
  alternates: { canonical: "/student-life" },
};

export default function StudentLifePage() {
  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="A vibrant life beyond the classroom"
        intro="At Falah Academy, students grow through play, competition, creativity and service, discovering their talents and building friendships along the way."
        image={{ src: "/images/student-life/cricket.jpg", position: "center 45%" }}
      />
      <StudentLife />
      <Activities />
      <Testimonials />
      <AdmissionsCTA />
    </>
  );
}
