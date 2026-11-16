import { cn } from "../lib/utils";

interface PriceStarburstProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PriceStarburst({ className, size = "md" }: PriceStarburstProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32 sm:w-36 sm:h-36",
    lg: "w-36 h-36 sm:w-44 sm:h-44",
  }[size];

  // Generate a 16-point starburst polygon path
  const points = Array.from({ length: 32 })
    .map((_, idx) => {
      const angle = (idx * Math.PI) / 16;
      const radius = idx % 2 === 0 ? 48 : 37;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center select-none pointer-events-none shrink-0",
        sizeClasses,
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full animate-jc-spin drop-shadow-[0_6px_16px_rgba(255,46,147,0.45)]"
        aria-hidden="true"
      >
        <polygon
          points={points}
          fill="#FF2E93"
          stroke="#A6F31B"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <polygon
          points={points}
          fill="none"
          stroke="#0B0B0D"
          strokeWidth="1.5"
          strokeLinejoin="round"
          transform="scale(0.92) translate(4.3, 4.3)"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center text-center -rotate-6 leading-none">
        <span className="font-mono-tag text-[9px] sm:text-[10px] font-medium uppercase tracking-wider text-white">
          Starting at
        </span>
        <span className="font-display text-3xl sm:text-4xl text-white sticker-word-white">
          $89
        </span>
      </div>
    </div>
  );
}
