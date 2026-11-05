import Link from "next/link";
import { ArrowRight, Check, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { featuredPrograms, type FeaturedProgram } from "@/content/school";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

// soft, age-appropriate accents for the early-years cards (text colours pass 4.5:1 on white)
const tones: Record<Exclude<FeaturedProgram["tone"], "navy">, { bar: string; text: string; tick: string; badge: string }> = {
  sun: { bar: "bg-highlight", text: "text-emerald", tick: "bg-emerald-soft text-emerald", badge: "bg-bg-tint text-emerald" },
  rose: { bar: "bg-[#a99bc9]", text: "text-lavender-deep", tick: "bg-lavender text-lavender-deep", badge: "bg-lavender-soft text-lavender-deep" },
  sky: { bar: "bg-teal", text: "text-accent", tick: "bg-accent-soft text-accent", badge: "bg-accent-soft text-accent" },
};

const number = (i: number) => `Program ${String(i + 1).padStart(2, "0")}`;

/**
 * "Our Educational Programs": Playgroup, Nursery and Kindergarten as three cards,
 * then the Huffaz Education System as a wide navy feature card.
 *
 * `variant="academics"` gives each card an anchor (`/academics#nursery`) and swaps the
 * early-years "Learn More" links, which would point at the card itself, for an
 * admission enquiry.
 */
export function ProgramCards({
  className,
  id = "programs",
  variant = "home",
}: {
  className?: string;
  id?: string;
  variant?: "home" | "academics";
}) {
  const early = featuredPrograms.filter((p) => p.tone !== "navy");
  const huffaz = featuredPrograms.find((p) => p.tone === "navy");
  const anchored = variant === "academics";

  return (
    <section id={id} className={cn("scroll-mt-[calc(var(--header-h)+1.5rem)]", className ?? "py-section")}>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Educational Programs"
            title="Every stage of learning, carefully planned"
            body="Joyful early years for our youngest learners, and a dedicated academic pathway for students who have completed Hifz-ul-Quran."
          />
          {!anchored && (
            <Button href="/academics" variant="secondary" className="self-start lg:self-auto">
              View All Programs
            </Button>
          )}
        </div>

        <RevealGroup as="ul" className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {early.map((p, i) => {
            const t = tones[p.tone as keyof typeof tones];
            const Icon = p.icon;
            return (
              <RevealItem
                as="li"
                key={p.slug}
                id={anchored ? p.slug : undefined}
                className={cn("scroll-mt-[calc(var(--header-h)+1.5rem)]", i === 2 && "md:col-span-2 lg:col-span-1")}
              >
                <article className="card-lift group flex h-full flex-col overflow-hidden card">
                  <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3] lg:aspect-[16/11]">
                    <PhotoSlot
                      image={p.image}
                      icon={Icon}
                      tone={p.tone}
                      brief={p.photoBrief}
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                      imageClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1.5", t.bar)} />
                    <span className={cn("absolute left-4 top-5 rounded-full px-3 py-1.5 label shadow-soft", t.badge)}>
                      {number(i)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className={cn("label", t.text)}>{p.title}</p>
                    <h3 className="mt-2.5 text-balance font-display text-[1.375rem] font-bold leading-tight text-accent-strong">
                      {p.headline}
                    </h3>
                    <p className="mt-3 text-body leading-relaxed text-fg-muted">{p.body}</p>
                    <ul className="mt-5 grid gap-2.5 border-t border-border pt-5">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm font-semibold text-fg">
                          <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", t.tick)}>
                            <Check size={12} weight="bold" aria-hidden="true" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={anchored ? siteConfig.applyHref : p.href}
                      className="mt-auto inline-flex items-center gap-1.5 self-start pt-6 text-sm font-bold text-accent transition-colors hover:text-accent-strong"
                    >
                      {anchored ? "Enquire About Admission" : p.cta}
                      <span className="sr-only">: {p.title}</span>
                      <ArrowRight
                        size={14}
                        weight="bold"
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {huffaz && (
          <Reveal className="mt-6">
            <article
              id={anchored ? huffaz.slug : undefined}
              className="surface-ink scroll-mt-[calc(var(--header-h)+1.5rem)] overflow-hidden rounded-xl shadow-deep"
            >
              <div aria-hidden="true" className="pattern-geo" />
              {/* wide banner, so a whole classroom (boys' and girls' sides) stays in view */}
              <div className="relative aspect-[16/10] sm:aspect-[2/1] lg:aspect-[5/2]">
                <PhotoSlot
                  image={huffaz.image}
                  icon={huffaz.icon}
                  tone="navy"
                  brief={huffaz.photoBrief}
                  sizes="(min-width: 1280px) 1216px, 100vw"
                />
                <span className="absolute left-4 top-5 rounded-full bg-highlight px-3 py-1.5 label text-highlight-fg shadow-soft">
                  {number(early.length)}
                </span>
              </div>
              <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-12">
                <div>
                  <Eyebrow tone="highlight">{huffaz.title}</Eyebrow>
                  <h3 className="mt-4 text-balance font-display text-[1.625rem] font-bold leading-tight text-white sm:text-[2rem]">
                    {huffaz.headline}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-fg-inverted-muted">{huffaz.body}</p>
                  <div className="mt-8 hidden lg:block">
                    <Button href={huffaz.href} variant="highlight">
                      {huffaz.cta}
                    </Button>
                  </div>
                </div>
                <div>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {huffaz.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm font-semibold text-white">
                        <CheckCircle size={18} weight="fill" aria-hidden="true" className="mt-px shrink-0 text-highlight" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 rounded-md border border-white/15 bg-white/[0.06] px-4 py-3 text-sm leading-relaxed text-fg-inverted-muted">
                    <strong className="font-bold text-white">Please note:</strong> this programme is for students who have
                    already completed Hifz-ul-Quran. It does not teach Quran memorisation.
                  </p>
                  <div className="mt-8 lg:hidden">
                    <Button href={huffaz.href} variant="highlight">
                      {huffaz.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
