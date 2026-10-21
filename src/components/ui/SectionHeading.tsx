import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  body,
  className,
  onDark,
  centered,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  className?: string;
  onDark?: boolean;
  centered?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={onDark ? "highlight" : "emerald"} centered={centered} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          "text-balance text-display-md font-bold",
          onDark ? "text-fg-inverted" : "text-accent-strong"
        )}
      >
        {title}
      </Tag>
      {body && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lead", onDark ? "text-fg-inverted-muted" : "text-fg-muted")}>
          {body}
        </p>
      )}
    </Reveal>
  );
}
