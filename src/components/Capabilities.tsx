import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    title: "插画创作",
    desc: "品牌插画、主视觉图形与系列化视觉资产",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
    href: "https://huaban.com/boards/92742694",
  },
  {
    title: "品牌视觉",
    desc: "KV、包装相关视觉、品牌调性延展",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
    href: "https://huaban.com/boards/97089369",
  },
  {
    title: "电商详情页",
    desc: "详情页策划、版式与卖点视觉表达",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80",
    href: "https://huaban.com/boards/92708089",
  },
  {
    title: "新媒体内容",
    desc: "双微、小红书、抖音、视频号全渠道物料",
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&q=80",
    href: "https://huaban.com/boards/102026401",
  },
] as const;

const ease = [0.25, 0.1, 0.25, 1] as const;

const rowClassName =
  "flex items-center gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:gap-6 sm:rounded-full";

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-bg py-16 md:py-24">
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
                能力范围
              </span>
            </div>
            <h2 className="mb-3 text-3xl text-text-primary md:text-5xl">
              我能做什么
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              从品牌视觉到全渠道内容，覆盖从概念到落地的完整链路
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {CAPABILITIES.map((item) => {
            const inner = (
              <>
                <img
                  src={item.image}
                  alt=""
                  className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm text-text-primary sm:text-base md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{item.desc}</p>
                </div>
              </>
            );

            return "href" in item ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={rowClassName}
              >
                {inner}
              </a>
            ) : (
              <div key={item.title} className={rowClassName}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
