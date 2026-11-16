import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "../lib/utils";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Preloader() {
  const prefersReduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState<boolean>(() => !prefersReduced);

  useEffect(() => {
    if (prefersReduced) {
      setVisible(false);
      return;
    }

    const doneTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1050);

    // Hard fallback safety timeout <= 1.5s
    const fallbackTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1450);

    return () => {
      window.clearTimeout(doneTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, [prefersReduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="jc-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeOut" } }}
          className="fixed inset-0 z-[1200] flex flex-col items-center justify-center bg-[#0B0B0D] pointer-events-none select-none"
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.72, rotate: -4 }}
            animate={{
              scale: [0.72, 1.12, 0.94, 1.04, 1],
              rotate: [-4, 3, -2, 1, 0],
            }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 px-6"
          >
            <img
              src={BUSINESS.logoSrc}
              alt=""
              className="w-56 sm:w-64 h-auto object-contain drop-shadow-[0_0_24px_rgba(166,243,27,0.45)]"
            />
            <div className="flex items-center gap-2 font-mono-tag text-xs uppercase tracking-[0.2em] text-[#A6F31B]">
              <span>Aspen to Glenwood Springs</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
