"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY } from "@/lib/brand";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Gallery
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Glimpses of Paradise
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4">
          {GALLERY.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-ink-border ${
                i === 0 ? "col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-[4/5]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
