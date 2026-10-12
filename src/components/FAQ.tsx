import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BUSINESS } from "@/data/assets";
import { Reveal } from "@/hooks/useReveal";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We proudly serve Rock Hill, Columbia, and surrounding communities in South Carolina. If you're unsure whether we cover your area, just call or text — we'll let you know right away.",
  },
  {
    q: "How do I book a courier pickup?",
    a: "You can book by calling, texting, or filling out the quote form on this site. Tell us what needs to be moved, the pickup location, destination, and preferred time — we'll confirm the details with you.",
  },
  {
    q: "Do you offer wheelchair-accessible rides?",
    a: "Yes. We have wheelchair accessible vehicles available. Just mention accessibility needs when you book so we can send the right vehicle for you.",
  },
  {
    q: "Can I book the tour bus for a party or group?",
    a: "Absolutely! Our tour/party bus is perfect for weddings, birthdays, nights out, casino trips, beach days, and any group outing. Reach out with your date and group size and we'll help you plan it.",
  },
  {
    q: "How far in advance should I book?",
    a: "The earlier the better — especially for tour bus bookings and weekends. That said, same-day requests are welcome when availability allows, so it never hurts to ask.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We'll walk you through payment options when we confirm your booking. Just ask when you call or text.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-gradient-to-b from-teal-50/40 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-teal-800">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/80">
              Don't see your question?{" "}
              <a href={`tel:${BUSINESS.phoneTel}`} className="font-600 text-teal-700 underline decoration-sun-400 decoration-2 underline-offset-4">
                Call or text us
              </a>{" "}
              — we're happy to help.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-teal-50/40"
                  >
                    <span className="font-display text-[1rem] font-700 text-navy-800 sm:text-[1.08rem]">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-navy-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-${i}`}
                    role="region"
                    className={`grid overflow-hidden transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="px-5 pb-5 text-[0.98rem] leading-relaxed text-navy-700/90">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
