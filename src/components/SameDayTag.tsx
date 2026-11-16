import { Zap } from "lucide-react";
import { cn } from "../lib/utils";

interface SameDayTagProps {
  className?: string;
}

export function SameDayTag({ className }: SameDayTagProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 bg-[#A6F31B] text-[#0B0B0D] px-3.5 py-1.5 font-mono-tag text-xs font-medium uppercase tracking-wider border-2 border-[#0B0B0D] shadow-[3px_3px_0_#FFFFFF] -rotate-2 whitespace-nowrap shrink-0",
        className
      )}
    >
      <Zap className="w-3.5 h-3.5 fill-[#FF2E93] text-[#0B0B0D] shrink-0" aria-hidden="true" />
      <span>Same-Day Available</span>
    </div>
  );
}
