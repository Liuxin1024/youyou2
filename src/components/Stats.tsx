import { motion } from "framer-motion";

const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "95+", label: "Projects Done" },
  { value: "200%", label: "Satisfied Clients" },
] as const;

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 md:grid-cols-3 md:gap-8 md:px-10 lg:px-16">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center"
          >
            <p className="mb-2 font-display text-5xl italic text-text-primary md:text-6xl lg:text-7xl">
              {stat.value}
            </p>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
