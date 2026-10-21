import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { stats } from "@/content/school";
import { cn } from "@/lib/cn";

/** "500+" → { number: "500", suffix: "+" }, so the suffix can take the accent colour. */
function split(value: string) {
  const m = value.match(/^([\d,]+)(.*)$/);
  return m ? { number: m[1], suffix: m[2] } : { number: value, suffix: "" };
}

/**
 * Headline numbers in a raised card that overlaps the bottom of the hero.
 * A thin highlight-to-emerald gradient frames the card; each stat pairs a navy icon
 * chip with a large counting figure, and lifts gently on hover.
 */
export function Stats({ className }: { className?: string }) {
  // only verified figures belong here; nothing renders until some are added
  if (!stats.length) return null;
  return (
    <section aria-label="Falah Academy in numbers" className={className ?? "relative py-section-sm"}>
      <Container>
        {/* gradient frame: 1px of padding over a gradient, white card inside */}
        <div className="rounded-xl bg-gradient-to-br from-highlight/70 via-border to-emerald/50 p-px shadow-[0_30px_60px_-30px_rgb(7_29_61/0.35),0_8px_20px_-12px_rgb(7_29_61/0.12)]">
          <div className="relative overflow-hidden rounded-[calc(var(--radius-xl)-1px)] bg-bg-elevated">
            {/* faint brand wash in the corner, for depth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_14rem_at_0%_0%,rgb(47_111_216/0.06),transparent_70%),radial-gradient(30rem_12rem_at_100%_100%,rgb(60_198_160/0.08),transparent_70%)]"
            />
            <RevealGroup
              as="ul"
              stagger={0.08}
              className="relative grid grid-cols-2 gap-px bg-border/70 sm:grid-cols-6 lg:grid-cols-5"
            >
              {stats.map(({ value, label, icon: Icon }, i) => {
                const { number, suffix } = split(value);
                return (
                  <RevealItem
                    as="li"
                    key={label}
                    className={cn(
                      "group relative flex flex-col items-start gap-4 bg-bg-elevated px-5 py-6 transition-colors duration-300 hover:bg-accent-soft/40 sm:col-span-2 sm:px-6 sm:py-8 md:flex-row md:items-center lg:col-span-1 lg:flex-col lg:items-start lg:py-10 xl:flex-row xl:items-center",
                      // the odd fifth stat closes the last row on phones and tablets
                      i === stats.length - 1 && "col-span-2 max-sm:flex-row max-sm:items-center sm:col-span-4"
                    )}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent-strong text-highlight shadow-[0_8px_16px_-8px_rgb(13_68_133/0.6)] transition-[background-color,color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:bg-highlight group-hover:text-accent-strong">
                      <Icon size={24} weight="duotone" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="stat-figure flex items-baseline text-[2.25rem] text-accent-strong sm:text-[2.5rem] xl:text-[2.75rem]">
                        <StatCounter value={number} />
                        {suffix && <span className="ml-0.5 text-highlight-deep">{suffix}</span>}
                      </span>
                      <span className="mt-2 text-sm font-semibold leading-snug text-fg-muted">{label}</span>
                      {/* accent line that grows on hover */}
                      <span
                        aria-hidden="true"
                        className="mt-3 h-0.5 w-6 rounded-full bg-gradient-to-r from-highlight to-emerald transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-14"
                      />
                    </span>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
