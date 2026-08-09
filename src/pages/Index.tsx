import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "../components/LoadingScreen";
import { Hero } from "../components/Hero";
import { SelectedWorks } from "../components/SelectedWorks";
import { Capabilities } from "../components/Capabilities";
import { Explorations } from "../components/Explorations";
import { Stats } from "../components/Stats";
import { Contact } from "../components/Contact";
import { BackToTop } from "../components/BackToTop";

/**
 * SPA 会话内记住：开场 loading 只在本页首次挂载时播一次。
 * 从案例页客户端路由返回时 Index 会重挂，但不会重播。
 * 整页硬刷新会重置，可再播一次（进度跟真实加载，通常很快）。
 */
let homeIntroDone = false;

export default function Index() {
  const [isLoading, setIsLoading] = useState(() => !homeIntroDone);

  const handleComplete = useCallback(() => {
    homeIntroDone = true;
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen onComplete={handleComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
            <SelectedWorks />
            <Capabilities />
            <Explorations />
            <Stats />
            <Contact />
            <BackToTop />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
