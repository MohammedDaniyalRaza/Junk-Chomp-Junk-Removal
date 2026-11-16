import { useState } from "react";
import { BUSINESS, cn } from "../lib/utils";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  eager = false,
}: ImageWithFallbackProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-[#16161A]", className)}>
      {!loaded && !errored && (
        <div
          aria-hidden="true"
          className="absolute inset-0 jc-skeleton z-10 pointer-events-none"
        />
      )}

      {errored ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0B0B0D] via-[#16161A] to-[#0B0B0D]"
          role="img"
          aria-label={alt}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="w-20 h-20 opacity-15 text-[#A6F31B] mb-3"
          >
            <circle cx="50" cy="64" r="18" fill="currentColor" />
            <circle cx="26" cy="40" r="8" fill="currentColor" />
            <circle cx="42" cy="26" r="8" fill="currentColor" />
            <circle cx="58" cy="26" r="8" fill="currentColor" />
            <circle cx="74" cy="40" r="8" fill="currentColor" />
          </svg>
          <img
            src={BUSINESS.logoSrc}
            alt="Junk Chomp"
            className="w-32 h-auto object-contain opacity-90"
          />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding={eager ? "sync" : "async"}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setErrored(true);
            setLoaded(true);
          }}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            loaded ? "opacity-100" : "opacity-0",
            imgClassName
          )}
        />
      )}
    </div>
  );
}
