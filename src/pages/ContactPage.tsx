import React, { useState } from "react";
import { Phone, ExternalLink, CheckCircle2, MessageSquare } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { SITE_IMAGES } from "../data/images";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { SplitText } from "../components/SplitText";
import { BandanaLabel } from "../components/BandanaLabel";
import { CustomSelect } from "../components/CustomSelect";
import { ChompButton } from "../components/ChompButton";
import { ChompDivider } from "../components/ChompDivider";
import { FaqAccordion } from "../sections/FaqAccordion";

const TOWN_OPTIONS = [
  "Aspen",
  "Glenwood Springs",
  "Other Western or Northern Colorado",
];

const JUNK_TYPE_OPTIONS = [
  "Furniture & Mattresses",
  "Appliances & Old Tires",
  "Wood, Lumber & Yard Waste",
  "Garage / Basement Cleanout",
  "Construction Leftovers",
  "General Household Junk",
];

interface FormErrors {
  name?: string;
  phone?: string;
  town?: string;
  junkType?: string;
}

export function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [town, setTown] = useState("");
  const [junkType, setJunkType] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7) {
      nextErrors.phone = "Please enter a valid phone number so we can call or text you back.";
    }
    if (!town) nextErrors.town = "Please choose your town or region.";
    if (!junkType) nextErrors.junkType = "Please choose the type of junk.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setTown("");
    setJunkType("");
    setMessage("");
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div>
      {/* Hero: Two-Card Direct Action Hero over Glenwood/Colorado River Valley */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0B0B0D] pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={SITE_IMAGES.heroContact.src}
            alt={SITE_IMAGES.heroContact.alt}
            eager
            className="w-full h-full"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/92 via-[#0B0B0D]/76 to-[#0B0B0D]/55"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/55"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <BandanaLabel label="Text or Call for a Quick Quote" variant="lime" />

              <h1
                className="hero-h1-page text-white"
                style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)", lineHeight: 0.98 }}
              >
                <SplitText
                  text="Get a quick quote."
                  highlightWord="quick"
                  highlightClassName="sticker-word-pink"
                />
              </h1>

              <p className="font-body text-lg sm:text-xl text-[#F4F4F0] max-w-xl">
                Junk removal starting at <span className="font-sub font-bold text-[#A6F31B]">$89</span>. Fastest answer? Call or text{" "}
                <a href={BUSINESS.phoneHref} className="font-sub font-bold text-[#A6F31B] underline">
                  {BUSINESS.phoneDisplay}
                </a>.
              </p>
            </div>

            {/* Direct Tap-to-Call Card + Facebook Card */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <a
                href={BUSINESS.phoneHref}
                className="rounded-3xl bg-[#A6F31B] text-[#0B0B0D] p-7 border-4 border-[#0B0B0D] shadow-[8px_8px_0_#FFFFFF] hover:shadow-[8px_8px_0_#FF2E93] transition-shadow flex flex-col gap-2"
              >
                <span className="font-mono-tag text-xs uppercase tracking-wider flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Tap to Call or Text</span>
                </span>
                <span className="font-display text-3xl sm:text-4xl leading-none">
                  {BUSINESS.phoneDisplay}
                </span>
                <span className="font-body text-sm font-medium text-[#0B0B0D]/80 mt-1">
                  Fastest answer · Same-day service available
                </span>
              </a>

              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#16161A]/95 text-white p-6 border-2 border-[#FF2E93] shadow-[6px_6px_0_#FF2E93] hover:bg-[#1e1e24] transition-colors flex items-center justify-between gap-4"
              >
                <div>
                  <span className="font-mono-tag text-xs uppercase tracking-wider text-[#FF2E93] block mb-1">
                    Social &amp; Updates
                  </span>
                  <span className="font-sub text-lg font-bold">
                    Message Junk Chomp on Facebook
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 text-[#FF2E93] shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ChompDivider topBg="black" bottomBg="surface" teethColor="#FFFFFF" />

      {/* Quote Request Form */}
      <section className="bg-[#16161A] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0B0B0D] border-2 border-white/15 p-7 sm:p-10">
            <div className="mb-8">
              <BandanaLabel label="Quick Request Form" variant="pink" className="mb-4" />
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-2">
                Tell us what needs chomping.
              </h2>
              <p className="font-body text-sm sm:text-base text-[#8C8C96]">
                Fastest answer? Call or text{" "}
                <a href={BUSINESS.phoneHref} className="text-[#A6F31B] font-semibold hover:underline">
                  {BUSINESS.phoneDisplay}
                </a>
                . Or send the details below and we will follow up right away.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                className="rounded-2xl bg-[#16161A] border-2 border-[#A6F31B] p-8 text-center flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#A6F31B] text-[#0B0B0D] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="font-display text-3xl text-white">
                  Thanks! We'll get back to you ASAP.
                </h3>
                <p className="font-body text-base text-[#8C8C96] max-w-md">
                  Got your request for <span className="text-white font-semibold">{town}</span> ({junkType}). Need an even faster answer? Call or text{" "}
                  <a href={BUSINESS.phoneHref} className="text-[#A6F31B] underline">
                    {BUSINESS.phoneDisplay}
                  </a>.
                </p>
                <ChompButton type="button" onClick={handleReset} variant="lime" size="md">
                  <span>Send Another Request</span>
                </ChompButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block font-sub text-sm font-semibold text-[#F4F4F0] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Alex Miller"
                      className={`w-full min-h-[50px] px-4 py-3 rounded-xl bg-[#0B0B0D] border-2 text-[#F4F4F0] placeholder:text-[#8C8C96] font-body text-base focus:outline-none focus:border-[#A6F31B] ${
                        errors.name ? "border-[#FF2E93]" : "border-white/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 font-body text-xs text-[#FF2E93]" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block font-sub text-sm font-semibold text-[#F4F4F0] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="(970) 555-0192"
                      className={`w-full min-h-[50px] px-4 py-3 rounded-xl bg-[#0B0B0D] border-2 text-[#F4F4F0] placeholder:text-[#8C8C96] font-body text-base focus:outline-none focus:border-[#A6F31B] ${
                        errors.phone ? "border-[#FF2E93]" : "border-white/20"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 font-body text-xs text-[#FF2E93]" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <CustomSelect
                    id="quote-town"
                    label="Town / Area"
                    value={town}
                    onChange={(val) => {
                      setTown(val);
                      if (errors.town) setErrors({ ...errors, town: undefined });
                    }}
                    options={TOWN_OPTIONS}
                    placeholder="Select your town"
                    error={errors.town}
                  />

                  <CustomSelect
                    id="quote-junk-type"
                    label="Type of Junk"
                    value={junkType}
                    onChange={(val) => {
                      setJunkType(val);
                      if (errors.junkType) setErrors({ ...errors, junkType: undefined });
                    }}
                    options={JUNK_TYPE_OPTIONS}
                    placeholder="Select junk category"
                    error={errors.junkType}
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-message"
                    className="block font-sub text-sm font-semibold text-[#F4F4F0] mb-2"
                  >
                    What needs hauling? (optional)
                  </label>
                  <textarea
                    id="quote-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Example: 1 couch, 1 queen mattress, and a small pile of old wood planks in the driveway."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0B0D] border-2 border-white/20 text-[#F4F4F0] placeholder:text-[#8C8C96] font-body text-base focus:outline-none focus:border-[#A6F31B]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <ChompButton type="submit" variant="lime" size="lg">
                    <MessageSquare className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span>Request Quick Quote</span>
                  </ChompButton>
                  <span className="font-mono-tag text-xs text-[#8C8C96]">
                    Starting at $89 · Same-day when available
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <FaqAccordion />
    </div>
  );
}
