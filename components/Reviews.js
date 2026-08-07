"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/brand";

export default function Reviews() {
  return (
    <section className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Reviews
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Real Memories. Beautiful Journeys.
          </h2>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-surface w-[78%] shrink-0 rounded-2xl p-5 sm:w-auto"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 text-brand-green-400" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-light">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-white">{r.name}</p>
              <p className="text-xs text-muted">{r.city}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
