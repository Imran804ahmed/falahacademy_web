import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { subjects } from "@/content/school";

export function Subjects() {
  return (
    <section id="curriculum" className="surface-tint py-section">
      <Container>
        <SectionHeading
          centered
          eyebrow="Subjects / Curriculum"
          title="A broad, balanced curriculum"
          body="Core academic subjects are complemented by languages, faith, the arts and physical education, so every side of a child's development is nurtured."
        />
        <RevealGroup stagger={0.05} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {subjects.map(({ title, icon: Icon }) => (
            <RevealItem key={title}>
              <div className="card-lift group flex h-full flex-col items-center gap-3 card px-4 py-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon size={28} weight="duotone" aria-hidden="true" />
                </span>
                <h3 className="font-sans text-body font-bold tracking-normal text-fg">{title}</h3>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
