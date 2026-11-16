import { Link } from "react-router-dom";
import { Phone, MapPin, ExternalLink } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { Marquee } from "./Marquee";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Areas", to: "/areas" },
  { label: "Contact", to: "/contact" },
];

const AREA_LINKS = [
  "Aspen",
  "Glenwood Springs",
  "Carbondale",
  "Basalt",
  "Rifle",
  "Western & Northern Colorado",
];

export function Footer() {
  return (
    <footer className="bg-[#0B0B0D] text-[#F4F4F0] border-t-2 border-white/10 pb-16 lg:pb-0">
      <Marquee compact variant="black" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link to="/" className="inline-block">
              <img
                src={BUSINESS.logoSrc}
                alt="Junk Chomp — Junk Removal"
                className="w-44 h-auto object-contain"
              />
            </Link>
            <p className="font-body text-sm text-[#8C8C96] max-w-xs leading-relaxed">
              Playful mascot, serious cleanouts. Junk removal starting at $89 with same-day service available across Western &amp; Northern Colorado.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-sub text-xs uppercase tracking-[0.16em] text-[#A6F31B] mb-4">
              Explore
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-[#F4F4F0] hover:text-[#A6F31B] transition-colors inline-flex items-center min-h-[36px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div className="lg:col-span-2">
            <h3 className="font-sub text-xs uppercase tracking-[0.16em] text-[#FF2E93] mb-4">
              Service Area
            </h3>
            <ul className="space-y-2">
              {AREA_LINKS.map((area) => (
                <li key={area} className="font-body text-sm text-[#8C8C96] flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#A6F31B] shrink-0 mt-1" aria-hidden="true" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h3 className="font-sub text-xs uppercase tracking-[0.16em] text-[#A6F31B] mb-1">
              Call or Text
            </h3>
            <a
              href={BUSINESS.phoneHref}
              className="font-display text-2xl sm:text-3xl text-[#A6F31B] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-6 h-6 shrink-0" aria-hidden="true" />
              <span>{BUSINESS.phoneDisplay}</span>
            </a>
            <p className="font-body text-sm text-[#8C8C96]">
              Text or call for a quick quote. Same-day service available!
            </p>
            <a
              href={BUSINESS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#16161A] border border-white/15 px-4 py-2.5 font-sub text-sm font-semibold text-[#F4F4F0] hover:border-[#FF2E93] hover:text-[#FF2E93] transition-colors min-h-[44px]"
            >
              <span>Follow on Facebook</span>
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#8C8C96]">
          <p className="font-body">
            © {new Date().getFullYear()} Junk Chomp · Junk Removal · {BUSINESS.serviceAreaShort}
          </p>
          <p className="font-mono-tag">Starting at $89</p>
        </div>
      </div>
    </footer>
  );
}
