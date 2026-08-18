import { motion } from "framer-motion";

/** 占位数据，真实数字见 docs/TODO.md */
const STATS = [
  { value: "10+", label: "合作品牌" },
  { value: "10000+", label: "视觉交付" },
  { value: "5", label: "垂类行业" },
] as const;

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-stroke">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 120%, rgb(78 133 191 / 0.16), transparent 70%)",
        }}
      />

      <div className="relative grid grid-cols-1 md:grid-cols-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex min-h-[34vh] flex-col justify-end border-b border-stroke md:min-h-[42vh] md:border-b-0 md:border-r md:last:border-r-0"
          >
            <div className="px-6 py-10 md:px-8 md:py-12">
              <p className="font-display text-6xl italic leading-none text-text-primary md:text-7xl lg:text-8xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm tracking-[0.28em] text-muted">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
