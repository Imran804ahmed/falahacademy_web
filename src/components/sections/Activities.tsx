import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { activities } from "@/content/school";

/** Extracurricular opportunities through the school year. */
export function Activities() {
  return (
    <section id="activities" className="surface-tint py-section">
      <Container>
        <SectionHeading
          centered
          eyebrow="School Activities"
          title="A calendar full of opportunities"
          body="Throughout the year, students compete, perform, explore and serve, building skills and memories that last a lifetime."
        />
        <RevealGroup stagger={0.05} className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {activities.map(({ title, icon: Icon }) => (
            <RevealItem key={title} className="@container">
              {/* icon beside the title only when the card itself is wide enough (container query, not viewport):
                  narrow cards (2-up phones, 5-up small laptops) stack it above so "Independence Day" never spills */}
              <div className="card-lift group flex h-full flex-col items-start gap-3 card p-4 @[13rem]:flex-row @[13rem]:items-center sm:p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-highlight-soft text-highlight-deep transition-colors duration-300 group-hover:bg-highlight group-hover:text-highlight-fg">
                  <Icon size={22} weight="duotone" aria-hidden="true" />
                </span>
                <h3 className="min-w-0 font-sans text-sm font-bold leading-snug tracking-normal text-fg">{title}</h3>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
