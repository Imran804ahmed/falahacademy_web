import { getImageProps } from "next/image";
import imageConfig from "@/lib/image-config.json";
import { cn } from "@/lib/cn";
import { PreloadImage } from "@/components/ui/PreloadImage";

/**
 * Full-bleed decorative photo behind a hero or section. Renders a <picture> so
 * browsers that support AVIF get it (about a third smaller than WebP at hero
 * widths), with the WebP srcset from next/image as the fallback.
 *
 * `priority` marks the page's LCP image: preloaded from <head> and fetched at
 * high priority. Everything else lazy-loads.
 */
export function BackdropImage({
  src,
  position = "center",
  priority = false,
  className,
}: {
  src: string;
  position?: string;
  priority?: boolean;
  className?: string;
}) {
  const {
    props: { srcSet, style, ...rest },
  } = getImageProps({
    src,
    alt: "",
    fill: true,
    sizes: "100vw",
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : undefined,
  });
  // AVIF renditions only exist for the sources listed in image-config.json
  const avifSrcSet = imageConfig.avif.includes(src) ? srcSet?.replace(/\.webp(?=[? ])/g, ".avif") : undefined;

  return (
    <picture>
      {/* React only auto-preloads an <img> outside <picture>, so without this the LCP photo
          would be requested after the header logos */}
      {priority && (
        <PreloadImage
          src={rest.src}
          srcSet={avifSrcSet ?? srcSet}
          sizes={rest.sizes}
          type={avifSrcSet ? "image/avif" : undefined}
        />
      )}
      {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={rest.sizes} />}
      <img
        {...rest}
        alt=""
        srcSet={srcSet}
        style={{ ...style, objectPosition: position }}
        className={cn("object-cover", className)}
      />
    </picture>
  );
}
