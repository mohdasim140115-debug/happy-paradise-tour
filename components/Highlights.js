"use client";

import { motion } from "framer-motion";
import { Sailboat, UtensilsCrossed, Waypoints } from "lucide-react";

const CARDS = [
  {
    icon: Sailboat,
    title: "Complimentary Shikara Ride",
    line1: "01 Hour",
    line2: "Dal Lake",
    gradient: "from-brand-blue-800 via-brand-blue-700 to-brand-blue-900",
  },
  {
    icon: Waypoints,
    title: "Private Sightseeing",
    line1: "Srinagar · Gulmarg",
    line2: "Sonmarg · Pahalgam",
    gradient: "from-brand-green-800 via-brand-green-700 to-brand-green-900",
  },
  {
    icon: UtensilsCrossed,
    title: "MAP Meal Plan",
    line1: "Daily",
    line2: "Breakfast + Dinner",
    gradient: "from-[#3a2a63] via-[#4a2f6e] to-ink-900",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Package Highlights
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            What Makes This Package Special
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`rounded-2xl bg-gradient-to-br p-5 ${c.gradient} border border-white/10`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12">
                <c.icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm font-medium text-white/85">{c.line1}</p>
              <p className="text-sm text-white/70">{c.line2}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
