import Image from "next/image";
import type { Facility } from "@/content/school";
import { blurProps } from "@/lib/image-meta";

/** Facility card: a photo when the school has one, otherwise a branded icon panel of the same size. */
export function FacilityCard({ facility }: { facility: Facility }) {
  const { title, body, image, icon: Icon } = facility;
  return (
    <article className="card-lift group flex h-full flex-col overflow-hidden card">
      <div className="relative aspect-[16/10] overflow-hidden">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            {...blurProps(image.src)}
          />
        ) : (
          <div className="surface-ink flex h-full items-center justify-center">
            <div aria-hidden="true" className="pattern-geo" />
            <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-highlight ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-110">
              <Icon size={40} weight="duotone" aria-hidden="true" />
            </span>
          </div>
        )}
        {image && (
          <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-accent shadow-soft">
            <Icon size={20} weight="duotone" aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-title font-bold text-accent-strong">{title}</h3>
        <p className="mt-2 text-body leading-relaxed text-fg-muted">{body}</p>
      </div>
    </article>
  );
}
