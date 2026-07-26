import { motion } from "framer-motion";

/** 占位数据，真实数字见 docs/TODO.md */
const STATS = [
  { value: "—", label: "合作品牌" },
  { value: "—", label: "视觉交付" },
  { value: "—", label: "垂类行业" },
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
            <p className="text-sm tracking-[0.2em] text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
