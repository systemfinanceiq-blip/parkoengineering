import { useEffect, useRef, useState } from "react";
import { useInView, motion, useReducedMotion } from "framer-motion";
import { EASE_STRUCT } from "./easing";

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

/**
 * Counts from 0 → `to` over `duration` seconds when scrolled into view.
 * Uses a single RAF loop and structural easing.
 */
export function CountUp({
  to,
  duration = 1.2,
  suffix = "",
  prefix = "",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const start = performance.now();
    const end = start + duration * 1000;
    // Approximate power-out (matches EASE_STRUCT visually)
    const ease = (t: number) => 1 - Math.pow(1 - t, 4);

    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (end - start));
      setValue(Math.round(to * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE_STRUCT }}
    >
      {prefix}
      {value}
      {suffix}
    </motion.span>
  );
}
