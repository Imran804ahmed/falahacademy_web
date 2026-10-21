import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { facultyPoints } from "@/content/school";
import { withBlur } from "@/lib/image-meta";

/** How Falah Academy teachers work with students: an academic portrait rather than a staff directory. */
export function Faculty({ className }: { className?: string }) {
  const photo = { src: "/images/faculty/teacher-guidance.jpg" };
  return (
    <section id="faculty" className={className ?? "py-section"}>
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow className="mb-4">Our Faculty</Eyebrow>
            <h2 className="text-balance text-display-md font-bold text-accent-strong">
              Dedicated educators. Stronger futures.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
              Good schools are built by good teachers. Ours combine subject knowledge with patience and care, and they
              take a personal interest in every student&apos;s progress.
            </p>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {facultyPoints.map(({ icon: Icon, title, body }) => (
              <RevealItem key={title} className="group flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-soft text-emerald transition-colors duration-300 group-hover:bg-emerald group-hover:text-white">
                  <Icon size={22} weight="duotone" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-[1.0625rem] font-bold text-accent-strong">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-fg-muted">{body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="relative">
          <Reveal from="clip">
            <ParallaxImage
              src={photo.src}
              alt="Teacher guiding a student through a lesson on the computer"
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
              blurDataURL={withBlur([photo])[0].blurDataURL}
              className="aspect-[4/3] rounded-xl shadow-lift lg:aspect-[5/6] [&_img]:object-[60%_center]"
            />
          </Reveal>
          <Reveal
            delay={0.35}
            className="absolute -bottom-6 left-4 right-4 card p-5 shadow-lift sm:left-auto sm:right-6 sm:w-80 lg:-left-10 lg:right-auto"
          >
            <figure className="flex gap-3">
              <Quotes size={24} weight="fill" className="shrink-0 text-highlight-deep" aria-hidden="true" />
              <blockquote className="font-display text-[0.98rem] font-semibold leading-snug text-accent-strong">
                Every child can succeed when they are known, guided and encouraged.
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
