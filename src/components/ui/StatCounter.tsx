"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/** Splits "500+" into ["", 500, "+"]; null when the value has no number. */
function parse(value: string) {
  const match = value.match(/\d[\d,]*/);
  if (!match || match.index === undefined) return null;
  return {
    prefix: value.slice(0, match.index),
    target: parseInt(match[0].replace(/,/g, ""), 10),
    suffix: value.slice(match.index + match[0].length),
  };
}

/**
 * Counts the numeric part of a stat (e.g. "500+", "95%") up from zero when it
 * scrolls into view. The real value is server-rendered, so it is correct
 * without JavaScript and for search engines; the client zeroes it before
 * first paint and animates it, writing to the DOM node rather than React state.
 */
export function StatCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const done = useRef(false);

  // zero the figure before paint, unless motion is reduced
  useLayoutEffect(() => {
    const parts = parse(value);
    if (!ref.current || !parts || reduce || done.current) return;
    ref.current.textContent = `${parts.prefix}0${parts.suffix}`;
  }, [reduce, value]);

  useEffect(() => {
    const el = ref.current;
    const parts = parse(value);
    if (!el || !parts) return;
    if (reduce) {
      el.textContent = value;
      return;
    }
    if (!inView) return;

    done.current = true;
    const controls = animate(0, parts.target, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        el.textContent = `${parts.prefix}${Math.round(latest).toLocaleString()}${parts.suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
