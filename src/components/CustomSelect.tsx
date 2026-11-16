import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "../lib/utils";

interface CustomSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  error?: string;
}

export function CustomSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <label
        htmlFor={id}
        className="block font-sub text-sm font-semibold text-[#F4F4F0] mb-2"
      >
        {label}
      </label>

      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "w-full min-h-[50px] px-4 py-3 rounded-xl bg-[#0B0B0D] border-2 text-left flex items-center justify-between gap-3 font-body text-base transition-colors focus-visible:outline-2 focus-visible:outline-[#A6F31B]",
          error
            ? "border-[#FF2E93]"
            : open
              ? "border-[#A6F31B]"
              : "border-white/20 hover:border-white/40",
          value ? "text-[#F4F4F0]" : "text-[#8C8C96]"
        )}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 shrink-0 text-[#A6F31B] transition-transform duration-150",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute z-40 mt-2 w-full rounded-xl bg-[#16161A] border-2 border-[#A6F31B] shadow-[0_16px_36px_rgba(0,0,0,0.75)] max-h-64 overflow-y-auto py-1.5"
        >
          {options.map((option) => {
            const selected = option === value;
            return (
              <li key={option} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full px-4 py-3 text-left font-body text-sm sm:text-base flex items-center justify-between gap-2 transition-colors min-h-[44px]",
                    selected
                      ? "bg-[#A6F31B] text-[#0B0B0D] font-semibold"
                      : "text-[#F4F4F0] hover:bg-white/10"
                  )}
                >
                  <span>{option}</span>
                  {selected && <Check className="w-4 h-4 shrink-0" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {error && (
        <p className="mt-1.5 font-body text-xs text-[#FF2E93]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
