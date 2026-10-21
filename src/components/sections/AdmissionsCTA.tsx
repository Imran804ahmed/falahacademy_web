import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";

/** Full-width closing call to action over a graduation photo. */
export function AdmissionsCTA() {
  return (
    <section className="py-section-sm">
      <Container>
        <div className="relative isolate overflow-hidden rounded-xl px-6 py-16 text-center shadow-deep sm:px-12 sm:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <BackdropImage src="/images/events/graduation.jpg" position="center 35%" />
            <div className="absolute inset-0 bg-[rgb(7_29_61/0.8)]" />
            <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgb(60_198_160/0.22),transparent_70%)]" />
          </div>
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-balance text-display-md font-bold text-white">
              Give Your Child the Foundation for a <span className="text-brand-gradient">Brighter Future</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Discover a learning environment focused on academic excellence, personal development and future success,
              from Montessori to Intermediate.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href={siteConfig.applyHref} variant="highlight">
                Start Your Admission Journey
              </Button>
              <Button href="/contact" variant="onDark" showArrow={false}>
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
