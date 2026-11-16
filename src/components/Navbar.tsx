import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS, cn } from "../lib/utils";
import { useLenis } from "../hooks/useLenisScroll";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Areas", to: "/areas" },
  { label: "Contact", to: "/contact" },
];

export function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const { pathname } = useLocation();
  const { stopScroll, startScroll } = useLenis();
  const [scrolled, setScrolled] = useState(false);

  // Track scrollY > 40 for transparent -> solid #0B0B0D with lime bottom border
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  // Close on Escape and resize >= 1024px
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen, setMenuOpen]);

  // Body scroll lock & Lenis pause while mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      stopScroll();
      return () => {
        document.body.style.overflow = prevOverflow;
        startScroll();
      };
    } else {
      startScroll();
    }
  }, [menuOpen, stopScroll, startScroll]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] h-16 lg:h-20 transition-colors duration-200",
          scrolled || menuOpen
            ? "bg-[#0B0B0D] border-b-2 border-[#A6F31B]"
            : "bg-transparent border-b-2 border-transparent"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand Logo inside Link to / (shrink-safe, never overflows at 320px) */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-[#A6F31B] rounded-lg"
            aria-label="Junk Chomp Home"
          >
            <img
              src={BUSINESS.logoSrc}
              alt="Junk Chomp — Junk Removal"
              className="h-11 sm:h-12 lg:h-14 w-auto max-w-[140px] sm:max-w-[170px] object-contain"
            />
          </Link>

          {/* Desktop navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "font-sub text-sm font-semibold tracking-wide whitespace-nowrap shrink-0 py-1.5 relative transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#A6F31B]",
                    active
                      ? "text-[#A6F31B]"
                      : "text-[#F4F4F0] hover:text-[#A6F31B]"
                  )}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 -bottom-0.5 h-[3px] bg-[#A6F31B] rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call CTA (hidden on mobile because sticky bottom bar handles it) */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="chomp-btn inline-flex items-center gap-2 rounded-xl bg-[#A6F31B] px-5 py-2.5 font-sub text-sm font-bold text-[#0B0B0D] border-2 border-[#0B0B0D] glow-lime hover:bg-[#b8ff38] whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call {BUSINESS.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile plain hamburger toggle button — no Reveal/GSAP/magnetic wrapper */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-[#16161A] border-2 border-[#A6F31B]/60 text-[#F4F4F0] hover:text-[#A6F31B] active:scale-95 transition-colors focus-visible:outline-2 focus-visible:outline-[#A6F31B] shrink-0"
          >
            {menuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Sibling Mobile Menu Overlay (no portal, CSS transition only) */}
      <div
        id="mobile-nav-drawer"
        aria-hidden={!menuOpen}
        className={cn(
          "lg:hidden fixed inset-0 z-[999] h-[100dvh] bg-[#0B0B0D] overflow-y-auto px-6 pt-[88px] flex flex-col justify-between transition-[opacity,transform,visibility] duration-250 ease-out",
          menuOpen
            ? "opacity-100 translate-y-0 visible pointer-events-auto"
            : "opacity-0 -translate-y-3 invisible pointer-events-none"
        )}
        style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "font-display text-3xl sm:text-4xl min-h-[56px] flex items-center justify-between border-b border-white/10 py-2 transition-colors",
                  active ? "text-[#A6F31B]" : "text-[#F4F4F0] hover:text-[#FF2E93]"
                )}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="font-mono-tag text-xs uppercase tracking-wider text-[#0B0B0D] bg-[#A6F31B] px-2.5 py-1 rounded">
                    Here
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="w-full min-h-[54px] flex items-center justify-center gap-2.5 rounded-xl bg-[#A6F31B] text-[#0B0B0D] font-sub text-base font-bold border-2 border-white glow-lime"
          >
            <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Call {BUSINESS.phoneDisplay}</span>
          </a>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-[#8C8C96]">
            <span className="font-body">{BUSINESS.serviceAreaShort} · Starting at $89</span>
            <a
              href={BUSINESS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sub font-semibold text-[#FF2E93] hover:underline"
            >
              Facebook Page
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
