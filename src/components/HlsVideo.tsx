import { cn } from "../lib/utils";

const VIDEO_SRC = "/video/hero-bg.mp4";

type HlsVideoProps = {
  className?: string;
  flipped?: boolean;
};

/** Local looping background video (Hero / Contact). */
export function HlsVideo({ className, flipped = false }: HlsVideoProps) {
  return (
    <video
      src={VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={cn(
        "absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover",
        flipped && "scale-y-[-1]",
        className,
      )}
    />
  );
}
