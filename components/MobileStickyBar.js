"use client";

import { Phone } from "lucide-react";
import { BRAND, telHref } from "@/lib/brand";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-ink-border bg-ink-900/95 px-4 py-3 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
    >
      <div className="leading-tight">
        <p className="font-display text-base font-bold text-white">₹22,000</p>
        <p className="text-[11px] text-muted">Per Couple</p>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={telHref(BRAND.primaryPhone)}
          aria-label="Call Now"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-border text-white"
        >
          <Phone className="h-4.5 w-4.5" />
        </a>
        <a
          href="#contact"
          className="flex h-11 shrink-0 items-center justify-center rounded-full brand-gradient-bg px-5 text-sm font-semibold text-white"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
