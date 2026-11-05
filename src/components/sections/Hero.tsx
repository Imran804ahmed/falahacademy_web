import { BookOpenText, Mosque, Plant } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { BackdropImage } from "@/components/ui/BackdropImage";

// the three things a parent should take away from the first screen
const pillars = [
  { icon: Plant, title: "Strong Foundations", body: "From the earliest learning years" },
  { icon: Mosque, title: "Islamic Values", body: "Modesty, manners and character" },
  { icon: BookOpenText, title: "Huffaz Pathway", body: "From Hifz towards Matric" },
];

// supplied by the academy
const photo = { src: "/images/hero/islamic-school-children-classroom.jpg" };

/**
 * Home hero on navy: who we are, one headline, a short line and two actions over the
 * classroom photo, then the three key messages. The photo is the LCP image, fetched at
 * high priority; entrances are CSS-only.
 */
export function Hero() {
  const enter = (delay: number) => ({
    style: { "--enter-y": "16px", animationDelay: `${delay}s` } as React.CSSProperties,
  });

  return (
    <section className="relative isolate -mt-[var(--header-h)] flex min-h-[85svh] items-center overflow-hidden rounded-b-section bg-bg-inverted pb-12 sm:min-h-[90svh] sm:pb-16">
      {/* full-bleed photo; the navy fade sits only behind the copy, so the children stay bright */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <BackdropImage src={photo.src} position="58% 40%" priority />
        <div className="scrim-hero-photo" />
        {/* keeps the white header links readable over the bright photo */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-bg-inverted/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg-inverted/80 to-transparent" />
      </div>

      <Container className="w-full pt-[calc(var(--header-h)+2.5rem)] lg:pt-[calc(var(--header-h)+3.5rem)]">
        <div className="@container max-w-3xl lg:max-w-[34rem] xl:max-w-[36rem]">
          <p
            {...enter(0)}
            className="enter-up inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-bg-inverted/60 py-1.5 pl-2 pr-4 text-xs font-bold tracking-wide text-white backdrop-blur"
          >
            <span className="rounded-full bg-highlight px-2 py-0.5 label text-highlight-fg">Karachi</span>
            {siteConfig.tagline}
          </p>
          {/* always two lines: sized from the viewport so the longer first line fits on a 360px phone */}
          <h1 className="mt-6 text-[length:clamp(1.6rem,8.3vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-white lg:text-[2.875rem] xl:text-[3.4rem]">
            <span className="block whitespace-nowrap">Nurturing Young Minds,</span>{" "}
            <span className="block whitespace-nowrap text-brand-gradient">Building Bright Futures</span>
          </h1>
          <p {...enter(0.08)} className="enter-up mt-5 font-display text-lg font-semibold text-white sm:text-xl">
            Every Stage of Learning. Every Step Towards Success.
          </p>
          <p {...enter(0.14)} className="enter-up mt-4 text-base leading-relaxed text-white/85 sm:text-lg lg:max-w-[28rem]">
            From early childhood education to accelerated Matriculation pathways for Huffaz, {siteConfig.name} combines
            academic excellence, Islamic values and character development to prepare students for a successful future.
          </p>
          <div {...enter(0.2)} className="enter-up mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button href={siteConfig.applyHref} variant="highlight" className="w-full sm:w-auto">
              Apply for Admission
            </Button>
            <Button href="#programs" variant="onDark" showArrow={false} className="w-full sm:w-auto">
              Explore Our Programs
            </Button>
          </div>
        </div>

        <ul
          {...enter(0.28)}
          aria-label="What Falah Academy offers"
          className="enter-up mt-12 grid gap-3 sm:mt-14 sm:grid-cols-3 lg:max-w-4xl"
        >
          {pillars.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex items-center gap-3.5 rounded-lg border border-white/15 bg-bg-inverted/70 px-4 py-3.5 backdrop-blur"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-highlight/15 text-highlight">
                <Icon size={22} weight="duotone" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[0.95rem] font-bold leading-snug text-white">{title}</span>
                <span className="block text-[0.8125rem] leading-snug text-white/75">{body}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
