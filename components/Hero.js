"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { BRAND, telHref, whatsappHref, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/brand";

const STATS = [
  { value: "04", label: "Nights in Kashmir" },
  { value: "05", label: "Days Journey" },
  { value: "4", label: "Destinations" },
  { value: "100%", label: "Local Kashmir Experts" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Full-bleed scenic backdrop */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/dal-lake-shikara.jpg"
          alt="Shikara boat on Dal Lake with houseboats and mountains, Srinagar"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* dark gradient overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/80 via-ink-950/55 to-ink-950" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-28 pb-10 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue-400 backdrop-blur-sm"
        >
          Kashmir Couple Package
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 font-display text-[2.4rem] leading-[1.1] text-white sm:text-[3.1rem] lg:text-[3.6rem]"
        >
          Explore Kashmir
          <br />
          <span className="italic brand-gradient-text font-semibold">With Someone Special</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted-light"
        >
          Crafted by {BRAND.name} — a 04 Nights / 05 Days romantic escape covering Srinagar,
          Gulmarg, Sonmarg and Pahalgam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <span className="text-[11px] font-medium uppercase tracking-wide text-muted">
            Starting from
          </span>
          <span className="font-display text-lg font-bold text-white">₹22,000</span>
          <span className="text-[11px] text-muted">/ couple + 5% GST</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={whatsappHref(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full brand-gradient-bg px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/40 transition-transform hover:scale-[1.02]"
          >
            Explore Packages
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={telHref(BRAND.primaryPhone)}
            className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Talk to {BRAND.contactPerson.split(" ")[0]}
          </a>
        </motion.div>
      </div>

      {/* stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.5 }}
        className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-[880px] grid-cols-2 gap-y-6 px-4 py-7 sm:px-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-light sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
