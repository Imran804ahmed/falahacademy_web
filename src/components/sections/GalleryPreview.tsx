import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { galleryPhotos } from "@/content/school";
import { withBlur } from "@/lib/image-meta";

/** Home: a glimpse of the gallery (same tiles and lightbox as /gallery), linking to the full page. */
export function GalleryPreview({ count = 6 }: { count?: number }) {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from school life"
            body="A glimpse of everyday learning, friendships, celebrations and achievements at Falah Academy."
          />
          <Button href="/gallery" variant="secondary" className="self-start lg:self-auto">
            View Full Gallery
          </Button>
        </div>
        <div className="mt-12">
          <GalleryGrid photos={withBlur(galleryPhotos.slice(0, count))} />
        </div>
      </Container>
    </section>
  );
}
