import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../data/faqs";
import { BandanaLabel } from "../components/BandanaLabel";
import { cn } from "../lib/utils";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section className="bg-[#16161A] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <BandanaLabel label="Quick Answers" variant="lime" className="mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.02]">
            Frequently asked <span className="text-[#A6F31B]">questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl bg-[#0B0B0D] border-2 transition-colors",
                  isOpen ? "border-[#A6F31B]" : "border-white/15 hover:border-white/30"
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full min-h-[60px] px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#A6F31B] rounded-2xl"
                >
                  <span className="font-sub text-lg sm:text-xl font-bold text-white">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                      isOpen
                        ? "bg-[#A6F31B] text-[#0B0B0D]"
                        : "bg-[#16161A] text-[#FF2E93] border border-white/15"
                    )}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    className="px-6 pb-6 pt-1 font-body text-base text-[#8C8C96] leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
