import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/sections/PageHeader";
import { NewsCard } from "@/components/sections/NewsCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { news } from "@/content/school";
import { siteConfig } from "@/content/site";
import { blurProps } from "@/lib/image-meta";
import { formatDate } from "@/lib/date";

type RouteParams = { slug: string };

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news-events/${item.slug}` },
    openGraph: { type: "article", title: item.title, description: item.excerpt, images: [item.image.src] },
  };
}

export default async function NewsItemPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const others = news.filter((n) => n.slug !== slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": item.category === "Event" ? "Event" : "NewsArticle",
    name: item.title,
    headline: item.title,
    description: item.excerpt,
    image: `${siteConfig.baseUrl}${item.image.src}`,
    ...(item.category === "Event"
      ? { startDate: item.date, location: { "@type": "Place", name: siteConfig.name, address: siteConfig.contact.address } }
      : { datePublished: item.date }),
    organizer: { "@type": "School", name: siteConfig.name, url: siteConfig.baseUrl },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHeader eyebrow="News & Events" title={item.title} intro={item.excerpt} image={{ src: item.image.src }}>
        <p className="enter-up mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
          <CalendarBlank size={16} className="text-highlight" aria-hidden="true" />
          <time dateTime={item.date}>{formatDate(item.date)}</time>
          <span className="text-white/40">·</span>
          {item.category}
        </p>
      </PageHeader>

      <article className="py-section-sm">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lift">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 768px) 720px, 100vw"
                className="object-cover"
                {...blurProps(item.image.src)}
              />
            </div>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-fg-muted">
              {item.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/news-events"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent hover:text-accent-strong"
              >
                <ArrowLeft size={16} weight="bold" aria-hidden="true" className="transition-transform group-hover:-translate-x-1" />
                <span className="link-underline">Back to News &amp; Events</span>
              </Link>
              <Button href="/contact" variant="secondary">
                Questions? Contact Us
              </Button>
            </div>
          </Reveal>
        </Container>
      </article>

      <section className="surface-tint py-section-sm">
        <Container>
          <h2 className="text-display-md font-bold text-accent-strong">More news &amp; events</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
