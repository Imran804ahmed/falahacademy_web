import Image from "next/image";
import { Info } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { admissionRequirements } from "@/content/school";
import { blurProps } from "@/lib/image-meta";

export function AdmissionRequirements() {
  const photo = "/images/programs/montessori.jpg";
  return (
    <section id="requirements" className="surface-tint py-section">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <Eyebrow className="mb-4">Admission Requirements</Eyebrow>
          <h2 className="text-balance text-display-md font-bold text-accent-strong">Documents you&apos;ll need</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            Please bring the following when you submit your child&apos;s application.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {admissionRequirements.map(({ title, icon: Icon }) => (
              <li key={title} className="flex items-center gap-3 card p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-soft text-emerald">
                  <Icon size={20} weight="duotone" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-fg">{title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 text-sm text-fg-muted">
            <Info size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
            Requirements may vary slightly by class. The admissions office will confirm what applies to your child.
          </p>
        </Reveal>
        <Reveal from="clip" delay={0.08} className="relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lift">
            <Image
              src={photo}
              alt="Young student in school uniform smiling in class"
              fill
              sizes="(min-width: 1280px) 520px, 40vw"
              className="object-cover object-[50%_15%]"
              {...blurProps(photo)}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
