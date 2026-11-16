import { ArrowLeft, Phone } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { ChompButton } from "../components/ChompButton";
import { BandanaLabel } from "../components/BandanaLabel";

export function NotFoundPage() {
  return (
    <section className="min-h-[100svh] bg-[#0B0B0D] flex items-center justify-center pt-24 pb-20 px-4">
      <div className="max-w-2xl w-full text-center flex flex-col items-center gap-6">
        <div className="sticker-frame-pink -rotate-2 bg-[#0B0B0D] rounded-3xl p-4 w-48 sm:w-56">
          <img
            src={BUSINESS.logoSrc}
            alt="Junk Chomp Mascot Dogs"
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        <BandanaLabel label="404 · Page Missing" variant="pink" />

        <h1
          className="hero-h1-page text-white"
          style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)", lineHeight: 0.98 }}
        >
          Chomp! <span className="sticker-word-lime">Wrong turn.</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-[#8C8C96] max-w-lg">
          Ruh-roh — looks like our dogs already hauled this page off to the recycling yard. Let us get you back to solid ground.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <ChompButton as="link" to="/" variant="lime" size="lg">
            <ArrowLeft className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Back Home</span>
          </ChompButton>
          <ChompButton as="a" href={BUSINESS.phoneHref} variant="dark" size="lg">
            <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Call {BUSINESS.phoneDisplay}</span>
          </ChompButton>
        </div>
      </div>
    </section>
  );
}
