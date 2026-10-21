import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import type { NewsItem } from "@/content/school";
import { blurProps } from "@/lib/image-meta";
import { formatDate } from "@/lib/date";

export function NewsCard({ item }: { item: NewsItem }) {
  const href = `/news-events/${item.slug}`;
  const day = new Date(item.date);
  return (
    <article className="card-lift group relative flex h-full flex-col overflow-hidden card has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-royal has-[a:focus-visible]:ring-offset-2">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          {...blurProps(item.image.src)}
        />
        {/* date block */}
        <div aria-hidden="true" className="absolute left-4 top-4 flex flex-col items-center rounded-xl bg-white px-3 py-2 text-center shadow-soft">
          <span className="stat-figure text-2xl text-accent-strong">{day.getUTCDate()}</span>
          <span className="mt-0.5 label text-highlight-deep">
            {day.toLocaleString("en-GB", { month: "short", timeZone: "UTC" })}
          </span>
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-accent-strong/90 px-3 py-1 label text-white">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-fg-muted">
          <CalendarBlank size={14} aria-hidden="true" />
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </p>
        <h3 className="mt-2 text-title font-bold text-accent-strong">
          {/* stretched link: the whole card is clickable, but only the title is announced */}
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {item.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-body leading-relaxed text-fg-muted">{item.excerpt}</p>
        <span aria-hidden="true" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-emerald">
          Read More
          <ArrowRight size={15} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
