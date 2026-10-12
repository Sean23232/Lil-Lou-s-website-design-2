import { ShieldCheck, Clock, Armchair, Accessibility, Users, Timer } from "lucide-react";
import { Reveal } from "@/hooks/useReveal";

const items = [
  { icon: ShieldCheck, label: "Safe", desc: "Licensed & trusted" },
  { icon: Clock, label: "Reliable", desc: "On-time service" },
  { icon: Armchair, label: "Comfortable", desc: "Clean, modern rides" },
  { icon: Accessibility, label: "Wheelchair Accessible", desc: "For every rider" },
  { icon: Users, label: "Happy Riders", desc: "X+ served", placeholder: true },
  { icon: Timer, label: "On-time", desc: "We respect your schedule", placeholder: true },
];

export function TrustBar() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((it) => (
              <div
                key={it.label}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-navy-100 bg-gradient-to-b from-white to-teal-50/40 p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-md shadow-teal-600/20">
                  <it.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-display text-[0.95rem] font-700 text-navy-800">{it.label}</div>
                  <div className="text-[0.78rem] text-navy-600">
                    {it.placeholder ? (
                      <span className="rounded-md bg-sun-100 px-1.5 py-0.5 text-[0.7rem] font-600 text-sun-700">
                        {it.desc}
                      </span>
                    ) : (
                      it.desc
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
