import { MapPin } from "lucide-react";
import { BUSINESS, IMAGES } from "@/data/assets";
import { Reveal } from "@/hooks/useReveal";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-20 sm:pt-24">
      {/* Background: bus photo [PLACEHOLDER] + gradient overlay */}
      <img
        src={IMAGES.heroBus}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900/92 via-navy-800/80 to-teal-700/70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.25),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.8rem] font-600 uppercase tracking-wider text-white backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-sun-300" strokeWidth={2.5} />
              Proudly serving {BUSINESS.area}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-4xl font-800 leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              More Than Just a Ride.{" "}
              <span className="bg-gradient-to-r from-sun-300 via-sun-400 to-teal-300 bg-clip-text text-transparent">
                It's an Experience!
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-50/95 sm:text-xl">
              Reliable courier delivery and unforgettable tour bus trips across Rock Hill & Columbia, SC.{" "}
              <span className="font-600 text-white">Safe. Reliable. Comfortable.</span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-sun-600 px-7 py-4 text-base font-700 text-white shadow-xl shadow-sun-600/30 transition-all hover:bg-sun-700 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Request a Pickup
              </a>
              <a
                href="#tour-bus"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-7 py-4 text-base font-700 text-white backdrop-blur-md transition-all hover:bg-white hover:text-navy-800"
              >
                Book the Tour Bus
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-5 text-sm text-navy-100/90">
              Or call/text{" "}
              <a href={`tel:${BUSINESS.phoneTel}`} className="font-700 text-white underline decoration-sun-300 decoration-2 underline-offset-4 hover:text-sun-200">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
      </div>

      {/* Wave at bottom */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 leading-[0]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-12 w-full sm:h-16">
          <path
            d="M0,40 C160,80 320,0 540,24 C760,48 980,10 1200,30 C1340,42 1400,60 1440,50 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
