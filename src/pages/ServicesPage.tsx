import { Phone, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { SITE_IMAGES } from "../data/images";
import { SERVICE_CATEGORIES, QUOTE_FACTORS, WHAT_WE_TAKE_LIST } from "../data/services";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { SplitText } from "../components/SplitText";
import { BandanaLabel } from "../components/BandanaLabel";
import { PriceStarburst } from "../components/PriceStarburst";
import { SameDayTag } from "../components/SameDayTag";
import { ChompButton } from "../components/ChompButton";
import { ChompDivider } from "../components/ChompDivider";
import { FaqAccordion } from "../sections/FaqAccordion";
import { BigPhoneCTA } from "../sections/BigPhoneCTA";
import { cn } from "../lib/utils";

export function ServicesPage() {
  return (
    <div>
      {/* Hero: Centered Wide Statement over empty spotless garage */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0B0B0D] pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={SITE_IMAGES.heroServices.src}
            alt={SITE_IMAGES.heroServices.alt}
            eager
            className="w-full h-full"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#0B0B0D]/80 via-[#0B0B0D]/68 to-[#0B0B0D]"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <BandanaLabel label="Full-Service Hauling" variant="pink" />
              <SameDayTag />
            </div>

            <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <h1
                className="hero-h1-page text-white max-w-4xl"
                style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)", lineHeight: 0.98 }}
              >
                <SplitText
                  text="What we haul away."
                  highlightWord="haul"
                  highlightClassName="sticker-word-lime"
                />
              </h1>

              <PriceStarburst size="md" className="self-start lg:self-center" />
            </div>

            <p className="font-body text-lg sm:text-xl text-[#F4F4F0] max-w-2xl">
              Junk removal starting at <span className="font-sub font-bold text-[#A6F31B]">$89</span>. You point at what goes — we lift, load, and sweep up behind ourselves.
            </p>

            {/* Quick Checklist Strip */}
            <div className="w-full rounded-2xl bg-[#16161A]/90 border-2 border-white/15 p-5 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {WHAT_WE_TAKE_LIST.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm sm:text-base font-body text-[#F4F4F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#A6F31B] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <ChompButton as="a" href={BUSINESS.phoneHref} variant="lime" size="lg">
                <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </ChompButton>
              <ChompButton as="link" to="/contact" variant="pink" size="lg">
                <span>Text or Request Quote</span>
              </ChompButton>
            </div>
          </div>
        </div>
      </section>

      <ChompDivider topBg="black" bottomBg="surface" teethColor="#FFFFFF" />

      {/* Alternating Service Sections */}
      <section className="bg-[#16161A] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICE_CATEGORIES.map((service, idx) => {
            const isEven = idx % 2 === 0;
            const isLime = service.accent === "lime";
            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
              >
                {/* Photo Column */}
                <div
                  className={cn(
                    "lg:col-span-6",
                    !isEven && "lg:order-2"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-2xl overflow-hidden aspect-[4/3]",
                      isLime ? "sticker-frame-lime -rotate-1" : "sticker-frame-pink rotate-1"
                    )}
                  >
                    <ImageWithFallback
                      src={service.image.src}
                      alt={service.image.alt}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Copy Column */}
                <div
                  className={cn(
                    "lg:col-span-6 flex flex-col items-start gap-4",
                    !isEven && "lg:order-1"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "font-display text-4xl leading-none",
                        isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                      )}
                    >
                      {service.number}
                    </span>
                    <BandanaLabel
                      label={service.subtitle}
                      variant={service.accent}
                    />
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                    {service.title}
                  </h2>

                  <p className="font-body text-base sm:text-lg text-[#8C8C96] leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-2">
                    {service.examples.map((ex) => (
                      <li
                        key={ex}
                        className="flex items-center gap-2 font-body text-sm text-[#F4F4F0]"
                      >
                        <CheckCircle2
                          className={cn(
                            "w-4 h-4 shrink-0",
                            isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                          )}
                          aria-hidden="true"
                        />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote Factors Section */}
      <section className="bg-[#0B0B0D] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <BandanaLabel label="Simple Quotes · Starting at $89" variant="lime" className="mb-4" />
              <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.02]">
                What shapes your final quote?
              </h2>
            </div>
            <p className="font-body text-[#8C8C96] max-w-md">
              Text or call {BUSINESS.phoneDisplay} for a quick quote. You always approve the number before we load a single item.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUOTE_FACTORS.map((factor, idx) => (
              <div
                key={factor.id}
                className="rounded-2xl bg-[#16161A] border-2 border-white/15 p-7 flex flex-col justify-between gap-5"
              >
                <div>
                  <span
                    className={cn(
                      "font-display text-5xl leading-none block mb-4",
                      idx === 1 ? "text-[#FF2E93]" : "text-[#A6F31B]"
                    )}
                  >
                    {factor.number}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white mb-3">
                    {factor.title}
                  </h3>
                  <p className="font-body text-base text-[#8C8C96] leading-relaxed">
                    {factor.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 font-mono-tag text-xs text-[#F4F4F0] uppercase tracking-wider">
                  Starting at $89
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion />
      <BigPhoneCTA topBg="surface" />
    </div>
  );
}
