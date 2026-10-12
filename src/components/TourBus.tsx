import { useState, useEffect } from "react";
import { Compass, Sofa, Heart, ChevronLeft, ChevronRight, PartyPopper, Heart as HeartIcon } from "lucide-react";
import { IMAGES } from "@/data/assets";
import { Reveal } from "@/hooks/useReveal";

const slides = [
  { src: IMAGES.busExterior1, alt: "[PLACEHOLDER] Tour bus exterior — replace with real photo" },
  { src: IMAGES.partyBus1, alt: "[PLACEHOLDER] Party bus celebration — replace with real photo" },
  { src: IMAGES.partyBus2, alt: "[PLACEHOLDER] Group enjoying party bus — replace with real photo" },
  { src: IMAGES.busExterior2, alt: "[PLACEHOLDER] Bus on the road — replace with real photo" },
];

const steps = [
  { icon: Compass, title: "Explore", desc: "Pick your destination" },
  { icon: Sofa, title: "Relax", desc: "We handle the driving" },
  { icon: Heart, title: "Enjoy", desc: "Make memories together" },
];

const occasions = ["Weddings", "Birthdays", "Nights Out", "Casino Trips", "Beach Days", "Group Outings"];

export function TourBus() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const go = (d: number) => setIdx((i) => (i + d + slides.length) % slides.length);

  return (
    <section id="tour-bus" className="relative overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-navy-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={100}>
            <div className="order-2 lg:order-1">
              <span className="inline-block rounded-full bg-sun-100 px-3.5 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-sun-700">
                Tour Bus & Party Bus
              </span>
              <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
                Turn Any Trip Into an Experience
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/85">
                Weddings, birthdays, nights out, casino trips, beach days, and group outings — our bus
                is the ride that makes the day unforgettable. Bring the crew and leave the logistics to us.
              </p>

              {/* Occasion chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <span
                    key={o}
                    className="rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-[0.85rem] font-600 text-navy-700"
                  >
                    {o}
                  </span>
                ))}
              </div>

              {/* Explore • Relax • Enjoy */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {steps.map((s, i) => (
                  <div
                    key={s.title}
                    className="relative rounded-2xl border border-teal-100 bg-white p-4 text-center"
                  >
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-md">
                      <s.icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <div className="mt-3 font-display text-[0.95rem] font-700 text-navy-800">{s.title}</div>
                    <div className="text-[0.78rem] text-navy-600">{s.desc}</div>
                    <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-sun-600 text-[0.65rem] font-800 text-white">
                      {i + 1}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun-600 px-7 py-3.5 text-base font-700 text-white shadow-lg shadow-sun-600/25 transition-all hover:bg-sun-700 hover:-translate-y-0.5"
              >
                <PartyPopper className="h-4 w-4" /> Book the Tour Bus
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-navy-100">
                <div className="relative" style={{ aspectRatio: "4/3" }}>
                  {slides.map((s, i) => (
                    <img
                      key={s.src}
                      src={s.src}
                      alt={s.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                        i === idx ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                  {/* Caption badge */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.78rem] font-700 text-navy-800 shadow-lg backdrop-blur">
                    <HeartIcon className="h-3.5 w-3.5 text-sun-600" strokeWidth={2.5} fill="currentColor" />
                    Unforgettable rides
                  </div>
                </div>
                {/* Carousel controls */}
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-800 shadow-lg backdrop-blur hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy-800 shadow-lg backdrop-blur hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                {/* Dots */}
                <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5" role="tablist">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIdx(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      aria-current={i === idx}
                      className={`h-2 rounded-full transition-all ${
                        i === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
