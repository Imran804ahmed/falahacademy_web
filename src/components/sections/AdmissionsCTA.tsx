import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";

/** Full-width closing call to action over a photo. Defaults suit inner pages; the home page passes its own copy. */
export function AdmissionsCTA({
  title = (
    <>
      Give Your Child the Foundation for a <span className="text-brand-gradient">Brighter Future</span>
    </>
  ),
  body = "Discover a learning environment focused on academic excellence, Islamic values and personal development, in Playgroup, Nursery, Kindergarten and our Huffaz Education System.",
  primaryLabel = "Start Your Admission Journey",
  secondaryLabel = "Contact Us",
  image = { src: "/images/admissions/parents-teacher-classroom.jpg", position: "center 40%" },
  dim = 0.8,
}: {
  title?: React.ReactNode;
  body?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  /** an original under /images, listed in image-config.json `avif` for best results */
  image?: { src: string; position?: string };
  /** navy overlay strength (0–1); lower lets more of the photo show */
  dim?: number;
}) {
  return (
    <section className="py-section-sm">
      <Container>
        <div className="relative isolate overflow-hidden rounded-xl px-6 py-16 text-center shadow-deep sm:px-12 sm:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <BackdropImage src={image.src} position={image.position} />
            <div className="absolute inset-0 bg-bg-inverted" style={{ opacity: dim }} />
            <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgb(216_175_100/0.22),transparent_70%)]" />
          </div>
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-balance text-display-md font-bold text-white">{title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{body}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href={siteConfig.applyHref} variant="highlight">
                {primaryLabel}
              </Button>
              <Button href="/contact" variant="onDark" showArrow={false}>
                {secondaryLabel}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
