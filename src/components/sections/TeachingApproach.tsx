import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { teachingApproach } from "@/content/school";

/** Navy band listing how lessons are taught. */
export function TeachingApproach() {
  return (
    <section id="teaching-approach" className="surface-ink mx-2 rounded-section py-section sm:mx-4">
      <div aria-hidden="true" className="pattern-geo" />
      <Container>
        <SectionHeading
          onDark
          eyebrow="Teaching Approach"
          title="How we teach, and why it works"
          body="Our classrooms are active, encouraging places where students question, collaborate and apply what they learn."
        />
        <RevealGroup stagger={0.06} className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {teachingApproach.map(({ icon: Icon, title, body }, i) => (
            <RevealItem key={title} className="bg-ink-2/95 p-6 transition-colors duration-300 hover:bg-ink-3 sm:p-8">
              <div className="flex items-center justify-between">
                <Icon size={30} weight="duotone" className="text-highlight" aria-hidden="true" />
                <span className="tabular text-sm font-semibold text-white/35">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-title font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-inverted-muted">{body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
