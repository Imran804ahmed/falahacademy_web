import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { servicePhotos, services } from "@/content/school";
import { blurProps } from "@/lib/image-meta";
import { cn } from "@/lib/cn";

const tones = ["bg-accent-soft text-accent", "bg-emerald-soft text-emerald", "bg-highlight-soft text-highlight-deep"];

/** Academics page: tuition, coaching and counselling services offered alongside the school programmes. */
export function Services({ className }: { className?: string }) {
  return (
    <section id="services" className={cn("scroll-mt-[calc(var(--header-h)+1.5rem)]", className ?? "py-section")}>
      <Container>
        <SectionHeading
          centered
          eyebrow="Tuition & Coaching"
          title="More ways we help students succeed"
          body="Alongside our school classes, Falah Academy offers tuition, exam coaching, career counseling and Huffaz classes."
        />

        <RevealGroup as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {services.map(({ icon: Icon, title, body, points }, i) => (
            <RevealItem as="li" key={title}>
              <div className="flex h-full flex-col card p-6 sm:p-7">
                <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", tones[i % 3])}>
                  <Icon size={26} weight="duotone" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-title font-bold text-accent-strong">{title}</h3>
                <p className="mt-1.5 text-body leading-relaxed text-fg-muted">{body}</p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm font-semibold text-fg">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-soft text-emerald">
                        <Check size={12} weight="bold" aria-hidden="true" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {servicePhotos.map((p) => (
            <li key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-soft">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1280px) 400px, (min-width: 640px) 33vw, 100vw"
                className="object-cover"
                {...blurProps(p.src)}
              />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href="/contact">Ask About Classes</Button>
          <Button href="/admissions#apply" variant="secondary" showArrow={false}>
            Register Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
