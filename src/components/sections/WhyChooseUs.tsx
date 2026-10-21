import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { IconCard } from "@/components/ui/IconCard";
import { whyChooseUs } from "@/content/school";

const tones = ["navy", "emerald", "highlight"] as const;

export function WhyChooseUs({ className }: { className?: string }) {
  return (
    <section className={className ?? "surface-tint py-section"}>
      <Container>
        <SectionHeading
          centered
          eyebrow="Why Falah Academy"
          title="Why Choose Falah Academy?"
          body="Families choose us for a balanced education that builds strong academics, sound character and the confidence to succeed."
        />
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <RevealItem key={item.title}>
              <IconCard {...item} tone={tones[i % 3]} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
