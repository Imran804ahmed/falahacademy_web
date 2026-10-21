import Image from "next/image";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site";

/*
 * Brand assets (public/images/brand), generated from the supplied logo:
 *   logo-full.png           mark + wordmark + "Growth • Knowledge • Success" (structured data)
 *   logo-compact.png        mark + wordmark, for light surfaces
 *   logo-compact-light.png  white wordmark, lifted mark, for navy surfaces and photos
 *   logo-mark.png / -light  book-and-arrow mark only
 * Intrinsic sizes: lockups 826×337, mark 359×337.
 */

/** The book-and-arrow mark on its own (decorative). */
export function LogoMark({ tone = "dark", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Image
      src={tone === "light" ? "/images/brand/logo-mark-light.png" : "/images/brand/logo-mark.png"}
      alt=""
      width={120}
      height={113}
      className={cn("h-auto", className)}
    />
  );
}

/**
 * Mark + wordmark. `tone` follows the surface it sits on. With `swap`, both
 * versions are rendered and cross-fade (the header changes surface on scroll),
 * so switching never waits on a download. Size it with a height class.
 */
export function Logo({
  tone = "dark",
  swap = false,
  priority = false,
  className,
}: {
  tone?: "light" | "dark";
  swap?: boolean;
  /** above the fold: load eagerly */
  priority?: boolean;
  className?: string;
}) {
  const light = "/images/brand/logo-compact-light.png";
  const dark = "/images/brand/logo-compact.png";
  // displayed up to 64px tall (~157px wide); width/height drive the 1x/2x srcset
  const img = (src: string, visible: boolean) => (
    <Image
      src={src}
      alt={visible ? siteConfig.name : ""}
      width={157}
      height={64}
      {...(priority && { loading: "eager" as const })}
      className={cn(
        "h-full w-auto",
        swap && "absolute inset-0 transition-opacity duration-300",
        swap && !visible && "opacity-0"
      )}
    />
  );

  return (
    <span className={cn("relative block aspect-[826/337]", className)}>
      {swap ? (
        <>
          {img(light, tone === "light")}
          {img(dark, tone === "dark")}
        </>
      ) : (
        img(tone === "light" ? light : dark, true)
      )}
    </span>
  );
}
