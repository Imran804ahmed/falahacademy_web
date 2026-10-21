import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/content/school";

/**
 * FAQ accordion built on native <details>/<summary>: keyboard and screen-reader
 * accessible with no JavaScript, and searchable with the browser's find-in-page.
 */
export function FAQ({ className }: { className?: string }) {
  return (
    <section id="faq" className={className ?? "py-section"}>
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently asked questions"
          body="Answers to the questions parents ask us most often. Can't find what you're looking for? Our office is happy to help."
          className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start"
        />
        <Reveal delay={0.06}>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details
                key={q}
                name="faq"
                open={i === 0}
                className="faq-item group card transition-colors open:border-accent/30"
              >
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 rounded-lg px-6 py-4 text-left sm:px-6">
                  <h3 className="font-sans text-base font-bold tracking-normal text-accent-strong sm:text-[1.05rem]">{q}</h3>
                  <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition-[transform,background-color,color] duration-300">
                    <Plus size={16} weight="bold" aria-hidden="true" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-body leading-relaxed text-fg-muted sm:px-6">{a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
