import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { SITE_IMAGES } from "../data/images";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { SplitText } from "../components/SplitText";
import { BandanaLabel } from "../components/BandanaLabel";
import { ChompButton } from "../components/ChompButton";
import { ChompDivider } from "../components/ChompDivider";
import { BigPhoneCTA } from "../sections/BigPhoneCTA";

const VALUES = [
  {
    number: "01",
    title: "Fast",
    subtitle: "Same-day when available",
    description:
      "When clutter needs to vanish before guests arrive or the moving truck pulls up, we hustle. Call early and we will do everything we can to fit you in that very day.",
    accent: "lime" as const,
  },
  {
    number: "02",
    title: "Fair",
    subtitle: "Starting at $89",
    description:
      "Honest local rates based on how much room your junk takes in the truck. We tell you the price upfront before lifting a single box — text or call for a quick quote.",
    accent: "pink" as const,
  },
  {
    number: "03",
    title: "Friendly",
    subtitle: "Two dogs, one mission",
    description:
      "Our cheerful schnauzer and white pup mascot say it best: hard-working, approachable, and happy to tackle the dirty work so you do not have to.",
    accent: "lime" as const,
  },
];

export function AboutPage() {
  return (
    <div>
      {/* Hero: Asymmetric Editorial Split over full-bleed photo */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0B0B0D] pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={SITE_IMAGES.heroAbout.src}
            alt={SITE_IMAGES.heroAbout.alt}
            eager
            className="w-full h-full"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/92 via-[#0B0B0D]/76 to-[#0B0B0D]/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/55"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 flex flex-col items-start gap-6">
              <BandanaLabel label="About Junk Chomp" variant="lime" />

              <h1
                className="hero-h1-page text-white"
                style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)", lineHeight: 0.98 }}
              >
                <SplitText
                  text="Two dogs. One mission."
                  highlightWord="mission."
                  highlightClassName="sticker-word-lime"
                />
              </h1>

              <p className="font-body text-lg sm:text-xl text-[#F4F4F0] max-w-xl leading-relaxed">
                A Colorado junk removal crew built to make garage, yard, and home cleanouts fast, approachable, and completely stress-free.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <ChompButton as="a" href={BUSINESS.phoneHref} variant="lime" size="lg">
                  <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Call {BUSINESS.phoneDisplay}</span>
                </ChompButton>
                <ChompButton as="link" to="/services" variant="dark" size="lg">
                  <span>See What We Take</span>
                  <ArrowRight className="w-5 h-5 shrink-0" aria-hidden="true" />
                </ChompButton>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="sticker-frame-pink rotate-2 bg-[#0B0B0D] rounded-3xl p-4 max-w-[260px] w-full">
                <img
                  src={BUSINESS.logoSrc}
                  alt="Junk Chomp two mascot dogs"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChompDivider topBg="black" bottomBg="surface" teethColor="#FFFFFF" />

      {/* Local Story Section */}
      <section className="bg-[#16161A] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="sticker-frame-lime -rotate-1 rounded-2xl overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={SITE_IMAGES.heroHome.src}
                  alt={SITE_IMAGES.heroHome.alt}
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <BandanaLabel label="Our Colorado Story" variant="pink" />
              <h2 className="font-display text-4xl sm:text-5xl text-white leading-[1.02]">
                Clearing clutter across the <span className="text-[#FF2E93]">Western Slope.</span>
              </h2>
              <p className="font-body text-base sm:text-lg text-[#F4F4F0]/90 leading-relaxed">
                Look at our logo and you get the vibe right away: a cheerful schnauzer hauling an old tire, a bright-eyed pup carrying weathered fence boards, and a clean neighborhood waiting behind them.
              </p>
              <p className="font-body text-base text-[#8C8C96] leading-relaxed">
                Whether you are clearing out a mountain cabin near Aspen, emptying a packed garage in Glenwood Springs, or tidying up remodel scraps anywhere across Western and Northern Colorado, we show up on time, load every heavy piece ourselves, and leave the ground swept clean.
              </p>
              <p className="font-mono-tag text-xs uppercase tracking-wider text-[#A6F31B]">
                Starting at $89 · Text or call for a quick quote
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big Numbered Values */}
      <section className="bg-[#0B0B0D] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <BandanaLabel label="How We Work" variant="lime" className="mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.02]">
              Built on three simple promises.
            </h2>
          </div>

          <div className="space-y-6">
            {VALUES.map((val) => {
              const isLime = val.accent === "lime";
              return (
                <div
                  key={val.number}
                  className="rounded-3xl bg-[#16161A] border-2 border-white/15 p-7 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  <div className="md:col-span-2">
                    <span
                      className={`font-display text-6xl sm:text-7xl leading-none ${
                        isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                      }`}
                    >
                      {val.number}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl sm:text-4xl text-white mb-1">
                      {val.title}
                    </h3>
                    <p
                      className={`font-mono-tag text-xs uppercase tracking-wider ${
                        isLime ? "text-[#A6F31B]" : "text-[#FF2E93]"
                      }`}
                    >
                      {val.subtitle}
                    </p>
                  </div>
                  <div className="md:col-span-6">
                    <p className="font-body text-base sm:text-lg text-[#8C8C96] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BigPhoneCTA topBg="black" />
    </div>
  );
}
