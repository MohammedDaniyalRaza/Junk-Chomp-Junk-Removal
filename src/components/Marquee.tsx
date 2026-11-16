import { cn } from "../lib/utils";

interface MarqueeProps {
  items?: string[];
  variant?: "lime" | "pink" | "black";
  compact?: boolean;
  className?: string;
}

const DEFAULT_ITEMS = [
  "FURNITURE",
  "MATTRESSES",
  "APPLIANCES",
  "TIRES",
  "WOOD DEBRIS",
  "YARD WASTE",
  "GARAGE CLEANOUTS",
  "STARTING AT $89",
];

export function Marquee({
  items = DEFAULT_ITEMS,
  variant = "lime",
  compact = false,
  className,
}: MarqueeProps) {
  const bgClass = {
    lime: "bg-[#A6F31B] text-[#0B0B0D] border-y-3 border-[#0B0B0D]",
    pink: "bg-[#FF2E93] text-white border-y-3 border-[#0B0B0D]",
    black: "bg-[#0B0B0D] text-[#A6F31B] border-y border-white/15",
  }[variant];

  const row = (
    <div className="flex items-center shrink-0">
      {items.map((item, idx) => (
        <span
          key={`${item}-${idx}`}
          className={cn(
            "inline-flex items-center whitespace-nowrap font-sub font-bold tracking-wider uppercase",
            compact ? "text-xs py-2 px-3" : "text-sm sm:text-base py-3 sm:py-3.5 px-4"
          )}
        >
          <span>{item}</span>
          <span
            aria-hidden="true"
            className={cn(
              "ml-5 w-2 h-2 rotate-45 inline-block shrink-0",
              variant === "lime"
                ? "bg-[#FF2E93]"
                : variant === "pink"
                  ? "bg-[#A6F31B]"
                  : "bg-[#FF2E93]"
            )}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn("w-full overflow-hidden select-none", bgClass, className)}
      aria-label="Junk removal services ticker"
    >
      <div className="animate-jc-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
