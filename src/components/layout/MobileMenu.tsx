"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Clock, GraduationCap } from "@phosphor-icons/react";
import { siteConfig } from "@/content/site";
import type { ContactAction } from "@/lib/contact-actions";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { isActive } from "@/lib/nav";

const menuItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const } },
};

/** Full-screen navigation below the header bar, for viewports narrower than lg. */
export function MobileMenu({
  open,
  pathname,
  onClose,
  actions,
}: {
  open: boolean;
  pathname: string;
  onClose: () => void;
  /** Call / WhatsApp / Directions, resolved on the server */
  actions: Pick<ContactAction, "key" | "label" | "href" | "external">[];
}) {
  const reduce = useReducedMotion();
  const { contact } = siteConfig;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="menu-ink pointer-events-auto fixed inset-x-0 bottom-0 top-[var(--header-h)] overflow-y-auto overscroll-contain lg:hidden"
        >
          <motion.nav
            aria-label="Mobile"
            className="mx-auto flex min-h-full max-w-2xl flex-col px-gutter pb-[max(2rem,env(safe-area-inset-bottom))] pt-4 sm:px-8"
            initial={reduce ? false : "hidden"}
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.035, delayChildren: 0.04 } } }}
          >
            <ul>
              {siteConfig.pages.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <motion.li key={item.href} variants={menuItem} className="border-b border-white/[0.08]">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className="group flex min-h-[3.25rem] items-center justify-between gap-4 py-2.5"
                    >
                      <span
                        className={cn(
                          "font-display text-[1.25rem] font-bold leading-none tracking-[-0.02em] transition-colors",
                          active ? "text-highlight" : "text-white/85 group-hover:text-white"
                        )}
                      >
                        {item.label}
                      </span>
                      <ArrowRight
                        size={18}
                        weight="bold"
                        className={cn(
                          "transition-transform group-hover:translate-x-1",
                          active ? "text-highlight" : "text-white/35"
                        )}
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div variants={menuItem} className="mt-auto space-y-4 pt-8">
              <Button
                href={siteConfig.applyHref}
                variant="highlight"
                showArrow={false}
                onClick={onClose}
                icon={<GraduationCap size={20} weight="fill" aria-hidden="true" />}
                className="w-full"
              >
                Apply for Admission
              </Button>
              {actions.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {actions.map((a) => (
                    <a
                      key={a.key}
                      href={a.href}
                      {...(a.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-4 text-sm font-bold text-white transition-colors hover:bg-white/[0.14]"
                    >
                      {a.label}
                    </a>
                  ))}
                </div>
              )}
              <p className="inline-flex items-center gap-2 text-sm text-fg-inverted-muted">
                <Clock size={16} className="text-highlight" aria-hidden="true" />
                School office: {contact.hours.days}, {contact.hours.time}
              </p>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
