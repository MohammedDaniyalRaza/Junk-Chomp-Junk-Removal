import { Fragment } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../lib/utils";

interface SplitTextProps {
  text: string;
  highlightWord?: string;
  highlightClassName?: string;
  className?: string;
  delay?: number;
}

export function SplitText({
  text,
  highlightWord,
  highlightClassName = "sticker-word-pink",
  className,
  delay = 0,
}: SplitTextProps) {
  const prefersReduced = usePrefersReducedMotion();
  const words = text.split(" ");

  return (
    <span className={cn("inline", className)}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,!?]/g, "");
        const isHighlight =
          highlightWord &&
          cleanWord.toLowerCase() === highlightWord.toLowerCase();

        if (prefersReduced) {
          return (
            <Fragment key={`${word}-${index}`}>
              <span className={cn("inline-block", isHighlight && highlightClassName)}>
                {word}
              </span>
              {index < words.length - 1 ? " " : ""}
            </Fragment>
          );
        }

        return (
          <Fragment key={`${word}-${index}`}>
            <span className="inline-block overflow-visible align-baseline">
              <motion.span
                initial={{ y: "0.35em", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.48,
                  delay: delay + index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "inline-block",
                  isHighlight && highlightClassName
                )}
              >
                {word}
              </motion.span>
            </span>
            {index < words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </span>
  );
}
