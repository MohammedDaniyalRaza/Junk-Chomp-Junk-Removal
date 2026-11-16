import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function PawTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || !containerRef.current) return;
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      const paws = gsap.utils.toArray<SVGElement>(".jc-scroll-paw");
      gsap.set(paws, { opacity: 0.08, scale: 0.8 });

      paws.forEach((paw, i) => {
        gsap.to(paw, {
          opacity: 0.7,
          scale: 1.05,
          duration: 0.35,
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${i * 120} 75%`,
            end: `top+=${i * 120 + 180} 45%`,
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const pawOffsets = [
    { top: "6%", right: "18px", rot: -16, color: "#A6F31B" },
    { top: "19%", right: "44px", rot: 12, color: "#FF2E93" },
    { top: "33%", right: "20px", rot: -12, color: "#A6F31B" },
    { top: "48%", right: "46px", rot: 14, color: "#FF2E93" },
    { top: "62%", right: "18px", rot: -18, color: "#A6F31B" },
    { top: "76%", right: "44px", rot: 10, color: "#FF2E93" },
    { top: "90%", right: "22px", rot: -14, color: "#A6F31B" },
  ];

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hidden lg:block fixed top-24 right-2 bottom-12 w-20 z-[20] pointer-events-none select-none"
    >
      {pawOffsets.map((p, idx) => (
        <svg
          key={idx}
          viewBox="0 0 64 64"
          className="jc-scroll-paw absolute w-7 h-7"
          style={{
            top: p.top,
            right: p.right,
            transform: `rotate(${p.rot}deg)`,
            color: p.color,
          }}
        >
          <ellipse cx="32" cy="40" rx="13" ry="11" fill="currentColor" />
          <circle cx="16" cy="24" r="5" fill="currentColor" />
          <circle cx="27" cy="15" r="5.5" fill="currentColor" />
          <circle cx="40" cy="16" r="5.5" fill="currentColor" />
          <circle cx="50" cy="26" r="5" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}
