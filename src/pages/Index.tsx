import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "../components/LoadingScreen";
import { Hero } from "../components/Hero";
import { SelectedWorks } from "../components/SelectedWorks";
import { Journal } from "../components/Journal";
import { Explorations } from "../components/Explorations";
import { Stats } from "../components/Stats";
import { Contact } from "../components/Contact";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const handleComplete = useCallback(() => setIsLoading(false), []);

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
            <Journal />
            <Explorations />
            <Stats />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
