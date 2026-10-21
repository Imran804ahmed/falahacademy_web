import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { stageSpotlights } from "@/content/school";
import { blurProps, withBlur } from "@/lib/image-meta";
import { cn } from "@/lib/cn";

/**
 * Home: Montessori, Primary–Secondary and Intermediate, each with its own
 * character. Montessori is warm and light, the school years are the
 * standard white, and Intermediate sits on navy, a step more mature.
 */
export function StageSpotlights() {
  return (
    <section aria-label="Learning at every stage" className="space-y-6 py-section-sm sm:space-y-8">
      {stageSpotlights.map((s, i) => {
        const dark = s.key === "intermediate";
        const flip = i % 2 === 1;
        return (
          <Container key={s.key}>
            <div
              className={cn(
                "relative isolate overflow-hidden rounded-section p-5 min-[400px]:p-6 sm:p-10 lg:p-14",
                s.key === "montessori" && "bg-[linear-gradient(135deg,#fff8ec,#eef9f4)] ring-1 ring-[#f3e3c3]",
                s.key === "school" && "card",
                dark && "surface-ink shadow-deep"
              )}
            >
              {dark && <div aria-hidden="true" className="pattern-geo" />}
              {s.key === "montessori" && (
                // soft, playful shapes: colour without turning the page childish
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                  <span className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ffd98a]/40 blur-2xl" />
                  <span className="absolute -bottom-12 left-1/3 h-44 w-44 rounded-full bg-highlight/20 blur-2xl" />
                </div>
              )}
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={cn("relative", flip && "lg:order-2")}>
                  <Reveal from="clip">
                    <ParallaxImage
                      src={s.image.src}
                      alt={s.image.alt}
                      sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                      blurDataURL={withBlur([s.image])[0].blurDataURL}
                      className={cn("aspect-[4/3] rounded-xl shadow-lift", dark && "ring-1 ring-white/10")}
                    />
                  </Reveal>
                  {s.inset && (
                    <Reveal
                      delay={0.3}
                      className={cn(
                        "absolute -bottom-6 hidden w-[38%] overflow-hidden rounded-xl border-[6px] shadow-lift sm:block",
                        flip ? "-left-4 lg:-left-8" : "-right-4 lg:-right-8",
                        s.key === "montessori" ? "border-[#fffaf1]" : "border-bg-elevated"
                      )}
                    >
                      <div className="relative aspect-square">
                        <Image
                          src={s.inset.src}
                          alt={s.inset.alt}
                          fill
                          sizes="220px"
                          className="object-cover"
                          {...blurProps(s.inset.src)}
                        />
                      </div>
                    </Reveal>
                  )}
                </div>

                <Reveal delay={0.08}>
                  <Eyebrow tone={dark ? "highlight" : "emerald"} className="mb-4">
                    {s.eyebrow}
                  </Eyebrow>
                  <h2 className={cn("text-balance text-display-md font-bold", dark ? "text-white" : "text-accent-strong")}>
                    {s.title}
                  </h2>
                  <p
                    className={cn(
                      "mt-5 text-base leading-relaxed sm:text-lg",
                      dark ? "text-fg-inverted-muted" : "text-fg-muted"
                    )}
                  >
                    {s.body}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {s.points.map((point) => (
                      <li
                        key={point}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold",
                          dark && "bg-white/[0.08] text-white ring-1 ring-white/15",
                          s.key === "montessori" && "bg-white/80 text-fg ring-1 ring-[#f0dcb4]",
                          s.key === "school" && "bg-accent-soft text-accent-strong"
                        )}
                      >
                        <CheckCircle
                          size={16}
                          weight="fill"
                          aria-hidden="true"
                          className={dark ? "text-highlight" : s.key === "montessori" ? "text-[#c98a12]" : "text-emerald"}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href={s.href} variant={dark ? "highlight" : "primary"}>
                      {dark ? "Explore Intermediate" : s.key === "montessori" ? "Explore Montessori" : "Explore the School Years"}
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        );
      })}
    </section>
  );
}
