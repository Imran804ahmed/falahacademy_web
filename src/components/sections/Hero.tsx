import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { siteConfig } from "@/content/site";

/**
 * Home hero: who we are, one headline, two short lines and two actions. Kept to a
 * single photo (the LCP image, fetched at high priority) and CSS-only entrances.
 */
export function Hero() {
  const enter = (delay: number) => ({
    style: { "--enter-y": "16px", animationDelay: `${delay}s` } as React.CSSProperties,
  });

  return (
    <section className="relative isolate -mt-[var(--header-h)] flex min-h-[85svh] items-center overflow-hidden rounded-b-section bg-bg-inverted pb-16 sm:min-h-[90svh] sm:pb-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <BackdropImage src="/images/hero/students-classroom.jpg" position="72% 30%" priority />
        <div className="scrim-hero" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg-inverted/85 via-bg-inverted/30 to-transparent" />
      </div>

      <Container className="w-full pt-[calc(var(--header-h)+2.5rem)] lg:pt-[calc(var(--header-h)+4rem)]">
        <div className="max-w-3xl">
          <p
            {...enter(0)}
            className="enter-up inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-1.5 pl-2 pr-4 text-xs font-bold tracking-wide text-white"
          >
            <span className="rounded-full bg-highlight px-2 py-0.5 label text-highlight-fg">Karachi</span>
            Montessori to Intermediate
          </p>
          <h1 className="mt-6 text-display-xl font-extrabold text-white">
            {siteConfig.name}:{" "}
            <span className="text-brand-gradient">Strong Foundations for a Brighter Future</span>
          </h1>
          <p {...enter(0.1)} className="enter-up mt-6 max-w-[34rem] text-base leading-relaxed text-white/85 sm:text-lg">
            One school for every stage, from Montessori to Matric and Intermediate. We focus on strong academics, good
            character and caring teachers.
          </p>
          <div {...enter(0.2)} className="enter-up mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button href={siteConfig.applyHref} variant="highlight" className="w-full sm:w-auto">
              Apply for Admission
            </Button>
            <Button href="/academics" variant="onDark" showArrow={false} className="w-full sm:w-auto">
              Explore Programs
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
