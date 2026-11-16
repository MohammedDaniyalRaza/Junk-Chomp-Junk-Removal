import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { SITE_IMAGES } from "../data/images";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { SplitText } from "../components/SplitText";
import { ChompButton } from "../components/ChompButton";
import { PriceStarburst } from "../components/PriceStarburst";
import { SameDayTag } from "../components/SameDayTag";
import { BandanaLabel } from "../components/BandanaLabel";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0B0B0D] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
      {/* Full-bleed crisp photo — NO blur */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={SITE_IMAGES.heroHome.src}
          alt={SITE_IMAGES.heroHome.alt}
          eager
          className="w-full h-full"
          imgClassName="object-center"
        />
        {/* High-contrast dark gradient scrim for WCAG AA text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/92 via-[#0B0B0D]/72 to-[#0B0B0D]/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/60"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-end">
          {/* Headline + Copy + CTAs */}
          <div className="lg:col-span-8 flex flex-col items-start gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <BandanaLabel label="Western & Northern Colorado" variant="pink" />
              <SameDayTag />
            </div>

            <h1
              className="hero-h1-home text-white tracking-normal"
              style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)", lineHeight: 0.95 }}
            >
              <SplitText
                text="We chomp your junk."
                highlightWord="chomp"
                highlightClassName="sticker-word-pink"
              />
            </h1>

            <p className="font-body text-lg sm:text-xl lg:text-2xl text-[#F4F4F0] max-w-2xl leading-snug">
              Aspen to Glenwood Springs &amp; beyond. Same-day service available, starting at{" "}
              <span className="font-sub font-bold text-[#A6F31B]">$89</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <ChompButton as="a" href={BUSINESS.phoneHref} variant="lime" size="lg">
                <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </ChompButton>

              <ChompButton as="link" to="/contact" variant="pink" size="lg">
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
              </ChompButton>
            </div>
          </div>

          {/* Right/Bottom Corner Stickers — isolated column so they NEVER overlap the H1 */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0">
            <PriceStarburst size="lg" className="lg:self-end" />

            <div className="sticker-frame-lime -rotate-3 bg-[#0B0B0D] rounded-2xl p-2.5 sm:p-3 max-w-[175px] sm:max-w-[220px] lg:max-w-[250px] shrink-0">
              <img
                src={BUSINESS.logoSrc}
                alt="Junk Chomp Mascot Dogs"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
