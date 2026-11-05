import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AdmissionSteps } from "@/components/sections/AdmissionSteps";
import { AdmissionRequirements } from "@/components/sections/AdmissionRequirements";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions at Falah Academy Karachi for Playgroup, Nursery, Kindergarten and the Huffaz Education System: the admission process, required documents and how to apply.",
  alternates: { canonical: "/admissions" },
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Start Your Child's Journey at Falah Academy"
        intro="We welcome families who share our commitment to learning, character and community, for Playgroup, Nursery and Kindergarten and for Huffaz joining our Huffaz Education System. Here is everything you need to know."
        image={{ src: "/images/admissions/smiling-students-hijab.jpg", position: "62% 35%" }}
      >
        <div className="enter-up mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: "0.16s" }}>
          <Button href="#apply" variant="highlight">
            Apply for Admission
          </Button>
          <Button href="#process" variant="onDark" showArrow={false}>
            View Admission Process
          </Button>
        </div>
      </PageHeader>
      <AdmissionSteps />
      <AdmissionRequirements />
      <Contact
        id="apply"
        title="Apply for Admission"
        intro="Submit an admission inquiry and our office will contact you to arrange an application form, a campus visit and the next steps."
        defaultSubject="Admission Inquiry"
        showMap={false}
      />
      <FAQ className="surface-tint py-section" />
    </>
  );
}
