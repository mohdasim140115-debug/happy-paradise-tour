"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Car, MapPin, Moon } from "lucide-react";

const STATS = [
  { icon: Moon, big: "04 Nights", small: "Srinagar Stay", image: "/dal-lake-houseboats.jpg" },
  { icon: Building2, big: "05 Days", small: "Kashmir Journey", image: "/srinagar-tulip-garden.jpg" },
  { icon: MapPin, big: "4 Destinations", small: "Included", image: "/pahalgam-aru-valley.jpg" },
  { icon: Car, big: "Private", small: "Transportation", image: "/gulmarg-mountain-road.jpg" },
];

export default function PackageOverview() {
  return (
    <section id="overview" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            Package Overview
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Your Kashmir Escape at a Glance
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.small}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-border"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={s.image}
                  alt={s.small}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <s.icon className="h-5 w-5 text-brand-green-400" />
                <p className="mt-2 font-display text-lg font-bold text-white">{s.big}</p>
                <p className="mt-0.5 text-xs text-muted-light">{s.small}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
