import { BUSINESS } from "@/data/assets";

export function Logo() {
  // [PLACEHOLDER] Replace this inline SVG with the real Lil Lou's logo file when available.
  return (
    <div className="flex items-center gap-2.5" aria-label={`${BUSINESS.name} logo`}>
      <span
        className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-navy-800 shadow-md shadow-navy-800/20 ring-2 ring-white"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="11" width="22" height="11" rx="2.5" />
          <path d="M24 15h4l2 4v3h-6" />
          <circle cx="8" cy="23.5" r="2.2" />
          <circle cx="22" cy="23.5" r="2.2" />
          <path d="M6 11V8.5A1.5 1.5 0 0 1 7.5 7h6A1.5 1.5 0 0 1 15 8.5V11" />
        </svg>
      </span>
      <div className="leading-tight">
        <div className="font-display text-[1.05rem] font-800 text-navy-800">Lil Lou's</div>
        <div className="font-display text-[0.7rem] font-600 uppercase tracking-[0.14em] text-teal-700">Courier & Tours</div>
      </div>
    </div>
  );
}
