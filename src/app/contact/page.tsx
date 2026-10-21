import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Falah Academy: call, WhatsApp or visit the school office. Address, school hours, admission inquiries and frequently asked questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        intro="Whether you're exploring admissions or have a question as a current parent, our office is here to help."
        image={{ src: "/images/facilities/library-aisle.jpg", position: "center 40%" }}
      />
      <Contact />
      <FAQ className="surface-tint py-section" />
    </>
  );
}
