import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { blurProps } from "@/lib/image-meta";
import type { Photo } from "@/content/school";

// TODO: swap for real Falah Academy photographs as they become available
const photos: Photo[] = [
  { src: "/images/programs/primary.jpg", alt: "Two primary students in uniform reading their textbooks at a desk" },
  { src: "/images/student-life/independence-day.jpg", alt: "Student in uniform at his desk beside a Pakistan flag" },
  { src: "/images/student-life/cricket.jpg", alt: "Students playing a cricket match on the school ground" },
  { src: "/images/classrooms/early-learning.jpg", alt: "Student in a red headscarf during a classroom activity" },
];

/**
 * Home: four photos from school life, linking to the full gallery. Plain lazy-loaded
 * images (no lightbox or client JavaScript); the interactive grid lives on /gallery.
 */
export function GalleryPreview() {
  return (
    <section className="py-section">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Campus Life" title="Moments from school life" />
          <Button href="/gallery" variant="secondary" className="self-start lg:self-auto">
            View Full Gallery
          </Button>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p) => (
            <li key={p.src} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1280px) 300px, (min-width: 1024px) 25vw, 50vw"
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
