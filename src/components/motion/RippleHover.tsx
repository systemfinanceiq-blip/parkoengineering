import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE_STRUCT } from "./easing";

type Ripple = { id: number; x: number; y: number };

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "a" | "button" | "li";
};

/**
 * Wrap any interactive surface to emit concentric ring ripples on hover
 * centered exactly on the cursor. Disabled on touch devices via @media
 * (hover: none) in CSS — we just render rings; they're invisible there.
 */
export function RippleHover({ children, className = "", as = "div" }: Props) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const lastEmit = useRef(0);

  const handleMove = (e: MouseEvent) => {
    const now = performance.now();
    if (now - lastEmit.current < 240) return; // throttle
    lastEmit.current = now;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = now;
    setRipples((r) => [...r, { id, x, y }]);
    window.setTimeout(() => {
      setRipples((r) => r.filter((it) => it.id !== id));
    }, 900);
  };

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMove}
    >
      {children}
      <span className="pointer-events-none absolute inset-0">
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              className="absolute rounded-full border border-accent/60"
              style={{ left: r.x, top: r.y, x: "-50%", y: "-50%" }}
              initial={{ width: 0, height: 0, opacity: 0.7 }}
              animate={{ width: 220, height: 220, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: EASE_STRUCT }}
            />
          ))}
        </AnimatePresence>
      </span>
    </Tag>
  );
}
