"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DESTINATIONS } from "@/lib/brand";

export default function DestinationGrid() {
  return (
    <section id="destinations" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Destinations
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Four Destinations, One Unforgettable Trip
          </h2>
        </div>

        <div className="mt-8 rounded-3xl brand-gradient-bg p-6 sm:p-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {DESTINATIONS.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative aspect-square w-full max-w-[132px] overflow-hidden rounded-full border-4 border-white/25 shadow-lg shadow-black/20">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    sizes="132px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                </div>
                <span className="mt-3 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90">
                  {d.day}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-white sm:text-lg">
                  {d.name}
                </h3>
                <p className="mt-1 text-[12px] font-medium text-white/70">{d.tag}</p>
                <p className="mt-1.5 hidden text-[12px] leading-relaxed text-white/60 sm:block">
                  {d.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
