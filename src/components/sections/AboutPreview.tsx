import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { blurProps } from "@/lib/image-meta";

/** Home: short "About Falah Academy" introduction; the full story lives on /about. */
export function AboutPreview() {
  // supplied by the academy
  const image = "/images/about/islamic-classroom-learning.jpg";

  return (
    <section id="welcome" className="scroll-mt-8 py-section">
      <Container className="grid items-center gap-10 md:grid-cols-2 lg:gap-20">
        {/* md+: the frame takes the photo's own (near-square) proportions, so nothing is cropped */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lift md:aspect-[889/768]">
          <Image
            src={image}
            alt="Children in hijab, kurtas and prayer caps learning on a tablet, with alphabet puzzles and a teacher at the whiteboard in a bright Islamic classroom"
            fill
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-[50%_65%]"
            {...blurProps(image)}
          />
        </div>

        <Reveal>
          <Eyebrow className="mb-4">About Falah Academy</Eyebrow>
          <h2 className="text-balance text-display-md font-bold text-accent-strong">Where Knowledge Meets Values</h2>
          <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
            At Falah Academy, we believe education is the foundation of a successful future. Our mission is to nurture
            young learners through quality academic education, strong moral values and a supportive learning
            environment.
          </p>
          <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
            From the earliest stages of childhood development to specialised academic pathways for Huffaz, we aim to help
            every student grow in knowledge, confidence and character.
          </p>
          <p className="mt-6 border-l-[3px] border-highlight pl-4 font-display text-base font-semibold text-accent-strong">
            &ldquo;Falah&rdquo; means success: in learning, in character and in life.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              Learn More<span className="sr-only"> about Falah Academy</span>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
