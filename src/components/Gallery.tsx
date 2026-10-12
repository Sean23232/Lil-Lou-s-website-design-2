import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/data/assets";
import { Reveal } from "@/hooks/useReveal";

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? null : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx]);

  return (
    <section id="gallery" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-teal-100 px-3.5 py-1 text-[0.75rem] font-700 uppercase tracking-wider text-teal-800">
              Gallery
            </span>
            <h2 className="mt-3 font-display text-3xl font-800 text-navy-800 sm:text-4xl md:text-5xl">
              A Peek At the Fleet
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-navy-700/80">
              Tap any photo to enlarge. (Photos shown are placeholders — real Lil Lou's photos coming soon.)
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {GALLERY.map((g, i) => {
            // Masonry-ish: make a couple items span more rows
            const span = i === 0 ? "row-span-2" : i === 3 ? "row-span-2" : "";
            return (
              <Reveal key={g.src} delay={i * 40} className={span}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(i)}
                  aria-label={`View ${g.alt}`}
                  className="group relative h-full w-full overflow-hidden rounded-2xl bg-navy-100 shadow-sm ring-1 ring-navy-100 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/90 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setOpenIdx(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIdx(null)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length));
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIdx((i) => (i === null ? null : (i + 1) % GALLERY.length));
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure
            className="max-h-[85vh] max-w-[92vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY[openIdx].src}
              alt={GALLERY[openIdx].alt}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-[0.85rem] text-navy-100/80">
              {GALLERY[openIdx].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
