import { motion } from "framer-motion";

const ENTRIES = [
  {
    title: "Designing for stillness in motion systems",
    readTime: "6 min",
    date: "Mar 12, 2026",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
  },
  {
    title: "Why type hierarchy still wins",
    readTime: "4 min",
    date: "Feb 28, 2026",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
  },
  {
    title: "Building narrative into product UI",
    readTime: "8 min",
    date: "Jan 19, 2026",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
  },
  {
    title: "Notes on cinematic web experiences",
    readTime: "5 min",
    date: "Dec 04, 2025",
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&q=80",
  },
] as const;

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Journal() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 flex items-end justify-between gap-6 md:mb-14"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Journal
              </span>
            </div>
            <h2 className="mb-3 text-3xl text-text-primary md:text-5xl">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              Essays and notes on design, systems, and craft.
            </p>
          </div>

          <a
            href="#journal"
            className="group relative hidden rounded-full md:inline-flex"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary">
              View all <span aria-hidden>→</span>
            </span>
          </a>
        </motion.div>

        <div className="flex flex-col gap-4">
          {ENTRIES.map((entry) => (
            <a
              key={entry.title}
              href="#journal"
              className="flex items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:gap-6 sm:rounded-full"
            >
              <img
                src={entry.image}
                alt=""
                className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
              />
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm text-text-primary sm:text-base md:text-lg">
                  {entry.title}
                </h3>
                <p className="mt-1 text-xs text-muted sm:text-sm">
                  {entry.readTime} · {entry.date}
                </p>
              </div>
              <span className="mr-2 hidden text-muted sm:inline" aria-hidden>
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
