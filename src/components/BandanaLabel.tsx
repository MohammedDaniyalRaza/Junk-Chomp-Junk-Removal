import { cn } from "../lib/utils";

interface BandanaLabelProps {
  label: string;
  variant?: "lime" | "pink";
  className?: string;
}

export function BandanaLabel({
  label,
  variant = "lime",
  className,
}: BandanaLabelProps) {
  const isLime = variant === "lime";
  return (
    <div className={cn("inline-flex items-center", className)}>
      <div
        className={cn(
          "relative inline-flex items-center px-4 py-1.5 pr-6 font-mono-tag text-xs uppercase tracking-[0.14em] font-medium border-2 border-[#0B0B0D] whitespace-nowrap",
          isLime
            ? "bg-[#A6F31B] text-[#0B0B0D] shadow-[3px_3px_0_#FF2E93]"
            : "bg-[#FF2E93] text-white shadow-[3px_3px_0_#A6F31B]"
        )}
        style={{
          clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)",
        }}
      >
        <span>{label}</span>
      </div>
    </div>
  );
}
