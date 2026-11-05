import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { Container } from "@/components/ui/Container";
import { galleryCategories, galleryPhotos } from "@/content/school";
import { withBlur } from "@/lib/image-meta";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of Falah Academy: classrooms, students, campus, activities, sports and events.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from school life"
        intro="A glimpse of everyday learning, friendships, celebrations and achievements at Falah Academy."
        image={{ src: "/images/student-life/schoolgirls-white-hijab-smiling.jpg", position: "60% 35%" }}
      />

      <section className="py-section-sm">
        <Container>
          <GalleryGrid photos={withBlur(galleryPhotos)} categories={galleryCategories} showFilters />
        </Container>
      </section>
    </>
  );
}
