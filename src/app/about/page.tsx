import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Quotes, Target } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/sections/PageHeader";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Faculty } from "@/components/sections/Faculty";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/ui/IconCard";
import { LogoMark } from "@/components/ui/Logo";
import { blurProps } from "@/lib/image-meta";
import { coreValues, history, mission, philosophy, principal, vision } from "@/content/school";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Falah Academy, a school in Pakistan offering education from Montessori to Intermediate: our story, vision, mission, values, faculty and a message from the Principal.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const introImage = "/images/student-life/friends.jpg";
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Educating minds, building character"
        intro="Falah Academy is a community of dedicated teachers, families and students, from Montessori to Intermediate, working toward one goal: helping every child reach their full potential."
        image={{
          src: "/images/programs/secondary.jpg",
          position: "70% 35%",
        }}
      />

      {/* Introduction & history */}
      <section id="history" className="py-section">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow className="mb-4">Our School &amp; History</Eyebrow>
            <h2 className="text-balance text-display-md font-bold text-accent-strong">
              A school built on purpose, care and high standards
            </h2>
            {history.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
          <div className="relative">
            <Reveal from="clip" delay={0.08}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl shadow-lift">
                <Image
                  src={introImage}
                  alt="Smiling group of young students standing together"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  {...blurProps(introImage)}
                />
              </div>
            </Reveal>
            <Reveal delay={0.4} className="absolute -bottom-6 left-6 right-6 card p-6 shadow-lift sm:left-auto sm:w-72">
              <p className="font-display text-title font-bold text-accent-strong">“Falah” means success</p>
              <p className="mt-1 text-sm text-fg-muted">
                Success in learning, in character and in life: the promise in our name.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision & mission */}
      <section id="vision" className="surface-tint py-section">
        <Container>
          <SectionHeading centered eyebrow="Vision & Mission" title="What guides us every day" />
          <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { icon: Eye, label: "Our Vision", text: vision, dark: true },
              {
                icon: Target,
                label: "Our Mission",
                text: mission,
                dark: false,
              },
            ].map(({ icon: Icon, label, text, dark }) => (
              <RevealItem key={label}>
                <div
                  className={
                    dark
                      ? "surface-ink h-full rounded-xl p-8 shadow-lift sm:p-10"
                      : "h-full card rounded-xl p-8 sm:p-10"
                  }
                >
                  <span
                    className={
                      dark
                        ? "flex h-14 w-14 items-center justify-center rounded-2xl bg-highlight text-highlight-fg"
                        : "flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-soft text-emerald"
                    }
                  >
                    <Icon size={28} weight="duotone" aria-hidden="true" />
                  </span>
                  <h3
                    className={
                      dark ? "mt-6 text-2xl font-bold text-white" : "mt-6 text-2xl font-bold text-accent-strong"
                    }
                  >
                    {label}
                  </h3>
                  <p
                    className={
                      dark
                        ? "mt-3 text-lg leading-relaxed text-fg-inverted-muted"
                        : "mt-3 text-lg leading-relaxed text-fg-muted"
                    }
                  >
                    {text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Core values */}
      <section id="values" className="py-section">
        <Container>
          <SectionHeading
            centered
            eyebrow="Core Values"
            title="The values we live by"
            body="Eight principles shape our classrooms, our relationships and the young people who graduate from Falah Academy."
          />
          <RevealGroup stagger={0.05} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <RevealItem key={v.title}>
                <IconCard {...v} tone={(["navy", "emerald", "highlight"] as const)[i % 3]} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Principal's message */}
      <section id="principal" className="surface-ink mx-2 rounded-section py-section sm:mx-4">
        <div aria-hidden="true" className="pattern-geo" />
        <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal from="left" className="mx-auto w-full max-w-sm">
            {/* TODO: replace this placeholder with the Principal's photograph */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-ink-3 to-bg-inverted shadow-deep">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <LogoMark tone="light" className="w-28" />
                <p className="label text-fg-inverted-muted">
                  Principal&apos;s photo
                </p>
              </div>
              <div aria-hidden="true" className="absolute inset-3 rounded-lg border border-highlight/30" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow tone="highlight" className="mb-4">
              Principal&apos;s Message
            </Eyebrow>
            <h2 className="text-balance text-display-md font-bold text-white">A warm welcome to every family</h2>
            <figure className="mt-6">
              <Quotes size={40} weight="fill" className="text-highlight" aria-hidden="true" />
              <blockquote className="mt-3 space-y-4 text-base leading-relaxed text-fg-inverted-muted sm:text-lg">
                {principal.message.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-6">
                <span className="block font-display text-xl font-bold text-white">{principal.name}</span>
                <span className="text-sm text-highlight">{principal.title}</span>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      <Faculty className="py-section" />

      <WhyChooseUs className="surface-tint py-section" />

      {/* Educational philosophy */}
      <section id="philosophy" className="py-section">
        <Container>
          <SectionHeading
            eyebrow="Our Educational Philosophy"
            title="Educating the whole child"
            body="We believe that education is about more than examinations. It is about preparing young people to think well, live well and serve others."
          />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <RevealItem key={p.title}>
                <div className="h-full rounded-xl border-t-4 border-highlight bg-bg-elevated p-8 shadow-soft">
                  <p className="stat-figure text-4xl text-highlight-deep">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-title font-bold text-accent-strong">{p.title}</h3>
                  <p className="mt-2 text-body leading-relaxed text-fg-muted">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <AdmissionsCTA />
    </>
  );
}
