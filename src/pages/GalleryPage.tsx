import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, MapPin } from "lucide-react";
import { GALLERY_ITEMS, type GalleryCategory, type GalleryItem } from "../data/items";
import { SITE_IMAGES } from "../data/images";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { SplitText } from "../components/SplitText";
import { BandanaLabel } from "../components/BandanaLabel";
import { ChompDivider } from "../components/ChompDivider";
import { BigPhoneCTA } from "../sections/BigPhoneCTA";
import { cn } from "../lib/utils";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Furniture",
  "Appliances",
  "Yard & Wood",
  "Cleanouts",
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const selectedItem: GalleryItem | null =
    selectedIndex !== null && filteredItems[selectedIndex]
      ? filteredItems[selectedIndex]
      : null;

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <div>
      {/* Hero: Bottom-Anchored Overhang Layout */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#0B0B0D] pt-28 pb-16 sm:pb-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={SITE_IMAGES.heroGallery.src}
            alt={SITE_IMAGES.heroGallery.alt}
            eager
            className="w-full h-full"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/65 to-[#0B0B0D]/35"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-5">
            <BandanaLabel label="Before & After Haul-Aways" variant="lime" />

            <h1
              className="hero-h1-page text-white"
              style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)", lineHeight: 0.98 }}
            >
              <SplitText
                text="Loads we chomped."
                highlightWord="chomped."
                highlightClassName="sticker-word-pink"
              />
            </h1>

            <p className="font-body text-lg sm:text-xl text-[#F4F4F0] max-w-2xl">
              Real piles, heavy appliances, peeling fence wood, and packed garages cleared across Western &amp; Northern Colorado.
            </p>
          </div>
        </div>
      </section>

      <ChompDivider topBg="black" bottomBg="surface" teethColor="#FFFFFF" />

      {/* Filter Bar + Sticker Grid */}
      <section className="bg-[#16161A] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
            <div
              role="group"
              aria-label="Filter gallery by junk type"
              className="flex flex-wrap items-center gap-2.5"
            >
              {CATEGORIES.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedIndex(null);
                    }}
                    className={cn(
                      "min-h-[44px] px-4 py-2 rounded-xl font-sub text-sm font-bold whitespace-nowrap shrink-0 border-2 transition-colors focus-visible:outline-2 focus-visible:outline-[#A6F31B]",
                      active
                        ? "bg-[#A6F31B] text-[#0B0B0D] border-[#0B0B0D] shadow-[3px_3px_0_#FF2E93]"
                        : "bg-[#0B0B0D] text-[#F4F4F0] border-white/15 hover:border-[#A6F31B]"
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <span className="font-mono-tag text-xs uppercase tracking-wider text-[#8C8C96]">
              Showing {filteredItems.length} haul{filteredItems.length === 1 ? "" : "s"} · Click any photo to zoom
            </span>
          </div>

          {/* Uniform aspect-ratio Masonry-feel Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    "group rounded-2xl bg-[#0B0B0D] p-4 border-2 border-white/15 flex flex-col justify-between gap-4 transition-transform duration-200 hover:rotate-0",
                    item.rotationClass
                  )}
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden sticker-frame block text-left focus-visible:outline-2 focus-visible:outline-[#A6F31B]"
                      aria-label={`View ${item.title} in lightbox`}
                    >
                      <ImageWithFallback
                        src={item.image.src}
                        alt={item.image.alt}
                        className="w-full h-full"
                        imgClassName="group-hover:scale-105 transition-transform duration-300"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-[#0B0B0D]/85 text-[#A6F31B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </button>

                    <div className="mt-4 flex items-center gap-2 text-xs text-[#8C8C96] font-mono-tag">
                      <span className="text-[#FF2E93]">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#A6F31B]" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl text-white mt-1.5 mb-2">
                      {item.title}
                    </h2>
                    <p className="font-body text-sm text-[#8C8C96] leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal with Keyboard & Touch Swipe */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-[1100] bg-[#0B0B0D]/95 flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (delta > 50) showPrev();
            if (delta < -50) showNext();
            touchStartX.current = null;
          }}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono-tag text-xs text-[#A6F31B] uppercase tracking-wider">
                  {selectedItem.category} · {selectedItem.location}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-white">
                  {selectedItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close lightbox"
                className="w-12 h-12 rounded-xl bg-[#16161A] border-2 border-white/20 text-white hover:text-[#A6F31B] flex items-center justify-center shrink-0"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden sticker-frame-lime aspect-[4/3] bg-[#16161A]">
              <ImageWithFallback
                src={selectedItem.image.src}
                alt={selectedItem.image.alt}
                eager
                className="w-full h-full"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="font-body text-sm sm:text-base text-[#F4F4F0]">
                {selectedItem.caption}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous photo"
                  className="w-12 h-12 rounded-xl bg-[#16161A] border-2 border-white/20 text-white hover:border-[#A6F31B] flex items-center justify-center"
                >
                  <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next photo"
                  className="w-12 h-12 rounded-xl bg-[#16161A] border-2 border-white/20 text-white hover:border-[#A6F31B] flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <BigPhoneCTA topBg="surface" />
    </div>
  );
}
