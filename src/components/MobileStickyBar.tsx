import { Link } from "react-router-dom";
import { Phone, MessageSquareQuote } from "lucide-react";
import { BUSINESS } from "../lib/utils";

interface MobileStickyBarProps {
  hidden: boolean;
}

export function MobileStickyBar({ hidden }: MobileStickyBarProps) {
  if (hidden) return null;

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[950] bg-[#0B0B0D] border-t-2 border-[#A6F31B] px-3 py-1.5"
      style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={BUSINESS.phoneHref}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 rounded-lg bg-[#A6F31B] text-[#0B0B0D] font-sub text-sm font-bold whitespace-nowrap active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Call Now</span>
        </a>
        <Link
          to="/contact"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 rounded-lg bg-[#FF2E93] text-white font-sub text-sm font-bold whitespace-nowrap active:scale-95 transition-transform"
        >
          <MessageSquareQuote className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
