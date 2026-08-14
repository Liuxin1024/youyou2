import { motion } from "framer-motion";

/** 占位数据，真实数字见 docs/TODO.md */
const STATS = [
  { value: "—", label: "合作品牌", index: "01" },
  { value: "—", label: "视觉交付", index: "02" },
  { value: "—", label: "垂类行业", index: "03" },
] as const;

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#3d648f]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 0.8px, transparent 0.8px)",
          backgroundSize: "3px 3px",
        }}
      />
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-[-4vw] select-none font-display text-[28vw] leading-none text-white/[0.06] italic"
      >
        you
      </p>

      <div className="relative grid grid-cols-1 md:grid-cols-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            viewport={{ once: true, margin: "-80px" }}
            className="group relative flex min-h-[38vh] flex-col justify-between border-b border-white/20 md:min-h-[46vh] md:border-b-0 md:border-r md:last:border-r-0"
          >
            <span className="absolute left-6 top-6 text-[11px] tracking-[0.35em] text-white/50 md:left-8 md:top-8">
              {stat.index}
            </span>
            <div className="mt-auto px-6 py-10 md:px-8 md:py-12">
              <p className="font-display text-6xl italic leading-none text-white md:text-7xl lg:text-8xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm tracking-[0.28em] text-white/70">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
