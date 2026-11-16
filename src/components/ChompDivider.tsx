import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface ChompDividerProps {
  topBg?: "black" | "surface" | "lime" | "pink";
  bottomBg?: "black" | "surface" | "lime" | "pink";
  teethColor?: string;
  flip?: boolean;
  className?: string;
}

const BG_MAP = {
  black: "#0B0B0D",
  surface: "#16161A",
  lime: "#A6F31B",
  pink: "#FF2E93",
};

export function ChompDivider({
  topBg = "black",
  bottomBg = "lime",
  teethColor = "#FFFFFF",
  flip = false,
  className,
}: ChompDividerProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const topTeethRef = useRef<SVGSVGElement>(null);
  const bottomTeethRef = useRef<SVGSVGElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || !wrapRef.current || !topTeethRef.current || !bottomTeethRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        topTeethRef.current,
        { y: -6 },
        {
          y: 2,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 90%",
            end: "bottom 15%",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        bottomTeethRef.current,
        { y: 6 },
        {
          y: -2,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 90%",
            end: "bottom 15%",
            scrub: 0.6,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // Repeating crisp chomp teeth SVG pattern (24 teeth across 1440px width)
  const teethPoints = Array.from({ length: 24 })
    .map((_, i) => {
      const x1 = i * 60;
      const xMid = x1 + 30;
      const x2 = x1 + 60;
      return `${x1},0 ${xMid},34 ${x2},0`;
    })
    .join(" ");

  const teethBottomPoints = Array.from({ length: 24 })
    .map((_, i) => {
      const x1 = i * 60 + 30;
      const xMid = x1 + 30;
      const x2 = x1 + 60;
      return `${x1},38 ${xMid},4 ${x2},38`;
    })
    .join(" ");

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={cn(
        "relative w-full h-14 sm:h-16 overflow-hidden pointer-events-none select-none",
        flip && "rotate-180",
        className
      )}
      style={{
        background: `linear-gradient(to bottom, ${BG_MAP[topBg]} 50%, ${BG_MAP[bottomBg]} 50%)`,
      }}
    >
      {/* Top jaw teeth */}
      <svg
        ref={topTeethRef}
        viewBox="0 0 1440 38"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-8 sm:h-9"
      >
        <polyline
          points={`0,0 ${teethPoints} 1440,0`}
          fill={teethColor}
          stroke="#0B0B0D"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Bottom jaw teeth */}
      <svg
        ref={bottomTeethRef}
        viewBox="0 0 1440 38"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-8 sm:h-9"
      >
        <polyline
          points={`0,38 ${teethBottomPoints} 1440,38`}
          fill={teethColor}
          stroke="#0B0B0D"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
