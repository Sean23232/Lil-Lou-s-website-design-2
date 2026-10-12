import { MapPin } from "lucide-react";
import { Reveal } from "@/hooks/useReveal";

// Stylized SC map area graphic (inline SVG)
function AreaMap() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <svg viewBox="0 0 500 360" className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="scFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#cffafe" />
            <stop offset="100%" stopColor="#a5f3fc" />
          </linearGradient>
          <linearGradient id="scStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0e7490" />
            <stop offset="100%" stopColor="#0891a3" />
          </linearGradient>
        </defs>
        {/* Abstract SC-ish shape */}
        <path
          d="M40,60 C120,30 220,50 300,40 C360,33 420,60 460,110 C450,150 410,170 380,200 C340,240 290,260 240,270 C180,282 120,270 80,240 C40,210 30,160 40,120 Z"
          fill="url(#scFill)"
          stroke="url(#scStroke)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Grid lines for style */}
        <g stroke="#67e8f9" strokeWidth="0.7" opacity="0.55">
          <path d="M0,80 L500,80" />
          <path d="M0,160 L500,160" />
          <path d="M0,240 L500,240" />
          <path d="M100,0 L100,360" />
          <path d="M200,0 L200,360" />
          <path d="M300,0 L300,360" />
          <path d="M400,0 L400,360" />
        </g>
      </svg>

      {/* Pin: Rock Hill */}
      <div className="absolute" style={{ left: "55%", top: "14%" }}>
        <div className="relative">
          <span className="absolute -inset-3 animate-ping rounded-full bg-sun-400/40" />
          <div className="relative grid h-11 w-11 place-items-center rounded-full bg-sun-600 text-white shadow-lg ring-4 ring-white">
            <MapPin className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy-800 px-3 py-1 text-[0.75rem] font-700 text-white shadow-lg">
            Rock Hill
          </div>
        </div>
      </div>

      {/* Pin: Columbia */}
      <div className="absolute" style={{ left: "38%", top: "58%" }}>
        <div className="relative">
          <span className="absolute -inset-3 animate-ping rounded-full bg-teal-400/40" />
          <div className="relative grid h-11 w-11 place-items-center rounded-full bg-teal-600 text-white shadow-lg ring-4 ring-white">
            <MapPin className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy-800 px-3 py-1 text-[0.75rem] font-700 text-white shadow-lg">
            Columbia
          </div>
        </div>
      </div>

      {/* Dashed route */}
      <svg viewBox="0 0 500 360" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M290,60 C260,120 220,180 210,240"
          stroke="#0a2540"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          fill="none"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

export function ServiceArea() {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-teal-800">
                Service Area
              </span>
              <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
                Serving Rock Hill & Columbia, SC and Nearby Areas
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/85">
                We run routes across the Rock Hill and Columbia metro areas and the surrounding
                communities. Planning a trip outside our usual area? Let's talk — we'll do our best
                to make it happen.
              </p>
              <div className="mt-6 rounded-2xl border border-teal-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-100 text-teal-700">
                    <MapPin className="h-5 w-5" strokeWidth={2.3} />
                  </div>
                  <p className="text-[0.98rem] text-navy-800">
                    <span className="font-700">Not sure we cover your area?</span>{" "}
                    <a href={`tel:+18037181119`} className="font-600 text-teal-700 underline decoration-sun-400 decoration-2 underline-offset-4 hover:text-sun-600">
                      Call or text us
                    </a>{" "}
                    — we'll let you know right away.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <AreaMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
