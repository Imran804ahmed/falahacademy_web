import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

const tones = {
  navy: "bg-accent-soft text-accent",
  emerald: "bg-emerald-soft text-emerald",
  highlight: "bg-highlight-soft text-highlight-deep",
} as const;

/** White card with an icon badge, a title and a short description. */
export function IconCard({
  icon: Icon,
  title,
  body,
  tone = "navy",
  className,
}: {
  icon: Icon;
  title: string;
  body?: string;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    // phones: icon beside the text, so a stack of six cards stays short; sm+: icon above
    <div className={cn("card-lift group flex h-full gap-4 card p-5 sm:block sm:p-8", className)}>
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105",
          tones[tone]
        )}
      >
        <Icon size={26} weight="duotone" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-title font-bold text-accent-strong sm:mt-6">{title}</h3>
        {body && <p className="mt-1.5 text-body leading-relaxed text-fg-muted sm:mt-2">{body}</p>}
      </div>
    </div>
  );
}
