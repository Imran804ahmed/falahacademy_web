import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { BackdropImage } from "@/components/ui/BackdropImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

/** `src` is an original under /images; responsive variants are resolved automatically. */
type HeaderImage = { src: string; position?: string };

/**
 * Navy page opener with a photo backdrop. Slides under the transparent header
 * and ends in a rounded edge. Includes a breadcrumb back to Home.
 */
export function PageHeader({
  title,
  intro,
  eyebrow,
  image,
  children,
}: {
  title: string;
  intro?: string;
  eyebrow?: string;
  image?: HeaderImage;
  children?: React.ReactNode;
}) {
  return (
    <section className="surface-ink relative -mt-[var(--header-h)] rounded-b-section pb-16 pt-[calc(var(--header-h)+3.5rem)] sm:pb-24 sm:pt-[calc(var(--header-h)+5rem)]">
      {image ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          {/* the page opener is the LCP element on every page that has one */}
          <BackdropImage src={image.src} position={image.position} priority />
          <div className="scrim-hero" />
          <div className="pattern-geo opacity-50" />
        </div>
      ) : (
        <div aria-hidden="true" className="pattern-geo" />
      )}
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="enter-up mb-6">
          <ol className="flex items-center gap-1.5 text-xs font-medium text-fg-inverted-muted">
            <li>
              {/* taller hit area on touch screens; negative margin keeps the row height */}
              <Link
                href="/"
                className="link-underline transition-colors hover:text-white pointer-coarse:-my-3.5 pointer-coarse:inline-block pointer-coarse:py-3.5 pointer-coarse:pr-3"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <CaretRight size={11} weight="bold" />
            </li>
            <li aria-current="page" className="text-white">
              {eyebrow ?? title}
            </li>
          </ol>
        </nav>
        {/* CSS entrance, so the page title paints without waiting for hydration */}
        <div className="enter-up" style={{ animationDelay: "0.04s" }}>
          {eyebrow && (
            <Eyebrow tone="highlight" className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}
          <h1 className="max-w-3xl text-balance text-display-lg font-bold text-fg-inverted">{title}</h1>
        </div>
        {intro && (
          <div className="enter-up" style={{ animationDelay: "0.1s" }}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-inverted-muted sm:text-lg">{intro}</p>
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
