import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";

type BackToTopProps = {
  className?: string;
  /** Extra px past the first viewport before showing */
  showOffset?: number;
  /** Px within the first viewport before hiding (hysteresis with showOffset) */
  hideOffset?: number;
};

export function BackToTop({
  className,
  showOffset = 80,
  hideOffset = 0,
}: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      setVisible((prev) => {
        if (prev) {
          return y >= vh - hideOffset;
        }
        return y > vh + showOffset;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [showOffset, hideOffset]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          key="back-to-top"
          initial={{ opacity: 0, y: 12, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.92 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className={cn(
            "group fixed bottom-6 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A96E]/70 bg-surface/95 text-[#C9A96E] shadow-lg shadow-black/30 backdrop-blur-md transition-colors hover:border-transparent hover:text-text-primary md:bottom-8 md:right-8 md:h-12 md:w-12",
            className,
          )}
        >
          <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="relative">
            <ArrowUpIcon />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 19V5" />
      <path d="M5 12l7-7 7 7" />
    </svg>
  );
}
