import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import { Camera } from "@phosphor-icons/react/dist/ssr";
import type { Photo } from "@/content/school";
import { blurProps } from "@/lib/image-meta";
import { cn } from "@/lib/cn";

export type PhotoTone = "sun" | "rose" | "sky" | "navy";

const panels: Record<PhotoTone, { bg: string; badge: string; lines: string }> = {
  sun: { bg: "bg-[linear-gradient(140deg,#fff8ec,#f6e4bf_55%,#fbefd8)]", badge: "bg-white text-emerald", lines: "%23b08a45" },
  rose: { bg: "bg-[linear-gradient(140deg,#f3f1f8,#dcd7e8_55%,#ebe8f3)]", badge: "bg-white text-lavender-deep", lines: "%235e4f86" },
  sky: { bg: "bg-[linear-gradient(140deg,#eef7f6,#cfe8e5_55%,#e4f2f0)]", badge: "bg-white text-accent", lines: "%232a736e" },
  navy: { bg: "bg-[radial-gradient(70%_60%_at_85%_0%,rgb(76_166_160/0.35),transparent_70%),linear-gradient(160deg,#283d42,#1f3236)]", badge: "bg-white/10 text-highlight ring-1 ring-white/15", lines: "%23ffffff" },
};

/**
 * A photo, or, while a section is still waiting for its photograph, a branded panel
 * (soft tone, eight-point-star lattice, the section's icon) so the layout never
 * shows an empty box or an off-brand stock image. The panel is decorative; in
 * development it also shows `brief`, the photo to take or source for this slot.
 *
 * Needs a sized, `relative` parent (e.g. `relative aspect-[4/3]`).
 */
export function PhotoSlot({
  image,
  icon: Icon,
  tone = "sky",
  brief,
  sizes,
  className,
  imageClassName,
  priority,
}: {
  image?: Photo;
  icon: Icon;
  tone?: PhotoTone;
  brief?: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imageClassName)}
        style={image.position ? { objectPosition: image.position } : undefined}
        {...blurProps(image.src)}
      />
    );
  }

  const p = panels[tone];
  const lattice = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' stroke='${p.lines}' stroke-opacity='.14' stroke-width='1'%3E%3Crect x='16' y='16' width='24' height='24'/%3E%3Crect x='16' y='16' width='24' height='24' transform='rotate(45 28 28)'/%3E%3Cpath d='M28 11V0M28 45v11M11 28H0M45 28h11'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div data-photo-placeholder className={cn("absolute inset-0 isolate overflow-hidden", p.bg, className)}>
      <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ backgroundImage: lattice, backgroundSize: "56px 56px" }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_45%,rgb(255_255_255/0.55),transparent_70%)] opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
        <span className={cn("flex h-20 w-20 items-center justify-center rounded-[1.75rem] shadow-soft sm:h-24 sm:w-24", p.badge)}>
          <Icon size={44} weight="duotone" />
        </span>
      </div>
      {process.env.NODE_ENV === "development" && brief && (
        <p className="absolute inset-x-3 bottom-3 flex items-start gap-2 rounded-md border border-dashed border-black/30 bg-white/90 p-2.5 text-[0.7rem] leading-snug text-fg">
          <Camera size={14} weight="bold" className="mt-px shrink-0" aria-hidden="true" />
          <span>
            <strong>Photo needed:</strong> {brief}
          </span>
        </p>
      )}
    </div>
  );
}
