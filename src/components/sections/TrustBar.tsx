import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { trustIndicators } from "@/content/school";

/**
 * Raised card overlapping the bottom of the home hero: the four things a parent
 * should know first. Words, not numbers; verified figures go in `stats` instead.
 */
export function TrustBar() {
  return (
    <section aria-label="Why parents trust Falah Academy" className="relative z-10 -mt-14 sm:-mt-20">
      <Container>
        <div className="rounded-xl bg-gradient-to-br from-highlight/70 via-border to-emerald/50 p-px shadow-[0_30px_60px_-30px_rgb(7_29_61/0.35),0_8px_20px_-12px_rgb(7_29_61/0.12)]">
          <div className="relative overflow-hidden rounded-[calc(var(--radius-xl)-1px)] bg-bg-elevated">
            <RevealGroup
              as="ul"
              stagger={0.08}
              className="relative grid gap-px bg-border/70 sm:grid-cols-2 lg:grid-cols-4"
            >
              {trustIndicators.map(({ icon: Icon, title, body }) => (
                <RevealItem
                  as="li"
                  key={title}
                  className="group flex items-start gap-4 bg-bg-elevated px-5 py-5 transition-colors duration-300 hover:bg-accent-soft/40 sm:px-6 sm:py-7"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent-strong text-highlight shadow-[0_8px_16px_-8px_rgb(13_68_133/0.6)] transition-[background-color,color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:bg-highlight group-hover:text-accent-strong">
                    <Icon size={24} weight="duotone" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[1.0625rem] font-bold leading-snug text-accent-strong">
                      {title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-fg-muted">{body}</span>
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
