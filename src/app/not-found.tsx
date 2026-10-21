import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="surface-ink -mt-[var(--header-h)] flex min-h-[80vh] items-center rounded-b-section pb-20 pt-[calc(var(--header-h)+5rem)]">
      <div aria-hidden="true" className="pattern-geo" />
      <Container className="text-center">
        <p className="stat-figure text-6xl text-highlight">404</p>
        <h1 className="mt-4 text-display-lg font-bold text-fg-inverted">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-fg-inverted-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button href="/" variant="highlight">
            Back to home
          </Button>
          <Button href="/contact" variant="onDark" showArrow={false}>
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
