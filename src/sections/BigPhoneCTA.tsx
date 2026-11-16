import { Phone, MessageSquareQuote } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { ChompDivider } from "../components/ChompDivider";
import { ChompButton } from "../components/ChompButton";
import { SameDayTag } from "../components/SameDayTag";

interface BigPhoneCTAProps {
  topBg?: "black" | "surface";
}

export function BigPhoneCTA({ topBg = "surface" }: BigPhoneCTAProps) {
  return (
    <section className="relative bg-[#A6F31B] text-[#0B0B0D] overflow-hidden">
      <ChompDivider topBg={topBg} bottomBg="lime" teethColor="#FFFFFF" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex flex-col items-start gap-5">
            <SameDayTag />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#0B0B0D] leading-[0.98]">
              Ready for a clean sweep?
            </h2>
            <a
              href={BUSINESS.phoneHref}
              className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#0B0B0D] hover:text-[#FF2E93] transition-colors leading-none break-words"
            >
              {BUSINESS.phoneDisplay}
            </a>
            <p className="font-body text-lg text-[#0B0B0D]/85 max-w-xl">
              Junk removal starting at $89 across Aspen, Glenwood Springs, and Western &amp; Northern Colorado. Text or call for a quick quote.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ChompButton as="a" href={BUSINESS.phoneHref} variant="pink" size="lg">
                <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Call Now</span>
              </ChompButton>
              <ChompButton as="link" to="/contact" variant="dark" size="lg">
                <MessageSquareQuote className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Request a Quote</span>
              </ChompButton>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="sticker-frame rotate-3 bg-[#0B0B0D] rounded-3xl p-4 max-w-[280px] w-full">
              <img
                src={BUSINESS.logoSrc}
                alt="Junk Chomp Mascot Dogs"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <ChompDivider topBg="lime" bottomBg="black" teethColor="#FFFFFF" />
    </section>
  );
}
