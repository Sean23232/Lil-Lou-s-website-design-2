import { PhoneCall, ClipboardCheck, Smile } from "lucide-react";
import { Reveal } from "@/hooks/useReveal";

const steps = [
  {
    icon: PhoneCall,
    title: "Reach Out",
    desc: "Call, text, or fill out the form. Tell us what you need.",
  },
  {
    icon: ClipboardCheck,
    title: "We Confirm",
    desc: "We confirm your ride or pickup and all the details.",
  },
  {
    icon: Smile,
    title: "Enjoy the Ride",
    desc: "Sit back and enjoy a safe, comfortable trip.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-navy-100 px-3.5 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-navy-800">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
              Booking Is Easy
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/80">
              Three simple steps to your next ride or delivery.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="relative rounded-3xl border border-navy-100 bg-gradient-to-b from-white to-teal-50/30 p-7 text-center shadow-sm transition-all hover:shadow-xl">
                <div className="absolute -top-5 left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-sun-600 font-display text-lg font-800 text-white shadow-lg shadow-sun-600/30">
                  {i + 1}
                </div>
                <div className="mx-auto mt-3 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-navy-800 text-white shadow-lg">
                  <s.icon className="h-8 w-8" strokeWidth={2.1} />
                </div>
                <h3 className="mt-5 font-display text-xl font-700 text-navy-800">{s.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-navy-700/85">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-10 text-center text-[0.95rem] text-navy-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 font-600 text-teal-800 ring-1 ring-teal-200">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Same-day requests welcome when available
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
