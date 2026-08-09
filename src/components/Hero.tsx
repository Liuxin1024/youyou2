import { useEffect, useState } from "react";
import gsap from "gsap";
import { HlsVideo } from "./HlsVideo";
import { Navbar } from "./Navbar";

const ROLES = ["插画师", "视觉设计师", "品牌设计师", "内容创作者"];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
        },
        "<",
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <HlsVideo />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-32 text-center">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">
          COLLECTION &apos;26
        </p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          you you
        </h1>

        <p className="blur-in mb-4 text-base text-muted md:text-lg">
          一位{" "}
          <span
            key={roleIndex}
            className="inline-block animate-role-fade-in font-display italic text-text-primary"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          ，期待与您同行。
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          跨足不同行业（保健品类、护肤品、快消酒饮），涵盖插画、品牌视觉、电商详情页及全渠道新媒体内容（双微、小红书、抖音、视频号）
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="group relative inline-flex rounded-full text-sm transition-transform hover:scale-105"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative rounded-full bg-text-primary px-7 py-3.5 text-bg transition-colors group-hover:bg-bg group-hover:text-text-primary">
              查看作品
            </span>
          </a>
          <a
            href="#contact"
            className="group relative inline-flex rounded-full text-sm transition-transform hover:scale-105"
          >
            <span className="accent-gradient absolute inset-[-2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-text-primary transition-colors group-hover:border-transparent">
              联系我
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          SCROLL
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="absolute inset-x-0 top-0 h-1/3 animate-scroll-down accent-gradient" />
        </div>
      </div>
    </section>
  );
}
