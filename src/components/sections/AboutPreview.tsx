import Image from "next/image";
import { CheckCircle, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { blurProps, withBlur } from "@/lib/image-meta";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

const pillars = [
  "Strong academic foundations",
  "Discipline and good manners",
  "Confidence and leadership",
  "Islamic and moral values",
];

/** Home: "Welcome to Falah Academy" two-column introduction. */
export function AboutPreview() {
  const main = "/images/classrooms/hands-on-learning.jpg";
  const inset = "/images/classrooms/chalkboard-maths.jpg";

  return (
    <section id="welcome" className="scroll-mt-8 py-section">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <Reveal from="clip">
            <ParallaxImage
              src={main}
              alt="Student taking part in a hands-on classroom activity"
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 576px, 100vw"
              blurDataURL={withBlur([{ src: main }])[0].blurDataURL}
              className="aspect-[4/5] rounded-xl shadow-lift sm:aspect-square [&_img]:object-[40%_center]"
            />
          </Reveal>
          <Reveal
            delay={0.35}
            className="absolute -bottom-8 -right-3 hidden w-[42%] overflow-hidden rounded-xl border-[6px] border-bg shadow-lift sm:block lg:-right-8"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={inset}
                alt="Student writing confidently on the chalkboard"
                fill
                sizes="240px"
                className="object-cover"
                {...blurProps(inset)}
              />
            </div>
          </Reveal>
          <Reveal
            from="scale"
            delay={0.5}
            /* lg-2xl: the image column meets the 32px page gutter, so overhang less to stay clear of the screen edge */
            className="absolute -left-3 top-8 rounded-lg bg-accent-strong px-6 py-4 text-white shadow-lift sm:-left-6 lg:-left-3 2xl:-left-6"
          >
            <p className="label text-white/75">One school</p>
            <p className="mt-2 font-display text-lg font-bold leading-tight text-white">
              Montessori
              <span className="mx-1.5 text-highlight" aria-hidden="true">→</span>
              <span className="sr-only"> to </span>
              Intermediate
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <Eyebrow className="mb-4">About Our School</Eyebrow>
          <h2 className="text-balance text-display-md font-bold text-accent-strong">
            Education that goes beyond textbooks
          </h2>
          <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
            At Falah Academy, we develop confident, responsible and capable students through strong academic foundations,
            supportive teaching and an environment that encourages curiosity, discipline and lifelong learning.
          </p>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            Our teachers know each student, track progress closely and stay in regular contact with parents. Children can
            begin with us in Montessori and complete their Matric and Intermediate here, with consistent standards and
            values at every stage.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-body font-semibold text-fg">
                <CheckCircle size={22} weight="fill" className="shrink-0 text-emerald" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <figure className="mt-8 flex gap-3 border-l-2 border-highlight pl-6">
            <Quotes size={26} weight="fill" className="shrink-0 text-highlight" aria-hidden="true" />
            <blockquote className="font-display text-lg font-semibold leading-snug text-accent-strong">
              &ldquo;Falah&rdquo; means success: in learning, in character and in life.
            </blockquote>
          </figure>
          <div className="mt-8">
            <Button href="/about">Learn More About Us</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
