import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { IconCard } from "@/components/ui/IconCard";
import { whyChooseUs, type IconItem } from "@/content/school";
import { cn } from "@/lib/cn";

const tones = ["navy", "emerald", "highlight"] as const;

export function WhyChooseUs({
  className,
  items = whyChooseUs,
  body = "Families choose us for a balanced education that builds strong academics, sound character and the confidence to succeed.",
}: {
  className?: string;
  items?: IconItem[];
  body?: string;
}) {
  return (
    <section className={className ?? "surface-tint py-section"}>
      <Container>
        <SectionHeading centered eyebrow="Why Falah Academy" title="Why Choose Falah Academy?" body={body} />
        <RevealGroup
          className={cn("mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6", items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3")}
        >
          {items.map((item, i) => (
            <RevealItem key={item.title}>
              <IconCard {...item} tone={tones[i % 3]} className={cn(items.length === 4 && "lg:p-7")} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
