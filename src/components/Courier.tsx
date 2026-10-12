import { CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/data/assets";
import { Reveal } from "@/hooks/useReveal";

const benefits = [
  "On-time delivery you can count on",
  "Careful, secure handling of every item",
  "Local coverage across Rock Hill & Columbia",
  "Easy requests by call or text",
];

export function Courier() {
  return (
    <section id="courier" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-gradient-to-br from-teal-300 to-teal-500 opacity-30 blur-2xl"
                aria-hidden="true"
              />
              <img
                src={IMAGES.courierVan}
                alt="[PLACEHOLDER] Lil Lou's courier delivery van — replace with real photo"
                loading="lazy"
                className="relative w-full rounded-3xl object-cover shadow-2xl ring-1 ring-navy-100"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-navy-100 sm:-right-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-100 text-teal-700">
                    <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-display text-sm font-700 text-navy-800">Dependable</div>
                    <div className="text-xs text-navy-600">On-time, every time</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-teal-800">
                Courier Services
              </span>
              <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
                Dependable Courier Service You Can Count On
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/85">
                From important documents and business deliveries to personal packages and pickups,
                we move what matters to you — quickly, safely, and on time across Rock Hill and Columbia.
              </p>

              <ul className="mt-7 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-teal-100 text-teal-700">
                      <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                    <span className="text-[1rem] text-navy-800">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun-600 px-7 py-3.5 text-base font-700 text-white shadow-lg shadow-sun-600/25 transition-all hover:bg-sun-700 hover:-translate-y-0.5"
              >
                Request a Pickup
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
