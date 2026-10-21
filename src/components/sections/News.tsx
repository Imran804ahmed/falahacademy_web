import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { NewsCard } from "@/components/sections/NewsCard";
import { news } from "@/content/school";

/** News & events, soonest first. `preview` adds a link to the full page. */
export function News({ preview, className }: { preview?: boolean; className?: string }) {
  const items = [...news].sort((a, b) => a.date.localeCompare(b.date));
  return (
    <section className={className ?? "py-section"}>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="News & Events"
            title="What's happening at Falah Academy"
            body="Stay up to date with upcoming events, achievements and important notices for parents."
          />
          {preview && (
            <Button href="/news-events" variant="secondary" className="self-start lg:self-auto">
              All News & Events
            </Button>
          )}
        </div>
        <RevealGroup scrollLabel="News and events" className="snap-row mt-12 gap-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {items.map((item) => (
            <RevealItem key={item.slug}>
              <NewsCard item={item} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
