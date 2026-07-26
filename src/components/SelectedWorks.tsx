import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CASES, getPublishedCases } from "../data/cases";
import { cn } from "../lib/utils";

const ease = [0.25, 0.1, 0.25, 1] as const;
const publishedSlugs = new Set(getPublishedCases().map((c) => c.slug));

export function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 flex flex-col items-start gap-6 text-left md:mb-14"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Selected Work
              </span>
            </div>
            <h2 className="mb-3 text-3xl text-text-primary md:text-5xl">
              核心项目
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              我参与过的部分项目概览。从构思到成品展示
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {CASES.map((project) => {
            const hasDetail = publishedSlugs.has(project.slug);
            const className = cn(
              "group relative overflow-hidden rounded-3xl border border-stroke bg-surface",
              project.span,
              project.aspect,
            );

            const inner = (
              <>
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
                  <span className="relative inline-flex">
                    <span className="accent-gradient-border absolute inset-[-2px] animate-gradient-shift rounded-full" />
                    <span className="relative rounded-full bg-white px-5 py-2.5 text-sm text-bg">
                      {hasDetail ? "查看案例 — " : "View — "}
                      <span className="font-display italic">{project.title}</span>
                    </span>
                  </span>
                </div>
              </>
            );

            return hasDetail ? (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className={className}
              >
                {inner}
              </Link>
            ) : (
              <div key={project.slug} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
