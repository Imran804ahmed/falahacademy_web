import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { studentLife } from "@/content/school";
import { blurProps } from "@/lib/image-meta";
import { cn } from "@/lib/cn";

/**
 * Mosaic spans that make any tile count close on a full rectangle: tile 0 is 2x2 from
 * sm up, tile 3 is a wide tile at lg, and trailing tiles widen to fill the last row.
 */
function spanFor(i: number, n: number) {
  if (i === 0) return "sm:col-span-2 sm:row-span-2";
  const fromEnd = n - 1 - i;
  // sm (2 cols): tile 0 fills 4 cells, so an odd number of remaining tiles leaves one gap
  const sm = fromEnd === 0 && (n - 1) % 2 === 1 ? "sm:col-span-2" : "";
  // lg (4 cols): tiles 1-3 fill rows 1-2; the rest flow in rows of four
  let lg = i === 3 ? "lg:col-span-2" : "";
  const rest = n - 4;
  if (i >= 4 && rest > 0) {
    const r = rest % 4;
    if (r === 1 && fromEnd === 0) lg = "lg:col-span-4";
    else if (r === 2 && fromEnd <= 1) lg = "lg:col-span-2";
    else if (r === 3 && fromEnd === 0) lg = "lg:col-span-2";
    else lg = "lg:col-span-1";
  }
  return cn(sm, lg);
}

export function StudentLife({ limit, className }: { limit?: number; className?: string }) {
  const items = limit ? studentLife.slice(0, limit) : studentLife;
  return (
    <section className={className ?? "py-section"}>
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Student Life"
            title="Learning that goes beyond the classroom"
            body="Sports, arts, trips, clubs and celebrations give every student the chance to discover new talents and make lasting friendships."
          />
          {limit && (
            <Button href="/student-life" variant="secondary" className="self-start lg:self-auto">
              Explore Student Life
            </Button>
          )}
        </div>
        <RevealGroup
          stagger={0.06}
          className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:auto-rows-[14rem] sm:grid-cols-2 lg:auto-rows-[15.5rem] lg:grid-cols-4"
        >
          {items.map(({ title, body, image }, i) => (
            <RevealItem
              key={title}
              className={cn(
                "group relative overflow-hidden rounded-lg shadow-soft",
                spanFor(i, items.length)
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                {...blurProps(image.src)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(7_29_61/0.88)] via-[rgb(7_29_61/0.25)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-6">
                <h3 className={cn("font-bold text-white", i === 0 ? "text-2xl sm:text-3xl" : "text-xl")}>{title}</h3>
                <p
                  className={cn(
                    "mt-1.5 text-sm leading-relaxed text-white/85",
                    // short captions stay visible; on hover-capable screens secondary tiles reveal theirs on hover
                    i !== 0 &&
                      "[@media(hover:hover)]:max-h-0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:transition-[max-height,opacity] [@media(hover:hover)]:duration-500 [@media(hover:hover)]:group-hover:max-h-24 [@media(hover:hover)]:group-hover:opacity-100"
                  )}
                >
                  {body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
