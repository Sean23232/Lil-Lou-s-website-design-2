import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/data/assets";
import { Reveal } from "@/hooks/useReveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-navy-800 to-navy-900 py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.15),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.25),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-800 text-white sm:text-4xl md:text-5xl">
            Ready to Ride or Send a Package?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[1.1rem] leading-relaxed text-navy-100/90">
            One quick call or text gets you a safe, reliable ride or on-time delivery across Rock Hill & Columbia, SC.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full bg-sun-600 px-8 py-4 text-lg font-800 text-white shadow-2xl shadow-sun-600/40 transition-all hover:bg-sun-700 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} /> Call/Text {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`sms:${BUSINESS.phoneSms}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-7 py-4 text-lg font-700 text-white backdrop-blur-md hover:bg-white hover:text-navy-800"
            >
              <MessageSquare className="h-5 w-5" /> Send a Text
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
