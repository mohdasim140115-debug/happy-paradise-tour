export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <circle cx="22" cy="22" r="21" fill="url(#hp-grad)" stroke="#0e2337" strokeWidth="1" />
        <path
          d="M6 27L15 14L21 23L25 17L38 27"
          stroke="#f2faf5"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 31.5L14 22L21 29L26 23L38 31.5"
          stroke="#f2faf5"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="31" cy="12" r="3.2" fill="#d9536f" />
        <defs>
          <linearGradient id="hp-grad" x1="1" y1="1" x2="43" y2="43" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#16a06a" />
            <stop offset="1" stopColor="#1a5c93" />
          </linearGradient>
        </defs>
      </svg>
      <div className="leading-tight">
        <p className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
          Happy Paradise
        </p>
        <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-brand-blue-400 sm:text-[10px]">
          See Paradise With Us
        </p>
      </div>
    </div>
  );
}
