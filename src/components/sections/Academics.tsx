import Image from "next/image";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { programs } from "@/content/school";
import { blurProps } from "@/lib/image-meta";
import { cn } from "@/lib/cn";

/**
 * Academics page: every stage from Montessori to Intermediate as an alternating
 * photo + detail row. Each row is an anchor (`/academics#intermediate`) that the
 * home-page journey links to.
 */
export function Academics({ className }: { className?: string }) {
  return (
    <section id="programs" className={className ?? "py-section"}>
      <Container>
        <SectionHeading
          centered
          eyebrow="Academic Programmes"
          title="Five stages, one consistent standard"
          body="Each stage builds on the last, with age-appropriate teaching, close monitoring and high expectations from Montessori to Intermediate."
        />
        <ol className="mt-14 space-y-10 sm:space-y-14 lg:space-y-20">
          {programs.map((p, i) => {
            const Icon = p.icon;
            const flip = i % 2 === 1;
            const senior = p.slug === "intermediate";
            return (
              <li key={p.slug} id={p.slug} className="scroll-mt-[calc(var(--header-h)+1.5rem)]">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <Reveal from="clip" className={cn(flip && "lg:order-2")}>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lift">
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        fill
                        sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        {...blurProps(p.image.src)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(7_29_61/0.5)] via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-accent-strong shadow-soft">
                        {p.ages}
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft",
                          senior ? "bg-accent-strong text-highlight" : "bg-highlight text-highlight-fg"
                        )}
                      >
                        <Icon size={24} weight="duotone" aria-hidden="true" />
                      </span>
                      <span className="label text-emerald">Stage {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-5 text-balance font-display text-[1.75rem] font-bold leading-tight text-accent-strong sm:text-[2rem]">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">{p.body}</p>
                    <ul className="mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm font-semibold text-fg">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-soft text-emerald">
                            <Check size={12} weight="bold" aria-hidden="true" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
