import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GrowLine, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { programs } from "@/content/school";

/**
 * The five stages from Montessori to Intermediate as one connected path:
 * a horizontal timeline on large screens, a vertical one below. Each stage
 * links to its detail on the Academics page.
 */
export function Journey({ className, showLink = true }: { className?: string; showLink?: boolean }) {
  return (
    <section id="journey" className={className ?? "py-section"}>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Academic Programs"
            title="From first steps to future success"
            body="Your child can complete their entire school education at Falah Academy, with each stage building on the last."
          />
          {showLink && (
            <Button href="/academics" variant="secondary" className="self-start lg:self-auto">
              View All Programs
            </Button>
          )}
        </div>

        <div className="relative mt-14">
          {/* connecting rule: runs through the markers */}
          <div aria-hidden="true" className="absolute bottom-8 left-7 top-8 w-px bg-border lg:hidden" />
          <GrowLine vertical className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-highlight via-emerald to-accent lg:hidden" />
          <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-border lg:block" />
          <GrowLine className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 -translate-y-px rounded-full bg-gradient-to-r from-highlight via-emerald to-accent lg:block" />

          <RevealGroup as="ol" stagger={0.1} className="relative grid gap-5 lg:grid-cols-5 lg:gap-5">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <RevealItem as="li" key={p.slug} className="flex gap-5 lg:flex-col lg:items-center lg:text-center">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-bg bg-accent-strong text-highlight shadow-soft">
                    <Icon size={24} weight="duotone" aria-hidden="true" />
                  </span>
                  <Link
                    href={`/academics#${p.slug}`}
                    className="card-lift group flex flex-1 flex-col card p-5 sm:p-6 lg:mt-6 lg:w-full lg:items-center"
                  >
                    <span className="label text-emerald">Stage {String(i + 1).padStart(2, "0")}</span>
                    <span className="mt-2 font-display text-title font-bold text-accent-strong">{p.short}</span>
                    <span className="mt-1 text-xs font-semibold text-fg-muted">{p.ages}</span>
                    <span className="mt-1.5 text-sm leading-relaxed text-fg-muted">{p.tagline}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent lg:mt-auto lg:pt-4">
                      Learn more
                      <ArrowRight
                        size={14}
                        weight="bold"
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        <p className="mt-10 text-center text-body text-fg-muted">
          We also offer tuition, O/A Level coaching, entry test preparation, career counseling and Huffaz classes.{" "}
          <Link href="/academics#services" className="font-bold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent">
            See all services
          </Link>
        </p>
      </Container>
    </section>
  );
}
