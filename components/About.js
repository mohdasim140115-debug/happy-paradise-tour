"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Clock, Compass, MapPinned, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/brand";

const STATS = [
  { icon: Compass, big: "Local", small: "Kashmir Experts" },
  { icon: ShieldCheck, big: "Private", small: "Transport" },
  { icon: Clock, big: "24/7", small: "Trip Assistance" },
  { icon: MapPinned, big: "4", small: "Top Destinations" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink-border/60 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1220px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue-400">
            About Happy Paradise
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            Your Local Kashmir <br /> Travel Experts
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-muted-light">
            {BRAND.name} plans carefully curated Kashmir holidays — from houseboats on Dal Lake to
            snow-capped views in Gulmarg — led by {BRAND.contactPerson} ({BRAND.designation}), so
            you can simply enjoy paradise.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink-border pt-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Members</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-white">
                <Award className="h-4 w-4 text-brand-green-400" />
                {BRAND.members}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">GSTIN</p>
              <p className="mt-1 text-sm font-semibold text-white">{BRAND.gstin}</p>
            </div>
          </div>
        </motion.div>

        <div>
          <div className="grid grid-cols-2 gap-3.5">
            {STATS.map((s, i) => (
              <motion.div
                key={s.small}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-surface rounded-2xl p-4"
              >
                <s.icon className="h-4.5 w-4.5 text-brand-green-400" />
                <p className="mt-2.5 font-display text-base font-bold text-white">{s.big}</p>
                <p className="text-[11px] text-muted">{s.small}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mt-3.5 aspect-[16/9] overflow-hidden rounded-2xl border border-ink-border"
          >
            <Image
              src="/misty-kashmir-village.jpg"
              alt="Misty Kashmir valley village"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
