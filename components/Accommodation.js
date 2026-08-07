"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Moon, UtensilsCrossed } from "lucide-react";

export default function Accommodation() {
  return (
    <section id="stay" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Accommodation
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Your Stay in Srinagar
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="group relative mt-8 overflow-hidden rounded-2xl border border-ink-border"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src="/houseboat-winter.jpg"
              alt="Houseboat stay in Srinagar"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <span className="absolute right-4 top-4 rounded-full bg-brand-green-600/90 px-3 py-1 text-[11px] font-semibold text-white">
              Included
            </span>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent p-5 sm:p-6">
              <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                Houseboat Stay — Dal Lake, Srinagar
              </h3>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-muted-light">
                <span className="flex items-center gap-1.5">
                  <Moon className="h-3.5 w-3.5 text-brand-green-400" />
                  04 Nights · Srinagar
                </span>
                <span className="flex items-center gap-1.5">
                  <UtensilsCrossed className="h-3.5 w-3.5 text-brand-green-400" />
                  Breakfast + Dinner
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
