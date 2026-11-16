import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneCall, BadgeDollarSign, Truck } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { BandanaLabel } from "../components/BandanaLabel";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "Call or text us",
    detail: `Reach out at ${BUSINESS.phoneDisplay} or send a quick message with what needs to go.`,
    icon: PhoneCall,
    accent: "lime" as const,
  },
  {
    number: "02",
    title: "Quick quote starting at $89",
    detail: "Tell us what you have or text a photo. We give you a clear, honest price upfront.",
    icon: BadgeDollarSign,
    accent: "pink" as const,
  },
  {
    number: "03",
    title: "We load it & it's gone",
    detail: "Same-day when available. We do the heavy lifting, sweep up the spot, and haul it out.",
    icon: Truck,
    accent: "lime" as const,
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || !sectionRef.current || !pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    const ctx = gsap.context(() => {
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "center 45%",
          scrub: 0.7,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section ref={sectionRef} className="bg-[#16161A] py-20 sm:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <BandanaLabel label="How It Works" variant="pink" className="mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.02]">
              Three easy bites. <span className="text-[#FF2E93]">Zero stress.</span>
            </h2>
          </div>
          <p className="font-body text-[#8C8C96] max-w-md text-base">
            No confusing hoops or hidden fees. Just friendly local hauling from start to clean sweep.
          </p>
        </div>

        {/* Relative wrapper for steps + desktop animated connecting paw line */}
        <div className="relative">
          {/* Desktop dashed paw-path connector SVG */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            className="hidden lg:block absolute top-10 left-[12%] right-[12%] w-[76%] h-24 pointer-events-none z-0"
          >
            <path
              ref={pathRef}
              d="M 20 60 Q 250 10, 500 60 T 980 60"
              fill="none"
              stroke="#A6F31B"
              strokeWidth="4"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-7">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isLime = step.accent === "lime";
              return (
                <div
                  key={step.number}
                  className={`rounded-2xl bg-[#0B0B0D] p-7 sm:p-8 border-2 border-white/15 flex flex-col justify-between gap-6 ${
                    idx === 1 ? "lg:translate-y-4" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span
                        className={`font-display text-5xl sm:text-6xl leading-none ${
                          isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                        }`}
                      >
                        {step.number}
                      </span>
                      <div
                        className={`w-13 h-13 rounded-xl flex items-center justify-center border-2 border-[#0B0B0D] ${
                          isLime
                            ? "bg-[#A6F31B] text-[#0B0B0D] shadow-[3px_3px_0_#FF2E93]"
                            : "bg-[#FF2E93] text-white shadow-[3px_3px_0_#A6F31B]"
                        }`}
                      >
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-base text-[#8C8C96] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 font-mono-tag text-xs uppercase tracking-wider text-[#F4F4F0]">
                    {idx === 0 && "Direct local response"}
                    {idx === 1 && "Starting at $89"}
                    {idx === 2 && "Same-day when available"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
