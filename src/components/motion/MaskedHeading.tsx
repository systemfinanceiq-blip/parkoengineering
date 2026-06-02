import { motion } from "framer-motion";
import { EASE_STRUCT } from "./easing";

type Props = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
};

/**
 * Splits a string into words and reveals each through a clipping mask,
 * sliding from Y:40px → 0 with a structural easing curve.
 */
export function MaskedHeading({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  as: Tag = "h1",
}: Props) {
  const lines = text.split("\n");
  let wordIndex = 0;

  return (
    <Tag className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi) => {
            const i = wordIndex++;
            return (
              <span
                key={`${li}-${wi}`}
                className="inline-block overflow-hidden align-bottom"
                style={{ paddingBottom: "0.05em", marginRight: "0.28em" }}
              >
                <motion.span
                  className={`inline-block will-change-transform ${wordClassName}`}
                  initial={{ y: "40px", opacity: 0 }}
                  animate={{ y: "0px", opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: delay + i * 0.06,
                    ease: EASE_STRUCT,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
