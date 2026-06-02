import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";
import { EASE_STRUCT } from "./easing";

type Props = {
  children: ReactNode;
  index?: number;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
  as?: "div" | "li" | "article" | "section";
};

/**
 * Slide + fade vertical entry triggered by IntersectionObserver.
 * Stagger by passing index — 50ms per element by default.
 */
export function Reveal({
  children,
  index = 0,
  delay = 0,
  y = 28,
  duration = 0.85,
  className = "",
  style,
  once = true,
  as = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "0px 0px -10% 0px" });
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay: delay + index * 0.05,
        ease: EASE_STRUCT,
      }}
    >
      {children}
    </MotionTag>
  );
}
