"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ITINERARY } from "@/lib/brand";

export default function Itinerary() {
  return (
    <section id="itinerary" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Itinerary
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Your 5-Day Kashmir Journey
          </h2>
        </div>

        <div className="relative mt-10">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-ink-border sm:left-1/2" />

          <div className="flex flex-col gap-4">
            {ITINERARY.map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`relative flex items-start gap-4 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0 ? "sm:pr-8 sm:self-start" : "sm:pl-8 sm:self-end"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full brand-gradient-bg text-sm font-bold text-white ring-4 ring-ink-900 sm:top-0 ${
                    i % 2 === 0 ? "sm:-right-5 sm:left-auto" : "sm:-left-5"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="card-surface flex w-full gap-4 overflow-hidden rounded-2xl p-3">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={d.image} alt={d.place} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="min-w-0 py-0.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-blue-400">
                      {d.day}
                    </p>
                    <h3 className="mt-0.5 font-display text-[15px] font-bold text-white">
                      {d.title}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1 text-[11px] text-brand-green-400">
                      <MapPin className="h-3 w-3" />
                      {d.place}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted line-clamp-3">
                      {d.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
