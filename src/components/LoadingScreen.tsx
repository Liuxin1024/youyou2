import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Design", "Create", "Inspire"];
const DURATION_MS = 1000;
const EXIT_DELAY_MS = 150;

type LoadingScreenProps = {
  onComplete: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const doneRef = useRef(false);
  const frameRef = useRef(0);
  const exitTimerRef = useRef<number | null>(null);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    cancelAnimationFrame(frameRef.current);
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
    }
    setCount(100);
    exitTimerRef.current = window.setTimeout(onComplete, EXIT_DELAY_MS);
  };

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      if (doneRef.current) return;
      const progress = Math.min((now - start) / DURATION_MS, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        finish();
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 450);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] cursor-pointer bg-bg"
      onClick={finish}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") finish();
      }}
      role="button"
      tabIndex={0}
      aria-label="点击跳过加载"
    >
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10"
      >
        Portfolio
      </motion.p>

      <p className="absolute right-6 top-6 text-xs text-muted/70 md:right-10 md:top-10">
        点击跳过
      </p>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-16 right-6 md:bottom-20 md:right-10">
        <span className="font-display text-6xl tabular-nums text-text-primary md:text-8xl lg:text-9xl">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </div>
  );
}
