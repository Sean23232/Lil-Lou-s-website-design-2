import { Package, PartyPopper, Stethoscope, Dices, Palmtree, Accessibility, ArrowRight } from "lucide-react";
import { Reveal } from "@/hooks/useReveal";

const SERVICES = [
  {
    id: "courier",
    icon: Package,
    title: "Courier Services",
    desc: "Fast, dependable, on-time pickup and delivery.",
    color: "from-teal-500 to-teal-700",
  },
  {
    id: "tour-bus",
    icon: PartyPopper,
    title: "Tour Bus & Party Bus",
    desc: "Weddings, birthdays, nights out, group trips and events.",
    color: "from-sun-500 to-sun-600",
  },
  {
    id: "medical",
    icon: Stethoscope,
    title: "NEMT (Medical Rides)",
    desc: "Safe, on-time rides to doctor appointments, dialysis, therapy, pharmacy and more.",
    color: "from-teal-600 to-navy-700",
  },
  {
    id: "casino",
    icon: Dices,
    title: "Casino Trips",
    desc: "Fun, comfortable group rides for a great day out.",
    color: "from-navy-700 to-navy-800",
  },
  {
    id: "beach",
    icon: Palmtree,
    title: "Beach Rides",
    desc: "Relax and enjoy the trip — we handle the driving.",
    color: "from-teal-400 to-teal-600",
  },
  {
    id: "wheelchair",
    icon: Accessibility,
    title: "Wheelchair Accessible",
    desc: "Comfortable, convenient vehicles for everyone.",
    color: "from-sun-400 to-sun-600",
    highlight: true,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-white via-teal-50/30 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-teal-800">
              Our Services
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
              Every Ride, Handled With Care
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/80">
              From quick courier runs to all-day tour bus adventures, we've got you covered.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <a
                href={`#${s.id}`}
                className={`group relative block h-full overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  s.highlight
                    ? "border-sun-300 bg-gradient-to-br from-sun-50 to-white"
                    : "border-navy-100 bg-white"
                }`}
              >
                {s.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-sun-600 px-2.5 py-1 text-[0.68rem] font-700 uppercase tracking-wider text-white">
                    Accessible
                  </span>
                )}
                <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                  <s.icon className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-xl font-700 text-navy-800">{s.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-navy-700/85">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-700 text-teal-700 transition-colors group-hover:text-sun-600">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
