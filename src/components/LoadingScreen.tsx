import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Design", "Create", "Inspire"];
/** 就绪后短暂停留再退出，避免闪一下就没 */
const EXIT_DELAY_MS = 120;
/** 极端情况兜底，防止一直卡在 loading */
const SAFETY_MS = 8000;

type LoadingScreenProps = {
  onComplete: () => void;
};

/**
 * 进度跟真实就绪挂钩（fonts + window load），不跑固定时长。
 * 首页已经很快时，会迅速冲到 100 并退出。
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const doneRef = useRef(false);
  const settledRef = useRef(false);
  const progressRef = useRef(0);
  const frameRef = useRef(0);
  const exitTimerRef = useRef<number | null>(null);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    cancelAnimationFrame(frameRef.current);
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
    }
    progressRef.current = 100;
    setCount(100);
    exitTimerRef.current = window.setTimeout(onComplete, EXIT_DELAY_MS);
  };

  useEffect(() => {
    const start = performance.now();

    const markSettled = () => {
      settledRef.current = true;
    };

    const fontsReady =
      document.fonts?.ready ?? Promise.resolve(undefined);
    const pageReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });

    void Promise.all([fontsReady, pageReady]).then(markSettled);
    const safetyTimer = window.setTimeout(markSettled, SAFETY_MS);

    const tick = (now: number) => {
      if (doneRef.current) return;

      const elapsed = now - start;
      let next = progressRef.current;

      if (settledRef.current) {
        // 就绪后快速收尾到 100
        next = Math.min(100, next + Math.max(6, (100 - next) * 0.28));
        if (next >= 99.5) {
          progressRef.current = 100;
          setCount(100);
          finish();
          return;
        }
      } else {
        // 等待期：按真实耗时渐近逼近 90，不设固定总时长
        const creeping = (1 - Math.exp(-elapsed / 700)) * 90;
        next = Math.max(next, creeping);
      }

      progressRef.current = next;
      setCount(Math.floor(next));
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.clearTimeout(safetyTimer);
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
