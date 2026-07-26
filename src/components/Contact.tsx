import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HlsVideo } from "./HlsVideo";

const EMAIL = "231030208@qq.com";

export function Contact() {
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const showToast = () => {
    setToastVisible(true);
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastVisible(false);
      toastTimerRef.current = null;
    }, 2000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast();
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showToast();
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg pb-16 pt-16 md:pb-24 md:pt-20"
    >
      <div className="absolute inset-0">
        <HlsVideo flipped />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h2 className="mb-10 font-display text-5xl italic text-text-primary md:mb-14 md:text-7xl lg:text-8xl">
          you you
        </h2>

        <p className="mb-6 text-xs tracking-[0.3em] text-muted">联系合作</p>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="group relative inline-flex rounded-full"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative rounded-full border border-stroke bg-bg/80 px-8 py-4 text-lg text-text-primary backdrop-blur-md md:text-2xl">
              {EMAIL}
            </span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="复制邮箱"
            title="点击复制"
            className="group relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-stroke bg-bg/80 text-muted backdrop-blur-md transition-colors hover:border-transparent hover:text-text-primary md:h-14 md:w-14"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative">
              <CopyIcon />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full border border-stroke bg-surface/95 px-5 py-2.5 text-sm text-text-primary shadow-lg shadow-black/30 backdrop-blur-md"
            role="status"
          >
            邮箱已复制
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CopyIcon() {
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
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}
