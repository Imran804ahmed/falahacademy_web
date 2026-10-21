import { cn } from "@/lib/cn";

type EyebrowTone = "emerald" | "highlight";

const tones: Record<EyebrowTone, { pill: string; dot: string }> = {
  // on light surfaces
  emerald: { pill: "bg-emerald-soft text-emerald-strong ring-emerald/15", dot: "bg-emerald" },
  // on navy surfaces and photos
  highlight: { pill: "bg-white/10 text-highlight-strong ring-white/15 backdrop-blur", dot: "bg-highlight" },
};

/** Small uppercase section label in a soft pill with a leading dot. */
export function Eyebrow({
  children,
  tone = "emerald",
  centered,
  className,
}: {
  children: React.ReactNode;
  tone?: EyebrowTone;
  /** kept for call-site symmetry with centred headings; the pill centres with its parent */
  centered?: boolean;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <p
      className={cn(
        // long labels ("Intermediate · Grades 11 – 12") may wrap on phones: keep the lines apart and balanced
        "inline-flex max-w-full items-center gap-2 rounded-full px-4 py-1.5 label leading-[1.4] text-balance ring-1 ring-inset",
        t.pill,
        centered && "mx-auto",
        className
      )}
    >
      <span aria-hidden="true" className={cn("h-1.5 w-1.5 rounded-full", t.dot)} />
      {children}
    </p>
  );
}
