"use client";

import { preload } from "react-dom";

/**
 * Emits a high-priority <link rel="preload"> for a responsive image into <head>.
 *
 * A client component on purpose: ReactDOM.preload() called from a server component is
 * sent as a hint in the RSC payload, and Next runs those hints when it prefetches a link,
 * so every page linked from the viewport would download its hero photo. Here the call only
 * happens while rendering the page itself (server HTML, or after navigating to it).
 */
export function PreloadImage({
  src,
  srcSet,
  sizes,
  type,
}: {
  src: string;
  srcSet?: string;
  sizes?: string;
  type?: string;
}) {
  preload(src, { as: "image", imageSrcSet: srcSet, imageSizes: sizes, fetchPriority: "high", type });
  return null;
}
