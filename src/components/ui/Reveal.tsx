"use client";

import { motion, useReducedMotion } from "motion/react";
import { dist, dur, ease, motionConfig } from "@/lib/motion";

/** Direction an element travels from as it enters. Varying it keeps sections from feeling templated. */
export type RevealFrom = "up" | "left" | "right" | "scale" | "clip";

function offset(from: Exclude<RevealFrom, "clip">, y: number) {
  switch (from) {
    case "left":
      return { opacity: 0, x: -dist(36) };
    case "right":
      return { opacity: 0, x: dist(36) };
    case "scale":
      return { opacity: 0, scale: 1 - 0.05 * (dist(20) / 20) };
    default:
      return { opacity: 0, y: dist(y) };
  }
}

// image reveal: a curtain lifts from the bottom edge, then the clip is dropped
// so it can never cut off a shadow or an overhanging badge
const clipVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0% round 1.5rem)" },
  show: { clipPath: "inset(0% 0% 0% 0% round 1.5rem)", transitionEnd: { clipPath: "none" } },
};

export function Reveal({
  children,
  delay = 0,
  y = 20,
  from = "up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  from?: RevealFrom;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (from === "clip") {
    // The outer element is what's observed: a fully clipped target never
    // registers as intersecting, so the clip lives on the inner element.
    return (
      <motion.div
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={className}
      >
        <motion.div
          variants={clipVariants}
          transition={{ duration: reduce ? 0 : dur(1.1), delay, ease }}
          className="relative h-full w-full"
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={reduce ? false : offset(from, y)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: dur(0.6), delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A connecting rule that draws itself in (left→right, or top→bottom when `vertical`) as it enters view. */
export function GrowLine({ className, vertical, delay = 0.15 }: { className?: string; vertical?: boolean; delay?: number }) {
  const reduce = useReducedMotion();
  const axis = vertical ? "scaleY" : "scaleX";
  return (
    <motion.div
      aria-hidden="true"
      initial={reduce ? false : { [axis]: 0 }}
      whileInView={{ [axis]: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: dur(1.4), delay, ease }}
      style={{ transformOrigin: vertical ? "top" : "left" }}
      className={className}
    />
  );
}

const groupTags = { div: motion.div, ul: motion.ul, ol: motion.ol };

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  as = "div",
  scrollLabel,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  /** render as a list when the items are list items */
  as?: keyof typeof groupTags;
  /** for swipe rows (`snap-row`): names the scrollable region and makes it keyboard-scrollable */
  scrollLabel?: string;
}) {
  const reduce = useReducedMotion();
  const Tag = groupTags[as];
  return (
    <Tag
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: stagger / motionConfig.speed }}
      className={className}
      {...(scrollLabel && { role: "region", "aria-label": scrollLabel, tabIndex: 0 })}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  y = 20,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li";
}) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      variants={{
        hidden: { opacity: 0, y: dist(y) },
        show: { opacity: 1, y: 0, transition: { duration: dur(0.55), ease } },
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
