"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

const PILLS = ["Local Kashmir Experts", "Private Transportation", "Personalized Assistance"];

export default function WhyChooseUs() {
  return (
    <section className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-ink-border bg-ink-900/60 px-6 py-10 text-center sm:px-12 sm:py-12"
        >
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-white sm:text-3xl">
            Why Choose Us for Your Kashmir Experience?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-muted-light">
            {BRAND.name} plans every trip with local knowledge and honest pricing — from private
            transport to daily meals — so your Kashmir holiday stays effortless from start to
            finish.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {PILLS.map((p) => (
              <span
                key={p}
                className="rounded-full border border-ink-border px-4 py-2 text-xs font-medium text-muted-light"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
