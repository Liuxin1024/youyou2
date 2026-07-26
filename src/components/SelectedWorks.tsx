import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const PROJECTS = [
  {
    title: "Automotive Motion",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80",
  },
  {
    title: "Urban Architecture",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80",
  },
  {
    title: "Human Perspective",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
  },
  {
    title: "Brand Identity",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
  },
] as const;

const ease = [0.25, 0.1, 0.25, 1] as const;

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
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href="#work"
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-stroke bg-surface",
                project.span,
                project.aspect,
              )}
            >
              <img
                src={project.image}
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
                    View —{" "}
                    <span className="font-display italic">{project.title}</span>
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
