import { ShieldCheck, Clock, Armchair, HeartHandshake } from "lucide-react";
import { Reveal } from "@/hooks/useReveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Safe & Trusted",
    desc: "Careful drivers and well-maintained vehicles — every single trip.",
  },
  {
    icon: Clock,
    title: "Always On Time",
    desc: "We show up when we say we will, so you never miss what matters.",
  },
  {
    icon: Armchair,
    title: "Comfortable Vehicles",
    desc: "Clean, spacious, and built for long rides and short hops alike.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Local Service",
    desc: "A family-feel business that knows Rock Hill & Columbia by heart.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-800 to-teal-700 py-16 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.25),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-teal-200 backdrop-blur">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 sm:text-4xl md:text-5xl">
              Why Locals Ride With Lil Lou's
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-100/90">
              Because getting there should feel good — and getting it delivered should feel easy.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/10">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-sun-400 text-navy-900 shadow-lg">
                  <v.icon className="h-6 w-6" strokeWidth={2.3} />
                </div>
                <h3 className="mt-5 font-display text-lg font-700">{v.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-navy-100/85">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
