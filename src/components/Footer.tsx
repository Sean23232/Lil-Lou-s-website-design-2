import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Inline SVG brand icons (placeholders — link to real social profiles later)
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4H16V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2H7.7V14h2.3v7h3.5z" />
  </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23 7.5c-.2-1.4-.9-2.3-2.3-2.5C18.7 4.5 12 4.5 12 4.5s-6.7 0-8.7.5C1.9 5.2 1.2 6.1 1 7.5 .5 9.5 .5 12 .5 12s0 2.5 .5 4.5c.2 1.4 .9 2.3 2.3 2.5 2 .5 8.7 .5 8.7 .5s6.7 0 8.7-.5c1.4-.2 2.1-1.1 2.3-2.5 .5-2 .5-4.5 .5-4.5s0-2.5-.5-4.5zM10 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);
import { BUSINESS } from "@/data/assets";
import { Logo } from "./Logo";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#courier", label: "Courier" },
  { href: "#tour-bus", label: "Tour Bus" },
  { href: "#medical", label: "Medical Rides" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-navy-200/85">
              {BUSINESS.tagline}
            </p>
            <p className="mt-3 text-[0.9rem] font-600 text-teal-300">{BUSINESS.secondaryLine}</p>
            {/* Social placeholders */}
            <div className="mt-5 flex gap-2">
              {[
                { Icon: FacebookIcon, label: "Facebook (placeholder)" },
                { Icon: InstagramIcon, label: "Instagram (placeholder)" },
                { Icon: YoutubeIcon, label: "YouTube (placeholder)" },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#social-placeholder"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-navy-200 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-2 text-[0.75rem] text-navy-400">[PLACEHOLDER] Add real social links.</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-[0.85rem] font-800 uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.95rem] text-navy-200 transition-colors hover:text-teal-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-[0.85rem] font-800 uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-[0.95rem]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <div>
                  <a href={`tel:${BUSINESS.phoneTel}`} className="font-700 text-white hover:text-sun-300">
                    {BUSINESS.phoneDisplay}
                  </a>
                  <div className="text-[0.82rem] text-navy-300">Call or text</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <div>
                  <a href={`mailto:${BUSINESS.email}`} className="break-all text-white hover:text-sun-300">
                    {BUSINESS.email}
                  </a>
                  <div className="text-[0.82rem] text-navy-300">[PLACEHOLDER] Replace email.</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <div className="text-white">{BUSINESS.area}</div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                <div>
                  <div className="text-white">{BUSINESS.hours}</div>
                  <div className="text-[0.82rem] text-navy-300">[PLACEHOLDER] Replace hours.</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h4 className="font-display text-[0.85rem] font-800 uppercase tracking-wider text-white">
              Service Area
            </h4>
            <p className="mt-4 text-[0.95rem] text-navy-200">
              Proudly serving {BUSINESS.area} and surrounding communities in South Carolina.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-sun-600 px-5 py-2.5 text-[0.9rem] font-700 text-white shadow-lg shadow-sun-600/20 hover:bg-sun-700"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[0.85rem] text-navy-300 sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>{BUSINESS.trustLine}</p>
        </div>
      </div>

      {/* Bottom spacer for mobile floating bar */}
      <div className="h-16 lg:h-0" aria-hidden="true" />
    </footer>
  );
}
