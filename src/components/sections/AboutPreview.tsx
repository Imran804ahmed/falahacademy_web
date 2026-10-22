import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { blurProps } from "@/lib/image-meta";

/** Home: short "About Falah Academy" introduction; the full story lives on /about. */
export function AboutPreview() {
  const image = "/images/classrooms/hands-on-learning.jpg";

  return (
    <section id="welcome" className="scroll-mt-8 py-section">
      <Container className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lift">
          <Image
            src={image}
            alt="Student taking part in a hands-on classroom activity"
            fill
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-[40%_center]"
            {...blurProps(image)}
          />
        </div>

        <Reveal>
          <Eyebrow className="mb-4">About Falah Academy</Eyebrow>
          <h2 className="text-balance text-display-md font-bold text-accent-strong">
            Education that builds mind and character
          </h2>
          <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
            Falah Academy is a school in Karachi where children can study from Montessori through Matric and
            Intermediate. Our teachers follow each student&apos;s progress, keep parents informed and focus on real
            understanding, discipline and good manners. &ldquo;Falah&rdquo; means success: in learning, in character and
            in life.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
