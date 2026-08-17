import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    title: "插画创作",
    desc: "品牌插画、主视觉图形与系列化视觉资产",
    image: "/36.webp",
    href: "https://huaban.com/boards/92742694",
  },
  {
    title: "品牌视觉",
    desc: "KV、包装相关视觉、品牌调性延展",
    image: "/37.webp",
    href: "https://huaban.com/boards/97089369",
  },
  {
    title: "电商详情页",
    desc: "详情页策划、版式与卖点视觉表达",
    image: "/38.webp",
    href: "https://huaban.com/boards/92708089",
  },
  {
    title: "新媒体内容",
    desc: "双微、小红书、抖音、视频号全渠道物料",
    image: "/39.webp",
    href: "https://huaban.com/boards/102026401",
    imageOffsetY: -150,
  },
] as const;

const ease = [0.25, 0.1, 0.25, 1] as const;

export function Capabilities() {
  return (
    <section id="capabilities" className="pb-16 pt-6 md:pb-20 md:pt-8">
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

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {CAPABILITIES.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-stroke bg-surface"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full origin-top object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  style={
                    "imageOffsetY" in item
                      ? { objectPosition: `center ${item.imageOffsetY}px` }
                      : undefined
                  }
                />
              </div>
              <div className="flex min-h-[5.5rem] flex-col justify-center px-3 py-3 md:min-h-[6.25rem] md:px-4 md:py-4">
                <h3 className="text-sm text-text-primary md:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
