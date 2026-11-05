"use client";

import { LazyMotion, domAnimation } from "motion/react";

/**
 * Components animate with the slim `m` element instead of `motion`, which bundles every
 * feature; this supplies the animation, exit and in-view features they use. `strict`
 * throws in development if a full `motion` component sneaks back in.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
