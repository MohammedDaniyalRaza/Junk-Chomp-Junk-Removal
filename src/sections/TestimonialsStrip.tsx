import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";
import { BandanaLabel } from "../components/BandanaLabel";
import { cn } from "../lib/utils";

export function TestimonialsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#16161A] py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <BandanaLabel label="Local Word" variant="pink" className="mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.02]">
              Neighbors across the valley.
            </h2>
          </div>
          <p className="font-mono-tag text-xs uppercase tracking-wider text-[#8C8C96]">
            Drag sideways or scroll through notes
          </p>
        </div>
      </div>

      {/* Draggable horizontal strip + auto marquee fallback on desktop */}
      <div ref={containerRef} className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <motion.div
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.12}
          className="flex gap-6 cursor-grab active:cursor-grabbing w-max pb-4"
        >
          {TESTIMONIALS.map((item, idx) => {
            const isLime = item.accent === "lime";
            return (
              <figure
                key={item.id}
                className={cn(
                  "w-[290px] sm:w-[340px] shrink-0 rounded-2xl bg-[#0B0B0D] p-6 border-2 border-white/15 flex flex-col justify-between gap-5",
                  idx % 2 === 0 ? "rotate-[-0.75deg]" : "rotate-[0.75deg]"
                )}
              >
                <div>
                  <Quote
                    className={cn(
                      "w-7 h-7 mb-3",
                      isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                    )}
                    aria-hidden="true"
                  />
                  <blockquote className="font-body text-base text-[#F4F4F0] leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                </div>

                <figcaption className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-sub font-bold text-white text-sm">
                    {item.author}
                  </span>
                  <span className="font-mono-tag text-[#8C8C96]">{item.town}</span>
                </figcaption>
              </figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
