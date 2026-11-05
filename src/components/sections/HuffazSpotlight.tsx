import { Info, Student } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { huffazEducation } from "@/content/school";

/**
 * Home: the Huffaz Education System, Falah Academy's distinguishing programme, as a
 * navy feature band: who it is for, four highlights, and the enquiry action.
 */
export function HuffazSpotlight() {
  return (
    <section aria-labelledby="huffaz-heading" className="py-section-sm">
      <Container>
        <div className="surface-ink rounded-section p-5 shadow-deep min-[400px]:p-6 sm:p-10 lg:p-14">
          <div aria-hidden="true" className="pattern-geo" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <Eyebrow tone="highlight">Huffaz Education System</Eyebrow>
              <h2 id="huffaz-heading" className="mt-4 text-balance text-display-md font-bold text-white">
                Already a Hafiz? <span className="text-brand-gradient">Continue Your Journey Towards Matriculation.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-fg-inverted-muted sm:text-lg">
                Your Quran memorisation is a remarkable achievement. Take the next step in your educational journey with
                Falah Academy&apos;s specialised academic program for Huffaz.
              </p>

              <RevealGroup as="ul" stagger={0.07} className="mt-8 grid gap-3 sm:grid-cols-2">
                {huffazEducation.highlights.map(({ icon: Icon, title }) => (
                  <RevealItem
                    as="li"
                    key={title}
                    className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.06] p-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-highlight/15 text-highlight">
                      <Icon size={22} weight="duotone" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-bold leading-snug text-white">{title}</span>
                  </RevealItem>
                ))}
              </RevealGroup>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href="/huffaz-education#enquire" variant="highlight">
                  Enquire About Huffaz Admissions
                </Button>
                <Button href="/huffaz-education" variant="onDark" showArrow={false}>
                  About the Program
                </Button>
              </div>
            </Reveal>

            <Reveal from="clip" delay={0.1} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10 lg:aspect-square">
                <PhotoSlot
                  image={huffazEducation.spotlightImage}
                  icon={Student}
                  tone="navy"
                  sizes="(min-width: 1280px) 460px, (min-width: 1024px) 38vw, 100vw"
                />
              </div>
              <p className="relative mx-3 -mt-10 flex items-start gap-3 rounded-lg bg-bg-elevated p-4 text-sm leading-relaxed text-fg shadow-lift sm:mx-6">
                <Info size={20} weight="duotone" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald" />
                <span>
                  <strong className="font-bold text-accent-strong">For students who have completed Hifz.</strong> The
                  programme focuses on academic subjects; it does not teach Quran memorisation.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
