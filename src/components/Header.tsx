import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { BUSINESS } from "@/data/assets";
import { Logo } from "./Logo";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#courier", label: "Courier" },
  { href: "#tour-bus", label: "Tour Bus" },
  { href: "#medical", label: "Medical Rides" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md shadow-navy-800/5 backdrop-blur-md"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="shrink-0" aria-label="Back to top">
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden lg:flex">
            <ul className="flex items-center gap-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="rounded-xl px-3.5 py-2 text-[0.95rem] font-600 text-navy-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sun-600 px-5 py-2.5 text-[0.95rem] font-700 text-white shadow-lg shadow-sun-600/25 transition-all hover:bg-sun-700 hover:shadow-xl hover:-translate-y-0.5"
              aria-label={`Call or text ${BUSINESS.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call/Text {BUSINESS.phoneDisplay}
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-white shadow-md"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy-700 hover:bg-navy-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-[1.05rem] font-600 text-navy-800 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="flex items-center justify-center gap-2 rounded-full bg-sun-600 px-5 py-3.5 text-base font-700 text-white shadow-lg shadow-sun-600/25"
              >
                <Phone className="h-4 w-4" /> Call {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`sms:${BUSINESS.phoneSms}`}
                className="flex items-center justify-center gap-2 rounded-full bg-navy-800 px-5 py-3.5 text-base font-700 text-white shadow-lg"
              >
                <MessageSquare className="h-4 w-4" /> Text Us
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Floating mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-navy-100 bg-white/95 p-3 shadow-[0_-8px_30px_-12px_rgba(10,37,64,0.2)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-sun-600 px-4 py-3 text-[0.95rem] font-700 text-white shadow-lg shadow-sun-600/25"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} /> Call Now
          </a>
          <a
            href="#contact"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-navy-800 px-4 py-3 text-[0.95rem] font-700 text-white shadow-lg"
          >
            <MessageSquare className="h-4 w-4" /> Request a Quote
          </a>
        </div>
      </div>
    </>
  );
}
