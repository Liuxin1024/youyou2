import { useEffect, useRef } from "react";

const STAR_COUNT_DESKTOP = 120;
const STAR_COUNT_MOBILE = 60;
const MOBILE_MAX_WIDTH = 768;
const MAX_METEORS = 2;
const METEOR_GAP_MIN_MS = 3000;
const METEOR_GAP_MAX_MS = 7000;
const DPR_CAP = 2;

type Star = {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinkle: number;
  phase: number;
  spark: boolean;
};

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  width: number;
};

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function MeteorSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let raf = 0;
    let running = true;
    let last = performance.now();
    let nextMeteorAt = last + rand(METEOR_GAP_MIN_MS, METEOR_GAP_MAX_MS);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = motionQuery.matches;

    const seedStars = () => {
      const count =
        width < MOBILE_MAX_WIDTH ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP;
      stars = Array.from({ length: count }, () => {
        const near = Math.random() > 0.88;
        const spark = Math.random() > 0.62;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: near ? rand(1.1, 1.7) : rand(0.4, 1.1),
          baseAlpha: near ? rand(0.6, 0.95) : rand(0.28, 0.7),
          twinkle: spark ? rand(1.6, 3.4) : rand(0.9, 2.2),
          phase: rand(0, Math.PI * 2),
          spark,
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
      paint(performance.now());
    };

    const spawnMeteor = () => {
      if (meteors.length >= MAX_METEORS) return;
      const angle = rand((128 * Math.PI) / 180, (148 * Math.PI) / 180);
      const speed = rand(620, 980);
      meteors.push({
        x: rand(width * 0.28, width * 1.08),
        y: rand(-48, height * 0.22),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: rand(90, 170),
        width: rand(1.1, 1.8),
      });
    };

    const paint = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        let flicker = 1;
        if (!reduced) {
          const wave =
            0.5 + 0.5 * Math.sin(now * 0.001 * star.twinkle + star.phase);
          flicker = star.spark
            ? 0.18 + 0.82 * Math.pow(wave, 9)
            : 0.32 + 0.68 * wave;
        }
        const alpha = Math.max(0.04, star.baseAlpha * flicker);
        const radius = star.r * (0.7 + 0.45 * flicker);
        ctx.beginPath();
        ctx.fillStyle = `rgba(236, 244, 252, ${alpha})`;
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (reduced) return;

      if (now >= nextMeteorAt) {
        spawnMeteor();
        nextMeteorAt = now + rand(METEOR_GAP_MIN_MS, METEOR_GAP_MAX_MS);
      }

      meteors = meteors.filter((meteor) => {
        meteor.x += meteor.vx * Math.min(0.05, (now - last) / 1000);
        meteor.y += meteor.vy * Math.min(0.05, (now - last) / 1000);

        const speed = Math.hypot(meteor.vx, meteor.vy) || 1;
        const tailX = meteor.x - (meteor.vx / speed) * meteor.len;
        const tailY = meteor.y - (meteor.vy / speed) * meteor.len;

        const trail = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        trail.addColorStop(0, "rgba(78, 133, 191, 0)");
        trail.addColorStop(0.35, "rgba(78, 133, 191, 0.14)");
        trail.addColorStop(0.65, "rgba(137, 170, 204, 0.55)");
        trail.addColorStop(0.9, "rgba(236, 244, 252, 0.92)");
        trail.addColorStop(1, "rgba(255, 255, 255, 1)");

        ctx.strokeStyle = trail;
        ctx.lineWidth = meteor.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        const glow = ctx.createRadialGradient(
          meteor.x,
          meteor.y,
          0,
          meteor.x,
          meteor.y,
          meteor.width * 4.2,
        );
        glow.addColorStop(0, "rgba(255, 255, 255, 0.92)");
        glow.addColorStop(0.4, "rgba(137, 170, 204, 0.32)");
        glow.addColorStop(1, "rgba(78, 133, 191, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.width * 4.2, 0, Math.PI * 2);
        ctx.fill();

        return meteor.x > -140 && meteor.y < height + 140;
      });
    };

    const loop = (now: number) => {
      if (!running || document.hidden) return;
      paint(now);
      last = now;
      raf = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      cancelAnimationFrame(raf);
    };

    const startLoop = () => {
      stopLoop();
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const onMotionChange = () => {
      reduced = motionQuery.matches;
      if (reduced) {
        meteors = [];
        stopLoop();
        paint(performance.now());
        return;
      }
      startLoop();
    };

    const onVisibility = () => {
      if (document.hidden) {
        stopLoop();
        return;
      }
      if (reduced) {
        paint(performance.now());
        return;
      }
      startLoop();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onMotionChange);

    if (!reduced) {
      startLoop();
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
