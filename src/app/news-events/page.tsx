import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { News } from "@/components/sections/News";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Upcoming events, school news and notices for parents at Falah Academy.",
  alternates: { canonical: "/news-events" },
};

export default function NewsEventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Events"
        title="School news and upcoming events"
        intro="Sports days, exhibitions, ceremonies and parent meetings: here's what's coming up at Falah Academy."
        image={{ src: "/images/events/debate.jpg", position: "center 40%" }}
      />
      <News />
      <AdmissionsCTA />
    </>
  );
}
