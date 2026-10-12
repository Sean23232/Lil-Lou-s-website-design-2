import { Quote } from "lucide-react";
import { Reveal } from "@/hooks/useReveal";

// Placeholders — real customer reviews will replace these.
const reviews = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  text: "Add real customer review here.",
  name: "Customer name",
  trip: "Trip / service type",
}));

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-sun-100 px-3.5 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-sun-700">
              Testimonials
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
              What Our Riders Say
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/80">
              Real stories from real riders and customers — coming soon.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={i * 80}>
              <figure className="relative h-full rounded-3xl border border-navy-100 bg-gradient-to-b from-white to-teal-50/30 p-7 shadow-sm">
                <Quote className="h-8 w-8 text-teal-400" strokeWidth={2} />
                <blockquote className="mt-3 min-h-[90px] text-[1rem] leading-relaxed text-navy-800">
                  <span className="rounded-md bg-sun-100 px-1.5 py-0.5 text-[0.85rem] font-600 text-sun-800">
                    {r.text}
                  </span>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-navy-100 font-display text-[0.95rem] font-700 text-navy-700">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-display text-[0.95rem] font-700 text-navy-800">{r.name}</div>
                    <div className="text-[0.82rem] text-navy-600">{r.trip}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
