"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";
import { GraduationCap } from "@phosphor-icons/react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";
import { isActive } from "@/lib/nav";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { contactActions } from "@/lib/contact-actions";

// Call / WhatsApp / Directions for the mobile menu (the menu has its own Apply button)
const menuActions = contactActions()
  .filter((a) => a.key !== "apply")
  .map(({ key, label, href, external }) => ({ key, label, href, external }));

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // state flips only when crossing the threshold, never per frame
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    if (next !== scrolled) setScrolled(next);
  });

  // Escape closes the mobile menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // while the menu is open: lock page scroll and take the page behind it out of
  // the tab order / accessibility tree, so focus can't wander under the overlay
  useEffect(() => {
    if (!open) return;
    const behind = [
      document.getElementById("main-content"),
      document.querySelector("body > footer"),
      document.getElementById("quick-contact"),
    ];
    document.body.style.overflow = "hidden";
    behind.forEach((el) => el?.setAttribute("inert", ""));
    return () => {
      document.body.style.overflow = "";
      behind.forEach((el) => el?.removeAttribute("inert"));
    };
  }, [open]);

  // the overlay is lg:hidden, so close it if the viewport grows past lg
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // transparent over the dark page hero; a slimmer white glass bar once scrolled (navy while the menu is open)
  const solid = scrolled && !open;
  const onDark = !solid;

  return (
    // The header box keeps its full height so the page never shifts; the visible bar
    // inside it shrinks on scroll. pointer-events pass through the strip it frees up.
    <header className="pointer-events-none sticky top-0 z-50 h-[var(--header-h)]">
      <div
        className={cn(
          "pointer-events-auto absolute inset-x-0 top-0 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          solid ? "h-[calc(var(--header-h)-0.875rem)]" : "h-[var(--header-h)]",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 bg-gradient-to-b from-[rgb(7_29_61/0.6)] to-transparent transition-opacity duration-500",
            solid || open ? "opacity-0" : "opacity-100",
          )}
        />
        <div
          aria-hidden="true"
          className={cn(
            "glass-light absolute inset-0 transition-opacity duration-500",
            solid ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 bg-bg-inverted transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <div className="relative mx-auto flex h-full w-full max-w-wide items-center justify-between gap-4 px-gutter sm:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex shrink-0 items-center rounded-lg active:scale-[0.98]"
          >
            <Logo
              tone={onDark ? "light" : "dark"}
              swap
              priority
              className={cn("h-12 origin-left transition-transform duration-500 sm:h-14 xl:h-16", solid && "scale-[0.86]")}
            />
            <span className="sr-only">, home</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center lg:flex">
            {siteConfig.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "nav-link relative whitespace-nowrap rounded-full px-2.5 py-3 text-[0.8125rem] font-semibold transition-colors duration-200 xl:px-3.5 xl:text-[0.875rem]",
                    onDark
                      ? active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                      : active
                        ? "text-accent-strong"
                        : "text-fg-muted hover:text-accent-strong",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* visibility on the wrapper: Button's own display class would win over `hidden` */}
            <div className="hidden md:block">
              <Button
                href={siteConfig.applyHref}
                variant="highlight"
                size="sm"
                showArrow={false}
                onClick={() => setOpen(false)}
                icon={<GraduationCap size={18} weight="fill" aria-hidden="true" />}
              >
                Apply Now
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "group relative inline-flex h-11 w-11 items-center justify-center rounded-full border transition-[background-color,border-color,color,transform] duration-200 active:scale-90 lg:hidden",
                onDark
                  ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
                  : "border-border bg-white text-accent-strong hover:bg-accent-soft",
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {/* three bars that morph into a cross */}
              <span aria-hidden="true" className="relative block h-3.5 w-[1.15rem]">
                {[
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                  open ? "top-1/2 -translate-y-1/2 scale-x-0 opacity-0" : "top-1/2 -translate-y-1/2",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0 w-2/3 group-hover:w-full",
                ].map((pos, i) => (
                  <span
                    key={i}
                    className={cn(
                      "absolute right-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      pos,
                    )}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={open} pathname={pathname} onClose={() => setOpen(false)} actions={menuActions} />
    </header>
  );
}
