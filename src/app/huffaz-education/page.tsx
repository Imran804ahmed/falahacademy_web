import type { Metadata } from "next";
import { CheckCircle, Info, Student } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/sections/PageHeader";
import { AdmissionSteps } from "@/components/sections/AdmissionSteps";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCard } from "@/components/ui/IconCard";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { huffazEducation } from "@/content/school";
import { siteConfig } from "@/content/site";

const description =
  "Falah Academy's Huffaz Education System in Karachi: an accelerated programme that helps students who completed Hifz-ul-Quran continue towards Matriculation.";

export const metadata: Metadata = {
  title: "Huffaz Education System: Academic Education for Huffaz",
  description,
  alternates: { canonical: "/huffaz-education" },
  openGraph: { title: `Huffaz Education System | ${siteConfig.name}`, description, url: "/huffaz-education" },
};

const tones = ["navy", "emerald", "highlight"] as const;

// the programme as a Course offered by the school, for search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Huffaz Education System",
  description,
  url: `${siteConfig.baseUrl}/huffaz-education/`,
  provider: { "@type": "EducationalOrganization", name: siteConfig.name, url: siteConfig.baseUrl },
  educationalLevel: "Matriculation",
  audience: { "@type": "EducationalAudience", audienceType: "Students who have completed Hifz-ul-Quran" },
};

export default function HuffazEducationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHeader
        eyebrow="Huffaz Education System"
        title="From Hifz to Matric: A Faster Path to Academic Success"
        intro="A specialised, accelerated academic programme for students who have already completed Hifz-ul-Quran, helping Huffaz continue their education towards Matriculation."
        image={{ src: "/images/huffaz/students-writing-classroom.jpg", position: "35% 40%" }}
      >
        <div className="enter-up mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ animationDelay: "0.16s" }}>
          <Button href="#enquire" variant="highlight">
            Enquire About Huffaz Admissions
          </Button>
          <Button href="#how-it-works" variant="onDark" showArrow={false}>
            How It Works
          </Button>
        </div>
      </PageHeader>

      {/* What the programme is, and who it is for */}
      <section id="overview" className="py-section">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow className="mb-4">About the Program</Eyebrow>
            <h2 className="text-balance text-display-md font-bold text-accent-strong">
              Bridging Quranic achievement with modern education
            </h2>
            {huffazEducation.intro.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
                {p}
              </p>
            ))}
            <p className="mt-7 flex items-start gap-3 rounded-lg border border-emerald/20 bg-emerald-soft p-4 text-body leading-relaxed text-fg">
              <Info size={22} weight="duotone" aria-hidden="true" className="mt-0.5 shrink-0 text-emerald" />
              <span>
                <strong className="font-bold text-accent-strong">Important: </strong>
                {huffazEducation.clarification}
              </span>
            </p>
          </Reveal>

          <div className="relative">
            <Reveal from="clip" delay={0.08}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-xl shadow-lift">
                <PhotoSlot
                  image={huffazEducation.overviewImage}
                  icon={Student}
                  tone="navy"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.3} className="relative -mt-12 mx-4 card p-6 shadow-lift sm:mx-8">
              <p className="font-display text-title font-bold text-accent-strong">Who is it for?</p>
              <ul className="mt-3 space-y-2">
                {huffazEducation.audience.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm font-semibold text-fg">
                    <CheckCircle size={18} weight="fill" aria-hidden="true" className="mt-px shrink-0 text-emerald" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section id="highlights" className="surface-tint py-section">
        <Container>
          <SectionHeading
            centered
            eyebrow="Program Highlights"
            title="A focused academic pathway for Huffaz"
            body="Structured teaching and close support that help each Hafiz move forward with confidence."
          />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
            {huffazEducation.highlights.map((item, i) => (
              <RevealItem key={item.title}>
                <IconCard {...item} tone={tones[i % 3]} className="lg:p-7" />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <AdmissionSteps
        id="how-it-works"
        steps={huffazEducation.steps}
        eyebrow="How It Works"
        title="Getting started is simple"
        body="Every Hafiz starts from a different place, so placement and pace are agreed with each family individually."
      />

      <section className="py-section-sm">
        <Container>
          <div className="surface-ink rounded-xl px-6 py-12 text-center shadow-deep sm:px-12 sm:py-16">
            <div aria-hidden="true" className="pattern-geo" />
            <Reveal className="mx-auto max-w-2xl">
              <h2 className="text-balance text-display-md font-bold text-white">
                Already a Hafiz? <span className="text-brand-gradient">Take the next step.</span>
              </h2>
              <p className="mx-auto mt-5 text-base leading-relaxed text-fg-inverted-muted sm:text-lg">
                Talk to our admissions office about your child&apos;s current level and the right starting point.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Button href="#enquire" variant="highlight">
                  Enquire About Huffaz Admissions
                </Button>
                <Button href="/academics#services" variant="onDark" showArrow={false}>
                  Huffaz Tuition (during Hifz)
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Contact
        id="enquire"
        title="Enquire About Huffaz Admissions"
        intro="Send us an enquiry and our admissions office will contact you to discuss your child's Hifz completion, current academic level and the next steps."
        defaultSubject="Huffaz Admission Inquiry"
        showMap={false}
      />
      <FAQ
        className="surface-tint py-section"
        items={huffazEducation.faqs}
        body="Common questions from families of Huffaz. For anything else, our admissions office is happy to help."
      />
    </>
  );
}
