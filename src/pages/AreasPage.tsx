import { MapPin, Phone, Check } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { SITE_IMAGES } from "../data/images";
import { ANCHOR_AREAS, EXTENDED_CORRIDORS } from "../data/areas";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { SplitText } from "../components/SplitText";
import { BandanaLabel } from "../components/BandanaLabel";
import { ChompButton } from "../components/ChompButton";
import { ChompDivider } from "../components/ChompDivider";
import { BigPhoneCTA } from "../sections/BigPhoneCTA";
import { cn } from "../lib/utils";

export function AreasPage() {
  return (
    <div>
      {/* Hero: Top-Left Split + Mountain Horizon */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0B0B0D] pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={SITE_IMAGES.heroAreas.src}
            alt={SITE_IMAGES.heroAreas.alt}
            eager
            className="w-full h-full"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/92 via-[#0B0B0D]/70 to-[#0B0B0D]/35"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/60"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex flex-col items-start gap-6">
            <BandanaLabel label="Western & Northern Colorado" variant="lime" />

            <h1
              className="hero-h1-page-long text-white"
              style={{ fontSize: "clamp(2.75rem, 8vw, 6.25rem)", lineHeight: 0.98 }}
            >
              <SplitText
                text="Aspen to Glenwood & beyond."
                highlightWord="Glenwood"
                highlightClassName="sticker-word-pink"
              />
            </h1>

            <p className="font-body text-lg sm:text-xl text-[#F4F4F0] max-w-2xl">
              From tight Aspen cul-de-sacs to Glenwood Springs, Carbondale, and communities across Western &amp; Northern Colorado. Same-day service available!
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <ChompButton as="a" href={BUSINESS.phoneHref} variant="lime" size="lg">
                <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </ChompButton>
              <ChompButton as="link" to="/contact" variant="pink" size="lg">
                <span>Check Your Town</span>
              </ChompButton>
            </div>
          </div>
        </div>
      </section>

      <ChompDivider topBg="black" bottomBg="surface" teethColor="#FFFFFF" />

      {/* Two Big Anchor Cards: Aspen & Glenwood Springs */}
      <section className="bg-[#16161A] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <BandanaLabel label="Primary Hubs" variant="pink" className="mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.02]">
              Two valley anchors. <span className="text-[#A6F31B]">One quick crew.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {ANCHOR_AREAS.map((area) => {
              const isLime = area.accent === "lime";
              return (
                <article
                  key={area.id}
                  className={cn(
                    "rounded-3xl bg-[#0B0B0D] p-8 sm:p-10 border-4 flex flex-col justify-between gap-6",
                    isLime
                      ? "border-[#A6F31B] shadow-[8px_8px_0_#A6F31B]"
                      : "border-[#FF2E93] shadow-[8px_8px_0_#FF2E93]"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-mono-tag text-xs uppercase tracking-wider text-[#8C8C96]">
                        {area.regionLabel}
                      </span>
                      <MapPin
                        className={cn(
                          "w-6 h-6 shrink-0",
                          isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                        )}
                        aria-hidden="true"
                      />
                    </div>

                    <h3
                      className={cn(
                        "font-display text-4xl sm:text-5xl mb-4",
                        isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                      )}
                    >
                      {area.name}
                    </h3>

                    <p className="font-body text-base sm:text-lg text-[#F4F4F0]/90 leading-relaxed mb-6">
                      {area.summary}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-5 border-t border-white/10">
                    {area.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 font-body text-sm sm:text-base text-[#F4F4F0]"
                      >
                        <Check
                          className={cn(
                            "w-4 h-4 shrink-0",
                            isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                          )}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mountain-Line SVG Illustration + Beyond Corridors */}
      <section className="bg-[#0B0B0D] py-20 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#16161A] border-2 border-white/15 p-7 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <BandanaLabel label="& Beyond" variant="lime" className="mb-3" />
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white">
                  &amp; beyond across Western &amp; Northern Colorado
                </h2>
              </div>
              <p className="font-mono-tag text-xs uppercase tracking-wider text-[#FF2E93]">
                Starting at $89 · Same-day when available
              </p>
            </div>

            {/* Clean Mountain-Line SVG Illustration */}
            <svg
              viewBox="0 0 1000 170"
              className="w-full h-auto mb-8"
              role="img"
              aria-label="Mountain skyline illustration connecting Aspen, Glenwood Springs, and Western and Northern Colorado"
            >
              <path
                d="M 0 145 L 85 80 L 155 115 L 260 40 L 365 115 L 470 55 L 580 120 L 690 30 L 800 105 L 895 65 L 1000 125"
                fill="none"
                stroke="#A6F31B"
                strokeWidth="4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                d="M 0 155 Q 250 130, 500 150 T 1000 140"
                fill="none"
                stroke="#FF2E93"
                strokeWidth="3"
                strokeDasharray="10 10"
                strokeLinecap="round"
              />
              <circle cx="260" cy="40" r="7" fill="#A6F31B" />
              <circle cx="470" cy="55" r="7" fill="#FF2E93" />
              <circle cx="690" cy="30" r="8" fill="#A6F31B" />
            </svg>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {EXTENDED_CORRIDORS.map((town) => (
                <div
                  key={town}
                  className="rounded-xl bg-[#0B0B0D] border border-white/15 px-4 py-3 flex items-center gap-2 font-body text-sm text-[#F4F4F0]"
                >
                  <MapPin className="w-4 h-4 text-[#A6F31B] shrink-0" aria-hidden="true" />
                  <span>{town}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BigPhoneCTA topBg="black" />
    </div>
  );
}
