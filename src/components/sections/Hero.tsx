import { CaretDown, Clock, GraduationCap, SealCheck, ShieldCheck, Star } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { siteConfig } from "@/content/site";
import { programs } from "@/content/school";

/** One headline word, rising out of a clipping mask (CSS, so it runs before hydration). */
function Word({ children, index, className }: { children: React.ReactNode; index: number; className?: string }) {
  return (
    <span className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
      <span style={{ animationDelay: `${0.1 + index * 0.05}s` }} className={"enter-word inline-block " + (className ?? "")}>
        {children}
      </span>
    </span>
  );
}

const headline = "Building Strong Foundations for a Brighter Future"
  .split(" ")
  .map((word) => ({ word, accent: word === "Brighter" || word === "Future" }));

const trustPoints = [
  { icon: SealCheck, label: "Experienced faculty" },
  { icon: ShieldCheck, label: "Safe, caring campus" },
  { icon: Star, label: "Values-based learning" },
];

export function Hero() {
  const enter = (delay: number) => ({
    style: { "--enter-y": "22px", "--enter-duration": "0.8s", animationDelay: `${delay}s` } as React.CSSProperties,
  });

  return (
    <section className="relative isolate -mt-[var(--header-h)] flex min-h-[92svh] items-center overflow-hidden rounded-b-section bg-bg-inverted pb-24 sm:min-h-[100svh] sm:pb-32 md:pb-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="hero-zoom absolute inset-0">
          <BackdropImage src="/images/hero/students-classroom.jpg" position="72% 30%" priority />
        </div>
        <div className="scrim-hero" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg-inverted/85 via-bg-inverted/30 to-transparent" />
        <div className="pattern-geo opacity-60" />
      </div>

      <Container className="grid w-full items-end gap-12 pt-[calc(var(--header-h)+2.5rem)] lg:grid-cols-[1fr_auto] lg:pt-[calc(var(--header-h)+4.5rem)]">
        <div className="@container max-w-3xl">
          <p
            {...enter(0)}
            className="enter-up inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-1.5 pl-2 pr-4 text-xs font-bold tracking-wide text-white backdrop-blur"
          >
            <span className="rounded-full bg-highlight px-2 py-0.5 label text-highlight-fg">Pakistan</span>
            Montessori to Intermediate
          </p>
          <h1 className="mt-6 text-display-xl font-extrabold text-white">
            {headline.map((w, idx) => (
              <span key={idx}>
                <Word index={idx} className={w.accent ? "text-brand-gradient" : undefined}>
                  {w.word}
                </Word>
                {idx < headline.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p {...enter(0.2)} className="enter-up mt-6 max-w-[36rem] text-base leading-relaxed text-white/85 sm:text-lg">
            {siteConfig.name} provides a nurturing, academically focused environment where students grow from their
            earliest years in Montessori through Matric and Intermediate, with the knowledge, character and confidence to
            succeed.
          </p>
          <div {...enter(0.3)} className="enter-up mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button href={siteConfig.applyHref} variant="highlight" className="w-full sm:w-auto">
              Apply for Admission
            </Button>
            <Button href="/about" variant="onDark" showArrow={false} className="w-full sm:w-auto">
              Explore Falah Academy
            </Button>
          </div>
          <ul
            {...enter(0.4)}
            className="enter-up mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm font-medium text-white/85"
          >
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2">
                <Icon size={18} weight="fill" className="text-emerald-light" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* at-a-glance card: desktop only, where there's room beside the copy */}
        <aside
          {...enter(0.55)}
          aria-label={`${siteConfig.name} at a glance`}
          className="enter-up hidden w-72 rounded-xl border border-white/15 bg-white/[0.08] p-6 text-white shadow-deep backdrop-blur-md lg:block"
        >
          <p className="flex items-center gap-2 label text-highlight">
            <GraduationCap size={16} weight="fill" aria-hidden="true" />
            One school, every stage
          </p>
          <ol className="relative mt-5 space-y-3">
            <span aria-hidden="true" className="absolute bottom-2 left-[0.4375rem] top-2 w-px bg-gradient-to-b from-highlight to-white/20" />
            {programs.map((p) => (
              <li key={p.slug} className="relative flex items-baseline justify-between gap-3 pl-6 text-sm">
                <span aria-hidden="true" className="absolute left-0 top-1.5 h-[0.9375rem] w-[0.9375rem] rounded-full border-2 border-highlight bg-bg-inverted" />
                <span className="font-semibold">{p.short}</span>
                <span className="text-xs text-white/65">{p.ages}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-start justify-between gap-3 border-t border-white/15 pt-5 text-sm">
            <span className="inline-flex items-center gap-1.5 text-white/70">
              <Clock size={14} aria-hidden="true" />
              Hours
            </span>
            <span className="text-right font-semibold">
              {siteConfig.contact.hours.days}
              <br />
              {siteConfig.contact.hours.time}
            </span>
          </p>
        </aside>
      </Container>

      {/* scroll cue: sits in the hero's bottom padding (md:pb-40), so it can't collide with the copy
          when a short viewport (tablet landscape, 1366x768 laptops) lets the content fill the hero */}
      <a
        href="#welcome"
        aria-label="Scroll to learn more"
        className="absolute bottom-[5.5rem] left-1/2 hidden min-h-11 min-w-11 -translate-x-1/2 flex-col items-center justify-center gap-1 p-2 label text-white/60 transition-colors hover:text-white md:flex"
      >
        Scroll
        <CaretDown size={16} weight="bold" className="motion-safe:animate-[nudge_2s_ease-in-out_infinite]" aria-hidden="true" />
      </a>
    </section>
  );
}
