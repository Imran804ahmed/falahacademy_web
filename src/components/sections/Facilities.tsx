import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FacilityCard } from "@/components/sections/FacilityCard";
import { facilities } from "@/content/school";
import { cn } from "@/lib/cn";

/** Campus facilities grid. `limit` shows a subset with a link to the full page. */
export function Facilities({ limit, className }: { limit?: number; className?: string }) {
  const items = limit ? facilities.slice(0, limit) : facilities;
  return (
    <section className={className ?? "py-section"}>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Facilities"
            title="Spaces designed for learning and growth"
            body="A safe, well-equipped campus where students can study, explore, create and play."
          />
          {limit && (
            <Button href="/facilities" variant="secondary" className="self-start lg:self-auto">
              View All Facilities
            </Button>
          )}
        </div>
        <RevealGroup
          scrollLabel={limit ? "Facilities" : undefined}
          className={cn("mt-12 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3", limit ? "snap-row max-sm:gap-4" : "grid")}
        >
          {items.map((f) => (
            <RevealItem key={f.title}>
              <FacilityCard facility={f} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
