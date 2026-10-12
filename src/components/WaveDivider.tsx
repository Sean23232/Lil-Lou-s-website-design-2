// Decorative wave divider between sections.
export function WaveDivider({ flip = false, from = "#ffffff", to = "#ecfeff" }: { flip?: boolean; from?: string; to?: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none block w-full leading-[0]"
      style={{ transform: flip ? "rotate(180deg)" : undefined, marginTop: "-1px" }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16 md:h-20"
      >
        <defs>
          <linearGradient id={`wave-${from}-${to}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C160,80 320,0 540,24 C760,48 980,10 1200,30 C1340,42 1400,60 1440,50 L1440,80 L0,80 Z"
          fill={`url(#wave-${from}-${to})`}
        />
      </svg>
    </div>
  );
}
