import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import { CHOMP_PANELS } from "../data/items";
import { BandanaLabel } from "../components/BandanaLabel";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { ChompButton } from "../components/ChompButton";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function WhatWeChomp() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || !sectionRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 64);

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(800, track.scrollWidth - window.innerWidth)}`,
          pin: true,
          scrub: 0.75,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => mm.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B0B0D] py-16 sm:py-20 lg:py-0 lg:min-h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 lg:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <BandanaLabel label="What We Chomp" variant="lime" className="mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.02]">
              Big piles, single items,{" "}
              <span className="text-[#A6F31B]">all gone.</span>
            </h2>
          </div>
          <p className="font-body text-[#8C8C96] max-w-md text-base">
            From one busted couch to an entire packed two-car garage — we lift, load, and haul it away cleanly.
          </p>
        </div>
      </div>

      {/* Horizontal track on desktop (>= 1024px), clean vertical stack on mobile/tablet */}
      <div
        ref={trackRef}
        className="flex flex-col lg:flex-row gap-8 lg:gap-8 px-4 sm:px-6 lg:px-12 lg:w-max"
      >
        {CHOMP_PANELS.map((panel, index) => {
          const isLime = panel.accent === "lime";
          return (
            <article
              key={panel.id}
              className={cn(
                "w-full lg:w-[460px] xl:w-[500px] shrink-0 rounded-2xl bg-[#16161A] p-5 sm:p-6 border-2 border-white/15 flex flex-col justify-between gap-5",
                index % 2 === 0 ? "lg:rotate-[-0.75deg]" : "lg:rotate-[0.75deg]"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={cn(
                      "font-display text-4xl sm:text-5xl leading-none",
                      isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                    )}
                  >
                    {panel.number}
                  </span>
                  <span className="font-mono-tag text-xs uppercase tracking-[0.14em] text-[#8C8C96]">
                    {panel.tag}
                  </span>
                </div>

                {/* Sticker photo frame */}
                <div
                  className={cn(
                    "rounded-xl overflow-hidden aspect-[4/3] mb-5",
                    isLime ? "sticker-frame-lime" : "sticker-frame-pink"
                  )}
                >
                  <ImageWithFallback
                    src={panel.image.src}
                    alt={panel.image.alt}
                    className="w-full h-full"
                  />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                  {panel.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#8C8C96] leading-relaxed">
                  {panel.summary}
                </p>
              </div>

              <ul className="space-y-1.5 pt-3 border-t border-white/10">
                {panel.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 font-body text-sm text-[#F4F4F0]"
                  >
                    <Check
                      className={cn(
                        "w-4 h-4 shrink-0",
                        isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                      )}
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}

        {/* Final card leading to full Services page */}
        <div className="w-full lg:w-[360px] shrink-0 rounded-2xl bg-[#FF2E93] text-white p-7 border-4 border-[#0B0B0D] shadow-[8px_8px_0_#A6F31B] flex flex-col justify-between gap-6">
          <div>
            <span className="font-mono-tag text-xs uppercase tracking-widest text-[#0B0B0D] bg-[#A6F31B] px-2.5 py-1 inline-block mb-4">
              Full List
            </span>
            <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-3">
              Not sure if we take it?
            </h3>
            <p className="font-body text-base text-white/90">
              See our complete list of accepted junk or text us a quick photo for an instant answer.
            </p>
          </div>
          <ChompButton as="link" to="/services" variant="lime" size="md">
            <span>See All Services</span>
          </ChompButton>
        </div>
      </div>
    </section>
  );
}
