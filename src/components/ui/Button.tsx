import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type ButtonVariant = "primary" | "highlight" | "secondary" | "onDark" | "ghost";
type ButtonSize = "sm" | "md";

/*
 * Button system
 *   primary    navy fill: main action on light surfaces
 *   highlight       highlight fill: main action on navy surfaces and photos
 *   secondary  navy outline: second action on light surfaces
 *   onDark     white outline: second action on navy surfaces and photos
 *   ghost      text link with underline
 */
const base =
  "group/btn relative isolate inline-flex max-w-full items-center justify-center gap-2 overflow-hidden rounded-full text-center font-bold leading-tight tracking-[-0.005em] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-3 sm:whitespace-nowrap motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-11 px-5 py-2.5 text-sm",
  md: "min-h-12 px-6 py-3.5 text-body",
};

// light sweep across the button on hover/focus: transform-only, sits under the label
const sheen =
  "before:absolute before:inset-y-0 before:-left-full before:-z-10 before:w-1/2 before:-skew-x-12 before:bg-white/25 before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[400%] focus-visible:before:translate-x-[400%] motion-reduce:before:hidden";

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    sheen,
    "border border-accent bg-accent text-accent-fg shadow-[0_10px_24px_-12px_rgb(19_74_148/0.75)] hover:border-accent-strong hover:bg-accent-strong hover:shadow-[0_16px_30px_-12px_rgb(19_74_148/0.8)] focus-visible:outline-royal"
  ),
  highlight: cn(
    sheen,
    "border border-highlight bg-highlight text-highlight-fg shadow-[0_10px_28px_-12px_rgb(60_198_160/0.7)] hover:border-highlight-strong hover:bg-highlight-strong hover:shadow-[0_16px_34px_-12px_rgb(60_198_160/0.8)] focus-visible:outline-highlight"
  ),
  secondary:
    "border-[1.5px] border-accent/25 bg-bg-elevated text-accent-strong hover:border-accent hover:bg-accent-soft focus-visible:outline-royal",
  onDark:
    "border-[1.5px] border-white/30 bg-white/[0.06] text-white backdrop-blur hover:border-white/70 hover:bg-white/[0.14] focus-visible:outline-highlight",
  ghost:
    "bg-transparent px-0 text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent focus-visible:outline-royal",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
  icon,
  external,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  showArrow?: boolean;
  /** leading icon, e.g. <GraduationCap /> */
  icon?: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
}) {
  const cls = cn(base, variant !== "ghost" && sizes[size], variants[variant], className);
  const content = (
    <>
      {icon}
      {children}
      {showArrow && (
        <ArrowUpRight
          size={size === "sm" ? 14 : 16}
          weight="bold"
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 motion-reduce:transform-none"
        />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {content}
    </Link>
  );
}
