import { Stethoscope, Accessibility, Heart, ShieldCheck } from "lucide-react";
import { IMAGES } from "@/data/assets";
import { Reveal } from "@/hooks/useReveal";

const chips = ["Doctor Appointments", "Dialysis", "Therapy", "Pharmacy", "And More"];

export function NEMT() {
  return (
    <section id="medical" className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-teal-50 py-16 sm:py-24">
      {/* Calm decorative blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sun-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[0.75rem] font-700 uppercase tracking-wider text-teal-700 shadow-md ring-1 ring-teal-100">
              <Stethoscope className="h-3.5 w-3.5" strokeWidth={2.5} /> Non-Emergency Medical Transportation
            </span>
            <h2 className="mt-4 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
              Your Health Matters!
            </h2>
            <p className="mt-4 text-[1.1rem] leading-relaxed text-navy-700/85">
              Get to your medical appointments safely and on time — every visit, every time.
            </p>
          </div>
        </Reveal>

        {/* Chips */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-teal-200 bg-white px-4 py-2 text-[0.92rem] font-600 text-teal-800 shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-teal-100 bg-white/80 p-7 shadow-xl backdrop-blur sm:p-10">
              <p className="text-[1.05rem] leading-relaxed text-navy-800">
                When health is on the line, you deserve a ride that feels calm, safe, and dependable.
                Our trained drivers take the stress out of medical travel — from the moment we pick you
                up to the moment we drop you home.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                <li className="rounded-2xl bg-teal-50/60 p-4 text-center">
                  <ShieldCheck className="mx-auto h-6 w-6 text-teal-700" strokeWidth={2.2} />
                  <div className="mt-2 font-display text-sm font-700 text-navy-800">Safe</div>
                </li>
                <li className="rounded-2xl bg-teal-50/60 p-4 text-center">
                  <Heart className="mx-auto h-6 w-6 text-sun-600" strokeWidth={2.2} />
                  <div className="mt-2 font-display text-sm font-700 text-navy-800">Comfortable</div>
                </li>
                <li className="rounded-2xl bg-teal-50/60 p-4 text-center">
                  <Accessibility className="mx-auto h-6 w-6 text-navy-700" strokeWidth={2.2} />
                  <div className="mt-2 font-display text-sm font-700 text-navy-800">Accessible</div>
                </li>
              </ul>

              {/* Wheelchair accessible badge */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl border-2 border-dashed border-teal-300 bg-teal-50 p-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-600 text-white">
                  <Accessibility className="h-6 w-6" strokeWidth={2.3} />
                </div>
                <div>
                  <div className="font-display text-[0.95rem] font-700 text-navy-800">
                    Wheelchair Accessible Vehicles
                  </div>
                  <div className="text-[0.85rem] text-navy-700">
                    Comfortable, convenient rides for every rider. Just ask when you book.
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-sun-600 px-6 py-3 text-[0.98rem] font-700 text-white shadow-lg shadow-sun-600/25 hover:bg-sun-700"
                >
                  Schedule a Medical Ride
                </a>
                <a
                  href="tel:+18037181119"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-navy-800 bg-white px-6 py-3 text-[0.98rem] font-700 text-navy-800 hover:bg-navy-50"
                >
                  Call 803-718-1119
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <img
              src={IMAGES.wheelchair}
              alt="[PLACEHOLDER] Wheelchair accessible van with lift — replace with real photo"
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-xl ring-1 ring-navy-100"
              style={{ aspectRatio: "3/4" }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
