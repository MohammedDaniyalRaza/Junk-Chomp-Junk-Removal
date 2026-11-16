import { ArrowRight, MapPin } from "lucide-react";
import { BandanaLabel } from "../components/BandanaLabel";
import { ChompButton } from "../components/ChompButton";

export function CoverageRoute() {
  return (
    <section className="bg-[#0B0B0D] py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-7">
            <BandanaLabel label="Service Territory" variant="lime" className="mb-4" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.02]">
              Western &amp; Northern <span className="text-[#A6F31B]">Colorado</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
            <p className="font-body text-base text-[#8C8C96] lg:text-right max-w-md">
              Rolling daily between Aspen, Snowmass, Basalt, Carbondale, Glenwood Springs, Rifle, and communities beyond.
            </p>
            <ChompButton as="link" to="/areas" variant="dark" size="md">
              <span>Explore Service Areas</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </ChompButton>
          </div>
        </div>

        {/* Stylized SVG Route Graphic: ASPEN -> GLENWOOD SPRINGS -> & BEYOND */}
        <div className="rounded-3xl bg-[#16161A] border-2 border-white/15 p-6 sm:p-10 relative overflow-hidden">
          <svg
            viewBox="0 0 1100 300"
            className="w-full h-auto"
            role="img"
            aria-label="Stylized Colorado route map from Aspen to Glenwood Springs and beyond"
          >
            {/* Mountain Silhouette Backdrop */}
            <path
              d="M 0 260 L 90 155 L 175 210 L 290 95 L 405 185 L 520 110 L 635 190 L 760 80 L 880 175 L 990 115 L 1100 185 L 1100 300 L 0 300 Z"
              fill="#0B0B0D"
              stroke="#27272E"
              strokeWidth="2"
            />

            {/* Winding Mountain Route Path extending off the right edge */}
            <path
              d="M 110 215 C 240 165, 330 245, 510 190 C 680 138, 820 215, 1110 145"
              fill="none"
              stroke="#A6F31B"
              strokeWidth="7"
              strokeDasharray="16 12"
              strokeLinecap="round"
            />

            {/* Stop 1: ASPEN */}
            <g transform="translate(110, 215)">
              <circle r="18" fill="#A6F31B" stroke="#0B0B0D" strokeWidth="5" />
              <circle r="6" fill="#0B0B0D" />
              <text
                x="0"
                y="-34"
                textAnchor="middle"
                fill="#FFFFFF"
                style={{ fontFamily: "'Bagel Fat One', cursive", fontSize: "28px" }}
              >
                ASPEN
              </text>
              <text
                x="0"
                y="42"
                textAnchor="middle"
                fill="#8C8C96"
                style={{ fontFamily: "'Azeret Mono', monospace", fontSize: "13px" }}
              >
                HIGH COUNTRY
              </text>
            </g>

            {/* Mid-valley marker: CARBONDALE / BASALT */}
            <g transform="translate(325, 212)">
              <circle r="9" fill="#FFFFFF" stroke="#0B0B0D" strokeWidth="3" />
              <text
                x="0"
                y="32"
                textAnchor="middle"
                fill="#F4F4F0"
                style={{ fontFamily: "'Lexend Deca', sans-serif", fontSize: "14px", fontWeight: 600 }}
              >
                Basalt · Carbondale
              </text>
            </g>

            {/* Stop 2: GLENWOOD SPRINGS */}
            <g transform="translate(590, 174)">
              <circle r="20" fill="#FF2E93" stroke="#FFFFFF" strokeWidth="4" />
              <circle r="6" fill="#FFFFFF" />
              <text
                x="0"
                y="-36"
                textAnchor="middle"
                fill="#FF2E93"
                style={{ fontFamily: "'Bagel Fat One', cursive", fontSize: "28px" }}
              >
                GLENWOOD SPRINGS
              </text>
              <text
                x="0"
                y="44"
                textAnchor="middle"
                fill="#8C8C96"
                style={{ fontFamily: "'Azeret Mono', monospace", fontSize: "13px" }}
              >
                ROARING FORK &amp; I-70 HUB
              </text>
            </g>

            {/* Extending off the end: & BEYOND */}
            <g transform="translate(960, 152)">
              <polygon
                points="0,-16 26,0 0,16"
                fill="#A6F31B"
                stroke="#0B0B0D"
                strokeWidth="3"
              />
              <text
                x="-12"
                y="-32"
                textAnchor="middle"
                fill="#A6F31B"
                style={{ fontFamily: "'Bagel Fat One', cursive", fontSize: "26px" }}
              >
                &amp; BEYOND
              </text>
              <text
                x="-18"
                y="40"
                textAnchor="middle"
                fill="#8C8C96"
                style={{ fontFamily: "'Azeret Mono', monospace", fontSize: "13px" }}
              >
                W. &amp; N. COLORADO
              </text>
            </g>
          </svg>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-sm text-[#F4F4F0]">
            <div className="flex items-center gap-2 font-body">
              <MapPin className="w-4 h-4 text-[#A6F31B] shrink-0" aria-hidden="true" />
              <span>Aspen · Snowmass · Basalt · Carbondale · Glenwood Springs · Rifle · &amp; Beyond</span>
            </div>
            <span className="font-mono-tag text-xs text-[#FF2E93] uppercase tracking-wider">
              Text or call to check your town
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
