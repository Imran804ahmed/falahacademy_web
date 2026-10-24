import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { blurProps } from "@/lib/image-meta";
import { servicePhotos } from "@/content/school";

/**
 * Home: three real photos from the academy, linking to the full gallery. Plain lazy-loaded
 * images (no lightbox or client JavaScript); the interactive grid lives on /gallery.
 */
export function GalleryPreview() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Campus Life" title="A look inside Falah Academy" />
          <Button href="/gallery" variant="secondary" className="self-start lg:self-auto">
            View Full Gallery
          </Button>
        </div>
        <ul className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {servicePhotos.map((p) => (
            <li key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1280px) 400px, 33vw"
                className="object-cover"
                {...blurProps(p.src)}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
