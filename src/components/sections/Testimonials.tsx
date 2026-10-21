import { Quotes, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials } from "@/content/school";
import { cn } from "@/lib/cn";

/** Parent testimonials: a featured quote plus supporting cards. Hidden until real quotes are added. */
export function Testimonials() {
  if (!testimonials.length) return null;
  const [featured, ...rest] = testimonials;
  return (
    <section className="surface-ink mx-2 rounded-section py-section sm:mx-4">
      <div aria-hidden="true" className="pattern-geo" />
      <Container>
        <SectionHeading
          centered
          onDark
          eyebrow="Testimonials"
          title="Trusted by parents"
          body="Hear from the families who are part of the Falah Academy community."
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-6">
          <RevealItem className="lg:row-span-3">
            <figure className="flex h-full flex-col rounded-xl bg-highlight p-8 text-highlight-fg shadow-deep sm:p-10">
              <Quotes size={44} weight="fill" className="text-accent-strong/80" aria-hidden="true" />
              <blockquote className="mt-6 flex-1 font-display text-xl font-semibold leading-snug tracking-[-0.015em] sm:text-2xl lg:text-[1.6rem]">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <Attribution {...featured} featured />
            </figure>
          </RevealItem>
          {rest.map((t) => (
            <RevealItem key={t.quote} className="lg:col-span-2">
              <figure className="h-full rounded-xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-8">
                <blockquote className="text-base leading-relaxed text-white/90 sm:text-[1.05rem]">&ldquo;{t.quote}&rdquo;</blockquote>
                <Attribution {...t} />
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function Attribution({ author, role, featured }: { author: string; role: string; featured?: boolean }) {
  return (
    <figcaption className="mt-6 flex items-center gap-3">
      <span
        aria-hidden="true"
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          featured ? "bg-accent-strong text-highlight" : "bg-white/10 text-highlight"
        )}
      >
        <UsersThree size={20} weight="duotone" />
      </span>
      <span>
        <span className={cn("block font-bold", featured ? "text-accent-strong" : "text-white")}>{author}</span>
        <span className={cn("text-sm", featured ? "text-highlight-fg/75" : "text-fg-inverted-muted")}>{role}</span>
      </span>
    </figcaption>
  );
}
