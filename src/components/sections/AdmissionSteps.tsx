import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GrowLine, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { admissionSteps } from "@/content/school";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Numbered admission steps. A horizontal timeline on large screens (a rule draws
 * through the step markers), a vertical one on smaller screens. `withActions`
 * adds the apply / contact buttons for use outside the Admissions page.
 */
export function AdmissionSteps({ className, withActions }: { className?: string; withActions?: boolean }) {
  const n = admissionSteps.length;
  return (
    <section id="process" className={className ?? "py-section"}>
      <Container>
        <SectionHeading
          centered
          eyebrow="Admissions"
          title={`${n === 4 ? "Four" : n} simple steps to joining us`}
          body="Our admissions office will guide you at every stage, from your first question to your child's first day."
        />
        <div className="relative mt-14">
          <div aria-hidden="true" className="absolute bottom-6 left-7 top-6 w-px bg-border lg:hidden" />
          <GrowLine vertical className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-highlight via-emerald to-accent lg:hidden" />
          <div aria-hidden="true" className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-border lg:block" />
          <GrowLine className="absolute left-[12%] right-[12%] top-7 hidden h-0.5 -translate-y-px rounded-full bg-gradient-to-r from-highlight via-emerald to-accent lg:block" />
          <RevealGroup
            as="ol"
            stagger={0.1}
            className={cn("relative grid gap-6", n === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5")}
          >
            {admissionSteps.map((step, i) => (
              <RevealItem as="li" key={step.title} className="flex gap-6 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-bg bg-bg-inverted font-display text-lg font-semibold text-highlight shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="card-lift flex-1 card p-6 lg:mt-6 lg:w-full">
                  <p className="label text-emerald">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1.5 text-title font-bold text-accent-strong">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        {withActions && (
          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={siteConfig.applyHref}>Apply for Admission</Button>
            <Button href="/contact" variant="secondary" showArrow={false}>
              Contact Admissions
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
